/** Field names the API can return errors for (shared client/server). */
export type QuoteFieldName =
  | "projectType"
  | "sector"
  | "approximateArea"
  | "city"
  | "fullName"
  | "companyName"
  | "phone"
  | "email"
  | "projectNote"
  | "privacyAcknowledged";

/** Raw JSON payload the client posts to /api/quote. */
export interface QuoteRequestPayload {
  projectType?: unknown;
  sector?: unknown;
  approximateArea?: unknown;
  city?: unknown;
  fullName?: unknown;
  companyName?: unknown;
  phone?: unknown;
  email?: unknown;
  projectNote?: unknown;
  privacyAcknowledged?: unknown;
  /** Honeypot — must stay empty */
  website?: unknown;
  /** Client render timestamp (ms) — spam signal only */
  formStartedAt?: unknown;
}

/** Validated, normalised quote data used for the e-mail. */
export interface QuoteRequestData {
  projectType: string;
  sector: string;
  approximateArea: number | null;
  city: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  projectNote: string;
}

export interface QuoteApiSuccess {
  ok: true;
  message: string;
}

export interface QuoteApiError {
  ok: false;
  message: string;
  fieldErrors?: Partial<Record<QuoteFieldName, string>>;
}

export type QuoteApiResponse = QuoteApiSuccess | QuoteApiError;
