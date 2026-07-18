"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { cn } from "@/lib/utils";

interface ProjectLoopProps {
  children: React.ReactNode;
  /** Otomatik kayma hızı, piksel/saniye (varsayılan 36). */
  speed?: number;
  /** Mouse/parmak hareketi ile track hareketi oranı (varsayılan 1:1). */
  dragSensitivity?: number;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  className?: string;
}

/** Drag eşiği: bu mesafenin altındaki hareketler sürükleme başlatmaz. */
const DRAG_THRESHOLD_PX = 5;
/** Drag bittikten sonra otomatik hareketin bekleyeceği süre. */
const RESUME_DELAY_MS = 700;
/** Momentum sönümleme zaman sabiti (~400ms içinde durur). */
const MOMENTUM_DECAY_S = 0.15;
const MOMENTUM_MAX_PX_S = 1200;

/**
 * Kesintisiz sola kayan vitrin + pointer tabanlı sürükleme.
 *
 * Hareketin TEK kaynağı requestAnimationFrame döngüsüdür (CSS animasyonu
 * ile çakışma/titreme olmaması için): otomatik kayma, drag ve momentum
 * aynı offset üzerinde çalışır, transform inline yazılır. Delta-time
 * tabanlıdır; sekme gizlendiğinde rAF tarayıcı tarafından zaten durur.
 *
 * Kesintisiz döngü: iki eş grup + offset normalizasyonu —
 * offset her karede [-groupWidth, 0] aralığına sarılır; kullanıcı sağa
 * veya sola ne kadar sürüklerse sürüklesin boş alan görünmez.
 *
 * prefers-reduced-motion: rAF ve drag devre dışı kalır; globals.css
 * şeridi scroll-snap'li native yatay kaydırmaya döndürür, kopya grup
 * gizlenir.
 */
