import { needsDescription, needsEyebrow, needsTitle } from "@/data/needs";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { NeedsSelector } from "@/components/home/NeedsSelector";

/**
 * "İhtiyacınız Nedir?" — premium, tam genişlikli ihtiyaç seçici.
 * Masaüstünde sol satır listesi + sağ teknik önizleme, mobilde accordion.
 * Etkileşim NeedsSelector'da (client); bu kabuk server component kalır.
 */
export function NeedsSection() {
  return (
    <section
      id="ihtiyac"
      aria-labelledby="needs-title"
      className="py-16 md:py-20"
    >
      <Container>
        {/* Başlık: masaüstünde sol başlık / sağ açıklama dengesi */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent">
              <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
              {needsEyebrow}
            </p>
            <AnimatedHeading
              as="h2"
              id="needs-title"
              text={needsTitle}
              className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
            />
          </div>
          <p className="text-base leading-relaxed text-secondary lg:pb-1">
            {needsDescription}
          </p>
        </div>

        <NeedsSelector />
      </Container>
    </section>
  );
}
