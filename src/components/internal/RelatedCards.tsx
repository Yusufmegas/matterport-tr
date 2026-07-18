import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";
import { cn } from "@/lib/utils";
import { isBlockedRoute } from "@/config/feature-flags";

export interface RelatedCardItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface RelatedCardsProps {
  title?: string;
  description?: string;
  items: RelatedCardItem[];
  /** Slightly darker band */
  tone?: "base" | "surface";
  /** Hide the section title block (used on list pages with their own hero) */
  headerHidden?: boolean;
  ariaLabel?: string;
}

/** Icon + title + description + CTA card grid. Used for list pages,
 *  related sectors and recommended solutions — always real routes. */
export function RelatedCards({
  title,
  description,
  items,
  tone = "base",
  headerHidden = false,
  ariaLabel,
}: RelatedCardsProps) {
  /* GEÇİCİ: kapalı route'lara giden kartlar listelenmez (feature-flags). */
  const visibleItems = items.filter((item) => !isBlockedRoute(item.href));
  if (visibleItems.length === 0) return null;

  return (
    <section
      aria-label={ariaLabel ?? title}
      className={cn(
        "py-12 md:py-16",
        tone === "surface" && "border-y border-border-subtle bg-surface",
      )}
    >
      <Container>
        {!headerHidden && title ? (
          <div className="max-w-2xl">
            <SectionTitle>{title}</SectionTitle>
            {description ? (
              <p className="mt-3 text-base leading-relaxed text-muted">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        <ul
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5",
            !headerHidden && title ? "mt-8" : "",
          )}
        >
          {visibleItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex h-full flex-col rounded-xl border border-border-subtle p-6",
                    tone === "surface" ? "bg-background/60" : "bg-surface",
                    "transition-all duration-200 hover:border-accent/45 motion-safe:hover:-translate-y-[3px]",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-foreground transition-colors duration-200 group-hover:text-accent"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent">
                    Detayları İncele
                    <ArrowRight
                      className="size-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
