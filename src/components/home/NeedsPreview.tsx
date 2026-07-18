import type { NeedItem, NeedPreviewType } from "@/types";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Teknik motifler — saf SVG, dekoratif, deterministik.               */
/* Gerçek görsel/stok fotoğraf kullanılmaz; çizgiler tema             */
/* token'larından (currentColor + accent) renk alır.                  */
/* ------------------------------------------------------------------ */

/** Deterministik nokta bulutu — SSR/CSR uyumu için formül tabanlı. */
function cloudDots(count: number, seed: number, w: number, h: number) {
  const dots: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const fx = ((i * 73 + seed * 31) % 997) / 997;
    const fy = ((i * 151 + seed * 47) % 991) / 991;
    dots.push({ x: 20 + fx * (w - 40), y: 16 + fy * (h - 32) });
  }
  return dots;
}

function TourMotif() {
  const dots = cloudDots(46, 3, 420, 200);
  return (
    <svg
      viewBox="0 0 420 220"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
    >
      {/* nokta bulutu */}
      <g className="needs-drift">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r="1.1"
            className="fill-foreground/25"
          />
        ))}
      </g>
      {/* katmanlı dollhouse — üst üste kat çizgileri */}
      <g fill="none" strokeWidth="1" className="stroke-foreground/45">
        <path d="M130 150 L210 110 L290 150 L210 190 Z" />
        <path d="M130 112 L210 72 L290 112 L210 152 Z" className="stroke-foreground/60" />
        <path d="M130 74 L210 34 L290 74 L210 114 Z" className="stroke-foreground/30" />
        {/* köşe dikmeleri */}
        <path d="M130 74 V150 M290 74 V150 M210 34 V110 M210 114 V190" className="stroke-foreground/20" />
      </g>
      {/* konum noktaları */}
      <g>
        <circle cx="210" cy="131" r="3.5" className="fill-accent needs-pulse" />
        <circle cx="166" cy="98" r="3" className="fill-accent needs-pulse" style={{ animationDelay: "1.1s" }} />
        <circle cx="256" cy="128" r="3" className="fill-accent needs-pulse" style={{ animationDelay: "2.2s" }} />
      </g>
    </svg>
  );
}

function DocsMotif() {
  return (
    <svg
      viewBox="0 0 420 220"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
    >
      {/* üst üste gelen belge/tarama katmanları */}
      <g fill="none" strokeWidth="1">
        <rect x="52" y="42" width="150" height="96" className="stroke-foreground/25" />
        <rect x="64" y="32" width="150" height="96" className="stroke-foreground/40" />
        <rect x="76" y="22" width="150" height="96" className="stroke-foreground/60" />
        {/* önce/sonra çizgisel yapı */}
        <rect x="268" y="34" width="104" height="70" className="stroke-foreground/35" />
        <path d="M276 92 L306 60 L330 78 L362 44" className="stroke-accent/70" />
        <path d="M276 88 L302 70 L332 84 L362 62" className="stroke-foreground/30" strokeDasharray="3 4" />
      </g>
      {/* tarama noktaları */}
      <g className="needs-drift">
        {[96, 128, 160, 192].map((x, i) => (
          <circle key={x} cx={x} cy={64 + i * 12} r="1.6" className="fill-foreground/40" />
        ))}
      </g>
      {/* tarih çizgisi */}
      <g>
        <line x1="52" y1="176" x2="372" y2="176" strokeWidth="1" className="stroke-foreground/40" />
        {[52, 132, 212, 292, 372].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="170" x2={x} y2="182" strokeWidth="1" className="stroke-foreground/50" />
            <circle
              cx={x}
              cy="176"
              r={i === 3 ? 3 : 0}
              className="fill-accent needs-pulse"
            />
          </g>
        ))}
        <text x="52" y="200" className="fill-foreground/55" fontSize="9" fontFamily="var(--font-sans)">HAFTA 01</text>
        <text x="340" y="200" className="fill-foreground/55" fontSize="9" fontFamily="var(--font-sans)">HAFTA 12</text>
      </g>
    </svg>
  );
}

