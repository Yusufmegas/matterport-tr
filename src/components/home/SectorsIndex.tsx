"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { sectorPages } from "@/data/sectors-pages";
import { solutionPages } from "@/data/solutions-pages";
import {
  sectorDetailCtaLabel,
  sectorsCta,
  sectorsDescription,
  sectorsEyebrow,
  sectorsTitle,
} from "@/data/sectors";
import { SectorVisual } from "@/components/home/SectorVisual";
import { MaybeLink } from "@/components/ui/MaybeLink";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import {
  SOLUTIONS_AND_SECTORS_ENABLED,
  isBlockedRoute,
} from "@/config/feature-flags";
import { cn } from "@/lib/utils";

/** Fade-out süresi; ardından yeni içerik needs-preview-in ile girer. */
const PREVIEW_SWAP_MS = 110;
/** Sağ panelde gösterilecek en fazla ilgili çözüm sayısı. */
const MAX_SOLUTIONS_DESKTOP = 4;
const MAX_SOLUTIONS_MOBILE = 3;

/** slug → çözüm kısa adı ve ikonu (merkezi çözüm verisinden). */
const solutionBySlug = new Map(
  solutionPages.map((s) => [s.slug, { title: s.shortTitle, icon: s.icon }]),
);

function relatedSolutions(sectorSlug: string, max: number) {
  const sector = sectorPages.find((s) => s.slug === sectorSlug);
  return (sector?.recommendedSolutionSlugs ?? [])
    .slice(0, max)
    .flatMap((slug) => {
      const solution = solutionBySlug.get(slug);
      return solution ? [{ slug, ...solution }] : [];
    });
}

/**
 * Sektörler — tipografik dizin + dinamik teknik önizleme.
 * Masaüstünde üç kolon (sticky tanıtım · satır listesi · sticky önizleme),
 * mobilde accordion. Satırlar gerçek Link'tir; state yalnızca sağ
 * önizlemeyi ve aktif stili yönetir.
 */
