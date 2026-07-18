"use client";

import { useState } from "react";
import {
  Building2,
  Check,
  ChevronDown,
  FileText,
  LayoutGrid,
  Package,
  Ruler,
  ScanLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TechnicalOutput } from "@/data/technical-outputs";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  scan: ScanLine,
  building: Building2,
  ruler: Ruler,
  layout: LayoutGrid,
  file: FileText,
};

/** Tıklanamaz, salt bilgi amaçlı dosya formatı etiketi. */
function FormatChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface-2 px-2 py-1 font-mono text-[11px] font-medium tracking-wide text-foreground">
      <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
      {label}
    </span>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
        {title}
      </h4>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted"
          >
            <Check
              className="mt-1 size-3.5 shrink-0 text-accent"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Ana teknik çıktı kartı: kısa görünüm + "Teknik Detayları Gör"
 * accordion'u (gerçek button, aria-expanded/aria-controls).
 */
export function TechnicalOutputCard({ output }: { output: TechnicalOutput }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[output.iconKey] ?? FileText;
  const panelId = `${output.id}-teknik-detaylar`;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 transition-colors duration-200 hover:border-accent/30 lg:p-7">
      {/* Başlık bloğu */}
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent"
        >
          <Icon className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-accent">
            {output.eyebrow}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold leading-snug tracking-tight text-foreground">
            {output.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-secondary">
        {output.description}
      </p>

      {/* Format chip'leri — tıklanamaz etiketler */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {output.formats.map((format) => (
          <FormatChip key={format} label={format} />
        ))}
      </div>

      {/* Kısa özet: paket içeriğinin ilk üç kalemi */}
      <ul className="mt-4 space-y-1.5">
        {output.includedItems.slice(0, 3).map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
          >
            <Check
              className="mt-1 size-3.5 shrink-0 text-accent"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Accordion */}
      <div className="mt-5 border-t border-border-subtle pt-4 md:mt-auto">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "flex min-h-[44px] w-full items-center justify-between gap-3 text-sm font-semibold text-foreground",
            "transition-colors hover:text-accent",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          )}
        >
          {open ? "Detayları Gizle" : "Teknik Detayları Gör"}
          <ChevronDown
            className={cn(
              "size-4 shrink-0 transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>

        <div id={panelId} hidden={!open} className="space-y-5 pt-4">
          <DetailList title="PAKET İÇERİĞİ" items={output.includedItems} />
          <DetailList title="KULLANIM ALANLARI" items={output.useCases} />
          {output.compatibleSoftware ? (
            <div>
              <h4 className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted">
                UYUMLU YAZILIM ÖRNEKLERİ
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {output.compatibleSoftware.map((software) => (
                  <span
                    key={software}
                    className="rounded-md border border-border-subtle bg-surface-2 px-2 py-1 text-xs text-foreground"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {output.note ? (
            <p className="rounded-lg border border-border-subtle bg-surface-2/60 px-3.5 py-2.5 text-xs leading-relaxed text-muted">
              {output.note}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
