import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, ScanLine } from "lucide-react";
import type { ProjectPageItem } from "@/types";
import { resolvePublicImage } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/internal/Breadcrumbs";
import { cn } from "@/lib/utils";

const placeholderClasses: Record<ProjectPageItem["variant"], string> = {
  marine: "ph-project-marine",
  industrial: "ph-project-industrial",
  aviation: "ph-project-aviation",
  hospitality: "ph-project-hospitality",
  retail: "ph-project-retail",
  construction: "ph-project-construction",
};

interface ProjectHeroProps {
  project: ProjectPageItem;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const imageSrc = resolvePublicImage(...project.heroImageCandidates);

  const metaItems = [
    { icon: MapPin, value: project.location },
    { icon: ScanLine, value: project.projectType },
    ...(project.year ? [{ icon: CalendarDays, value: project.year }] : []),
  ];

  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-surface">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />

      <Container className="relative grid gap-10 pb-14 pt-24 md:pt-28 lg:min-h-[600px] lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16">
        {/* Text */}
        <div className="lg:col-span-6">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Projeler", href: "/projeler" },
              { label: project.shortTitle },
            ]}
          />

          <p className="mt-7 text-xs font-semibold tracking-[0.22em] text-accent">
            {project.eyebrow}
          </p>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {project.title}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            {project.description}
          </p>

          {/* Meta row */}
          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            {metaItems.map((meta) => {
              const Icon = meta.icon;
              return (
                <li
                  key={meta.value}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <Icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {meta.value}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Always scrolls to the tour section — works with or without a real URL */}
            <Button href="#matterport-turu" size="lg">
              Sanal Turu Görüntüle
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="/#teklif" variant="outline" size="lg">
              Teklif Alın
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
          {imageSrc ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border-subtle/60">
              <Image
                src={imageSrc}
                alt={project.imageAlt}
                fill
                priority
                sizes="(min-width: 1000px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle",
                placeholderClasses[project.variant],
              )}
            >
              <div className="hero-scanline absolute inset-x-0 top-0 h-14" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
