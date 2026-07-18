import { ArrowRight } from "lucide-react";
import { isBlockedRoute } from "@/config/feature-flags";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CtaLink {
  label: string;
  href: string;
}

interface InternalCtaProps {
  title?: string;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

/** Shared closing CTA for internal list and detail pages. */
export function InternalCta({
  title = "Mekânınız için doğru Matterport çözümünü birlikte belirleyelim.",
  description = "Alan, sektör ve ihtiyaç bilgilerinizi paylaşın; projenize özel uygulama planı hazırlayalım.",
  primaryCta = { label: "Teklif Alın", href: "/#teklif" },
  secondaryCta = { label: "Ana Sayfaya Dön", href: "/" },
}: InternalCtaProps) {
  /* GEÇİCİ: kapalı route'a giden ikincil CTA gizlenir (feature-flags). */
  const showSecondaryCta = !isBlockedRoute(secondaryCta.href);

  return (
    <section
      aria-labelledby="internal-cta-title"
      className="relative overflow-hidden border-t border-border-subtle bg-surface"
    >
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 90% at 50% 0%, var(--surface-2) 0%, transparent 65%)",
        }}
      />

      <Container className="relative flex flex-col items-center py-16 text-center md:py-20">
        <p className="text-xs font-semibold tracking-[0.22em] text-accent">
          PROJENİZİ KONUŞALIM
        </p>
        <h2
          id="internal-cta-title"
          className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          {showSecondaryCta ? (
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
