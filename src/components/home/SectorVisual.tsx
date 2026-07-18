/* ------------------------------------------------------------------ */
/* Sektör önizleme motifleri — saf, optimize inline SVG.              */
/* Ana çizgiler ~%70, ikincil %40, grid ~%10 görünürlük; kırmızı      */
/* vurgu kontrollü. Tümü dekoratif (aria-hidden, parent'ta).          */
/* ------------------------------------------------------------------ */

const VB = "0 0 480 360";

function Grid() {
  const dots = [];
  for (let r = 0; r <= 11; r++) {
    for (let c = 0; c <= 15; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * 32 + 8}
          cy={r * 32 + 8}
          r="0.9"
          className="fill-foreground/10"
        />,
      );
    }
  }
  return <g>{dots}</g>;
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox={VB}
      className="h-full w-full text-foreground"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <Grid />
      {children}
    </svg>
  );
}

/* 01 — İnşaat ve Mimarlık: çok katlı wireframe + vinç + kırmızı kat */
function Construction() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.2" className="stroke-foreground/70">
        <path d="M150 300 V120 H320 V300" />
        <path d="M150 165 H320 M150 210 H320 M150 255 H320" className="stroke-foreground/40" />
        <path d="M207 300 V120 M264 300 V120" className="stroke-foreground/40" strokeWidth="0.9" />
      </g>
      {/* vinç */}
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/70">
        <path d="M368 300 V84 M368 84 H452 M368 84 L340 116 M404 84 V108" />
        <path d="M368 108 L404 84 M452 84 V100" strokeWidth="0.9" className="stroke-foreground/40" />
      </g>
      <path d="M150 210 H320" strokeWidth="1.8" className="stroke-accent/85" />
      <circle cx="150" cy="210" r="3" className="fill-accent" />
      <circle cx="320" cy="210" r="3" className="fill-accent" />
      <line x1="100" y1="300" x2="452" y2="300" strokeWidth="1" className="stroke-foreground/50" />
    </Frame>
  );
}

/* 02 — Endüstri ve Lojistik: raf blokları + akış rotası */
function Industry() {
  return (
    <Frame>
      {[76, 156, 236, 316].map((x) => (
        <g key={x} fill="none" strokeWidth="1.1" className="stroke-foreground/60">
          <rect x={x} y="88" width="52" height="60" />
          <rect x={x} y="164" width="52" height="60" />
          <path d={`M${x} 118 h52 M${x} 194 h52`} className="stroke-foreground/35" strokeWidth="0.9" />
        </g>
      ))}
      <path
        d="M64 286 H180 V254 H300 V286 H420"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="6 5"
        className="stroke-accent/80"
      />
      <circle cx="64" cy="286" r="3.2" className="fill-accent" />
      <circle cx="300" cy="270" r="2.6" className="fill-accent/80" />
      <circle cx="420" cy="286" r="3.2" className="fill-accent" />
      <rect x="396" y="88" width="24" height="136" fill="none" strokeWidth="1" className="stroke-foreground/40" />
    </Frame>
  );
}

/* 03 — Otel ve Konaklama: koridor + oda blokları, kırmızı oda */
function Hotel() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/65">
        <rect x="88" y="96" width="304" height="176" />
        <path d="M88 184 H392" className="stroke-foreground/45" />
        {[146, 204, 262, 320].map((x) => (
          <path key={x} d={`M${x} 96 V166 M${x} 202 V272`} className="stroke-foreground/45" strokeWidth="0.9" />
        ))}
        <path d="M88 166 H392 M88 202 H392" strokeWidth="0.9" className="stroke-foreground/35" />
      </g>
      <rect x="204" y="96" width="58" height="70" fill="none" strokeWidth="1.6" className="stroke-accent/85" />
      <circle cx="233" cy="131" r="2.6" className="fill-accent" />
      <path d="M88 306 H392" strokeWidth="1" className="stroke-foreground/40" />
      <path d="M120 306 V290 M200 306 V290 M280 306 V290 M360 306 V290" strokeWidth="0.9" className="stroke-foreground/30" />
    </Frame>
  );
}

/* 04 — Gayrimenkul: daire planı + ölçü çizgileri */
function RealEstate() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.2" className="stroke-foreground/70">
        <rect x="128" y="100" width="224" height="170" />
        <path d="M128 190 H240 M240 100 V190 M240 190 V270 M296 190 H352 M296 190 V270" className="stroke-foreground/45" strokeWidth="1" />
        <path d="M240 140 A22 22 0 0 1 262 162" strokeWidth="0.9" className="stroke-foreground/40" />
      </g>
      {/* ölçü çizgileri */}
      <g strokeWidth="1" className="stroke-accent/80">
        <path d="M128 78 H352" fill="none" />
        <path d="M128 72 V84 M352 72 V84" fill="none" />
        <path d="M374 100 V270" fill="none" />
        <path d="M368 100 H380 M368 270 H380" fill="none" />
      </g>
      <circle cx="184" cy="230" r="3" className="fill-accent" />
      <circle cx="322" cy="152" r="3" className="fill-accent" />
    </Frame>
  );
}

