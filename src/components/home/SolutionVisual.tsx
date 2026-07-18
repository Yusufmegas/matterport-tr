import type { SolutionVisualType } from "@/types";

/* ------------------------------------------------------------------ */
/* Çözüm panelleri için büyük teknik görseller — saf, optimize SVG.   */
/* Ana çizgiler %55–80, ikincil grid %8–16 görünürlükte; kırmızı      */
/* vurgu kontrollü fakat belirgin. Tümü dekoratif (aria-hidden).      */
/* ------------------------------------------------------------------ */

/** Deterministik yardımcı — SSR/CSR uyumu için formül tabanlı. */
function jitter(i: number, seed: number, range: number) {
  return (((i * 73 + seed * 131) % 199) / 199 - 0.5) * range;
}

function DotGrid({ w, h, gap = 30 }: { w: number; h: number; gap?: number }) {
  const cols = Math.floor(w / gap);
  const rows = Math.floor(h / gap);
  const dots = [];
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + 12}
          cy={r * gap + 12}
          r="0.9"
          className="fill-foreground/12"
        />,
      );
    }
  }
  return <g>{dots}</g>;
}

/** 01 — Perspektif ticari mekân wireframe'i, kırmızı seçili kenarlar. */
function WireframeVisual() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <DotGrid w={480} h={420} />
      {/* zemin çizgisi */}
      <line x1="30" y1="330" x2="450" y2="330" strokeWidth="1" className="stroke-foreground/30" />

      {/* ana bina kütlesi — iki nokta perspektif hissi */}
      <g fill="none" strokeWidth="1.3" className="stroke-foreground/70">
        {/* ön cephe */}
        <path d="M120 330 V150 L250 110 V330 Z" />
        {/* yan cephe */}
        <path d="M250 110 L390 156 V330 H250" />
        {/* çatı */}
        <path d="M120 150 L250 110 L390 156" />
      </g>

      {/* cephe bölmeleri */}
      <g fill="none" strokeWidth="0.9" className="stroke-foreground/40">
        <path d="M120 210 L250 176 M120 270 L250 244" />
        <path d="M250 176 L390 214 M250 244 L390 272" />
        <path d="M163 330 V137 M207 330 V123" />
        <path d="M296 330 V125 M342 330 V140" />
      </g>

      {/* kırmızı seçili kenarlar */}
      <g fill="none" strokeWidth="1.6" className="sol-glow stroke-accent/85">
        <path d="M250 110 V330" />
        <path d="M120 150 L250 110 L390 156" />
      </g>
      <g className="sol-glow">
        <circle cx="250" cy="110" r="3" className="fill-accent" />
        <circle cx="120" cy="150" r="2.4" className="fill-accent" />
        <circle cx="390" cy="156" r="2.4" className="fill-accent" />
      </g>

      {/* zemin yansıması — aynalanmış, soluk */}
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/14">
        <path d="M120 330 V382 L250 398 V330" />
        <path d="M250 398 L390 380 V330" />
      </g>
      <line x1="250" y1="330" x2="250" y2="398" strokeWidth="1.2" className="stroke-accent/25" />
    </svg>
  );
}

/** 02 — İzometrik dollhouse / kat planı, kırmızı aktif katman. */
function DollhouseVisual() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <DotGrid w={480} h={420} />

      {/* alt kat — plan katmanı */}
      <g fill="none" strokeWidth="1.2" className="stroke-foreground/55">
        <path d="M110 300 L240 250 L370 300 L240 350 Z" />
        {/* oda duvarları */}
        <path d="M175 275 L305 325 M240 250 V300 M240 300 L175 325 M240 300 L318 280" className="stroke-foreground/40" strokeWidth="1" />
      </g>

      {/* orta kat — kırmızı aktif katman */}
      <g fill="none" strokeWidth="1.5" className="sol-layer stroke-accent/80">
        <path d="M110 232 L240 182 L370 232 L240 282 Z" />
        <path d="M175 207 L305 257 M240 182 V232 M240 232 L160 262" strokeWidth="1.1" className="stroke-accent/55" />
      </g>
      <circle cx="240" cy="232" r="3" className="sol-layer fill-accent" />

      {/* üst kat — plan katmanı */}
      <g fill="none" strokeWidth="1.2" className="stroke-foreground/70">
        <path d="M110 164 L240 114 L370 164 L240 214 Z" />
        <path d="M175 139 L305 189 M240 114 V164 M240 164 L305 139 M240 164 L162 194 M300 132 L332 148"
          className="stroke-foreground/45" strokeWidth="1" />
      </g>

      {/* katları bağlayan dikmeler */}
      <g strokeWidth="0.9" className="stroke-foreground/30">
        <path d="M110 164 V300 M370 164 V300 M240 114 V182 M240 282 V350" fill="none" />
      </g>

      {/* kat etiketleri */}
      <g fontSize="10" fontFamily="var(--font-sans)" className="fill-foreground/55">
        <text x="392" y="168">KAT 2</text>
        <text x="392" y="236" className="fill-accent/90">KAT 1</text>
        <text x="392" y="304">ZEMİN</text>
      </g>
    </svg>
  );
}

/** 03 — Nokta bulutu dalga yüzeyi, format/koordinat mikro etiketleri. */
function PointCloudVisual() {
  const rows = 9;
  const cols = 22;
  const points: { x: number; y: number; r: number; red: boolean }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 40 + c * 19 + jitter(c + r * cols, 3, 6);
      const wave =
        Math.sin((c / cols) * Math.PI * 2 + r * 0.7) * 26 +
        Math.sin((c / cols) * Math.PI * 5) * 8;
      const y = 90 + r * 30 + wave + jitter(c * r, 7, 4);
      points.push({
        x,
        y,
        r: ((c + r) * 37) % 11 === 0 ? 2 : 1.2,
        red: ((c + r * 3) * 53) % 17 === 0,
      });
    }
  }
  /* satır başına ince bağlantı çizgileri */
  const lines = Array.from({ length: rows }, (_, r) => {
    const rowPts = points.slice(r * cols, (r + 1) * cols);
    return rowPts.map((p) => `${p.x},${p.y}`).join(" ");
  });

  return (
    <svg
      viewBox="0 0 480 420"
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <DotGrid w={480} h={420} gap={34} />

      <g className="sol-drift">
        {lines.map((pts, i) => (
          <polyline
            key={i}
            points={pts}
            fill="none"
            strokeWidth="0.7"
            className={i === 4 ? "stroke-accent/40" : "stroke-foreground/16"}
          />
        ))}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            className={p.red ? "fill-accent/90" : "fill-foreground/60"}
          />
        ))}
      </g>

      {/* koordinat mikro etiketleri */}
      <g fontSize="10" fontFamily="var(--font-sans)" className="fill-foreground/55">
        <text x="40" y="44">E57 · NOKTA BULUTU</text>
        <text x="356" y="44">X 412.6 · Y 87.4</text>
        <text x="40" y="398">±20 MM HASSASİYET</text>
        <text x="384" y="398" className="fill-accent/90">Z 14.20</text>
      </g>
    </svg>
  );
}

const VISUALS: Record<SolutionVisualType, () => React.JSX.Element> = {
  wireframe: WireframeVisual,
  dollhouse: DollhouseVisual,
  pointcloud: PointCloudVisual,
};

export function SolutionVisual({ type }: { type: SolutionVisualType }) {
  const Visual = VISUALS[type];
  return <Visual />;
}
