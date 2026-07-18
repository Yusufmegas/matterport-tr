import type { Metadata } from "next";
import { ArrowRight, Camera, ChevronRight, Info } from "lucide-react";
import {
  outputComparison,
  technicalOutputs,
  technicalOutputsMeta,
  visualAssets,
} from "@/data/technical-outputs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/internal/Breadcrumbs";
import { ProcessSteps } from "@/components/internal/ProcessSteps";
import { InternalCta } from "@/components/internal/InternalCta";
import { ServiceJsonLd } from "@/components/internal/ServiceJsonLd";
import { TechnicalOutputCard } from "@/components/technical/TechnicalOutputCard";

export const metadata: Metadata = {
  title: { absolute: technicalOutputsMeta.metaTitle },
  description: technicalOutputsMeta.metaDescription,
  alternates: { canonical: "/teknik-ciktilar" },
  openGraph: {
    title: technicalOutputsMeta.ogTitle,
    description: technicalOutputsMeta.ogDescription,
    type: "website",
    url: "/teknik-ciktilar",
    images: [{ url: "/opengraph-image.png", width: 1731, height: 909 }],
  },
};

/** Hero'daki dekoratif teknik kompozisyon — gerçek bir CAD çizimi veya
 *  müşteri projesi DEĞİLDİR; salt tasarım öğesidir. */
