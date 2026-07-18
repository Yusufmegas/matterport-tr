/**
 * Merkezi Matterport / MPskin tur yapılandırması.
 * Tur URL'lerini component'lerin içine yazmayın — her zaman buradan okuyun.
 */
export const matterportConfig = {
  /** Ana sayfa Hero'sundaki tur (özel kontrol barıyla) */
  heroTourUrl: "https://my.mpskin.com/tr/tour/ay6ce725kd",
  /** "Önce Gezin, Sonra Karar Verin" bölümündeki tur (MPskin kendi arayüzüyle) */
  experienceTourUrl: "https://my.mpskin.com/tr/tour/yfq5gr9dt",
  /** postMessage hedef/kaynak origin doğrulaması için */
  origin: "https://my.mpskin.com",
  /** Web sitesinden giden mesajların source alanı */
  messageSource: "matterport-tr-website",
} as const;

/** Web sitesinden MPskin köprüsüne gönderilen komutlar */
export type MpskinCommandAction =
  | "TOUR_PLAY"
  | "MODE_INSIDE"
  | "MODE_DOLLHOUSE"
  | "MODE_FLOORPLAN"
  | "MEASUREMENT_TOGGLE";

/** Matterport görünüm modları (MPSKIN_STATE ile senkronize edilir) */
export type TourViewMode = "INSIDE" | "DOLLHOUSE" | "FLOORPLAN";

/**
 * Iframe src URL'sini güvenli URL API'siyle üretir (string birleştirme
 * yok): mevcut query parametreleri korunur, play=1 eklenir.
 */
export function buildTourIframeUrl(tourUrl: string): string {
  const url = new URL(tourUrl);
  url.searchParams.set("play", "1");
  return url.toString();
}
