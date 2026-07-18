"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { ProjectVariant } from "@/types";
import { cn } from "@/lib/utils";

const placeholderClasses: Record<ProjectVariant, string> = {
  marine: "ph-project-marine",
  industrial: "ph-project-industrial",
  aviation: "ph-project-aviation",
  hospitality: "ph-project-hospitality",
  retail: "ph-project-retail",
  construction: "ph-project-construction",
};

export interface ExplorerProject {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  description: string;
  /** Resolved server-side; null → themed placeholder */
  imageSrc: string | null;
  imageAlt: string;
  variant: ProjectVariant;
}

export interface ExplorerCategory {
  label: string;
  slug: string;
}

interface ProjectsExplorerProps {
  projects: ExplorerProject[];
  categories: ExplorerCategory[];
}

/**
 * Filterable showcase grid. Cards are intentionally NON-interactive:
 * the list is a vitrine only, while the detail pages under
 * /projeler/[slug] are shared privately via direct URL.
 */
export function ProjectsExplorer({
  projects,
  categories,
}: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filters = [{ label: "Tümü", slug: "all" }, ...categories];
  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.categorySlug === activeCategory);

  return (
    <div>
      {/* Filters */}
      <div
        role="group"
        aria-label="Projeleri kategoriye göre filtrele"
        className="flex flex-wrap items-center gap-2"
      >
        {filters.map((filter) => {
          const isActive = filter.slug === activeCategory;
          return (
            <button
              key={filter.slug}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(filter.slug)}
              className={cn(
                "min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors duration-150",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border-subtle bg-surface text-muted hover:border-accent/40 hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {visibleProjects.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {visibleProjects.map((project) => (
            <li key={project.slug}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface",
                  "transition-colors duration-200 hover:border-accent/35",
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw"
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

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                    <MapPin className="size-3" aria-hidden="true" />
                    {project.location}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p
          role="status"
          className="mt-10 rounded-lg border border-border-subtle bg-surface px-5 py-6 text-sm text-muted"
        >
          Bu kategoride henüz yayınlanmış proje bulunmuyor.
        </p>
      )}
    </div>
  );
}
