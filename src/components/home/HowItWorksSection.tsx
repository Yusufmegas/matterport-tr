import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  howItWorksCta,
  howItWorksDescription,
  howItWorksEyebrow,
  howItWorksNote,
  howItWorksStages,
  howItWorksTitle,
} from "@/data/how-it-works";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { cn } from "@/lib/utils";

/**
 * "Nasıl Çalışır?" — dört adımlı süreç timeline'ı.
 * Masaüstünde yatay (ince bağlantı çizgisiyle), mobilde dikey.
 * Salt server component; animasyon yok, tasarım diline uygun sade yapı.
 */
export function HowItWorksSection() {
  return (
    <section
      id="surec"
      aria-labelledby="how-it-works-title"
      className="py-16 md:py-20"
    >
      <Container>
        {/* Başlık — diğer bölümlerle aynı editoryal dil */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent">
              <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
              {howItWorksEyebrow}
            </p>
            <AnimatedHeading
              as="h2"
              id="how-it-works-title"
              text={howItWorksTitle}
              className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
            />
          </div>
          <p className="text-base leading-relaxed text-secondary lg:pb-1">
            {howItWorksDescription}
          </p>
        </div>

        {/* Dört aşama — masaüstünde yatay timeline, mobilde dikey */}
        <ol className="relative mt-12 grid gap-10 md:mt-14 lg:grid-cols-4 lg:gap-8">
          {/* yatay bağlantı çizgisi (yalnızca masaüstü) */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-border-subtle lg:block"
          />
          {howItWorksStages.map((stage, index) => (
            <li key={stage.number} className="relative flex gap-5 lg:block">
              {/* dikey bağlantı çizgisi (yalnızca mobil) */}
              {index < howItWorksStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[21px] top-[52px] bottom-[-40px] w-px bg-border-subtle lg:hidden"
                />
              ) : null}

              <span
                aria-hidden="true"
                className={cn(
                  "relative z-[1] inline-flex size-11 shrink-0 items-center justify-center rounded-full",
                  "border border-accent/50 bg-background font-display text-sm font-semibold tabular-nums text-accent",
                )}
              >
                {stage.number}
              </span>

              <div className="min-w-0 lg:mt-5">
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Süre notu + CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-14">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            {howItWorksNote}
          </p>
          <Link
            href={howItWorksCta.href}
            className={cn(
              "group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-foreground",
              "transition-colors duration-200 hover:text-accent",
              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
            )}
          >
            {howItWorksCta.label}
            <span
              aria-hidden="true"
              className="h-px w-8 bg-border-subtle transition-colors duration-200 group-hover:bg-accent/50"
            />
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
