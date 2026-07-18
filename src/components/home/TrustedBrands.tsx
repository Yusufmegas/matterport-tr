import { trustedBrands, trustedBrandsEyebrow } from "@/data/trusted-brands";
import { resolvePublicImage } from "@/lib/assets";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { TrustedBrandsLoop } from "@/components/home/TrustedBrandsLoop";
import { SplineGlobeBackground } from "@/components/home/SplineGlobeBackground";

export function TrustedBrands() {
  /* Logolar sunucuda çözülür; client loop'a düz veri gider.
     Yalnızca GERÇEK logo dosyası bulunan markalar gösterilir — dosyası
     olmayan marka tipografik fallback ile döngüde tutulmaz. Veri
     kaynağı silinmez; dosya eklendiğinde marka otomatik geri gelir. */
  const items = trustedBrands
    .map((brand) => ({
      id: brand.id,
      name: brand.name,
      alt: brand.alt,
      logoSrc: resolvePublicImage(...brand.logoCandidates),
    }))
    .filter((brand) => brand.logoSrc !== null);

  /* Hiçbir markanın gerçek logosu yoksa bölüm hiç render edilmez. */
  if (items.length === 0) return null;

  return (
    /* Kurumsal güven bandı: her iki temada da SABİT koyu Spline uzay
       yüzeyi — tema token'ları bilinçli kullanılmaz (hydration güvenli).
       Arka plan katmanı pointer-events almaz; loop etkileşimleri korunur. */
    <section
      id="referanslar"
      aria-labelledby="trusted-title"
      className="relative isolate overflow-hidden bg-[#050a12] lg:min-h-[560px]"
    >
      <SplineGlobeBackground />

      <Container className="relative z-[2] flex min-h-[inherit] flex-col justify-center py-14 md:py-20">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#ff3355]">
          <span aria-hidden="true" className="h-px w-8 bg-[#ff3355]/70" />
          {trustedBrandsEyebrow}
        </p>

        <AnimatedHeading
          as="h2"
          id="trusted-title"
          text="Türkiye’nin lider markaları bizi tercih ediyor."
          className="mt-5 max-w-[620px] font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
        />

        <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-[#c5cdd7]">
          Türkiye’nin önde gelen kurumları, mekânlarını ve projelerini
          Matterport teknolojisiyle dijitalleştirmek için bizi tercih ediyor.
        </p>

        <TrustedBrandsLoop items={items} className="mt-10 md:mt-12" />
      </Container>
    </section>
  );
}
