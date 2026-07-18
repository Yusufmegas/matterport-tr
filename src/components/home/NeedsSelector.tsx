"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { needs, needsCtaLabel } from "@/data/needs";
import { NeedsPreview } from "@/components/home/NeedsPreview";
import SpotlightCard from "@/components/SpotlightCard";
import { MaybeLink } from "@/components/ui/MaybeLink";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { cn } from "@/lib/utils";

/** Fade-out süresi; ardından yeni içerik needs-preview-in ile girer. */
const PREVIEW_SWAP_MS = 120;

/**
 * İhtiyaç seçici — masaüstünde satır listesi + sağ dinamik önizleme,
 * mobilde accordion.
 *
 * State yalnızca aktif stili ve önizlemeyi yönetir; navigasyon her
 * kırılımda gerçek <Link> ile yapılır (masaüstünde satırın tamamı,
 * mobilde "Detayları İncele" CTA'sı).
 */
export function NeedsSelector() {
  const [activeId, setActiveId] = useState(needs[0].id);
  /** Mobil accordion'da açık öğe — null olabilir (tümü kapalı). */
  const [openId, setOpenId] = useState<string | null>(needs[0].id);

  /* Önizleme geçişi: kısa fade-out → içerik takası → fade-in.        */
  const [shownId, setShownId] = useState(needs[0].id);
  const [isLeaving, setIsLeaving] = useState(false);
  const swapTimer = useRef<number | null>(null);

  /* Yalnızca unmount temizliği — geçiş event handler'dan tetiklenir. */
  useEffect(() => {
    return () => {
      if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
    };
  }, []);

  const selectNeed = (id: string) => {
    if (id === activeId && id === shownId) return;
    setActiveId(id);
    if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setShownId(id);
      setIsLeaving(false);
      return;
    }

    setIsLeaving(true);
    swapTimer.current = window.setTimeout(() => {
      setShownId(id);
      setIsLeaving(false);
    }, PREVIEW_SWAP_MS);
  };

  const shown = needs.find((n) => n.id === shownId) ?? needs[0];
  const active = needs.find((n) => n.id === activeId) ?? needs[0];

  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* Masaüstü: tek teknik panel — sol satırlar, sağ önizleme    */}
      {/* ---------------------------------------------------------- */}
      <div className="mt-12 hidden border border-border-subtle bg-surface lg:grid lg:grid-cols-[52fr_48fr] dark:border-border-strong">
        <ul className="flex flex-col justify-center">
          {needs.map((need, index) => {
            const isActive = need.id === activeId;
            return (
              <li
                key={need.id}
                className={cn(
                  "border-border-subtle",
                  index > 0 && "border-t",
                )}
              >
                <h3>
                  <MaybeLink
                    href={need.href}
                    focusable
                    dataActive={isActive}
                    onMouseEnter={() => selectNeed(need.id)}
                    onFocus={() => selectNeed(need.id)}
                    className={cn(
                      "group relative flex items-center gap-6 px-8 py-9 xl:px-10",
                      "transition-colors duration-200",
                      "data-[active=true]:bg-surface-2",
                      "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
                    )}
                  >
                    {/* aktif üst çizgi — soldan sağa açılır */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-[2px] origin-left bg-accent",
                        "scale-x-0 transition-transform duration-300 ease-out",
                        "group-data-[active=true]:scale-x-100",
                        index === 0 && "-top-px",
                      )}
                    />
                    {/* alt kırmızı ışık çizgisi — çok hafif */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-accent/40 via-accent/15 to-transparent",
                        "opacity-0 transition-opacity duration-300",
                        "group-data-[active=true]:opacity-100",
                      )}
                    />

                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-display text-3xl font-semibold tabular-nums leading-none",
                        "text-foreground/40 transition-[color,transform,opacity] duration-300 ease-out dark:text-foreground/55",
                        "group-data-[active=true]:text-accent",
                        "motion-safe:group-data-[active=true]:translate-x-1",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={cn(
                        "min-w-0 flex-1 text-lg font-medium leading-snug tracking-tight xl:text-xl",
                        "text-foreground opacity-85 transition-opacity duration-300",
                        "group-data-[active=true]:opacity-100",
                      )}
                    >
                      {need.title}
                    </span>

                    {/* ince dikey ayırıcı */}
                    <span
                      aria-hidden="true"
                      className="h-8 w-px shrink-0 bg-border-subtle"
                    />

                    <ArrowRight
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0 text-muted transition-[transform,color] duration-300 ease-out",
                        "group-data-[active=true]:text-accent",
                        "motion-safe:group-data-[active=true]:translate-x-2",
                      )}
                    />
                  </MaybeLink>
                </h3>
              </li>
            );
          })}
        </ul>

        {/* Sağ dinamik önizleme yüzeyi */}
        <div className="flex min-h-[520px] flex-col border-l border-border-subtle">
          <SpotlightCard
            spotlightColor="var(--needs-spotlight-color)"
            className="needs-preview-surface flex-1 p-8 xl:p-10"
          >
            <div
              key={shown.id}
              className={cn(
                "needs-preview-in h-full transition-[opacity,transform] duration-150 ease-out",
                isLeaving && "opacity-0 motion-safe:-translate-y-2",
              )}
            >
              <NeedsPreview need={shown} />
            </div>
          </SpotlightCard>

          {/* GEÇİCİ: Çözümler kapalıyken CTA render edilmez (feature-flags) */}
          {SOLUTIONS_AND_SECTORS_ENABLED ? (
            <div className="border-t border-border-subtle px-8 py-5 xl:px-10">
              <Link
                href={active.href}
                className={cn(
                  "group inline-flex items-center gap-3 text-sm font-medium text-foreground",
                  "transition-colors duration-200 hover:text-accent",
                  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                )}
              >
                {needsCtaLabel}
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
          ) : null}
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Mobil: accordion — buton açar, CTA route'a gider           */}
      {/* ---------------------------------------------------------- */}
      <ul className="mt-10 border-t border-border-subtle lg:hidden">
        {needs.map((need, index) => {
          const isOpen = need.id === openId;
          const panelId = `need-panel-${need.id}`;
          const buttonId = `need-button-${need.id}`;

          return (
            <li key={need.id} className="border-b border-border-subtle">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : need.id)}
                  className={cn(
                    "relative flex w-full items-center gap-4 py-5 text-left",
                    "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "font-display text-2xl font-semibold tabular-nums leading-none transition-colors duration-200",
                      isOpen ? "text-accent" : "text-foreground/40 dark:text-foreground/55",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 text-base font-medium leading-snug tracking-tight text-foreground transition-opacity duration-200",
                      isOpen ? "opacity-100" : "opacity-85",
                    )}
                  >
                    {need.title}
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
                    <NeedsPreview need={need} compact />
                    {/* GEÇİCİ: Çözümler kapalıyken CTA render edilmez */}
                    {SOLUTIONS_AND_SECTORS_ENABLED ? (
                      <Link
                        href={need.href}
                        tabIndex={isOpen ? 0 : -1}
                        className={cn(
                          "group mt-5 inline-flex items-center gap-3 text-sm font-medium text-foreground",
                          "transition-colors duration-200 hover:text-accent",
                          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                        )}
                      >
                        {needsCtaLabel}
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
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
