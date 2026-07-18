import { cn } from "@/lib/utils";

interface SectionTitleProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

/** Consistent h2 for internal page content blocks. */
export function SectionTitle({ id, children, className }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={cn(
        "font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