/* 05 — Otomotiv ve Showroom: zemin perspektifi + araç + rota */
function Automotive() {
  return (
    <Frame>
      <g fill="none" strokeWidth="0.9" className="stroke-foreground/35">
        <path d="M96 292 L200 132 H280 L384 292 Z" />
        <path d="M138 292 L216 152 M240 292 L240 132 M342 292 L264 152" />
        <path d="M118 250 H362 M158 196 H322" />
      </g>
      {/* araç silüeti */}
      <g fill="none" strokeWidth="1.3" className="stroke-foreground/75">
        <path d="M176 236 q10 -22 40 -24 l30 -2 q26 2 42 18 l14 8 h12 q6 2 6 10 v8 h-16" />
        <path d="M188 262 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 M282 262 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0" />
        <path d="M214 262 H282 M176 236 q-6 2 -6 12 v6 h18" />
      </g>
      <path d="M120 312 C200 296 300 328 392 300" fill="none" strokeWidth="1.4" strokeDasharray="5 6" className="stroke-accent/80" />
      <circle cx="120" cy="312" r="3" className="fill-accent" />
      <circle cx="392" cy="300" r="3" className="fill-accent" />
    </Frame>
  );
}

/* 06 — Perakende ve Restoran: oturma planı + şube noktaları */
function Retail() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/65">
        <rect x="92" y="96" width="180" height="176" />
        {[
          [128, 140], [188, 140], [248, 140],
          [128, 200], [188, 200], [248, 200],
        ].map(([x, y], i) => (
          <g key={i} className="stroke-foreground/55">
            <circle cx={x} cy={y} r="13" strokeWidth="1" />
            <circle cx={x} cy={y} r="3.5" strokeWidth="0.9" className="stroke-foreground/35" />
          </g>
        ))}
        <path d="M92 240 H272" strokeWidth="0.9" className="stroke-foreground/35" />
      </g>
      {/* şube ağı */}
      <g strokeWidth="1" className="stroke-accent/70">
        <path d="M330 128 L392 176 L344 236 L302 190 Z" fill="none" strokeDasharray="4 5" />
      </g>
      {[
        [330, 128], [392, 176], [344, 236], [302, 190],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 4 : 2.6} className="fill-accent" />
      ))}
      <circle cx="188" cy="140" r="15" fill="none" strokeWidth="1.5" className="stroke-accent/85" />
    </Frame>
  );
}

/* 07 — Eğitim: kampüs blokları + dolaşım */
function Education() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/65">
        <rect x="96" y="96" width="108" height="76" />
        <rect x="276" y="96" width="108" height="76" />
        <rect x="96" y="212" width="108" height="76" />
        <rect x="276" y="212" width="108" height="76" />
        <path d="M132 96 V172 M168 96 V172 M312 96 V172 M348 96 V172" strokeWidth="0.8" className="stroke-foreground/30" />
      </g>
      <path
        d="M204 134 H276 M150 172 V212 M330 172 V212 M204 250 H276"
        fill="none"
        strokeWidth="1.4"
        className="stroke-accent/80"
      />
      <circle cx="240" cy="134" r="3" className="fill-accent" />
      <circle cx="240" cy="250" r="3" className="fill-accent" />
      <circle cx="150" cy="192" r="2.4" className="fill-accent/80" />
      <circle cx="330" cy="192" r="2.4" className="fill-accent/80" />
    </Frame>
  );
}

/* 08 — Sağlık: koridor planı + birim bağlantıları */
function Health() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/65">
        <path d="M92 156 H388 M92 204 H388" />
        {[128, 186, 244, 302].map((x) => (
          <g key={x} strokeWidth="1" className="stroke-foreground/50">
            <rect x={x} y="108" width="44" height="48" />
            <rect x={x} y="204" width="44" height="48" />
          </g>
        ))}
        <rect x="352" y="108" width="36" height="48" strokeWidth="1" className="stroke-foreground/50" />
      </g>
      {/* birim bağlantısı */}
      <path d="M150 156 V204 M266 156 V204" strokeWidth="1.4" className="stroke-accent/80" />
      <rect x="244" y="204" width="44" height="48" fill="none" strokeWidth="1.6" className="stroke-accent/85" />
      {/* sağlık işareti */}
      <g strokeWidth="1.6" className="stroke-accent/90">
        <path d="M410 124 v24 M398 136 h24" fill="none" />
      </g>
      <circle cx="410" cy="136" r="20" fill="none" strokeWidth="1" className="stroke-foreground/45" />
    </Frame>
  );
}

