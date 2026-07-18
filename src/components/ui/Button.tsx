import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "contrast";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface AnchorButtonProps
  extends BaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

interface NativeButtonProps
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium " +
  "transition-all duration-200 select-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_8px_24px_-8px_var(--ring)] " +
    "hover:bg-accent-strong hover:shadow-[0_10px_28px_-6px_var(--ring)]",
  outline:
    "border border-border-subtle bg-surface/60 text-foreground " +
    "hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:text-foreground hover:bg-surface-2",
  /* Light surface on dark theme, dark on light — no red glow */
  contrast:
    "bg-foreground text-background hover:opacity-90 " +
    "shadow-[0_6px_20px_-10px_rgba(0,0,0,0.5)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...anchorProps } =
      rest as Omit<AnchorButtonProps, keyof BaseProps> & { href: string };
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as Omit<NativeButtonProps, keyof BaseProps>)}
    >
      {children}
    </button>
  );
}
