import { QUOTE_LIMITS } from "@/lib/quote/constants";
import {
  escapeHtml,
  escapeHtmlMultiline,
  normalizeSingleLine,
} from "@/lib/quote/sanitize";
import type { QuoteRequestData } from "@/lib/quote/types";

export interface QuoteEmailContent {
  subject: string;
  html: string;
  text: string;
}

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Europe/Istanbul",
});

/** Builds subject + HTML + plain-text versions of the notification. */
export function buildQuoteEmail(data: QuoteRequestData): QuoteEmailContent {
  const submittedAt = `${dateFormatter.format(new Date())} (TSİ)`;

  /* Subject is fully server-controlled; user text is normalised and capped */
  const subjectWho = normalizeSingleLine(data.companyName || data.fullName);
  const subject = `Yeni Proje Talebi — ${data.projectType} — ${subjectWho}`.slice(
    0,
    QUOTE_LIMITS.subjectMax,
  );

  const rows: Array<[label: string, value: string, multiline?: boolean]> = [
    ["Talep Zamanı", submittedAt],
    ["Proje Türü", data.projectType],
    ["Sektör", data.sector],
    [
      "Yaklaşık Alan",
      data.approximateArea !== null
        ? `${data.approximateArea.toLocaleString("tr-TR")} m²`
        : "Belirtilmedi",
    ],
    ["Şehir", data.city],
    ["Ad Soyad", data.fullName],
    ["Şirket", data.companyName || "Belirtilmedi"],
    ["Telefon", data.phone],
    ["E-posta", data.email],
    ["Proje Notu", data.projectNote || "Belirtilmedi", true],
  ];

  const htmlRows = rows
    .map(([label, value, multiline]) => {
      const safeValue = multiline
        ? escapeHtmlMultiline(value)
        : escapeHtml(value);
      return (
        `<tr>` +
        `<td style="padding:8px 14px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#6b7280;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 14px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${safeValue}</td>` +
        `</tr>`
      );
    })
    .join("");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;background:#f4f5f7;padding:24px;">` +
    `<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">` +
    `<div style="padding:18px 20px;border-bottom:2px solid #d81a3c;">` +
    `<h1 style="margin:0;font-size:17px;color:#111827;">Yeni Matterport TR Proje Talebi</h1>` +
    `</div>` +
    `<table style="width:100%;border-collapse:collapse;">${htmlRows}</table>` +
    `<div style="padding:14px 20px;font-size:11px;color:#9ca3af;">` +
    `Bu talep matterporttr.com teklif formu üzerinden gönderilmiştir.` +
    `</div>` +
    `</div>` +
    `</div>`;

  const text =
    `Yeni Matterport TR Proje Talebi\n` +
    `================================\n\n` +
    rows
      .map(([label, value]) => `${label}: ${value.replace(/\n/g, "\n  ")}`)
      .join("\n") +
    `\n\n--\nBu talep matterporttr.com teklif formu üzerinden gönderilmiştir.\n`;

  return { subject, html, text };
}
