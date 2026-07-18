import { ArrowRight, Check } from "lucide-react";
import { isBlockedRoute } from "@/config/feature-flags";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";
import { cn } from "@/lib/utils";

interface ItemsGridProps {
  title: string;
  items: string[];
  /** Icon shown on every card (default: Check) */
  icon?: LucideIcon;
  /** Desktop column count */
  columns?: 3 | 4;
  /** Slightly darker band to break up long pages */
  tone?: "base" | "surface";
  /** Optional CTA rendered under the grid */
  cta?: { label: string; href: string };
}

/** Generic compact card grid for benefits, outputs and use cases. */
export function ItemsGrid({
  title,
  items,
  icon: Icon = Check,
  columns = 3,
  tone = "base",
  cta,
}: ItemsGridProps) {
  /* GEÇİCİ: kapalı route'a giden CTA render edilmez (feature-flags). */
  const visibleCta = cta && !isBlockedRoute(cta.href) ? cta : undefined;
  if (items.length === 0) return null;

  return (
    <section
      aria-label={title}
      className={cn(
        "py-12 md:py-16",
        tone === "surface" && "border-y border-border-subtle bg-surface",
      )}
    >
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <ul
          className={cn(
            "mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2",
            columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
          )}
        >
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                "flex items-start gap-3 rounded-lg border border-border-subtle p-4",
                tone === "surface" ? "bg-background/60" : "bg-surface",
              )}
            >
              <span
                className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent"
                aria-hidden="true"
              >
                <Icon className="size-3.5" />
              </span>
              <span className="text-sm font-medium leading-relaxed text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {visibleCta ? (
          <div className="mt-8">
            <Button href={visibleCta.href} variant="outline" size="md">
              {visibleCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