export function SectorsIndex() {
  const [activeSlug, setActiveSlug] = useState(sectorPages[0].slug);
  const [openSlug, setOpenSlug] = useState<string | null>(sectorPages[0].slug);

  const [shownSlug, setShownSlug] = useState(sectorPages[0].slug);
  const [isLeaving, setIsLeaving] = useState(false);
  const swapTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
    };
  }, []);

  const selectSector = (slug: string) => {
    if (slug === activeSlug && slug === shownSlug) return;
    setActiveSlug(slug);
    if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setShownSlug(slug);
      setIsLeaving(false);
      return;
    }

    setIsLeaving(true);
    swapTimer.current = window.setTimeout(() => {
      setShownSlug(slug);
      setIsLeaving(false);
    }, PREVIEW_SWAP_MS);
  };

  const shown = sectorPages.find((s) => s.slug === shownSlug) ?? sectorPages[0];
  const shownIndex = sectorPages.indexOf(shown);

  const intro = (
    <>
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent">
        <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
        {sectorsEyebrow}
      </p>
      <AnimatedHeading
        as="h2"
        id="sectors-title"
        text={sectorsTitle}
        className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-[28px]"
      />
      <p className="mt-4 text-[15px] leading-relaxed text-secondary">
        {sectorsDescription}
      </p>
      {/* GEÇİCİ: Sektörler kapalıyken CTA render edilmez (feature-flags) */}
      {SOLUTIONS_AND_SECTORS_ENABLED ? (
      <Link
        href={sectorsCta.href}
        className={cn(
          "group mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground",
          "transition-colors duration-200 hover:text-accent",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        )}
      >
        {sectorsCta.label}
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
    </>
  );

  const detailCta = (slug: string, tabbable = true) => {
    /* GEÇİCİ: Sektörler kapalıyken "Sektörü İncele" render edilmez */
    if (isBlockedRoute(`/sektorler/${slug}`)) return null;
    return (
    <Link
      href={`/sektorler/${slug}`}
      tabIndex={tabbable ? 0 : -1}
      className={cn(
        "group inline-flex items-center gap-3 text-sm font-medium text-foreground",
        "transition-colors duration-200 hover:text-accent",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
      )}
    >
      {sectorDetailCtaLabel}
      <span
        aria-hidden="true"
        className="h-px w-8 bg-border-subtle transition-colors duration-200 group-hover:bg-accent/50"
      />
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
      />
    </Link>
    );
  };

  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* Masaüstü: sol tanıtım · orta dizin · sağ önizleme          */}
      {/* ---------------------------------------------------------- */}
      <div className="hidden lg:grid lg:grid-cols-[22fr_30fr_48fr] lg:gap-12">
        {/* Sol sticky tanıtım kolonu */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          {intro}
          {/* sade dekoratif teknik çizim */}
          <svg
            viewBox="0 0 200 120"
            className="mt-12 w-full max-w-[200px] text-foreground"
            aria-hidden="true"
            focusable="false"
          >
            <g fill="none" strokeWidth="1" className="stroke-foreground/30">
              <path d="M20 100 V40 L100 12 L180 40 V100" />
              <path d="M20 100 H180 M20 70 H180" />
            </g>
            <path d="M20 40 L100 12 L180 40" fill="none" strokeWidth="1.2" className="stroke-accent/60" />
            <circle cx="100" cy="12" r="2.4" className="fill-accent" />
          </svg>
        </div>

        {/* Orta: numaralı sektör dizini */}
        <ul className="border-t border-border-subtle">
          {sectorPages.map((sector, index) => {
            const isActive = sector.slug === activeSlug;
            return (
              <li key={sector.slug} className="border-b border-border-subtle">
                <h3>
                  <MaybeLink
                    href={`/sektorler/${sector.slug}`}
                    focusable
                    dataActive={isActive}
                    onMouseEnter={() => selectSector(sector.slug)}
                    onFocus={() => selectSector(sector.slug)}
                    className={cn(
                      "group relative flex items-center gap-4 py-[17px] pl-4 pr-2",
                      "transition-colors duration-200",
                      "data-[active=true]:bg-surface-2/60",
                      "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
                    )}
                  >
                    {/* ince kırmızı aktif çizgi */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-y-2 left-0 w-[2px] origin-top bg-accent",
                        "scale-y-0 transition-transform duration-300 ease-out",
                        "group-data-[active=true]:scale-y-100",
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-display text-lg font-semibold tabular-nums leading-none",
                        "text-muted transition-colors duration-200",
                        "group-data-[active=true]:text-accent",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "min-w-0 flex-1 text-[15px] font-medium leading-snug tracking-tight",
                        "text-foreground opacity-85 transition-opacity duration-200",
                        "group-data-[active=true]:opacity-100",
                      )}
                    >
                      {sector.shortTitle}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0 text-muted opacity-60 transition-[transform,color,opacity] duration-300 ease-out",
                        "group-data-[active=true]:text-accent group-data-[active=true]:opacity-100",
                        "motion-safe:group-data-[active=true]:translate-x-1.5",
                      )}
                    />
                  </MaybeLink>
                </h3>
              </li>
            );
          })}
        </ul>

        {/* Sağ sticky önizleme paneli */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div
            className={cn(
              "solution-panel-surface overflow-hidden rounded-[24px] border border-border-subtle bg-surface",
              "shadow-[0_28px_70px_-38px_rgba(0,0,0,0.3)] dark:border-border-strong",
            )}
          >
            <div
              key={shown.slug}
              className={cn(
                "needs-preview-in flex min-h-[600px] flex-col p-8 xl:p-10",
                "transition-[opacity,transform] duration-150 ease-out",
                isLeaving && "opacity-0 motion-safe:-translate-y-2",
              )}
            >
              <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">
                SEKTÖR {String(shownIndex + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground xl:text-2xl">
                {shown.shortTitle}
              </p>
              <p className="mt-3 min-h-[4.5rem] max-w-lg text-[15px] leading-relaxed text-secondary">
                {shown.description}
              </p>

              {/* İlgili çözümler — çizgisel bağlantılar */}
              <ul className="mt-5 flex flex-wrap items-center gap-y-2.5">
                {relatedSolutions(shown.slug, MAX_SOLUTIONS_DESKTOP).map(
                  (solution, solutionIndex) => {
                    const Icon = solution.icon;
                    return (
                      <li
                        key={solution.slug}
                        className={cn(
                          "flex items-center",
                          solutionIndex > 0 &&
                            "ml-4 border-l border-border-subtle pl-4",
                        )}
                      >
                        <MaybeLink
                          href={`/cozumler/${solution.slug}`}
                          className={cn(
                            "group inline-flex min-h-[30px] items-center gap-2 text-[13px] font-medium text-foreground/90",
                            "transition-colors duration-200 hover:text-accent",
                            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                          )}
                        >
                          <Icon
                            aria-hidden="true"
                            className="size-3.5 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
                          />
                          {solution.title}
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3 shrink-0 opacity-0 transition-[opacity,transform] duration-200 group-hover:opacity-100 motion-safe:group-hover:translate-x-0.5"
                          />
                        </MaybeLink>
                      </li>
                    );
                  },
                )}
              </ul>

              {/* Büyük teknik görsel */}
              <div
                aria-hidden="true"
                className="sector-visual-in pointer-events-none relative mt-6 h-[290px] flex-1 overflow-hidden border-t border-border-subtle pt-5"
              >
                <SectorVisual slug={shown.slug} />
              </div>

              <div className="mt-6">{detailCta(shown.slug)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Mobil: tanıtım + 12'li accordion                           */}
      {/* ---------------------------------------------------------- */}
      <div className="lg:hidden">
        <div>{intro}</div>

        <ul className="mt-10 border-t border-border-subtle">
          {sectorPages.map((sector, index) => {
            const isOpen = sector.slug === openSlug;
            const panelId = `sector-panel-${sector.slug}`;
            const buttonId = `sector-button-${sector.slug}`;
            return (
              <li key={sector.slug} className="border-b border-border-subtle">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenSlug(isOpen ? null : sector.slug)}
                    className={cn(
                      "flex w-full items-center gap-4 py-4 text-left",
                      "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-display text-lg font-semibold tabular-nums leading-none transition-colors duration-200",
                        isOpen ? "text-accent" : "text-muted",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "min-w-0 flex-1 text-[15px] font-medium leading-snug text-foreground transition-opacity duration-200",
                        isOpen ? "opacity-100" : "opacity-85",
                      )}
                    >
                      {sector.shortTitle}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-45 text-accent",
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border-subtle/70 pb-6 pt-5">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none h-48 overflow-hidden"
                      >
                        <SectorVisual slug={sector.slug} />
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-secondary">
                        {sector.description}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {relatedSolutions(sector.slug, MAX_SOLUTIONS_MOBILE).map(
                          (solution) => {
                            const Icon = solution.icon;
                            return (
                              <li key={solution.slug}>
                                <MaybeLink
                                  href={`/cozumler/${solution.slug}`}
                                  className={cn(
                                    "group inline-flex min-h-[30px] items-center gap-2.5 text-sm font-medium text-foreground/90",
                                    "transition-colors duration-200 hover:text-accent",
                                    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                                  )}
                                >
                                  <Icon
                                    aria-hidden="true"
                                    className="size-4 shrink-0 text-muted"
                                  />
                                  {solution.title}
                                  {SOLUTIONS_AND_SECTORS_ENABLED ? (
                                    <ArrowRight
                                      aria-hidden="true"
                                      className="size-3.5 shrink-0"
                                    />
                                  ) : null}
                                </MaybeLink>
                              </li>
                            );
                          },
                        )}
                      </ul>
                      <div className="mt-5">
                        {detailCta(sector.slug, isOpen)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
