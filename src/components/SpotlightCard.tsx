"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  /** CSS renk değeri — tema token'ı (ör. var(--needs-spotlight-color)) geçilebilir. */
  spotlightColor?: string;
}

/**
 * React Bits SpotlightCard (TS-TW) — projeye uyarlanmış sürüm.
 *
 * Registry kaynağından farkları:
 * - Koordinatlar state yerine CSS değişkenine rAF ile yazılır; mousemove
 *   başına re-render oluşmaz, rAF yalnızca koordinat güncellemesinde çalışır.
 * - Yalnızca gerçek imleçli cihazlarda etkinleşir (hover: hover + pointer:
 *   fine); dokunmatik cihazlarda hiçbir dinleyici/hesaplama çalışmaz.
 * - Sabit koyu yüzey sınıfları kaldırıldı; görünüm çağıran tarafın
 *   className'ine ve tema token'larına bırakıldı.
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.14)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointRef = useRef({ x: 0, y: 0 });
  const enabledRef = useRef(false);

  useEffect(() => {
    enabledRef.current = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!enabledRef.current) return;
    pointRef.current = { x: e.clientX, y: e.clientY };

    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const host = divRef.current;
      const glow = glowRef.current;
      if (!host || !glow) return;
      const rect = host.getBoundingClientRect();
      glow.style.setProperty(
        "--spot-x",
        `${pointRef.current.x - rect.left}px`,
      );
      glow.style.setProperty("--spot-y", `${pointRef.current.y - rect.top}px`);
    });
  };

  const setGlowVisible = (visible: boolean) => {
    if (!enabledRef.current || !glowRef.current) return;
    glowRef.current.style.opacity = visible ? "1" : "0";
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setGlowVisible(true)}
      onMouseLeave={() => setGlowVisible(false)}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(circle 480px at var(--spot-x, 50%) var(--spot-y, 40%), ${spotlightColor}, transparent 72%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
