import type { Metadata } from "next";
import { FileCheck2, ScanLine } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternalHero } from "@/components/internal/InternalHero";
import { ContentIntro } from "@/components/internal/ContentIntro";
import { ItemsGrid } from "@/components/internal/ItemsGrid";
import { ProcessSteps } from "@/components/internal/ProcessSteps";
import { FaqSection } from "@/components/internal/FaqSection";
import { InternalCta } from "@/components/internal/InternalCta";

const META_TITLE = "Matterport Nedir? 3D Sanal Tur ve Dijital İkiz Teknolojisi";
const META_DESCRIPTION =
  "Matterport teknolojisinin nasıl çalıştığını, 3D sanal tur, dijital ikiz, ölçüm ve mekânsal veri kullanım alanlarını ayrıntılı inceleyin.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: "/matterport-nedir" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    url: "/matterport-nedir",
    images: [{ url: "/opengraph-image.png", width: 1731, height: 909 }],
  },
};

export default function MatterportNedirPage() {
  return (
    <>
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Matterport Nedir?" },
          ]}
          eyebrow="MATTERPORT TEKNOLOJİSİ"
          title="Fiziksel mekânların ölçülebilir 3D dijital ikizi."
          description="Matterport, gerçek mekânları internet üzerinden gezilebilen, incelenebilen, ölçülebilen ve farklı ekiplerle paylaşılabilen üç boyutlu dijital modellere dönüştüren mekânsal veri teknolojisidir."
          icon={ScanLine}
          imageCandidates={[
            "images/matterport/hero.webp",
            "images/matterport/hero.jpg",
          ]}
          imageAlt="Matterport 3D dijital ikiz teknolojisi"
          primaryCta={{ label: "Çözümleri İnceleyin", href: "/cozumler" }}
          secondaryCta={{
            label: "Teknik Çıktıları İnceleyin",
            href: "/cozumler/teknik-dosyalar",
          }}
        />

        <ContentIntro
          title="Matterport Teknolojisine Genel Bakış"
          paragraphs={[
            "Matterport teknolojisi, profesyonel 3D kameralar ve mekânsal veri işleme altyapısıyla fiziksel alanların dijital kopyasını oluşturur. Kullanıcılar model içerisinde adım adım gezebilir, mekânın tamamını Dollhouse görünümünde inceleyebilir, kat planına geçebilir ve yetkilendirme durumuna göre ölçüm araçlarını kullanabilir.",
            "Aynı modelden hem tanıtım amaçlı sanal turlar hem de teknik ekiplerin kullandığı mekânsal veri çıktıları üretilebilir; bu da tek bir çekimi birden fazla amaca hizmet eden kalıcı bir dijital varlığa dönüştürür.",
          ]}
        />

        <ProcessSteps
          title="Nasıl Çalışır?"
          steps={[
            {
              title: "Proje Analizi",
              description:
                "Alan, kullanım amacı ve gerekli teslimatlar belirlenir.",
            },
            {
              title: "Saha Taraması",
              description:
                "Mekân profesyonel Matterport cihazlarıyla farklı tarama noktalarından kayıt altına alınır.",
            },
            {
              title: "Model İşleme",
              description:
                "Tarama verileri birleştirilerek etkileşimli 3D dijital model oluşturulur.",
            },
            {
              title: "Düzenleme ve Entegrasyon",
              description:
                "Bilgi etiketleri, başlangıç konumu, katlar, bağlantılar ve erişim ayarları düzenlenir.",
            },
            {
              title: "Teslim ve Yayınlama",
              description:
                "Sanal tur bağlantısı, web embed kodu ve talep edilen teknik çıktılar teslim edilir.",
            },
          ]}
        />

        <ItemsGrid
          title="Temel Görüntüleme Özellikleri"
          items={[
            "Adım adım 3D gezinme",
            "Dollhouse görünümü",
            "Kat planı görünümü",
            "Mattertags bilgi etiketleri",
            "Ölçüm araçları",
            "Şifreli erişim",
            "Paylaşılabilir bağlantılar",
            "Web sitesi embed desteği",
            "Mobil ve masaüstü uyumluluk",
            "VR deneyimi",
          ]}
          columns={4}
          tone="surface"
        />

        <ContentIntro
          title="Matterport Pro3 LiDAR ile geniş alan taraması"
          paragraphs={[
            "Matterport Pro3, iç ve dış mekânlarda profesyonel tarama projeleri için kullanılan LiDAR destekli bir kamera sistemidir. Büyük tesisler, inşaat alanları, oteller, ticari yapılar, fabrikalar ve teknik projelerde alanın dijital olarak kayıt altına alınmasını sağlar.",
            "LiDAR tabanlı tarama, geniş ve karmaşık alanlarda hızlı veri toplamayı mümkün kılar; aynı taramadan hem gezilebilir model hem de teknik üretime uygun mekânsal veri elde edilir.",
          ]}
        />

        <ItemsGrid
          title="Pazarlama Kullanım Alanları"
          items={[
            "Otel ve oda tanıtımı",
            "Gayrimenkul sunumu",
            "Mağaza ve showroom deneyimi",
            "Restoran ve etkinlik alanı tanıtımı",
            "Yat ve araç içi sanal tur",
            "Eğitim ve sağlık tesisi tanıtımı",
            "Google Street View entegrasyonu",
          ]}
        />

        <ItemsGrid
          title="Teknik Kullanım Alanları"
          items={[
            "Mevcut durum kaydı",
            "İnşaat ilerleme dokümantasyonu",
            "Uzaktan saha inceleme",
            "Tesis dokümantasyonu",
            "Mekânsal ölçüm",
            "Ekipler arası koordinasyon",
            "BIM ve CAD süreçlerine veri hazırlığı",
          ]}
          tone="surface"
        />

        <ItemsGrid
          title="Teslim Edilebilen Çıktılar"
          items={[
            "MatterPak™",
            "E57 nokta bulutu",
            "BIM",
            "IFC",
            "CAD / DWG",
            "Şematik kat planı",
            "Ölçüm raporu",
            "HDR fotoğraflar",
          ]}
          icon={FileCheck2}
          columns={4}
          cta={{
            label: "Matterport teknik çıktılarını inceleyin",
            href: "/teknik-ciktilar",
          }}
        />

        <FaqSection
          items={[
            {
              question:
                "Matterport sanal tur ile klasik 360 derece tur arasındaki fark nedir?",
              answer:
                "Klasik 360° turlar sabit noktalardan çekilmiş panoramik fotoğraflardır. Matterport ise mekânın gerçek üç boyutlu modelini oluşturur: serbest gezinme, Dollhouse görünümü, kat planı ve ölçüm gibi özellikler yalnızca gerçek 3D modelde mümkündür.",
            },
            {
              question: "Matterport modeli web sitesine eklenebilir mi?",
              answer:
                "Evet. Model, tek satırlık embed koduyla herhangi bir web sitesine gömülür; ayrıca bağlantı olarak tüm dijital kanallarda paylaşılabilir.",
            },
            {
              question: "Matterport turu mobil cihazlarda çalışır mı?",
              answer:
                "Evet. Turlar telefon, tablet ve masaüstü tarayıcılarında ek uygulama gerektirmeden çalışır; VR başlıklarıyla da görüntülenebilir.",
            },
            {
              question: "Birden fazla kat tek modelde gösterilebilir mi?",
              answer:
                "Evet. Çok katlı yapılar tek modelde birleştirilir; kullanıcı katlar arasında geçiş yapabilir ve her katı ayrı ayrı inceleyebilir.",
            },
            {
              question: "Teknik dosyalar ayrıca talep edilebilir mi?",
              answer:
                "Evet. MatterPak™, E57, BIM/IFC ve CAD çıktıları aynı taramadan ayrıca üretilir; ihtiyaç sonradan doğarsa mevcut modelden de talep edilebilir.",
            },
            {
              question: "Türkiye genelinde çekim yapılıyor mu?",
              answer:
                "Evet. Çekim operasyonları Türkiye genelinde planlanır; çoklu şehir ve çoklu lokasyon projeleri tek program dahilinde yürütülür.",
            },
          ]}
        />

        <InternalCta />
      </main>
      <Footer />
    </>
  );
}
