"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

/** Güvenilen Markalar arka planındaki Spline dünya sahnesi. */
const SCENE_URL =
  "https://prod.spline.design/c6dZ26mLL1fTtmDW/scene.splinecode";

/* Spline yalnızca client'ta ve bölüm viewport'a yaklaşınca yüklenir. */
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

/**
 * Güvenilen Markalar bölümünün dekoratif uzay/dünya arka planı.
 *
 * - Sahne lazy-load edilir (IntersectionObserver, ~400px erken);
 *   yüklenene kadar ve yüklenemezse koyu gradient fallback görünür.
 * - prefers-reduced-motion'da sahne hiç yüklenmez, statik fallback kalır.
 * - Katmanın tamamı pointer-events-none'dır; logo loop etkileşimlerini
 *   (hover pause/scale) engellemez.
 */
export function SplineGlobeBackground() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const host = hostRef.current;
    if (!host) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden [&_canvas]:!pointer-events-none"
    >
      {/* Taban / fallback: koyu uzay zemini + sağda hafif mavi atmosfer.
          Sahne yüklenene kadar ve hata durumunda tek başına görünür. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 82% at 76% 50%, rgba(56, 120, 255, 0.16) 0%, transparent 62%), linear-gradient(140deg, #050a12 0%, #070d18 55%, #0a1322 100%)",
        }}
      />

      {/* Spline dünya — masaüstünde sağda, mobilde sağ altta küçük */}
      {shouldLoad && !failed ? (
        <div
          className={
            "absolute inset-y-[-6%] right-[-14%] w-[70%] " +
            "max-lg:inset-auto max-lg:bottom-[-70px] max-lg:right-[-110px] max-lg:h-[360px] max-lg:w-[360px] max-lg:opacity-45"
          }
        >
          <Spline
            scene={SCENE_URL}
            onError={() => setFailed(true)}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}

      {/* Sol metin okunabilirlik gradyanı */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5, 10, 18, 0.98) 0%, rgba(5, 10, 18, 0.88) 35%, rgba(5, 10, 18, 0.42) 68%, rgba(5, 10, 18, 0.12) 100%)",
        }}
      />

      {/* Üst/alt dikey geçiş — dünya tamamen kararmaz */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 10, 18, 0.85) 0%, transparent 16%, transparent 82%, rgba(5, 10, 18, 0.9) 100%)",
        }}
      />
    </div>
  );
}
