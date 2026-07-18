"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  solutionGroups,
  solutionsCta,
  solutionsDescription,
  solutionsEyebrow,
} from "@/data/solutions";
import { SolutionVisual } from "@/components/home/SolutionVisual";
import { MaybeLink } from "@/components/ui/MaybeLink";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { cn } from "@/lib/utils";

/** Header (72px) + nefes payı — sticky yüzeylerin üst hizası. */
const PANEL_STICKY_TOP = 104;
/** Her panel bir öncekinin altında hafifçe kademelenir. */
const PANEL_STACK_STEP = 16;

/**
 * Çözümler — sticky split + scroll stack.
 *
 * Sol kolon bölüm boyunca sabit kalır (CSS sticky); sağdaki üç panel
 * normal sayfa akışında kaydıkça üst üste yaklaşır. Scroll hiçbir yerde
 * kilitlenmez, smooth-scroll paketi kullanılmaz. Aktif panel takibi
 * yalnızca masaüstünde ve IntersectionObserver ile yapılır; state
 * sadece aktif indeks değiştiğinde güncellenir.
 */
export function SolutionsStack() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 62.5rem)");
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      observer = null;
      if (!desktop.matches) return;

      const visible = new Set<number>();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const index = panelRefs.current.indexOf(
              entry.target as HTMLLIElement,
            );
            if (index === -1) continue;
            if (entry.isIntersecting) visible.add(index);
            else visible.delete(index);
          }
          if (visible.size > 0) {
            const next = Math.max(...visible);
            setActive((current) => (current === next ? current : next));
          }
        },
        /* Viewport ortasında dar bir odak bandı: panel yüksekliklerine
           göre bir anda tek panel banda girer; sticky yığılmada üstte
           kalan (max index) kazanır. */
        { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
      );
      for (const el of panelRefs.current) {
        if (el) observer.observe(el);
      }
    };

    setup();
    desktop.addEventListener("change", setup);
    return () => {
      desktop.removeEventListener("change", setup);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,17fr)] lg:gap-14">
      {/* ------------------------------------------------------------ */}
      {/* Sol sabit editoryal kolon                                    */}
      {/* ------------------------------------------------------------ */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent">
          <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
          {solutionsEyebrow}
        </p>

        <AnimatedHeading
          as="h2"
          id="solutions-title"
          text={solutionsDescription}
          className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-[28px]"
        />

        {/* Aktif grup göstergesi — yalnızca masaüstü sticky akışında */}
        <div className="mt-10 hidden lg:block" aria-hidden="true">
          <p className="font-display text-lg font-semibold tabular-nums leading-none">
            <span key={active} className="sol-count-in inline-block text-accent">
              {solutionGroups[active].number}
            </span>
            <span className="ml-2 text-foreground/45">/ 03</span>
          </p>
          <div className="mt-4 flex gap-1.5">
            {solutionGroups.map((group, index) => (
              <span
                key={group.id}
                className={cn(
                  "h-[2px] flex-1 rounded-full transition-colors duration-300",
                  index <= active ? "bg-accent" : "bg-border-subtle",
                )}
              />
            ))}
          </div>
        </div>

        {/* GEÇİCİ: Çözümler kapalıyken CTA render edilmez (feature-flags) */}
        {SOLUTIONS_AND_SECTORS_ENABLED ? (
          <Link
            href={solutionsCta.href}
            className={cn(
              "group mt-10 inline-flex items-center gap-3 text-sm font-medium text-foreground",
              "transition-colors duration-200 hover:text-accent",
              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
            )}
          >
            {solutionsCta.label}
            <span
              aria-hidden="true"
              className="h-px w-8 bg-border-subtle transition-colors duration-200 group-hover:bg-accent/50"
            />
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
            />
          </Link>
        ) : null}
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Sağ scroll stack — üç çözüm paneli                           */}
      {/* ------------------------------------------------------------ */}
      <ul className="flex flex-col gap-6 lg:gap-8">
        {solutionGroups.map((group, index) => (
          <li
            key={group.id}
            ref={(el) => {
              panelRefs.current[index] = el;
            }}
            className="lg:sticky"
            style={{ top: `${PANEL_STICKY_TOP + index * PANEL_STACK_STEP}px` }}
          >
            <article
              className={cn(
                "solution-panel-surface relative overflow-hidden rounded-[18px] border border-border-subtle bg-surface",
                "shadow-[0_28px_70px_-38px_rgba(0,0,0,0.3)] lg:rounded-[24px] dark:border-border-strong",
                "origin-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out",
                index < active && "motion-safe:lg:scale-[0.985]",
              )}
            >
              <div className="grid gap-7 p-7 sm:p-8 lg:min-h-[500px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-10">
                {/* İçerik */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="font-display text-5xl font-semibold tabular-nums leading-none text-foreground/20"
                    >
                      {group.number}
                    </span>
                    <span aria-hidden="true" className="h-px w-10 bg-accent/80" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[0.02em] text-foreground lg:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
                    {group.description}
                  </p>

                  {/* Alt hizmetler — çizgisel bağlantılar */}
                  <ul className="mt-8 flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:items-center xl:gap-x-0 xl:gap-y-3">
                    {group.services.map((service, serviceIndex) => {
                      const Icon = service.icon;
                      return (
                        <li
                          key={service.href}
                          className={cn(
                            "xl:flex xl:items-center",
                            serviceIndex > 0 &&
                              "xl:border-l xl:border-border-subtle xl:pl-5",
                            serviceIndex > 0 && "xl:ml-5",
                          )}
                        >
                          <MaybeLink
                            href={service.href}
                            className={cn(
                              "group inline-flex min-h-[32px] items-center gap-2.5 text-sm font-medium text-foreground/90",
                              "transition-colors duration-200 hover:text-accent",
                              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                            )}
                          >
                            <Icon
                              aria-hidden="true"
                              className="size-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
                            />
                            {service.label}
                            {SOLUTIONS_AND_SECTORS_ENABLED ? (
                              <ArrowRight
                                aria-hidden="true"
                                className="size-3.5 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-1.5"
                              />
                            ) : null}
                          </MaybeLink>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Teknik format mikro etiketleri */}
                  {group.formatTags ? (
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {group.formatTags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border-subtle px-2 py-1 text-[10px] font-medium tracking-[0.14em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* Ek bağlantı (Teknik Çıktılar) */}
                  {group.extraLink ? (
                    <Link
                      href={group.extraLink.href}
                      className={cn(
                        "group mt-7 inline-flex items-center gap-3 text-sm font-medium text-foreground",
                        "transition-colors duration-200 hover:text-accent",
                        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                      )}
                    >
                      {group.extraLink.label}
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-border-subtle transition-colors duration-200 group-hover:bg-accent/50"
                      />
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
                      />
                    </Link>
                  ) : null}
                </div>

                {/* Büyük teknik görsel */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none relative min-h-[240px] overflow-hidden lg:min-h-0"
                >
                  <span className="sol-scan-line" />
                  <SolutionVisual type={group.visual} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
