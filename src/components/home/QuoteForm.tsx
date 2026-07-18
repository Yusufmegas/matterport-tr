"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  QUOTE_LIMITS,
  QUOTE_PROJECT_TYPES,
  QUOTE_SECTORS,
} from "@/lib/quote/constants";
import { validateQuotePayload } from "@/lib/quote/validation";
import { buildWhatsAppRequestMessage } from "@/lib/whatsapp";
import type { QuoteFieldName } from "@/lib/quote/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "success" | "error";

type FieldErrors = Partial<Record<QuoteFieldName, string>>;

/** fieldErrors anahtarlarını input id'lerine bağlar (hata odağı için) */
const FIELD_IDS: Record<QuoteFieldName, string> = {
  projectType: "quote-project-type",
  sector: "quote-sector",
  approximateArea: "quote-area",
  city: "quote-city",
  fullName: "quote-name",
  companyName: "quote-company",
  phone: "quote-phone",
  email: "quote-email",
  projectNote: "quote-note",
  privacyAcknowledged: "quote-privacy",
};

const fieldClasses = cn(
  "h-12 w-full rounded-lg border border-border-subtle bg-background px-3.5 text-sm text-foreground",
  "placeholder:text-muted/85 transition-colors duration-150",
  "focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
  "aria-[invalid=true]:border-accent",
);

const labelClasses = "mb-1.5 block text-xs font-medium text-secondary";

interface QuoteFormProps {
  /** Card heading (default: homepage wording) */
  title?: string;
  /** Adds the optional "Proje Notu" textarea (contact page) */
  showProjectNote?: boolean;
}

