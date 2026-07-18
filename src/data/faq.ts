import type { FaqItem } from "@/types";

/**
 * /sss sayfasının TEK merkezi veri kaynağı.
 * Sayfadaki görünür içerik ve FAQPage JSON-LD aynı listeden üretilir —
 * ikisi arasında fark oluşamaz.
 */

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqPageTitle = "Sık Sorulan Sorular";
export const faqPageDescription =
  "Matterport çekimi, sanal tur yayın süreci, teknik çıktılar ve mevcut müşteri desteğiyle ilgili sık sorulan soruların yanıtlarını inceleyin.";

export const faqCategories: FaqCategory[] = [
  {
    id: "cekim-ve-planlama",
    title: "Çekim ve Planlama",
    items: [
      {
        question: "Matterport çekimi ne kadar sürer?",
        answer:
          "Çekim süresi mekânın büyüklüğüne, kat sayısına, alanların yapısına ve tarama yoğunluğuna göre değişir. Proje öncesinde saha bilgileri değerlendirilerek yaklaşık çekim planı paylaşılır.",
      },
      {
        question: "Çekim sırasında mekânın kapalı olması gerekir mi?",
        answer:
          "Mekânın mümkün olduğunca düzenli ve hareketliliğin düşük olması çekim kalitesini artırır. İşletmenin tamamen kapatılması gerekip gerekmediği saha yapısına ve proje planına göre belirlenir.",
      },
      {
        question: "Çekim öncesinde nasıl hazırlık yapılmalıdır?",
        answer:
          "Mekândaki kişisel ve gizli belgelerin kaldırılması, alanların düzenlenmesi, kapıların ve geçiş noktalarının erişilebilir olması önerilir. Projeye özel hazırlık bilgileri çekim öncesinde paylaşılır.",
      },
      {
        question: "İnsanlar veya özel bilgiler görüntüden kaldırılabilir mi?",
        answer:
          "Çekim planlaması sırasında özel alanlar ve hassas bilgiler belirlenmelidir. Uygulanabilecek düzenleme ve gizleme işlemleri projenin kapsamına göre değerlendirilir.",
      },
      {
        question: "Türkiye genelinde hizmet veriyor musunuz?",
        answer:
          "Projenin kapsamı, saha koşulları ve çekim planı değerlendirilerek Türkiye genelinde hizmet verilebilir.",
      },
    ],
  },
  {
    id: "teslim-ve-revize",
    title: "Teslim ve Revize",
    items: [
      {
        question: "Sanal tur ne kadar sürede teslim edilir?",
        answer:
          "Teslim süresi her projenin kapsamına, taranan alan miktarına ve talep edilen ek içerik veya teknik çıktılara göre değişir. Kesin teslim planı teklif ve proje onayı aşamasında bildirilir.",
      },
      {
        question: "Revize talep edilebilir mi?",
        answer:
          "Tur içindeki başlangıç noktaları, yönlendirmeler, etiketler, açıklamalar ve sunum ayarları proje kapsamı doğrultusunda kontrol edilir. Revize kapsamı teklif ve sözleşmede belirtilir.",
      },
    ],
  },
  {
    id: "yayin-ve-hosting",
    title: "Yayın ve Hosting",
    items: [
      {
        question: "Sanal tur ne kadar süre yayında kalır?",
        answer:
          "Sanal turun ilk yıl yayın süresi ücretsizdir. İlk yılın ardından turun yayında kalmaya devam etmesi için yıllık yayın ücreti uygulanır.",
      },
      {
        question: "Yıllık yayın ücreti ne kadardır?",
        answer:
          "Yıllık yayın ücreti turun kapsamına, kullanılan yayın altyapısına ve proje koşullarına göre belirlenir. Güncel yayın bilgisi yenileme döneminde müşteriye bildirilir.",
      },
      {
        question: "Sanal tur web sitesine eklenebilir mi?",
        answer:
          "Evet. Sanal tur, uygun yerleştirme kodu veya bağlantı kullanılarak web sitelerine entegre edilebilir. Gerekli teknik yönlendirme proje tesliminde sağlanabilir.",
      },
      {
        question: "Sanal tur Google Maps veya Street View’a eklenebilir mi?",
        answer:
          "Uygun projelerde Google Street View yayın süreci planlanabilir. İşletme profili, konum ve Google platform koşulları proje özelinde değerlendirilir.",
      },
      {
        question: "Sanal tur VR gözlükle kullanılabilir mi?",
        answer:
          "Uyumlu Matterport turları desteklenen VR cihazları ve tarayıcı ortamları üzerinden görüntülenebilir. Deneyim kalitesi kullanılan cihaz, ekran çözünürlüğü ve internet bağlantısına göre değişebilir.",
      },
      {
        question: "Matterport turu başka bir hesaba transfer edilebilir mi?",
        answer:
          "Uygun projelerde tur transferi yapılabilir. Mevcut hesap yapısı, yayın durumu ve transfer koşulları proje özelinde değerlendirilir.",
      },
    ],
  },
  {
    id: "teknik-ciktilar",
    title: "Teknik Çıktılar",
    items: [
      {
        question: "Teknik dosyalar nelerdir?",
        answer:
          "Proje kapsamına bağlı olarak MatterPak, E57 nokta bulutu, BIM, CAD/DWG, şematik kat planı ve ölçüm raporu gibi teknik çıktılar sunulabilir.",
      },
      {
        question: "MatterPak ve E57 arasındaki fark nedir?",
        answer:
          "MatterPak, proje kapsamında farklı teknik verileri bir arada içeren teslim paketidir. E57 ise ağırlıklı olarak nokta bulutu verisinin aktarılması ve farklı teknik yazılımlarda kullanılması için tercih edilen formattır.",
      },
      {
        question: "BIM veya CAD dosyası alınabilir mi?",
        answer:
          "Projenin kapsamına ve ihtiyaçlarına göre BIM, CAD veya benzeri teknik dosya teslimleri planlanabilir. Dosya formatı ve detay seviyesi teklif aşamasında belirlenir.",
      },
    ],
  },
  {
    id: "musteri-destegi",
    title: "Müşteri Desteği",
    items: [
      {
        question: "Mevcut turum için nasıl destek alabilirim?",
        answer:
          "Mevcut sanal turunuzla ilgili düzenleme, erişim, yayın, transfer veya teknik dosya talepleriniz için Müşteri Hizmetleri WhatsApp hattımıza ulaşabilirsiniz: 0501 480 01 01",
      },
      {
        question: "Müşteri Hizmetleri çalışma saatleri nelerdir?",
        answer:
          "Pazartesi–Cuma günleri 09:00–17:00, Cumartesi günü 09:00–15:00 saatleri arasında hizmet verilir. Pazar günü müşteri hizmetleri kapalıdır.",
      },
    ],
  },
  {
    id: "teklif-ve-odeme",
    title: "Teklif ve Ödeme",
    items: [
      {
        question: "Teklif nasıl hazırlanır?",
        answer:
          "Teklif; mekânın büyüklüğü, kat sayısı, konumu, çekim koşulları, talep edilen sanal tur özellikleri ve teknik çıktıların kapsamına göre hazırlanır.",
      },
      {
        question: "Ödeme koşulları nelerdir?",
        answer:
          "Ödeme planı projenin büyüklüğüne ve hizmet kapsamına göre teklif veya sözleşmede belirtilir.",
      },
    ],
  },
];

/** JSON-LD ve arama için düz liste. */
export const allFaqItems: FaqItem[] = faqCategories.flatMap(
  (category) => category.items,
);