export function ProjectLoop({
  children,
  speed = 36,
  dragSensitivity = 1,
  pauseOnHover = true,
  fadeEdges = true,
  className,
}: ProjectLoopProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstGroupRef = useRef<HTMLDivElement | null>(null);

  const offsetRef = useRef(0);
  const groupWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const activePointerIdRef = useRef<number | null>(null);
  const pointerStartXRef = useRef(0);
  const pointerStartYRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const momentumRef = useRef(0);
  const hoverPausedRef = useRef(false);
  const resumeBlockedUntilRef = useRef(0);
  const reducedMotionRef = useRef(false);

  /* React state yalnızca cursor/user-select görünümü için */
  const [isDragging, setIsDragging] = useState(false);

  /** Offset'i [-groupWidth, 0] aralığına sarar ve transform'u yazar.
   *  Hem rAF döngüsü hem pointermove bu tek yolu kullanır. */
  function applyOffset() {
    const width = groupWidthRef.current;
    if (width > 0) {
      while (offsetRef.current <= -width) offsetRef.current += width;
      while (offsetRef.current > 0) offsetRef.current -= width;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }

  /* İlk grubun genişliği — loop normalizasyonunun temel ölçüsü */
  useEffect(() => {
    const group = firstGroupRef.current;
    if (!group) return;
    const measure = () => {
      groupWidthRef.current = group.getBoundingClientRect().width;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  /* Tek hareket kaynağı: delta-time tabanlı rAF döngüsü */
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = media.matches;
    /* Reduced motion: otomatik hareket ve drag yok — native scroll (CSS) */
    if (media.matches) return;

    let rafId = 0;
    let last = performance.now();
    let lastApplied = Number.NaN;

    const step = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;

      if (!isDraggingRef.current) {
        if (momentumRef.current !== 0) {
          /* Bırakma sonrası hafif, hızla sönümlenen momentum */
          offsetRef.current += momentumRef.current * dt;
          momentumRef.current *= Math.exp(-dt / MOMENTUM_DECAY_S);
          if (Math.abs(momentumRef.current) < 15) momentumRef.current = 0;
        } else if (
          (!pauseOnHover || !hoverPausedRef.current) &&
          now >= resumeBlockedUntilRef.current
        ) {
          offsetRef.current -= speed * dt;
        }
      }

      if (offsetRef.current !== lastApplied) {
        applyOffset();
        lastApplied = offsetRef.current;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, pauseOnHover]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (reducedMotionRef.current) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    activePointerIdRef.current = event.pointerId;
    dragMovedRef.current = false;
    pointerStartXRef.current = event.clientX;
    pointerStartYRef.current = event.clientY;
    dragStartOffsetRef.current = offsetRef.current;
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    momentumRef.current = 0;
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (activePointerIdRef.current !== event.pointerId) return;

    const dx = event.clientX - pointerStartXRef.current;
    const dy = event.clientY - pointerStartYRef.current;

    /* Eşik + yön tespiti: drag YALNIZCA gerçek yatay harekette başlar */
    if (!dragMovedRef.current) {
      if (Math.abs(dx) < DRAG_THRESHOLD_PX && Math.abs(dy) < DRAG_THRESHOLD_PX) {
        return;
      }
      /* Dikey hareket baskınsa: drag başlatma, capture yapma, izlemeyi
         bırak — sayfanın doğal dikey scroll'u kesintisiz devam eder */
      if (Math.abs(dy) >= Math.abs(dx)) {
        activePointerIdRef.current = null;
        return;
      }
      dragMovedRef.current = true;
      isDraggingRef.current = true;
      setIsDragging(true);
      /* Pointer alan dışına çıksa bile drag düzgün tamamlanır — capture
         yalnızca gerçek yatay sürükleme başladığında alınır */
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        /* pointer artık aktif değilse capture atlanır */
      }
    }

    offsetRef.current = dragStartOffsetRef.current + dx * dragSensitivity;
    /* Anında 1:1 tepki: transform pointermove'da da yazılır (rAF ile
       aynı applyOffset yolunu paylaşır, çakışma yok) */
    applyOffset();

    /* Momentum için yumuşatılmış hız (px/s) */
    const now = performance.now();
    const dtMs = now - lastPointerTimeRef.current;
    if (dtMs > 0) {
      const instant =
        ((event.clientX - lastPointerXRef.current) / dtMs) *
        1000 *
        dragSensitivity;
      velocityRef.current = 0.8 * instant + 0.2 * velocityRef.current;
    }
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = now;
  }

  function handlePointerEnd(event: ReactPointerEvent<HTMLDivElement>) {
    if (activePointerIdRef.current !== event.pointerId) return;
    activePointerIdRef.current = null;

    if (!dragMovedRef.current) return;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* capture zaten bırakılmış olabilir */
    }

    momentumRef.current = Math.max(
      -MOMENTUM_MAX_PX_S,
      Math.min(MOMENTUM_MAX_PX_S, velocityRef.current),
    );
    /* Otomatik kayma, drag bittikten kısa süre sonra kaldığı yerden
       devam eder — sıçrama/reset yok */
    resumeBlockedUntilRef.current = performance.now() + RESUME_DELAY_MS;

    isDraggingRef.current = false;
    dragMovedRef.current = false;
    setIsDragging(false);
  }

  function handlePointerEnter(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") hoverPausedRef.current = true;
  }

  function handlePointerLeave(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") hoverPausedRef.current = false;
  }

  const groupClasses = "project-loop-group flex gap-4 pr-4 sm:gap-6 sm:pr-6";

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onDragStart={(event) => event.preventDefault()}
      className={cn(
        "project-loop relative overflow-hidden",
        /* Yatay hareket şeridi sürükler, dikey hareket sayfayı kaydırır */
        "cursor-grab [touch-action:pan-y]",
        isDragging && "cursor-grabbing select-none",
        fadeEdges && "project-loop-mask",
        className,
      )}
    >
      <div
        ref={trackRef}
        className="project-loop-track flex w-max will-change-transform"
      >
        <div ref={firstGroupRef} className={groupClasses}>
          {children}
        </div>
        {/* Yalnızca görsel döngü kopyası — erişilebilirlik dışı */}
        <div className={groupClasses} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
