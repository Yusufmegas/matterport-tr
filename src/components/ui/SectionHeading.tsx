import { cn } from "@/lib/utils";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

interface SectionHeadingProps {
  /** id of the h2 — reference it from the section's aria-labelledby */
  id: string;
  /** Pre-uppercased in Turkish (CSS uppercase breaks dotted İ) */
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "mx-auto max-w-2xl text-center",
        !centered && "max-w-xl",
        className,
      )}
    >
      <p className="text-xs font-semibold tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <AnimatedHeading
        as="h2"
        id={id}
        text={title}
        variant="section"
        className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
      />
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
