import { siteConfig } from "@/config/site";
import type { QuoteRequestData } from "@/lib/quote/types";

/**
 * WhatsApp bağlantı yardımcıları — numara biçimi, hazır mesajlar,
 * birim yönlendirmesi ve form → WhatsApp mesaj şablonu TEK yerden
 * yönetilir; componentlerde tekrar hard-code edilmez.
 */

/** Teknik Destek hattı için hazır mesaj. */
export const WHATSAPP_TECHNICAL_SUPPORT_MESSAGE =
  "Merhaba, Matterport çekimi ve teknik çözümler hakkında bilgi almak istiyorum.";

/** Müşteri Hizmetleri hattı için hazır mesaj. */
export const WHATSAPP_CUSTOMER_SERVICE_MESSAGE =
  "Merhaba, mevcut Matterport turumla ilgili müşteri hizmetleri desteği almak istiyorum.";

/** "0501 580 01 01" → "905015800101" */
export function toWhatsAppNumber(displayPhone: string): string {
  const digits = displayPhone.replace(/\D/g, "");
  return `90${digits.replace(/^0/, "")}`;
}

/** "0501 580 01 01" → "tel:+905015800101" */
export function toTelHref(displayPhone: string): string {
  return `tel:+${toWhatsAppNumber(displayPhone)}`;
}

/** Hazır mesajlı, TEK KEZ URL-encode edilmiş wa.me bağlantısı üretir. */
export function whatsappHref(displayPhone: string, message: string): string {
  return `https://wa.me/${toWhatsAppNumber(displayPhone)}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/* Form → WhatsApp yönlendirmesi                                       */
/* ------------------------------------------------------------------ */

export interface ContactUnit {
  label: "Teknik Destek" | "Müşteri Hizmetleri";
  phone: string;
}

/**
 * Talep türüne göre doğru birimi seçer:
 * "Mevcut Müşteri Desteği" → Müşteri Hizmetleri; diğer tüm yeni proje,
 * teklif, çekim ve teknik talepler → Teknik Destek.
 */
export function resolveContactUnit(projectType: string): ContactUnit {
  if (projectType === "Mevcut Müşteri Desteği") {
    return {
      label: "Müşteri Hizmetleri",
      phone: siteConfig.customerServiceWhatsapp,
    };
  }
  return {
    label: "Teknik Destek",
    phone: siteConfig.technicalSupportWhatsapp,
  };
}

const SEPARATOR = "────────────────────";

/**
 * Doğrulanmış form verisinden kurumsal WhatsApp mesajı ve bağlantısı
 * üretir. Boş opsiyonel alanlar mesajda görünmez; encode işlemi
 * whatsappHref içinde TEK KEZ yapılır.
 */
export function buildWhatsAppRequestMessage(data: QuoteRequestData): {
  href: string;
  unit: ContactUnit;
  message: string;
} {
  const unit = resolveContactUnit(data.projectType);

  const field = (label: string, value: string | number | undefined) => {
    const text = String(value ?? "").trim();
    return text === "" ? null : `*${label}:* ${text}`;
  };

  const lines = [
    "*MATTERPORT TR — YENİ TALEP*",
    SEPARATOR,
    "",
    field("İlgili Birim", unit.label),
    "",
    field("Ad Soyad", data.fullName),
    field("Firma / Kurum", data.companyName),
    field("Telefon", data.phone),
    field("E-posta", data.email),
    "",
    field("Talep Türü", data.projectType),
    field("Sektör", data.sector),
    field("Şehir", data.city),
    field(
      "Yaklaşık Alan",
      data.approximateArea === null ? undefined : `${data.approximateArea} m²`,
    ),
  ];

  const note = data.projectNote.trim();
  if (note !== "") {
    lines.push("", "*Proje Detayı:*", note);
  }

  lines.push(
    "",
    SEPARATOR,
    "Bu talep matterporttr.com iletişim formu üzerinden oluşturuldu.",
  );

  /* null alanlar düşer; ardışık boş satırlar teke iner */
  const message = lines
    .filter((line): line is string => line !== null)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");

  return { href: whatsappHref(unit.phone, message), unit, message };
}