function FilesMotif() {
  const dots = cloudDots(30, 7, 200, 150);
  return (
    <svg
      viewBox="0 0 420 220"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
    >
      {/* teknik kat planı çizgileri */}
      <g fill="none" strokeWidth="1" className="stroke-foreground/55">
        <path d="M60 40 H240 V180 H60 Z" />
        <path d="M60 110 H140 M140 40 V110 M180 110 H240 M180 110 V180" className="stroke-foreground/35" />
        {/* kapı yayları */}
        <path d="M140 82 A24 24 0 0 1 164 106" className="stroke-foreground/30" />
        <path d="M160 180 A20 20 0 0 1 180 160" className="stroke-foreground/30" />
      </g>
      {/* nokta bulutu grid'i */}
      <g className="needs-drift">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x + 190} cy={d.y + 30} r="1" className="fill-foreground/25" />
        ))}
      </g>
      {/* koordinat eksenleri */}
      <g strokeWidth="1" fill="none">
        <path d="M300 176 H364" className="stroke-foreground/60" />
        <path d="M300 176 V116" className="stroke-foreground/60" />
        <path d="M300 176 L268 200" className="stroke-foreground/40" />
        <path d="M360 172 L364 176 L360 180" className="stroke-foreground/60" />
        <path d="M296 120 L300 116 L304 120" className="stroke-foreground/60" />
      </g>
      <g fontSize="9" fontFamily="var(--font-sans)">
        <text x="368" y="180" className="fill-foreground/60">X</text>
        <text x="306" y="116" className="fill-foreground/60">Y</text>
        <text x="258" y="208" className="fill-foreground/60">Z</text>
      </g>
      {/* ölçü vurgusu */}
      <line x1="60" y1="26" x2="240" y2="26" strokeWidth="1" className="stroke-accent/60" />
      <circle cx="60" cy="26" r="2" className="fill-accent needs-pulse" />
      <circle cx="240" cy="26" r="2" className="fill-accent needs-pulse" style={{ animationDelay: "1.6s" }} />
    </svg>
  );
}

function MapsMotif() {
  return (
    <svg
      viewBox="0 0 420 220"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
    >
      {/* soyut harita grid'i */}
      <g fill="none" strokeWidth="1" className="stroke-foreground/20">
        {[60, 130, 200, 270, 340].map((x) => (
          <line key={x} x1={x} y1="20" x2={x - 24} y2="200" />
        ))}
        {[48, 92, 136, 180].map((y) => (
          <line key={y} x1="30" y1={y} x2="390" y2={y + 16} />
        ))}
      </g>
      {/* yol çizgisi */}
      <path
        d="M60 176 C130 150 150 96 216 92 C270 88 300 120 356 66"
        fill="none"
        strokeWidth="1.4"
        className="stroke-accent/70"
      />
      {/* şube noktaları */}
      <g className="needs-drift">
        {[
          { x: 112, y: 150 },
          { x: 258, y: 96 },
          { x: 322, y: 96 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2" className="fill-foreground/55" />
        ))}
      </g>
      {/* konum pinleri */}
      {[
        { x: 216, y: 92, d: "0s" },
        { x: 356, y: 66, d: "1.4s" },
        { x: 60, y: 176, d: "2.6s" },
      ].map((p) => (
        <g key={p.x}>
          <line x1={p.x} y1={p.y} x2={p.x} y2={p.y - 16} strokeWidth="1" className="stroke-accent/80" />
          <circle cx={p.x} cy={p.y - 20} r="4" fill="none" strokeWidth="1.2" className="stroke-accent" />
          <circle cx={p.x} cy={p.y - 20} r="1.4" className="fill-accent needs-pulse" style={{ animationDelay: p.d }} />
        </g>
      ))}
    </svg>
  );
}

const MOTIFS: Record<NeedPreviewType, () => React.JSX.Element> = {
  tour: TourMotif,
  docs: DocsMotif,
  files: FilesMotif,
  maps: MapsMotif,
};

/** Teknik dosya formatı chip'leri — yalnızca "files" önizlemesinde. */
const FILE_CHIPS = ["XYZ", "E57", "RVT", "IFC", "DWG"];

interface NeedsPreviewProps {
  need: NeedItem;
  /** Mobil accordion içinde daha kısa motif alanı kullanılır. */
  compact?: boolean;
}

/**
 * Sağ (masaüstü) / accordion içi (mobil) teknik önizleme içeriği.
 * Salt sunum — state ve etkileşim NeedsSelector'dadır.
 */
export function NeedsPreview({ need, compact = false }: NeedsPreviewProps) {
  const Motif = MOTIFS[need.previewType];

  return (
    <div className="flex h-full flex-col">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">
        {need.eyebrow}
      </p>

      <p
        className={cn(
          "mt-3 max-w-md text-[15px] leading-relaxed text-secondary",
          !compact && "min-h-[4.5rem]",
        )}
      >
        {need.previewDescription}
      </p>

      <ul className="mt-5 space-y-2.5">
        {need.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-foreground"
          >
            <span
              aria-hidden="true"
              className="h-px w-4 shrink-0 bg-accent/70"
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Teknik motif alanı */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none relative mt-6 overflow-hidden border-t border-border-subtle pt-4",
          compact ? "h-40" : "mt-auto h-56",
        )}
      >
        {/* çok hafif scan line */}
        <span className="needs-scan-line" />
        <Motif />
        {need.previewType === "files" ? (
          <div className="absolute bottom-2 left-0 flex flex-wrap gap-1.5">
            {FILE_CHIPS.map((chip, i) => (
              <span
                key={chip}
                className="needs-chip-fade border border-border-subtle px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-muted"
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
