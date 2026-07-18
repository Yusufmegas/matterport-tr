"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Rotate3d, X } from "lucide-react";
import { buildTourIframeUrl, matterportConfig } from "@/config/matterport";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface TourViewerProps {
  ctaLabel: string;
  /** Server-rendered text column (eyebrow, h2, description) */
  children: React.ReactNode;
}

/**
 * "Önce Gezin, Sonra Karar Verin" tur alanı. Iframe yalnızca kullanıcı
 * turu başlattığında DOM'a eklenir; MPskin'in kendi arayüzü kullanılır,
 * dışarıdan CSS/JS müdahalesi yapılmaz. Hero turundan tamamen bağımsız
 * state kullanır.
 */
export function TourViewer({ ctaLabel, children }: TourViewerProps) {
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const startTour = useCallback(() => {
    setIsActive(true);
  }, []);

  const closeTour = useCallback(() => {
    setIsActive(false);
    setIsLoaded(false);
  }, []);

  /* Escape deneyim turunu kapatır (Hero turunun dinleyicisinden ayrı) */
  useEffect(() => {
    if (!isActive) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeTour();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isActive, closeTour]);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
      {/* Metin sütunu (~%33) */}
      <div className="lg:col-span-4">
        {children}
        <Button
          type="button"
          variant="contrast"
          size="lg"
          className="mt-7"
          onClick={startTour}
          disabled={isActive}
        >
          {ctaLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>

      {/* Tur alanı (~%67) — sabit yükseklik: açılışta layout shift yok */}
      <div className="lg:col-span-8">
        <div
          className={cn(
            "relative h-[520px] w-full overflow-hidden rounded-xl",
            "border border-border-subtle bg-surface lg:h-[580px]",
          )}
        >
          {isActive ? (
            <>
              <iframe
                src={buildTourIframeUrl(matterportConfig.experienceTourUrl)}
                title="Matterport TR etkileşimli 3D sanal tur"
                loading="lazy"
                allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
                allowFullScreen
                onLoad={() => setIsLoaded(true)}
                className="absolute inset-0 size-full border-0"
              />

              {/* Tema uyumlu yükleme yüzeyi */}
              {!isLoaded ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
                  <span
                    aria-hidden="true"
                    className="size-8 animate-spin rounded-full border-2 border-border-subtle border-t-accent"
                  />
                  <p className="text-sm text-muted" role="status">
                    Tur yükleniyor
                  </p>
                </div>
              ) : null}

              {/* Turu kapat */}
              <button
                type="button"
                onClick={closeTour}
                aria-label="Turu kapat"
                className={cn(
                  "absolute right-3 top-3 z-10 inline-flex min-h-[36px] items-center gap-1.5 rounded-full",
                  "border border-border-subtle bg-surface/90 px-3.5 text-xs font-semibold text-foreground",
                  "backdrop-blur-md transition-colors duration-150 hover:border-accent/50 hover:text-accent",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                )}
              >
                <X className="size-4" aria-hidden="true" />
                Turu Kapat
              </button>
            </>
          ) : (
            /* Başlangıç yüzeyi: sade teknik grid + ikon + CTA */
            <div className="absolute inset-0">
              <div className="tech-grid absolute inset-0" aria-hidden="true" />
              <div className="relative flex size-full flex-col items-center justify-center gap-4 p-8 text-center">
                <span
                  aria-hidden="true"
                  className="inline-flex size-16 items-center justify-center rounded-2xl border border-border-subtle bg-surface-2 text-accent"
                >
                  <Rotate3d className="size-7" />
                </span>
                <p className="font-display text-lg font-semibold text-foreground">
                  Etkileşimli 3D turu başlatın.
                </p>
                <Button type="button" size="md" onClick={startTour}>
                  Turu Başlat
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
