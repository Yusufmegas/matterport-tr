/**
 * Single source of truth for quote-form options and limits.
 * Imported by BOTH the client form and the server validation —
 * contains plain data only, no secrets and no Node APIs.
 */

export const QUOTE_PROJECT_TYPES = [
  "3D Sanal Tur",
  "Dijital İkiz",
  "Google Street View",
  "İnşaat Dokümantasyonu",
  "Teknik Dosya ve Ölçüm",
  "Kurumsal Portföy Çekimi",
  "Mevcut Müşteri Desteği",
  "Diğer",
] as const;

export const QUOTE_SECTORS = [
  "İnşaat ve Mimarlık",
  "Endüstri ve Lojistik",
  "Otel ve Konaklama",
  "Gayrimenkul",
  "Otomotiv ve Showroom",
  "Perakende ve Restoran",
  "Eğitim",
  "Sağlık",
  "Yat ve Denizcilik",
  "Müze ve Kültürel Miras",
  "Ofis ve Coworking",
  "Fuar ve Etkinlik",
  "Diğer",
] as const;

export const QUOTE_LIMITS = {
  /** Max JSON body size accepted by the API (bytes) */
  maxBodyBytes: 32 * 1024,
  projectNoteMax: 1000,
  cityMin: 2,
  cityMax: 100,
  fullNameMin: 2,
  fullNameMax: 100,
  companyNameMax: 150,
  phoneMin: 7,
  phoneMax: 30,
  emailMax: 254,
  /** m² üst sınırı — gerçek dışı büyük değerleri reddet */
  areaMax: 10_000_000,
  /** Submissions faster than this (ms after render) are treated as bots */
  minFillTimeMs: 1500,
  subjectMax: 120,
} as const;

export const QUOTE_SUCCESS_MESSAGE =
  "Talebiniz alındı. Ekibimiz proje bilgilerinizi inceleyerek sizinle iletişime geçecektir.";
