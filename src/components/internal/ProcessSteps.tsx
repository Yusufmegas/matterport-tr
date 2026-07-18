import type { ProcessStep } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";
import { cn } from "@/lib/utils";

interface ProcessStepsProps {
  title: string;
  steps: ProcessStep[];
  /** Küçük kırmızı üst etiket (opsiyonel) */
  eyebrow?: string;
}

/** Numbered steps — horizontal on desktop, vertical on mobile. */
export function ProcessSteps({ title, steps, eyebrow }: ProcessStepsProps) {
  if (steps.length === 0) return null;

  return (
    <section aria-label={title} className="py-12 md:py-16">
      <Container>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <SectionTitle>{title}</SectionTitle>
        <ol
          className={cn(
            "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2",
            steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
          )}
        >
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                {/* Connector line (desktop) */}
                {index < steps.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-border-subtle lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <h3 className="mt-3 text-sm font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              {step.description ? (
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {step.description}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