/* 09 — Yat ve Denizcilik: güverte planı + kesit */
function Marine() {
  return (
    <Frame>
      {/* güverte planı */}
      <g fill="none" strokeWidth="1.2" className="stroke-foreground/70">
        <path d="M96 140 Q240 76 400 128 Q416 134 400 152 Q240 196 96 140 Z" />
        <path d="M170 118 q60 -18 140 -2 M170 158 q60 18 140 4" strokeWidth="0.9" className="stroke-foreground/40" />
        <rect x="216" y="118" width="60" height="38" strokeWidth="1" className="stroke-foreground/50" />
      </g>
      {/* kesit */}
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/60">
        <path d="M120 268 H376 M136 244 H360 M154 292 Q240 320 322 292" />
        <path d="M120 268 Q240 236 376 268" strokeWidth="0.9" className="stroke-foreground/35" />
      </g>
      <path d="M216 118 h60" strokeWidth="1.8" className="stroke-accent/85" />
      <circle cx="246" cy="137" r="3" className="fill-accent" />
      <path d="M136 244 H360" strokeWidth="1.2" strokeDasharray="4 5" className="stroke-accent/60" />
    </Frame>
  );
}

/* 10 — Müze ve Kültürel Miras: cephe + eser noktaları */
function Museum() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.2" className="stroke-foreground/70">
        <path d="M110 288 V150 L240 92 L370 150 V288" />
        <path d="M110 288 H370" />
        {[150, 202, 254, 306].map((x) => (
          <path key={x} d={`M${x} 288 V180 A14 14 0 0 1 ${x + 24} 180 V288`} strokeWidth="1" className="stroke-foreground/50" />
        ))}
      </g>
      <path d="M110 150 L240 92 L370 150" strokeWidth="1.6" className="stroke-accent/80" />
      {/* eser noktaları */}
      {[
        [162, 236], [214, 236], [266, 236], [318, 236],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 1 ? 3.4 : 2.2} className={i === 1 ? "fill-accent" : "fill-foreground/55"} />
      ))}
      {/* koruma katmanı */}
      <rect x="96" y="80" width="288" height="222" fill="none" strokeWidth="0.9" strokeDasharray="5 6" className="stroke-accent/45" />
    </Frame>
  );
}

/* 11 — Ofis ve Coworking: çalışma alanı yerleşimi */
function Office() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/65">
        <rect x="92" y="92" width="296" height="184" />
        {/* masa kümeleri */}
        {[
          [124, 124], [124, 188], [216, 124], [216, 188],
        ].map(([x, y], i) => (
          <g key={i} strokeWidth="1" className="stroke-foreground/55">
            <rect x={x} y={y} width="52" height="20" />
            <rect x={x} y={y + 24} width="52" height="20" />
          </g>
        ))}
        {/* toplantı odası */}
        <rect x="308" y="120" width="56" height="64" strokeWidth="1" className="stroke-foreground/55" />
        <ellipse cx="336" cy="152" rx="16" ry="9" strokeWidth="0.9" className="stroke-foreground/40" />
      </g>
      <rect x="308" y="212" width="56" height="40" fill="none" strokeWidth="1.6" className="stroke-accent/85" />
      <path d="M92 240 H276" strokeWidth="1.2" strokeDasharray="4 5" className="stroke-accent/60" />
      <circle cx="336" cy="232" r="2.6" className="fill-accent" />
    </Frame>
  );
}

/* 12 — Fuar ve Etkinlik: stand yerleşimi + ziyaretçi rotası */
function Expo() {
  return (
    <Frame>
      <g fill="none" strokeWidth="1.1" className="stroke-foreground/65">
        {[
          [100, 100], [196, 100], [292, 100],
          [100, 220], [196, 220], [292, 220],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="72" height="52" />
        ))}
      </g>
      <rect x="196" y="220" width="72" height="52" fill="none" strokeWidth="1.6" className="stroke-accent/85" />
      {/* ziyaretçi rotası */}
      <path
        d="M88 316 H136 V186 H232 V152 H328 V186 H400 V300"
        fill="none"
        strokeWidth="1.4"
        strokeDasharray="6 5"
        className="stroke-accent/75"
      />
      <circle cx="88" cy="316" r="3.2" className="fill-accent" />
      <circle cx="400" cy="300" r="3.2" className="fill-accent" />
      <circle cx="232" cy="186" r="2.4" className="fill-accent/80" />
    </Frame>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "insaat-mimarlik": Construction,
  "endustri-lojistik": Industry,
  "otel-konaklama": Hotel,
  gayrimenkul: RealEstate,
  "otomotiv-showroom": Automotive,
  "perakende-restoran": Retail,
  egitim: Education,
  saglik: Health,
  "yat-denizcilik": Marine,
  "muze-kulturel-miras": Museum,
  "ofis-coworking": Office,
  "fuar-etkinlik": Expo,
};

/** Slug için sektör motifi; bilinmeyen slug'da genel plan motifi. */
export function SectorVisual({ slug }: { slug: string }) {
  const Visual = VISUALS[slug] ?? RealEstate;
  return <Visual />;
}
