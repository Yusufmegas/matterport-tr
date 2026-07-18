"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TrustedBrandLoopItem {
  id: string;
  name: string;
  alt: string;
  /** Server tarafında çözülür; null → tipografik fallback */
  logoSrc: string | null;
}

interface TrustedBrandsLoopProps {
  items: TrustedBrandLoopItem[];
  /** Otomatik kayma hızı, piksel/saniye (varsayılan 34). */
  speed?: number;
  className?: string;
}

/**
 * Güvenilen Markalar logo döngüsü — YALNIZCA otomatik hareket.
 * Bilinçli olarak drag/pointer/momentum kodu İÇERMEZ; hareket saf CSS
 * animasyonudur (globals.css: .brand-loop-*). JavaScript yalnızca ilk
 * grubun genişliğini ölçüp süreyi px/s mantığıyla ayarlar
 * (duration = groupWidth / speed).
 *
 * Hover: container üzerindeyken tüm track CSS ile duraklar
 * (animation-play-state), yalnızca hover edilen logonun iç wrapper'ı
 * scale(1.08) büyür — track transform'u ile aynı elementte değildir.
 *
 * prefers-reduced-motion: animasyon kapanır, kopya grup gizlenir ve
 * markalar statik sarmalanmış şerit olarak gösterilir (globals.css).
 */
export function TrustedBrandsLoop({
  items,
  speed = 34,
  className,
}: TrustedBrandsLoopProps) {
  const groupRef = useRef<HTMLDivElement | null>(null);
  const [durationSec, setDurationSec] = useState<number | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    const measure = () => {
      const width = group.getBoundingClientRect().width;
      if (width > 0 && speed > 0) {
        setDurationSec(Math.round((width / speed) * 10) / 10);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    return () => observer.disconnect();
  }, [speed]);

  const style = durationSec
    ? ({ "--brand-loop-duration": `${durationSec}s` } as CSSProperties)
    : undefined;

  const groupClasses =
    "brand-loop-group flex items-center gap-6 pr-6 sm:gap-10 sm:pr-10 lg:gap-12 lg:pr-12";

  const renderItems = (decorative: boolean) =>
    items.map((brand) => (
      <div
        key={brand.id}
        className={cn(
          "group/logo flex shrink-0 items-center justify-center",
          /* Koyu Spline zemini üzerinde yarı saydam açık cam yüzey —
             koyu logolar filtre olmadan net okunur. */
          "h-[72px] w-[150px] rounded-[18px] border border-white/[0.22] bg-white/[0.92]",
          "backdrop-blur-[12px] shadow-[0_18px_50px_-30px_rgba(0,0,0,0.65)]",
          "px-4 py-3 sm:h-[88px] sm:w-[180px] sm:rounded-[20px] lg:h-[96px] lg:w-[200px]",
        )}
      >
        {/* Scale iç wrapper'da — track transform'u ile çakışmaz */}
        <span
          className={cn(
            "flex size-full items-center justify-center",
            "opacity-95 transition-all duration-200 ease-out",
            "group-hover/logo:scale-[1.08] group-hover/logo:opacity-100",
          )}
        >
          {brand.logoSrc ? (
            <span className="relative block h-[68%] w-[82%]">
              <Image
                src={brand.logoSrc}
                alt={decorative ? "" : brand.alt}
                fill
                sizes="200px"
                className="object-contain"
              />
            </span>
          ) : (
            /* Logo dosyası eklenene kadar sade tipografik fallback */
            <span className="text-center font-display text-sm font-semibold leading-snug tracking-[0.08em] text-muted sm:text-base">
              {brand.name}
            </span>
          )}
        </span>
      </div>
    ));

  return (
    <div
      style={style}
      className={cn(
        "brand-loop brand-loop-mask relative overflow-hidden",
        className,
      )}
    >
      <div className="brand-loop-track flex w-max will-change-transform">
        <div ref={groupRef} className={groupClasses}>
          {renderItems(false)}
        </div>
        {/* Yalnızca görsel döngü kopyası — erişilebilirlik dışı */}
        <div className={groupClasses} aria-hidden="true">
          {renderItems(true)}
        </div>
      </div>
    </div>
  );
}
