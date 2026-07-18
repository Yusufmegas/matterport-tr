import Image from "next/image";
import { resolveExistingImages } from "@/lib/assets";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";

interface ProjectGalleryProps {
  projectTitle: string;
  imageCandidates: string[];
}

/** Renders ONLY real, existing images — no fake gallery placeholders.
 *  With no files present the whole section is omitted. */
export function ProjectGallery({
  projectTitle,
  imageCandidates,
}: ProjectGalleryProps) {
  const images = resolveExistingImages(imageCandidates);
  if (images.length === 0) return null;

  return (
    <section aria-label="Proje galerisi" className="py-12 md:py-16">
      <Container>
        <SectionTitle>Proje Galerisi</SectionTitle>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <li
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle"
            >
              <Image
                src={src}
                alt={`${projectTitle} proje görseli ${index + 1}`}
                fill
                sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
