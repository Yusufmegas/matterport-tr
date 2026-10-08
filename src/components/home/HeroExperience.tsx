"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import {
  buildTourIframeUrl,
  matterportConfig,
  type MpskinCommandAction,
  type TourViewMode,
} from "@/config/matterport";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroControls } from "@/components/home/HeroControls";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { cn } from "@/lib/utils";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";

interface HeroExperienceProps {
  dayImage: string | null;
  nightImage: string | null;
}

interface BridgeMessage {
  source?: unknown;
  type?: unknown;
  mode?: unknown;
  measurementActive?: unknown;
}

const VIEW_MODES: readonly TourViewMode[] = ["INSIDE", "DOLLHOUSE", "FLOORPLAN"];

/**
 * Hero + gömülü MPskin turu. Iframe yalnızca kullanıcı turu
 * başlattığında DOM'a eklenir; kapak metinleri visibility ile gizlenir
 * (yükseklik korunur, layout shift oluşmaz).
 */
export function HeroExperience({ dayImage, nightImage }: HeroExperienceProps) {
  const hasImages = Boolean(dayImage && nightImage);

  const [isTourActive, setIsTourActive] = useState(false);
  const [isBridgeReady, setIsBridgeReady] = useState(false);
  /* onLoad yalnızca iframe dokümanının yüklendiğini söyler — köprünün
     hazır olması (MPSKIN_READY) ayrı bir state'tir. */
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [activeMode, setActiveMode] = useState<TourViewMode>("INSIDE");
  const [measurementActive, setMeasurementActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const startTour = useCallback(() => {
    setIsTourActive(true);
  }, []);

  const closeTour = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsTourActive(false);
    setIsBridgeReady(false);
    setIsIframeLoaded(false);
    setActiveMode("INSIDE");
    setMeasurementActive(false);
  }, []);

  /** Komutlar YALNIZCA my.mpskin.com origin'ine gönderilir — asla "*" */
  const sendTourCommand = useCallback((action: MpskinCommandAction) => {
    const targetWindow = iframeRef.current?.contentWindow;
    if (!targetWindow) return;
    targetWindow.postMessage(
      {
        source: matterportConfig.messageSource,
        type: "MPSKIN_COMMAND",
        action,
      },
      matterportConfig.origin,
    );
  }, []);

  const handlePlay = useCallback(() => {
    if (!isTourActive) {
      startTour();
      return;
    }
    sendTourCommand("TOUR_PLAY");
  }, [isTourActive, startTour, sendTourCommand]);

  /**
   * Tam ekran hedefi TÜM SAYFA (documentElement), yalnızca Hero değil:
   * böylece tam ekranda sayfanın dikey scroll'u doğal olarak açık kalır.
   * Scroll lock / overflow:hidden / position:fixed BİLİNÇLİ olarak yok.
   */
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }
    const root = document.documentElement;
    root
      .requestFullscreen({ navigationUI: "hide" })
      .catch(() => root.requestFullscreen().catch(() => {}));
  }, []);

  /* MPskin köprüsünden gelen mesajlar: origin + source + shape doğrulanır */
  useEffect(() => {
    if (!isTourActive) return;

    function onMessage(event: MessageEvent) {
      if (event.origin !== matterportConfig.origin) return;
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (typeof event.data !== "object" || event.data === null) return;

      const message = event.data as BridgeMessage;
      if (message.source !== "mpskin-matterport-bridge") return;

      if (message.type === "MPSKIN_READY") {
        setIsBridgeReady(true);
        return;
      }

      if (message.type === "MPSKIN_STATE") {
        if (VIEW_MODES.includes(message.mode as TourViewMode)) {
          setActiveMode(message.mode as TourViewMode);
        }
        if (typeof message.measurementActive === "boolean") {
          setMeasurementActive(message.measurementActive);
        }
      }
      /* Bilinmeyen type/action'lar bilinçli olarak yok sayılır */
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isTourActive]);

  /* Escape turu kapatır */
  useEffect(() => {
    if (!isTourActive) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeTour();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isTourActive, closeTour]);

  /* Fullscreen durumu tarayıcı event'iyle takip edilir (Escape ile
     çıkışta da state doğru sıfırlanır) */
  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative flex min-h-[600px] flex-col overflow-hidden bg-background lg:h-[min(100svh,800px)]"
    >
      {/* --- Kapak (gece/gündüz) — salt dekoratif, dokunma almaz --- */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          isTourActive && "opacity-0",
        )}
        aria-hidden="true"
      >
        {hasImages ? (
          <>
            {/* Tema seçimi display yerine opacity ile yapılır: iki görsel
                de tam genişlikte ölçülür (Next'in sizes="100vw" dev
                uyarısını önler) ve tema geçişi yumuşak olur. */}
            <Image
              src={dayImage as string}
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover transition-opacity duration-500 dark:opacity-0"
            />
            <Image
              src={nightImage as string}
              alt=""
              fill
              fetchPriority="low"
              sizes="100vw"
              className="object-cover opacity-0 transition-opacity duration-500 dark:opacity-100"
            />
          </>
        ) : (
          <div className="hero-placeholder absolute inset-0">
            <div className="hero-grid absolute inset-0" />
            <div className="hero-scanline absolute inset-x-0 top-0 h-24" />
          </div>
        )}
        <div className="hero-veil absolute inset-0" />
      </div>

      {/* --- Metin içeriği: visibility ile gizlenir, yükseklik korunur --- */}
      <Container
        className={cn(
          "relative z-10 flex flex-1 flex-col justify-center pb-20 pt-28 transition-opacity duration-300 lg:pb-16 lg:pt-24",
          isTourActive && "invisible opacity-0",
        )}
      >
        <div className="max-w-[620px]">
          <p className="animate-fade-up flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] text-foreground/70 sm:text-xs">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            KURUMSAL 3D DİJİTAL İKİZ TEKNOLOJİSİ
          </p>

          <AnimatedHeading
            as="h1"
            id="hero-title"
            variant="hero"
            delay={120}
            text={"Mekânınızı\nDijital İkize\nDönüştürün"}
            className="mt-5 font-display text-[clamp(2.6rem,4.5vw,5.2rem)] font-semibold leading-[0.98] tracking-tight text-foreground"
          />

          <p className="animate-fade-up mt-6 max-w-[540px] text-base leading-relaxed text-muted [animation-delay:240ms] sm:text-lg">
            Profesyonel 3D tarama, sanal tur, Google Street View, ölçüm, kat
            planı, CAD, BIM ve mekânsal veri çözümleriyle projelerinizi
            geleceğe taşıyın.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
            <Button type="button" size="lg" onClick={startTour}>
              Örnek Turu Deneyimle
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            {/* GEÇİCİ: Çözümler kapalıyken buton render edilmez */}
            {SOLUTIONS_AND_SECTORS_ENABLED ? (
              <Button href="/cozumler" variant="outline" size="lg">
                Çözümleri İnceleyin
                <ChevronRight className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
        </div>
      </Container>

      {/* --- MPskin tur katmanı: yalnızca tur aktifken DOM'da --- */}
      {isTourActive ? (
        <div className="absolute inset-0 z-[15]">
          {/* MPskin native controls must be disabled in the MPskin
              URL-Desk/Codes settings. Cross-origin iframe UI cannot be
              styled from this application. */}
          <iframe
            ref={iframeRef}
            src={buildTourIframeUrl(matterportConfig.heroTourUrl)}
            title="Matterport TR örnek 3D sanal tur"
            allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
            allowFullScreen
            onLoad={() => setIsIframeLoaded(true)}
            className="absolute inset-0 size-full border-0"
          />

          {/* Tema uyumlu yükleme yüzeyi — iframe dokümanı gelene kadar */}
          {!isIframeLoaded ? (
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

          {/* Scroll güvenli alanı: MPskin iframe'i wheel olaylarını dış
              sayfaya aktarmayabilir. Tam ekranda sağ kenardaki bu ince
              şerit sayfa kaydırmayı garanti eder. Kontrol barı (z-20)
              bu katmanın üzerinde kaldığı için butonlar kapanmaz. */}
          {isFullscreen ? (
            <div
              aria-hidden="true"
              onWheel={(event) => {
                window.scrollBy({ top: event.deltaY });
              }}
              className="absolute inset-y-0 right-0 z-10 w-8 [touch-action:pan-y]"
            />
          ) : null}

          {/* Turu kapat */}
          <button
            type="button"
            onClick={closeTour}
            aria-label="Turu kapat"
            className={cn(
              "absolute right-4 top-20 z-30 inline-flex min-h-[40px] items-center gap-1.5 rounded-full",
              "border border-border-subtle bg-surface/90 px-4 text-xs font-semibold text-foreground",
              "backdrop-blur-md transition-colors duration-150 hover:border-accent/50 hover:text-accent",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            )}
          >
            <X className="size-4" aria-hidden="true" />
            Turu Kapat
          </button>
        </div>
      ) : null}

      {/* --- Özel kontrol barı: tur açıkken de iframe'in üstünde kalır --- */}
      <div className="relative z-20 flex justify-center pb-8 lg:absolute lg:inset-y-0 lg:right-6 lg:flex lg:items-center lg:pb-0 xl:right-10">
        <HeroControls
          className="animate-fade-up [animation-delay:480ms] lg:flex-col"
          isTourActive={isTourActive}
          isBridgeReady={isBridgeReady}
          activeMode={activeMode}
          measurementActive={measurementActive}
          isFullscreen={isFullscreen}
          onPlay={handlePlay}
          onCommand={sendTourCommand}
          onFullscreenToggle={toggleFullscreen}
        />
      </div>
    </section>
  );
}
