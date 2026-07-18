"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3";

interface AnimatedHeadingProps {
  as?: HeadingTag;
  /** Başlık metni — "\n" satır kırılımı olarak render edilir. */
  text: string;
  /**
   * hero: sayfa açılışında bir kez, kelime bazlı blur-reveal (saf CSS
   * keyframe — JS beklemez, SSR çıktısında animasyonlu başlar).
   * section: viewport'a girince bir kez, daha kısa ve hafif reveal.
   */
  variant?: "hero" | "section";
  /** İlk kelimenin gecikmesi (ms). */
  delay?: number;
  id?: string;
  className?: string;
}

/**
 * Tekrar kullanılabilir başlık reveal katmanı — React Bits BlurText /
 * AnimatedContent davranışının bağımlılıksız uyarlaması (registry
 * bileşenleri motion/gsap zorunlu kıldığından yerel uygulanmıştır).
 *
 * SEO/erişilebilirlik garantileri:
 * - Metin gerçek h1/h2/h3 içinde, gerçek DOM text node'larıdır; kelime
 *   span'leri boşluk text node'larıyla ayrılır (erişilebilir isim bozulmaz).
 * - JavaScript çalışmazsa metin görünür kalır: hero varyantı saf CSS
 *   animasyonudur; section varyantı yalnızca JS yüklendikten sonra ve
 *   yalnızca viewport DIŞINDAYKEN gizlenir.
 * - prefers-reduced-motion'da tüm hareket CSS tarafında kapanır.
 * - Yalnızca opacity/transform/filter anime edilir — CLS oluşmaz.
 */
export function AnimatedHeading({
  as: Tag = "h2",
  text,
  variant = "section",
  delay = 0,
  id,
  className,
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (variant !== "section") return;
    const heading = headingRef.current;
    if (!heading) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    /* Hydration anında zaten görünürse hiç gizleme — flaş oluşmaz. */
    const rect = heading.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setIsHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsHidden(false);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, [variant]);

  const stagger = variant === "hero" ? 70 : 40;
  const lines = text.split("\n").map((line) => line.split(" "));
  /* Her satırın global kelime ofseti — render sırasında mutasyon yok */
  const lineOffsets = lines.map((_, lineIndex) =>
    lines
      .slice(0, lineIndex)
      .reduce((total, lineWords) => total + lineWords.length, 0),
  );

  return (
    <Tag
      ref={headingRef}
      id={id}
      className={cn(
        variant === "hero" ? "ah-hero" : "ah-section",
        isHidden && "ah-hidden",
        className,
      )}
    >
      {lines.map((words, lineIndex) => (
        <span key={lineIndex} className="contents">
          {words.map((word, i) => (
            <span key={i} className="contents">
              {i > 0 ? " " : null}
              <span
                className="ah-word"
                style={
                  {
                    "--ah-d": `${delay + (lineOffsets[lineIndex] + i) * stagger}ms`,
                  } as React.CSSProperties
                }
              >
                {word}
              </span>
            </span>
          ))}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
