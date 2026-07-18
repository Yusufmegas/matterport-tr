import type { FooterColumn, FooterLink } from "@/types";
import { isBlockedRoute } from "@/config/feature-flags";

export const footerDescription =
  "Mekânları 3D dijital ikizlere dönüştüren profesyonel tarama, sanal tur ve mekânsal veri çözümleri.";

const allFooterColumns: FooterColumn[] = [
  {
    title: "Çözümler",
    links: [
      { label: "3D Sanal Tur", href: "/cozumler/3d-sanal-tur" },
      { label: "Dijital İkiz", href: "/cozumler/dijital-ikiz" },
      { label: "Google Street View", href: "/cozumler/google-street-view" },
      { label: "Teknik Dosyalar", href: "/cozumler/teknik-dosyalar" },
      {
        label: "İnşaat Dokümantasyonu",
        href: "/cozumler/insaat-dokumantasyonu",
      },
    ],
  },
  {
    title: "Sektörler",
    links: [
      { label: "İnşaat ve Mimarlık", href: "/sektorler/insaat-mimarlik" },
      { label: "Endüstri ve Lojistik", href: "/sektorler/endustri-lojistik" },
      { label: "Otel ve Konaklama", href: "/sektorler/otel-konaklama" },
      { label: "Gayrimenkul", href: "/sektorler/gayrimenkul" },
      {
        label: "Otomotiv ve Showroom",
        href: "/sektorler/otomotiv-showroom",
      },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Matterport Nedir?", href: "/matterport-nedir" },
      { label: "Teknik Çıktılar", href: "/teknik-ciktilar" },
      { label: "Sık Sorulan Sorular", href: "/sss" },
      { label: "Müşteri Desteği", href: "/iletisim#musteri-destegi" },
      { label: "İletişim", href: "/iletisim" },
      { label: "KVKK", href: "/kvkk" },
    ],
  },
];

/* Geçici olarak kapatılan route'ların linkleri footer'da görünmez;
   tüm linkleri düşen kolon tamamen gizlenir (feature-flags). */
export const footerColumns: FooterColumn[] = allFooterColumns
  .map((column) => ({
    ...column,
    links: column.links.filter((link) => !isBlockedRoute(link.href)),
  }))
  .filter((column) => column.links.length > 0);

export const footerLegalLinks: FooterLink[] = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK", href: "/kvkk" },
  { label: "Çerez Ayarları", href: "/cerez-ayarlari" },
];
