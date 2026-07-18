import type { PortfolioProject } from "@/types";

export const portfolioEyebrow = "SEÇİLMİŞ PROJELER";
export const portfolioTitle = "Gerçek projeler, gerçek sonuçlar.";
export const portfolioDescription =
  "Farklı sektörlerde gerçekleştirdiğimiz 3D dijital ikiz ve sanal tur çalışmalarını inceleyin.";

/**
 * Ana sayfa Seçilmiş Projeler döngüsünün TEK merkezi kaynağı.
 *
 * Kurallar:
 * - Listede yalnızca public/images/projects/ (veya gallery/ alt klasörü)
 *   altında GERÇEK kapak görseli bulunan markalar yer alır; görseli
 *   eklenmemiş markalar bu vitrine girmez. Detay sayfaları ve diğer
 *   proje altyapısı bundan etkilenmez.
 * - Her marka yalnızca BİR kez yer alır; şube/araç/kopya kayıtları tek
 *   karta birleştirilmiştir.
 * - imageCandidates sırayla denenir; ilk mevcut dosya kullanılır.
 *   Görseli eklenen yeni marka bu listeye kaydı geri eklenerek görünür.
 * - location alanı yalnızca kesin biliniyorsa doldurulur; boş bırakılan
 *   markalarda konum satırı hiç render edilmez.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "zen-hairpol",
    title: "Zen Hairpol",
    category: "Sağlık ve Klinik",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/zen-hairpol.webp",
      "images/projects/gallery/zen-hairpol.jpg",
      "images/projects/zen-hairpol.webp",
      "images/projects/zen-hairpol.jpg",
    ],
    imageAlt: "Zen Hairpol kliniğinin 3D sanal tur görünümü",
    variant: "industrial",
  },
  {
    id: "esteliv-poliklinigi",
    title: "Esteliv Polikliniği",
    category: "Sağlık ve Estetik",
    location: "Beylikdüzü, İstanbul",
    imageCandidates: [
      "images/projects/gallery/esteliv-poliklinigi.webp",
      "images/projects/gallery/esteliv-poliklinigi.jpg",
      "images/projects/esteliv-poliklinigi.webp",
      "images/projects/esteliv-poliklinigi.jpg",
    ],
    imageAlt: "Esteliv Polikliniği'nin 3D sanal tur görünümü",
    variant: "hospitality",
  },
  {
    id: "florya-novi-hotel",
    title: "Florya Novi Hotel",
    category: "Otel ve Konaklama",
    location: "Florya, İstanbul",
    imageCandidates: [
      "images/projects/gallery/florya-novi-hotel.webp",
      "images/projects/gallery/florya-novi-hotel.jpg",
      "images/projects/florya-novi-hotel.webp",
      "images/projects/florya-novi-hotel.jpg",
    ],
    imageAlt: "Florya Novi Hotel'in 3D sanal tur görünümü",
    variant: "hospitality",
  },
  {
    id: "clk-motors",
    title: "CLK Motors / Base Motors",
    category: "Otomotiv ve Showroom",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/clk-motors.webp",
      "images/projects/gallery/clk-motors.jpg",
      "images/projects/clk-motors.webp",
      "images/projects/clk-motors.jpg",
    ],
    imageAlt: "CLK Motors / Base Motors showroomunun 3D sanal tur görünümü",
    variant: "retail",
  },
  {
    id: "eser-premium-hotel",
    title: "Eser Premium Hotel & Spa",
    category: "Otel ve Konaklama",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/eser-premium-hotel.webp",
      "images/projects/gallery/eser-premium-hotel.jpg",
      "images/projects/eser-premium-hotel.webp",
      "images/projects/eser-premium-hotel.jpg",
    ],
    imageAlt: "Eser Premium Hotel & Spa'nın 3D sanal tur görünümü",
    variant: "hospitality",
  },
  {
    id: "gunesli-evleri",
    title: "Güneşli Evleri",
    category: "Konut ve Gayrimenkul",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/gunesli-evleri.webp",
      "images/projects/gallery/gunesli-evleri.jpg",
      "images/projects/gunesli-evleri.webp",
      "images/projects/gunesli-evleri.jpg",
    ],
    imageAlt: "Güneşli Evleri konut projesinin 3D sanal tur görünümü",
    variant: "construction",
  },
  {
    id: "tersane-istanbul",
    title: "Tersane İstanbul",
    subtitle: "T5 Binası",
    category: "Ticari Yapı ve Mimarlık",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/tersane-istanbul.webp",
      "images/projects/gallery/tersane-istanbul.jpg",
      "images/projects/tersane-istanbul.webp",
      "images/projects/tersane-istanbul.jpg",
    ],
    imageAlt: "Tersane İstanbul T5 Binası'nın 3D dijital ikiz görünümü",
    variant: "construction",
  },
  {
    id: "turk-hava-yollari",
    title: "Türk Hava Yolları",
    category: "Havacılık",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/turk-hava-yollari.webp",
      "images/projects/gallery/turk-hava-yollari.jpg",
      "images/projects/turk-hava-yollari.webp",
      "images/projects/turk-hava-yollari.jpg",
    ],
    imageAlt: "Türk Hava Yolları 3D sanal tur görünümü",
    variant: "aviation",
  },
  {
    id: "numarine-30xp",
    title: "Numarine 30XP",
    category: "Yat ve Denizcilik",
    location: "Tuzla, İstanbul",
    imageCandidates: [
      "images/projects/gallery/numarine-30xp.webp",
      "images/projects/gallery/numarine-30xp.jpg",
      "images/projects/numarine-30xp.webp",
      "images/projects/numarine-30xp.jpg",
    ],
    imageAlt: "Numarine 30XP yatının 3D sanal tur görünümü",
    variant: "marine",
  },
  {
    id: "europark-hotel",
    title: "Europark Hotel",
    category: "Otel ve Konaklama",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/europark-hotel.webp",
      "images/projects/gallery/europark-hotel.jpg",
      "images/projects/europark-hotel.webp",
      "images/projects/europark-hotel.jpg",
    ],
    imageAlt: "Europark Hotel'in 3D sanal tur görünümü",
    variant: "hospitality",
  },
  {
    id: "kalyon-florentia-village",
    title: "Kalyon — Florentia Village",
    category: "İnşaat ve Mimarlık",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/kalyon-florentia-village.webp",
      "images/projects/gallery/kalyon-florentia-village.jpg",
      "images/projects/kalyon-florentia-village.webp",
      "images/projects/kalyon-florentia-village.jpg",
    ],
    imageAlt: "Kalyon Florentia Village projesinin dijital saha görünümü",
    variant: "construction",
  },
  {
    id: "marakes-turizm",
    title: "Marakeş Turizm",
    category: "Turizm ve Çoklu Şube",
    location: "İstanbul",
    imageCandidates: [
      "images/projects/gallery/marakes-turizm.webp",
      "images/projects/gallery/marakes-turizm.jpg",
      "images/projects/marakes-turizm.webp",
      "images/projects/marakes-turizm.jpg",
    ],
    imageAlt: "Marakeş Turizm ofislerinin 3D sanal tur görünümü",
    variant: "retail",
  },
];
