/**
 * Merkezi site ve iletişim yapılandırması.
 *
 * KURAL: Yalnızca doğrulanmış bilgiler girilir. Henüz kesinleşmemiş
 * alanlar boş string / boş dizi kalır — boş değerler arayüzde asla
 * render edilmez. Telefon, e-posta, adres ve sosyal bağlantılar
 * netleştiğinde SADECE bu dosya güncellenir.
 */
export interface SocialLink {
  label: string;
  href: string;
}

export const siteConfig = {
  siteName: "Matterport TR",
  domain: "matterporttr.com.tr",
  url: "https://www.matterporttr.com.tr",
  baseUrl: "https://www.matterporttr.com.tr",
  serviceArea: "Türkiye Geneli",
  /** Legal pages show a review notice while true */
  legalReviewRequired: true,
  phone: "0501 580 01 01",
  email: "info@matterporttr.com",
  website: "www.matterporttr.com.tr",
  address: "",
  /** Teknik Destek — yeni proje, çekim ve teknik talepler */
  technicalSupportPhone: "0501 580 01 01",
  technicalSupportWhatsapp: "0501 580 01 01",
  /** Müşteri Hizmetleri — mevcut tur, yayın ve destek talepleri */
  customerServicePhone: "0501 480 01 01",
  customerServiceWhatsapp: "0501 480 01 01",
  workingHours: {
    weekdays: "Pazartesi–Cuma 09:00–17:00",
    saturday: "Cumartesi 09:00–15:00",
    sunday: "Pazar Kapalı",
  },
  companyLegalName: "Matterport Türkiye Dijital Bilişim",
  taxOffice: "",
  taxNumber: "",
  mersisNumber: "",
  socialLinks: [] as SocialLink[],
};
