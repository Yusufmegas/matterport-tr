import Image from "next/image";
import { MapPin } from "lucide-react";
import type { PortfolioProject } from "@/types";
import { resolvePublicImage } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PortfolioProject;
}

const placeholderClasses: Record<PortfolioProject["variant"], string> = {
  marine: "ph-project-marine",
  industrial: "ph-project-industrial",
  aviation: "ph-project-aviation",
  hospitality: "ph-project-hospitality",
  retail: "ph-project-retail",
  construction: "ph-project-construction",
};

/**
 * Non-interactive showcase card: the portfolio is a vitrine only —
 * no link, no CTA, no pointer affordance. Location renders ONLY when
 * it is verified data; otherwise the row is omitted entirely.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = resolvePublicImage(...project.imageCandidates);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface",
        "transition-colors duration-200 hover:border-accent/35",
      )}
    >
      {/* Visual — real image when available, themed surface until then */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 80vw"
            className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 transition-transform duration-300 motion-safe:group-hover:scale-[1.02]",
              placeholderClasses[project.variant],
            )}
          />
        )}
      </div>

      {/* Info: name (+optional subtitle), category, optional location */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.subtitle ? (
          <p className="mt-0.5 text-xs font-medium text-muted">
            {project.subtitle}
          </p>
        ) : null}
        <p className="mt-1 text-xs font-medium text-accent">
          {project.category}
        </p>
        {project.location ? (
          <p className="mt-1 flex items-center gap-1 text-xs text-muted">
            <MapPin className="size-3 shrink-0" aria-hidden="true" />
            {project.location}
          </p>
        ) : null}
      </div>
    </article>
  );
}
