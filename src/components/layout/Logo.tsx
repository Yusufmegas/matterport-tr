import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Kurumsal Matterport TR logosu — tema eşleştirmeli gerçek marka dosyaları:
 *   public/brand/matterport-tr-logo.svg        → koyu yazılı (açık tema)
 *   public/brand/matterport-tr-logo-light.svg  → beyaz yazılı (koyu tema)
 *
 * İki sürüm de render edilir; görünürlük CSS (dark variant) ile seçilir —
 * tema geçişinde hydration farkı oluşmaz. SVG src'lerde next/image
 * otomatik unoptimized çalışır. Oran 7.34:1; width/height sabitlenerek
 * layout shift engellenir.
 */
export function Logo({ className }: LogoProps) {
  const shared = "h-7 w-auto";

  return (
    <Link
      href="/"
      aria-label="Matterport TR — ana sayfa"
      className={cn(
        "inline-flex items-center",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
    >
      <Image
        src="/brand/matterport-tr-logo.svg"
        alt="Matterport TR"
        width={206}
        height={28}
        priority
        className={cn(shared, "object-contain dark:hidden")}
      />
      <Image
        src="/brand/matterport-tr-logo-light.svg"
        alt="Matterport TR"
        width={206}
        height={28}
        priority
        className={cn(shared, "hidden object-contain dark:block")}
      />
    </Link>
  );
}
