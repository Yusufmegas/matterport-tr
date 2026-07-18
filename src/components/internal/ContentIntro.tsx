import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";

interface ContentIntroProps {
  title: string;
  paragraphs: string[];
}

export function ContentIntro({ title, paragraphs }: ContentIntroProps) {
  if (paragraphs.length === 0) return null;

  return (
    <section aria-label={title} className="py-12 md:py-16">
      <Container className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionTitle>{title}</SectionTitle>
        </div>
        <div className="space-y-4 lg:col-span-8">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="max-w-3xl text-base leading-relaxed text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
