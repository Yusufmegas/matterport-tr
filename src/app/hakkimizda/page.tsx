import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { solutionPages } from "@/data/solutions-pages";
import { sectorPages } from "@/data/sectors-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternalHero } from "@/components/internal/InternalHero";
import { ContentIntro } from "@/components/internal/ContentIntro";
import { ItemsGrid } from "@/components/internal/ItemsGrid";
import { ProcessSteps } from "@/components/internal/ProcessSteps";
import { RelatedCards } from "@/components/internal/RelatedCards";
import { InternalCta } from "@/components/internal/InternalCta";

const META_TITLE = "Hakkımızda | Matterport TR";
const META_DESCRIPTION =
  "Matterport 3D çekim, sanal tur, dijital ikiz ve teknik dokümantasyon projelerindeki yaklaşımımızı ve çalışma sürecimizi inceleyin.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    url: "/hakkimizda",
    images: [{ url: "/opengraph-image.png", width: 1731, height: 909 }],
  },
};

const FEATURED_SOLUTION_SLUGS = [
  "3d-sanal-tur",
  "dijital-ikiz",
  "teknik-dosyalar",
  "insaat-dokumantasyonu",
  "kurumsal-portfoy-tarama",
];

const FEATURED_SECTOR_SLUGS = [
  "insaat-mimarlik",
  "endustri-lojistik",
  "otel-konaklama",
  "gayrimenkul",
  "otomotiv-showroom",
  "yat-denizcilik",
];

export default function HakkimizdaPage() {
  const solutionCards = solutionPages
    .filter((solution) => FEATURED_SOLUTION_SLUGS.includes(solution.slug))
    .map((solution) => ({
      title: solution.shortTitle,
      description: solution.description,
      href: `/cozumler/${solution.slug}`,
      icon: solution.icon,
    }));

  const sectorCards = sectorPages
    .filter((sector) => FEATURED_SECTOR_SLUGS.includes(sector.slug))
    .map((sector) => ({
      title: sector.shortTitle,
      description: sector.description,
      href: `/sektorler/${sector.slug}`,
      icon: sector.icon,
    }));

  return (
    <>
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Hakkımızda" },
          ]}
          eyebrow="MATTERPORT TR"
          title="Mekânları dijital deneyimlere ve kullanılabilir mekânsal verilere dönüştürüyoruz."
          description="Matterport TR; tanıtım, satış, dokümantasyon, ölçüm ve teknik proje ihtiyaçları için profesyonel 3D tarama ve dijital ikiz çözümleri sunar."
          icon={Building2}
          imageCandidates={[
            "images/about/hero.webp",
            "images/about/hero.jpg",
          ]}
          imageAlt="Matterport TR hakkında"
        />

        <ContentIntro
          title="Şirket Yaklaşımımız"
          paragraphs={[
            "Her proje; alanın büyüklüğü, sektör, kullanım amacı, erişim ihtiyacı ve talep edilen teknik çıktılara göre ayrı olarak planlanır. Amacımız yalnızca etkileyici bir sanal tur oluşturmak değil; müşterinin satış, tanıtım, operasyon veya teknik dokümantasyon ihtiyacına uygun kullanılabilir bir dijital model sunmaktır.",
            "Matterport teknolojileriyle profesyonel çekim ve uygulama hizmeti veriyoruz: 3D sanal tur, dijital ikiz, Google Street View yayını, teknik dosya üretimi ve kurumsal proje yönetimi tek çatı altında yürütülür.",
          ]}
        />

        <ItemsGrid
          title="Neler Yapıyoruz?"
          items={[
            "Profesyonel Matterport 3D tarama",
            "Etkileşimli sanal tur",
            "Dijital ikiz",
            "Google Street View entegrasyonu",
            "İnşaat ve tesis dokümantasyonu",
            "E57, BIM, IFC ve CAD çıktıları",
            "Kat planı ve ölçüm raporları",
            "Kurumsal portföy ve çoklu lokasyon projeleri",
          ]}
          columns={4}
        />

        <ItemsGrid
          title="Çalışma Prensiplerimiz"
          items={[
            "Projeye özel planlama",
            "Doğru ekipman seçimi",
            "Kontrollü saha operasyonu",
            "Düzenli veri organizasyonu",
            "Mobil ve masaüstü uyumluluk",
            "Güvenli erişim seçenekleri",
            "Şeffaf kapsam ve teslim planı",
            "Revizyon ve kalite kontrol süreci",
          ]}
          columns={4}
          tone="surface"
        />

        <ProcessSteps
          title="Proje Yaklaşımımız"
          steps={[
            { title: "İhtiyaç Analizi" },
            { title: "Proje ve saha planlaması" },
            { title: "Çekim operasyonu" },
            { title: "Model düzenleme" },
            { title: "Entegrasyonlar" },
            { title: "Teknik çıktı hazırlığı" },
            { title: "Teslim ve destek" },
          ]}
        />

        <RelatedCards
          title="Çözümlerimiz"
          description="Tanıtımdan teknik dokümantasyona uzanan hizmet alanlarımızı inceleyin."
          items={solutionCards}
          tone="surface"
        />

        <RelatedCards
          title="Hizmet Verdiğimiz Sektörler"
          description="Farklı sektörlere özel Matterport yaklaşımlarını keşfedin."
          items={sectorCards}
        />

        <InternalCta />
      </main>
      <Footer />
    </>
  );
}