function HeroTechnicalVisual() {
  const formatTags = [
    { label: "XYZ", className: "left-4 top-5" },
    { label: "OBJ", className: "right-8 top-10" },
    { label: "E57", className: "left-10 bottom-16" },
    { label: "RVT", className: "right-5 bottom-24" },
    { label: "IFC", className: "left-1/2 top-3" },
    { label: "DWG", className: "right-16 bottom-6" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-background/50"
    >
      <div className="hero-grid absolute inset-0" />

      {/* Kat planı çizgileri + nokta bulutu + koordinat işaretleri */}
      <svg
        viewBox="0 0 480 360"
        fill="none"
        stroke="var(--ph-tech-line)"
        className="absolute inset-0 size-full"
      >
        {/* Plan hatları */}
        <path
          d="M96 84h288v192H96V84Zm0 96h120M216 180v96M216 180h72v-96M336 180h48"
          strokeWidth="1.4"
        />
        {/* Kapı boşlukları */}
        <path d="M150 180h28M216 236v24" strokeWidth="5" stroke="var(--surface)" />
        {/* Koordinat işaretleri */}
        <g strokeWidth="1">
          <path d="M60 48v16M52 56h16M420 300v16M412 308h16" />
        </g>
        {/* Nokta bulutu alanı */}
        <g fill="var(--ph-tech-line)" stroke="none" opacity="0.75">
          <circle cx="126" cy="118" r="1.6" /><circle cx="158" cy="102" r="1.6" />
          <circle cx="190" cy="126" r="1.6" /><circle cx="246" cy="108" r="1.6" />
          <circle cx="300" cy="122" r="1.6" /><circle cx="342" cy="104" r="1.6" />
          <circle cx="132" cy="216" r="1.6" /><circle cx="172" cy="242" r="1.6" />
          <circle cx="252" cy="222" r="1.6" /><circle cx="308" cy="246" r="1.6" />
          <circle cx="352" cy="214" r="1.6" /><circle cx="282" cy="146" r="1.6" />
        </g>
        {/* Tarama istasyonları */}
        <g fill="var(--accent)" stroke="none">
          <circle cx="216" cy="180" r="3.5" />
          <circle cx="312" cy="132" r="3.5" />
          <circle cx="150" cy="248" r="3.5" />
        </g>
        <g stroke="var(--accent)" strokeWidth="0.8" opacity="0.3">
          <circle cx="216" cy="180" r="20" />
          <circle cx="312" cy="132" r="20" />
        </g>
      </svg>

      {/* Dosya formatı etiketleri */}
      {formatTags.map((tag) => (
        <span
          key={tag.label}
          className={`absolute ${tag.className} rounded border border-border-subtle bg-surface/90 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-muted`}
        >
          {tag.label}
        </span>
      ))}

      <div className="hero-scanline absolute inset-x-0 top-0 h-14" />
    </div>
  );
}

export default function TeknikCiktilarPage() {
  return (
    <>
      <ServiceJsonLd
        name="Matterport Teknik Dosya ve Veri Teslimleri"
        description={technicalOutputsMeta.metaDescription}
        path="/teknik-ciktilar"
      />
      <Header />
      <main>
        {/* --- Hero --- */}
        <section className="relative overflow-hidden border-b border-border-subtle bg-surface">
          <div className="tech-grid absolute inset-0" aria-hidden="true" />
          <Container className="relative grid gap-10 pb-14 pt-24 md:pt-28 lg:min-h-[560px] lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16">
            <div className="lg:col-span-6">
              <Breadcrumbs
                items={[
                  { label: "Ana Sayfa", href: "/" },
                  { label: "Teknik Çıktılar" },
                ]}
              />
              <p className="mt-7 text-xs font-semibold tracking-[0.22em] text-accent">
                TEKNİK ÇIKTILAR
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                Dijital ikizden, projeye hazır teknik veriye.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Matterport ile belgelenen mekânları yalnızca çevrim içi olarak
                gezmekle kalmayın. Nokta bulutu, BIM, CAD, kat planı ve ölçüm
                verileriyle tasarım, uygulama ve yönetim süreçlerinizi
                hızlandırın.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/iletisim" size="lg">
                  Projeniz İçin Teklif Alın
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href="/matterport-nedir" variant="outline" size="lg">
                  Matterport&rsquo;u Keşfedin
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
              <HeroTechnicalVisual />
            </div>
          </Container>
        </section>

        {/* --- Giriş --- */}
        <section aria-label="Genel bakış" className="py-12 md:py-16">
          <Container className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="teknik-intro-title"
                eyebrow="DİJİTAL İKİZİN ÖTESİNDE"
                title="Sahadaki gerçekliği, kullanılabilir proje verisine dönüştürüyoruz."
                align="left"
              />
            </div>
            <div className="space-y-4 lg:col-span-7">
              <p className="max-w-2xl text-base leading-relaxed text-muted">
                Matterport taramaları, mekânın görsel ve geometrik durumunu
                tek bir dijital kaynakta toplar. Projenin ihtiyacına göre bu
                veri; tasarım yazılımlarında kullanılabilecek nokta
                bulutlarına, düzenlenebilir CAD çizimlerine, BIM modellerine
                ve ölçülü kat planlarına dönüştürülebilir.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-muted">
                Böylece mevcut durumun belgelenmesi, uzaktan inceleme, tasarım
                başlangıcı, renovasyon planlaması ve ekipler arası
                koordinasyon için tekrar tekrar saha ziyareti ihtiyacı
                azaltılabilir.
              </p>
            </div>
          </Container>
        </section>

        {/* --- Altı ana teknik çıktı --- */}
        <section
          aria-label="Teknik çıktılar"
          className="border-y border-border-subtle bg-surface py-12 md:py-16"
        >
          <Container>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {technicalOutputs.map((output) => (
                <TechnicalOutputCard key={output.id} output={output} />
              ))}
            </div>
          </Container>
        </section>

        {/* --- İkincil görsel teslimler --- */}
        <section aria-label={visualAssets.title} className="py-12 md:py-14">
          <Container className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-accent">
                {visualAssets.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {visualAssets.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {visualAssets.description}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="flex flex-wrap gap-2">
                {visualAssets.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-3.5 py-2 text-sm text-foreground"
                  >
                    <Camera className="size-3.5 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                {visualAssets.note}
              </p>
            </div>
          </Container>
        </section>

        {/* --- Hangi çıktı ne için? --- */}
        <section
          aria-labelledby="comparison-title"
          className="border-y border-border-subtle bg-surface py-12 md:py-16"
        >
          <Container>
            <SectionHeading
              id="comparison-title"
              eyebrow="DOĞRU DOSYAYI SEÇİN"
              title="Projeniz için hangi teknik çıktı gerekli?"
              align="left"
            />
            <dl className="mt-8 overflow-hidden rounded-xl border border-border-subtle bg-background/60">
              {outputComparison.map((row, index) => (
                <div
                  key={row.need}
                  className={
                    "grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-2 sm:items-center sm:gap-6" +
                    (index > 0 ? " border-t border-border-subtle" : "")
                  }
                >
                  <dt className="text-sm leading-relaxed text-muted">
                    {row.need}
                  </dt>
                  <dd className="text-sm font-semibold tracking-tight text-foreground">
                    <span
                      className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle"
                      aria-hidden="true"
                    />
                    {row.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* --- Süreç --- */}
        <ProcessSteps
          eyebrow="TESLİM SÜRECİ"
          title="Sahadan dosya teslimine dört adım."
          steps={[
            {
              title: "İhtiyaç Analizi",
              description:
                "Mekân, kullanım amacı, hedef yazılım ve gerekli teslim formatları belirlenir.",
            },
            {
              title: "Profesyonel Tarama",
              description:
                "Alan, proje kapsamına uygun Matterport kamera ve çekim planıyla belgelenir.",
            },
            {
              title: "Model İşleme",
              description:
                "Taramalar birleştirilerek dijital ikiz oluşturulur ve teknik çıktı uygunluğu kontrol edilir.",
            },
            {
              title: "Teknik Dosya Teslimi",
              description:
                "Seçilen MatterPak, E57, BIM, CAD, kat planı veya rapor dosyaları hazırlanarak paylaşılır.",
            },
          ]}
        />

        {/* --- Uygunluk ve doğruluk bilgilendirmesi --- */}
        <section aria-label="Uygunluk bilgilendirmesi" className="pb-14 md:pb-16">
          <Container>
            <div className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent"
                >
                  <Info className="size-4" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Her proje için doğru çıktı, çekimden önce planlanır.
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                    Teknik dosyaların kullanılabilirliği; mekânın büyüklüğüne,
                    fiziksel koşullarına, kullanılan yakalama cihazına, tarama
                    yoğunluğuna ve seçilen Matterport hizmetine göre
                    değişebilir. BIM, CAD veya yüksek yoğunluklu nokta bulutu
                    gereken projelerde teslim formatlarının çekimden önce
                    belirlenmesi önerilir.
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                    Matterport verileri mevcut durumun belgelenmesi ve tasarım
                    süreçlerinin hızlandırılması için güçlü bir kaynak sağlar.
                    Hukuki, kadastral veya resmî ölçüm zorunluluğu bulunan
                    işlerde yetkili ölçüm uzmanlarının doğrulaması ayrıca
                    alınmalıdır.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* --- Son CTA --- */}
        <InternalCta
          title="Projeniz için doğru teknik teslimi birlikte belirleyelim."
          description="Mekân türünü, yaklaşık alanı ve kullanacağınız yazılımı paylaşın. Çekim yöntemini ve ihtiyaç duyduğunuz dosya kapsamını birlikte planlayalım."
          primaryCta={{ label: "Teklif Alın", href: "/iletisim" }}
          secondaryCta={{ label: "Çözümleri İnceleyin", href: "/cozumler" }}
        />
      </main>
      <Footer />
    </>
  );
}
