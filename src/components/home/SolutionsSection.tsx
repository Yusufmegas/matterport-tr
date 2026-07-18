import { Container } from "@/components/ui/Container";
import { SolutionsStack } from "@/components/home/SolutionsStack";

/**
 * "Çözümler" — sticky split + scroll stack bölümü.
 * Sol sabit editoryal kolon + sağda üst üste yaklaşan üç çözüm paneli.
 * Etkileşim SolutionsStack'te (client); bu kabuk server component kalır.
 */
export function SolutionsSection() {
  return (
    <section
      id="cozumler"
      aria-labelledby="solutions-title"
      className="py-16 md:py-20"
    >
      <Container>
        <SolutionsStack />
      </Container>
    </section>
  );
}
