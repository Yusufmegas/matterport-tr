import { trustItems } from "@/data/trust-items";
import { Container } from "@/components/ui/Container";

/**
 * Thin horizontal band attached directly under the hero — reads as a
 * continuation of it, not a standalone section (~100px tall on desktop).
 */
export function TrustStrip() {
  return (
    <section
      aria-label="Teknoloji ve güven göstergeleri"
      className="border-b border-border-subtle bg-surface"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 py-4 sm:grid-cols-3 lg:flex lg:items-stretch lg:gap-0 lg:divide-x lg:divide-border-subtle lg:py-8">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex items-center gap-3 py-1 lg:flex-1 lg:justify-center lg:px-6 lg:py-0"
              >
                <span
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent"
                  aria-hidden="true"
                >
                  <Icon className="size-4" />
                </span>
                <p className="max-w-[170px] text-[13px] font-semibold leading-snug tracking-tight text-foreground">
                  {item.title}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
