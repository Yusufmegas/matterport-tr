type ClassValue = string | number | null | undefined | false;

/**
 * Lightweight className combiner — joins truthy values with a space.
 * Kept dependency-free on purpose; swap for `clsx` only if conditional
 * object syntax becomes genuinely necessary.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
