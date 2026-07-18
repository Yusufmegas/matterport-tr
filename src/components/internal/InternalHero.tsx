import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { resolvePublicImage } from "@/lib/assets";
import { isBlockedRoute } from "@/config/feature-flags";
import { Button } from "@/components/ui/Button";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Container } from "@/components/ui/Container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/internal/Breadcrumbs";

interface HeroCta {
  label: string;
  href: string;
}

interface InternalHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Checked in order via resolvePublicImage */
  imageCandidates?: string[];
  imageAlt?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

/** Shared internal-page hero: shorter than the homepage hero, text left
 *  (~50%), visual or technical placeholder right (~45%). */
export function InternalHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  icon: Icon,
  imageCandidates = [],
  imageAlt = "",
  primaryCta = { label: "Projeniz İçin Teklif Alın", href: "/#teklif" },
  secondaryCta = { label: "Çözümleri İnceleyin", href: "/cozumler" },
}: InternalHeroProps) {
  const imageSrc =
    imageCandidates.length > 0 ? resolvePublicImage(...imageCandidates) : null;

  /* GEÇİCİ: kapalı route'a giden CTA'lar render edilmez; birincil CTA
     kapalıysa yerine teklif CTA'sı gösterilir (feature-flags). */
  const effectivePrimaryCta = isBlockedRoute(primaryCta.href)
    ? { label: "Projeniz İçin Teklif Alın", href: "/#teklif" }
    : primaryCta;
  const showSecondaryCta = !isBlockedRoute(secondaryCta.href);

  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-surface">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />

      <Container className="relative grid gap-10 pb-14 pt-24 md:pt-28 lg:min-h-[560px] lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16">
        {/* Text (~50%) */}
        <div className="lg:col-span-6">
          <Breadcrumbs items={breadcrumbs} />

          <p className="mt-7 text-xs font-semibold tracking-[0.22em] text-accent">
            {eyebrow}
          </p>

          <AnimatedHeading
            as="h1"
            variant="hero"
            text={title}
            className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          />

          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={effectivePrimaryCta.href} size="lg">
              {effectivePrimaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            {showSecondaryCta ? (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
                <ChevronRight className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
        </div>

        {/* Visual (~45%) */}
        <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
          {imageSrc ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border-subtle/60">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1000px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            /* Technical placeholder: grid, architectural corner lines,
               subtle scanline and the page's icon */
            <div
              aria-hidden="true"
              className="pointer-events-none relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-background/50"
            >
              <div className="hero-grid absolute inset-0" />
              <svg
                viewBox="0 0 480 360"
                fill="none"
                stroke="var(--ph-tech-line)"
                className="absolute inset-0 size-full"
              >
                <path d="M40 96V40h56M384 40h56v56M440 264v56h-56M96 320H40v-56" strokeWidth="1.5" />
                <path d="M40 180h120M320 180h120M240 40v80M240 240v80" strokeWidth="0.8" opacity="0.5" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex size-20 items-center justify-center rounded-2xl border border-border-subtle bg-surface text-accent shadow-[0_16px_40px_-24px_rgba(0,0,0,0.4)]">
                  <Icon className="size-9" />
                </span>
              </div>
              <div className="hero-scanline absolute inset-x-0 top-0 h-14" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
