import { Container } from "@/components/ui/Container";
import { SectorsIndex } from "@/components/home/SectorsIndex";

/**
 * "Sektörler" — tipografik sektör dizini + dinamik teknik önizleme.
 * Masaüstünde üç kolon (sticky tanıtım · numaralı liste · sticky panel),
 * mobilde accordion. Etkileşim SectorsIndex'te (client); kabuk server kalır.
 */
export function SectorsSection() {
  return (
    <section
      id="sektorler"
      aria-labelledby="sectors-title"
      className="py-16 md:py-20"
    >
      <Container>
        <SectorsIndex />
      </Container>
    </section>
  );
}
