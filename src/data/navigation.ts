import type { NavItem } from "@/types";
import { isBlockedRoute } from "@/config/feature-flags";

const allNavigation: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Matterport Nedir?", href: "/matterport-nedir" },
  { label: "Teknik Çıktılar", href: "/teknik-ciktilar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

/* Geçici olarak kapatılan route'lar menüde görünmez (feature-flags). */
export const navigation: NavItem[] = allNavigation.filter(
  (item) => !isBlockedRoute(item.href),
);

export const ctaItem: NavItem = { label: "Teklif Alın", href: "/iletisim" };
