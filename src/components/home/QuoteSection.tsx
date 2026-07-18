import Image from "next/image";
import { Map, Ruler } from "lucide-react";
import { resolvePublicImage } from "@/lib/assets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/home/QuoteForm";

const trustPoints = [
  { label: "Türkiye genelinde hizmet", icon: Map },
  { label: "Kurumsal ve teknik projelere özel planlama", icon: Ruler },
];

export function QuoteSection() {
  /* Real CTA imagery drops in automatically once the file exists —
     until then the section keeps its architectural gradient backdrop. */
  const backgroundSrc = resolvePublicImage(
    "images/cta/project-planning.webp",
    "images/cta/project-planning.jpg",
  );

  return (
    <section
      id="teklif"
      aria-labelledby="quote-title"
      className="relative overflow-hidden border-y border-border-subtle bg-surface"
    >
      {/* Backdrop: image when available, quiet architectural detail otherwise */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {backgroundSrc ? (
          <>
            <Image
              src={backgroundSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-surface/70" />
          </>
        ) : (
          <>
            <div className="tech-grid absolute inset-0" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 80% at 85% 20%, var(--surface-2) 0%, transparent 60%)",
              }}
            />
            {/* Faint facade lines rising from the bottom edge */}
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)",
                backgroundSize: "88px 100%",
                maskImage:
                  "linear-gradient(180deg, transparent 0%, black 100%)",
              }}
            />
          </>
        )}
      </div>

      <Container className="relative grid gap-10 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Left: pitch */}
        <div>
          <SectionHeading
            id="quote-title"
            eyebrow="PROJENİZİ KONUŞALIM"
            title="Projeniz için doğru çözümü birlikte planlayalım."
            description="Projenizin temel bilgilerini paylaşın. Ekibimiz ihtiyaçlarınıza uygun çözüm, uygulama planı ve fiyatlandırmayı hazırlasın."
            align="left"
          />

          <ul className="mt-8 space-y-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <li
                  key={point.label}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <span
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent"
                    aria-hidden="true"
                  >
                    <Icon className="size-4" />
                  </span>
                  {point.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: form card */}
        <QuoteForm />
      </Container>
    </section>
  );
}
