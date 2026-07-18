import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

/** Native details/summary accordion — no client JS, keyboard accessible. */
export function FaqSection({
  items,
  title = "Sık Sorulan Sorular",
}: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section aria-label={title} className="py-12 md:py-16">
      <Container className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionTitle>{title}</SectionTitle>
        </div>
        <div className="lg:col-span-8">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-b border-border-subtle"
            >
              <summary
                className={
                  "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4 " +
                  "text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent " +
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
                  "[&::-webkit-details-marker]:hidden sm:text-base"
                }
              >
                {item.question}
                <Plus
                  className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-5 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
