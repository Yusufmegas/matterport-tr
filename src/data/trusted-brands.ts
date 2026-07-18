export interface TrustedBrand {
  id: string;
  name: string;
  /** Sırayla denenir; public/ altındaki ilk mevcut dosya kullanılır. */
  logoCandidates: string[];
  alt: string;
}

export const trustedBrandsEyebrow = "GÜVENİLEN MARKALAR";

/**
 * Güvenilen Markalar döngüsünün TEK merkezi kaynağı — her marka yalnızca
 * bir kez yer alır (döngünün ikinci görsel kopyası component içindedir).
 * Logo dosyaları public/images/brands/trusted/ klasörüne eklendiğinde
 * kod değişikliği olmadan otomatik görünür; dosya yokken sade
 * tipografik fallback gösterilir.
 */
export const trustedBrands: TrustedBrand[] = [
  {
    id: "turk-hava-yollari",
    name: "Türk Hava Yolları",
    logoCandidates: [
      "images/brands/trusted/turk-hava-yollari.svg",
      "images/brands/trusted/turk-hava-yollari.webp",
      "images/brands/trusted/turk-hava-yollari.png",
    ],
    alt: "Türk Hava Yolları logosu",
  },
  {
    id: "kalyon",
    name: "Kalyon",
    logoCandidates: [
      "images/brands/trusted/kalyon.svg",
      "images/brands/trusted/kalyon.webp",
      "images/brands/trusted/kalyon.png",
    ],
    alt: "Kalyon logosu",
  },
  {
    id: "numarine",
    name: "Numarine",
    logoCandidates: [
      "images/brands/trusted/numarine.svg",
      "images/brands/trusted/numarine.webp",
      "images/brands/trusted/numarine.png",
    ],
    alt: "Numarine logosu",
  },
  {
    id: "tersane-istanbul",
    name: "Tersane İstanbul",
    logoCandidates: [
      "images/brands/trusted/tersane-istanbul.svg",
      "images/brands/trusted/tersane-istanbul.webp",
      "images/brands/trusted/tersane-istanbul.png",
    ],
    alt: "Tersane İstanbul logosu",
  },
  {
    id: "eser-premium-hotel-spa",
    name: "Eser Premium Hotel & Spa",
    logoCandidates: [
      "images/brands/trusted/eser-premium-hotel-spa.svg",
      "images/brands/trusted/eser-premium-hotel-spa.webp",
      "images/brands/trusted/eser-premium-hotel-spa.png",
    ],
    alt: "Eser Premium Hotel & Spa logosu",
  },
  {
    id: "europark-hotel",
    name: "Europark Hotel",
    logoCandidates: [
      "images/brands/trusted/europark-hotel.svg",
      "images/brands/trusted/europark-hotel.webp",
      "images/brands/trusted/europark-hotel.png",
    ],
    alt: "Europark Hotel logosu",
  },
  {
    id: "istikbal",
    name: "İstikbal",
    logoCandidates: [
      "images/brands/trusted/istikbal.svg",
      "images/brands/trusted/istikbal.webp",
      "images/brands/trusted/istikbal.png",
    ],
    alt: "İstikbal logosu",
  },
  {
    id: "bellona",
    name: "Bellona",
    logoCandidates: [
      "images/brands/trusted/bellona.svg",
      "images/brands/trusted/bellona.webp",
      "images/brands/trusted/bellona.png",
    ],
    alt: "Bellona logosu",
  },
  {
    id: "english-home",
    name: "English Home",
    logoCandidates: [
      "images/brands/trusted/english-home.svg",
      "images/brands/trusted/english-home.webp",
      "images/brands/trusted/english-home.png",
    ],
    alt: "English Home logosu",
  },
  {
    id: "madame-coco",
    name: "Madame Coco",
    logoCandidates: [
      "images/brands/trusted/madame-coco.svg",
      "images/brands/trusted/madame-coco.webp",
      "images/brands/trusted/madame-coco.png",
    ],
    alt: "Madame Coco logosu",
  },
  {
    id: "kahve-dunyasi",
    name: "Kahve Dünyası",
    logoCandidates: [
      "images/brands/trusted/kahve-dunyasi.svg",
      "images/brands/trusted/kahve-dunyasi.webp",
      "images/brands/trusted/kahve-dunyasi.png",
    ],
    alt: "Kahve Dünyası logosu",
  },
  {
    id: "bigchefs",
    name: "BigChefs",
    logoCandidates: [
      "images/brands/trusted/bigchefs.svg",
      "images/brands/trusted/bigchefs.webp",
      "images/brands/trusted/bigchefs.png",
    ],
    alt: "BigChefs logosu",
  },
];
