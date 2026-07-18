/**
 * GEÇİCİ ERİŞİM KAPATMA — Çözümler ve Sektörler.
 *
 * false iken:
 * - /cozumler, /cozumler/[slug], /sektorler, /sektorler/[slug] 404 döner
 * - sitemap bu route'ları listelemez
 * - header/footer navigasyonundan ilgili öğeler düşer
 * - ana sayfa ve iç sayfalardaki tüm bağlantılar link olmaktan çıkar
 *   (metin/tasarım korunur)
 *
 * Sayfa dosyaları ve içerikler silinmez; tekrar yayına almak için bu
 * değeri true yapmak yeterlidir.
 */
export const SOLUTIONS_AND_SECTORS_ENABLED = false;

/** href bu geçici kapatmanın kapsamındaki bir route'a mı gidiyor? */
export function isBlockedRoute(href: string): boolean {
  if (SOLUTIONS_AND_SECTORS_ENABLED) return false;
  return (
    href === "/cozumler" ||
    href.startsWith("/cozumler/") ||
    href === "/sektorler" ||
    href.startsWith("/sektorler/")
  );
}
