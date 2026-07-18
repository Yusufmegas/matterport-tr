import {
  QUOTE_LIMITS,
  QUOTE_PROJECT_TYPES,
  QUOTE_SECTORS,
} from "@/lib/quote/constants";
import { normalizeSingleLine, normalizeText } from "@/lib/quote/sanitize";
import type {
  QuoteFieldName,
  QuoteRequestData,
  QuoteRequestPayload,
} from "@/lib/quote/types";

type FieldErrors = Partial<Record<QuoteFieldName, string>>;

export type ValidationResult =
  | { ok: true; data: QuoteRequestData }
  | { ok: false; fieldErrors: FieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[0-9+()\-./\s]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/**
 * Server-side validation — every field is re-checked here regardless of
 * what the client did. Returns Turkish, field-level error messages.
 */
export function validateQuotePayload(
  payload: QuoteRequestPayload,
): ValidationResult {
  const errors: FieldErrors = {};

  const projectType = normalizeSingleLine(asString(payload.projectType));
  if (!(QUOTE_PROJECT_TYPES as readonly string[]).includes(projectType)) {
    errors.projectType = "Lütfen geçerli bir proje türü seçin.";
  }

  const sector = normalizeSingleLine(asString(payload.sector));
  if (!(QUOTE_SECTORS as readonly string[]).includes(sector)) {
    errors.sector = "Lütfen geçerli bir sektör seçin.";
  }

  let approximateArea: number | null = null;
  const rawArea = payload.approximateArea;
  if (rawArea !== undefined && rawArea !== null && rawArea !== "") {
    const parsed =
      typeof rawArea === "number" ? rawArea : Number(asString(rawArea).trim());
    if (!Number.isFinite(parsed) || parsed <= 0) {
      errors.approximateArea = "Yaklaşık alan pozitif bir sayı olmalıdır.";
    } else if (parsed > QUOTE_LIMITS.areaMax) {
      errors.approximateArea = "Lütfen gerçekçi bir alan değeri girin.";
    } else {
      approximateArea = Math.round(parsed);
    }
  }

  const city = normalizeSingleLine(asString(payload.city));
  if (city.length < QUOTE_LIMITS.cityMin || city.length > QUOTE_LIMITS.cityMax) {
    errors.city = "Lütfen geçerli bir şehir girin.";
  }

  const fullName = normalizeSingleLine(asString(payload.fullName));
  if (
    fullName.length < QUOTE_LIMITS.fullNameMin ||
    fullName.length > QUOTE_LIMITS.fullNameMax
  ) {
    errors.fullName = "Lütfen ad ve soyadınızı girin.";
  }

  const companyName = normalizeSingleLine(asString(payload.companyName));
  if (companyName.length > QUOTE_LIMITS.companyNameMax) {
    errors.companyName = "Şirket adı çok uzun.";
  }

  const phone = normalizeSingleLine(asString(payload.phone));
  if (
    phone.length < QUOTE_LIMITS.phoneMin ||
    phone.length > QUOTE_LIMITS.phoneMax ||
    !PHONE_PATTERN.test(phone)
  ) {
    errors.phone = "Lütfen geçerli bir telefon numarası girin.";
  }

  const email = normalizeSingleLine(asString(payload.email));
  if (
    email.length === 0 ||
    email.length > QUOTE_LIMITS.emailMax ||
    !EMAIL_PATTERN.test(email)
  ) {
    errors.email = "Geçerli bir e-posta adresi girin.";
  }

  const projectNote = normalizeText(asString(payload.projectNote));
  if (projectNote.length > QUOTE_LIMITS.projectNoteMax) {
    errors.projectNote = `Proje notu en fazla ${QUOTE_LIMITS.projectNoteMax} karakter olabilir.`;
  }

  if (payload.privacyAcknowledged !== true) {
    errors.privacyAcknowledged =
      "Devam etmek için KVKK Aydınlatma Metni ve Gizlilik Politikası'nı onaylamanız gerekir.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, fieldErrors: errors };
  }

  return {
    ok: true,
    data: {
      projectType,
      sector,
      approximateArea,
      city,
      fullName,
      companyName,
      phone,
      email,
      projectNote,
    },
  };
}
