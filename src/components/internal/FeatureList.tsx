import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";

interface FeatureListProps {
  title: string;
  items: string[];
}

/** Two-column checklist for feature / scope sections. */
export function FeatureList({ title, items }: FeatureListProps) {
  if (items.length === 0) return null;

  return (
    <section
      aria-label={title}
      className="border-y border-border-subtle bg-surface py-12 md:py-16"
    >
      <Container className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionTitle>{title}</SectionTitle>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 border-b border-border-subtle/60 pb-3 text-sm leading-relaxed text-foreground"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
