import { NextResponse } from "next/server";
import { QUOTE_LIMITS, QUOTE_SUCCESS_MESSAGE } from "@/lib/quote/constants";
import { validateQuotePayload } from "@/lib/quote/validation";
import { allowQuoteAttempt, getClientKey } from "@/lib/quote/rate-limit";
import { buildQuoteEmail } from "@/lib/quote/email-template";
import { getSmtpConfig, sendQuoteEmail } from "@/lib/quote/mailer";
import type { QuoteApiResponse, QuoteRequestPayload } from "@/lib/quote/types";
import { siteConfig } from "@/config/site";

/* SMTP requires Node.js APIs — never run this handler on the Edge. */
export const runtime = "nodejs";

function json(body: QuoteApiResponse, status: number): NextResponse {
  return NextResponse.json(body, { status });
}

function allowedOrigins(): string[] {
  const origins = new Set<string>([
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    /* Production origin'leri env eksik olsa bile kabul edilir —
       aksi hâlde canlıda form istekleri reddedilirdi. */
    siteConfig.url,
    `https://${siteConfig.domain}`,
  ]);
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    origins.add(configured.replace(/\/+$/, ""));
  }
  return [...origins];
}

/** Generic success used for silently dropped bot submissions as well —
 *  the bot cannot tell the honeypot worked. */
function genericSuccess(): NextResponse {
  return json({ ok: true, message: QUOTE_SUCCESS_MESSAGE }, 200);
}

export async function POST(request: Request): Promise<NextResponse> {
  /* 1) Same-origin check (browser requests carry Origin; plain
        server-side tests without the header are allowed) */
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins().includes(origin.replace(/\/+$/, ""))) {
    return json(
      { ok: false, message: "İstek doğrulanamadı." },
      403,
    );
  }

  /* 2) Content type */
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json(
      { ok: false, message: "Geçersiz istek biçimi." },
      400,
    );
  }

  /* 3) Body size — via header when present, then re-checked on the
        actual text so a missing Content-Length cannot bypass the cap */
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > QUOTE_LIMITS.maxBodyBytes) {
    return json({ ok: false, message: "İstek çok büyük." }, 413);
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return json({ ok: false, message: "İstek okunamadı." }, 400);
  }
  if (raw.length > QUOTE_LIMITS.maxBodyBytes) {
    return json({ ok: false, message: "İstek çok büyük." }, 413);
  }

  let payload: QuoteRequestPayload;
  try {
    payload = JSON.parse(raw) as QuoteRequestPayload;
  } catch {
    return json({ ok: false, message: "Geçersiz istek biçimi." }, 400);
  }
  if (typeof payload !== "object" || payload === null) {
    return json({ ok: false, message: "Geçersiz istek biçimi." }, 400);
  }

  /* 4) Honeypot: filled → pretend success, send nothing */
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return genericSuccess();
  }

  /* 5) Timing signal: forms submitted quicker than a human could fill
        them are silently dropped. Long-open forms stay valid. */
  if (typeof payload.formStartedAt === "number") {
    const elapsed = Date.now() - payload.formStartedAt;
    if (elapsed >= 0 && elapsed < QUOTE_LIMITS.minFillTimeMs) {
      return genericSuccess();
    }
  }

  /* 6) Full server-side validation */
  const result = validateQuotePayload(payload);
  if (!result.ok) {
    return json(
      {
        ok: false,
        message: "Lütfen form alanlarını kontrol edin.",
        fieldErrors: result.fieldErrors,
      },
      422,
    );
  }

  /* 7) Rate limit — only VALID attempts consume the allowance */
  if (!allowQuoteAttempt(getClientKey(request))) {
    return json(
      {
        ok: false,
        message:
          "Kısa süre içinde çok fazla talep gönderdiniz. Lütfen daha sonra tekrar deneyin.",
      },
      429,
    );
  }

  /* 8) SMTP configuration */
  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    return json(
      {
        ok: false,
        message:
          "Teklif formu şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.",
      },
      503,
    );
  }

  /* 9) Send — never leak SMTP details or personal data to logs/client */
  try {
    const email = buildQuoteEmail(result.data);
    await sendQuoteEmail(smtpConfig, email, result.data.email);
    return json({ ok: true, message: QUOTE_SUCCESS_MESSAGE }, 200);
  } catch (error) {
    console.error(
      "[quote] E-posta gönderimi başarısız:",
      error instanceof Error ? error.name : "UnknownError",
    );
    return json(
      {
        ok: false,
        message:
          "Talebiniz şu anda gönderilemedi. Lütfen daha sonra tekrar deneyin.",
      },
      500,
    );
  }
}
