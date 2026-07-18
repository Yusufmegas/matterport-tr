import fs from "node:fs";
import path from "node:path";
import { HeroExperience } from "@/components/home/HeroExperience";

/**
 * Resolves a hero image from public/images/hero/ at build time.
 * When the real assets are added, the gradient placeholder disappears
 * automatically on the next build — no code change needed.
 */
function resolveHeroImage(fileName: string): string | null {
  const filePath = path.join(process.cwd(), "public", "images", "hero", fileName);
  return fs.existsSync(filePath) ? `/images/hero/${fileName}` : null;
}

/** Server wrapper: yalnızca görselleri çözer; tüm tur etkileşimi
 *  HeroExperience client bileşenindedir. */
export function Hero() {
  const dayImage =
    resolveHeroImage("hero-day.webp") ?? resolveHeroImage("hero-fallback.jpg");
  const nightImage =
    resolveHeroImage("hero-night.webp") ?? resolveHeroImage("hero-fallback.jpg");

  return <HeroExperience dayImage={dayImage} nightImage={nightImage} />;
}