export function QuoteForm({
  title = "Hızlı Teklif Alın",
  showProjectNote = false,
}: QuoteFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  /* Formun ilk render zamanı — yalnızca spam sinyali olarak gönderilir */
  const formStartedAtRef = useRef<number>(0);
  useEffect(() => {
    formStartedAtRef.current = Date.now();
  }, []);

  function fieldErrorProps(name: QuoteFieldName) {
    const error = fieldErrors[name];
    return {
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${FIELD_IDS[name]}-error` : undefined,
    };
  }

  function renderFieldError(name: QuoteFieldName) {
    const error = fieldErrors[name];
    if (!error) return null;
    return (
      <p
        id={`${FIELD_IDS[name]}-error`}
        className="mt-1.5 text-xs leading-relaxed text-accent-strong"
      >
        {error}
      </p>
    );
  }

  function focusFirstError(errors: FieldErrors) {
    const firstKey = (Object.keys(FIELD_IDS) as QuoteFieldName[]).find(
      (key) => errors[key],
    );
    if (!firstKey) return;
    document.getElementById(FIELD_IDS[firstKey])?.focus();
  }

  /**
   * Form doğrulaması başarılıysa bilgiler kurumsal bir WhatsApp mesajına
   * dönüştürülür ve kullanıcı ilgili hatta yönlendirilir ("Mevcut Müşteri
   * Desteği" → Müşteri Hizmetleri, diğer talepler → Teknik Destek).
   * Yönlendirme ve mesaj şablonu merkezi helper'dadır (lib/whatsapp).
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setMessage("");
    setFieldErrors({});

    /* Bot sinyalleri: honeypot dolu veya form insanüstü hızda dolduysa
       sessizce başarı göster, WhatsApp'a yönlendirme yapma. */
    const honeypot = String(formData.get("website") ?? "");
    const elapsedMs = Date.now() - formStartedAtRef.current;
    const isBot = honeypot !== "" || elapsedMs < QUOTE_LIMITS.minFillTimeMs;

    const result = validateQuotePayload({
      projectType: formData.get("projectType"),
      sector: formData.get("sector"),
      approximateArea: formData.get("area"),
      city: formData.get("city"),
      fullName: formData.get("fullName"),
      companyName: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      projectNote: formData.get("projectNote") ?? "",
      privacyAcknowledged: formData.get("privacyAcknowledged") === "on",
    });

    if (!result.ok) {
      setStatus("error");
      setMessage("Lütfen form alanlarını kontrol edin.");
      setFieldErrors(result.fieldErrors);
      focusFirstError(result.fieldErrors);
      return;
    }

    const { href, unit } = buildWhatsAppRequestMessage(result.data);

    if (!isBot) {
      window.open(href, "_blank", "noopener,noreferrer");
    }

    setStatus("success");
    setMessage(
      `Talebiniz düzenli bir proje mesajı olarak hazırlandı ve ${unit.label} birimine WhatsApp üzerinden aktarıldı. Açılan WhatsApp penceresinden göndermeyi tamamlayabilirsiniz.`,
    );
    form.reset();
    formStartedAtRef.current = Date.now();
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="quote-form-title"
      className="relative rounded-xl border border-border-subtle bg-surface p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] sm:p-7"
    >
      <h3
        id="quote-form-title"
        className="font-display text-lg font-semibold tracking-tight text-foreground"
      >
        {title}
      </h3>

      {/* Honeypot: insanlar görmez, ekran okuyucular okumaz; botlar doldurur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="quote-website">Web siteniz</label>
        <input
          id="quote-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-project-type" className={labelClasses}>
            Proje Türü
          </label>
          <select
            id="quote-project-type"
            name="projectType"
            required
            defaultValue=""
            className={fieldClasses}
            {...fieldErrorProps("projectType")}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {QUOTE_PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {renderFieldError("projectType")}
        </div>

        <div>
          <label htmlFor="quote-sector" className={labelClasses}>
            Sektör
          </label>
          <select
            id="quote-sector"
            name="sector"
            required
            defaultValue=""
            className={fieldClasses}
            {...fieldErrorProps("sector")}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {QUOTE_SECTORS.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
          {renderFieldError("sector")}
        </div>

        <div>
          <label htmlFor="quote-area" className={labelClasses}>
            Yaklaşık Alan
          </label>
          <input
            id="quote-area"
            name="area"
            type="number"
            min={1}
            required
            placeholder="m²"
            className={fieldClasses}
            {...fieldErrorProps("approximateArea")}
          />
          {renderFieldError("approximateArea")}
        </div>

        <div>
          <label htmlFor="quote-city" className={labelClasses}>
            Şehir
          </label>
          <input
            id="quote-city"
            name="city"
            type="text"
            required
            placeholder="Örn. İstanbul"
            className={fieldClasses}
            {...fieldErrorProps("city")}
          />
          {renderFieldError("city")}
        </div>

        <div>
          <label htmlFor="quote-name" className={labelClasses}>
            Ad Soyad
          </label>
          <input
            id="quote-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={fieldClasses}
            {...fieldErrorProps("fullName")}
          />
          {renderFieldError("fullName")}
        </div>

        <div>
          <label htmlFor="quote-company" className={labelClasses}>
            Şirket Adı
          </label>
          <input
            id="quote-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className={fieldClasses}
            {...fieldErrorProps("companyName")}
          />
          {renderFieldError("companyName")}
        </div>

        <div>
          <label htmlFor="quote-phone" className={labelClasses}>
            Telefon
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={fieldClasses}
            {...fieldErrorProps("phone")}
          />
          {renderFieldError("phone")}
        </div>

        <div>
          <label htmlFor="quote-email" className={labelClasses}>
            E-posta
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClasses}
            {...fieldErrorProps("email")}
          />
          {renderFieldError("email")}
        </div>
      </div>

      {showProjectNote ? (
        <div className="mt-4">
          <label htmlFor="quote-note" className={labelClasses}>
            Proje Notu <span className="font-normal">(isteğe bağlı)</span>
          </label>
          <textarea
            id="quote-note"
            name="projectNote"
            maxLength={QUOTE_LIMITS.projectNoteMax}
            rows={4}
            placeholder="Projenizle ilgili paylaşmak istediğiniz ek bilgiler"
            className={cn(
              "w-full resize-y rounded-lg border border-border-subtle bg-background px-3.5 py-3",
              "max-h-64 min-h-[96px] text-sm text-foreground placeholder:text-muted/85",
              "transition-colors duration-150",
              "focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
            )}
            {...fieldErrorProps("projectNote")}
          />
          {renderFieldError("projectNote")}
        </div>
      ) : null}

      {/* KVKK / Gizlilik onayı — pazarlama izni DEĞİLDİR */}
      <div className="mt-5">
        <label
          htmlFor="quote-privacy"
          className="flex items-start gap-2.5 text-xs leading-relaxed text-muted"
        >
          <input
            id="quote-privacy"
            type="checkbox"
            name="privacyAcknowledged"
            required
            className="mt-0.5 size-4 shrink-0 accent-[var(--accent)]"
            {...fieldErrorProps("privacyAcknowledged")}
          />
          <span>
            <Link
              href="/kvkk"
              className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-accent"
            >
              KVKK Aydınlatma Metni
            </Link>{" "}
            ve{" "}
            <Link
              href="/gizlilik-politikasi"
              className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-accent"
            >
              Gizlilik Politikası
            </Link>
            &rsquo;nı okudum.
          </span>
        </label>
        {renderFieldError("privacyAcknowledged")}
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        WhatsApp’tan Gönder
        <MessageCircle className="size-4" aria-hidden="true" />
      </Button>

      <p className="mt-2.5 text-center text-xs leading-relaxed text-muted">
        Bilgileriniz düzenli bir proje talebi olarak ilgili WhatsApp hattına
        aktarılır.
      </p>

      {status === "success" ? (
        <p
          role="status"
          className="mt-4 rounded-lg border border-border-subtle bg-surface-2 px-4 py-3 text-sm leading-relaxed text-foreground"
        >
          {message}
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-accent/40 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-foreground"
        >
          {message}
        </p>
      ) : null}

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Bilgileriniz yalnızca proje değerlendirmesi amacıyla kullanılacaktır.
      </p>
    </form>
  );
}
