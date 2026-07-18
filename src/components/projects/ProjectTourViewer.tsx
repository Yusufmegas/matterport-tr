"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Rotate3d } from "lucide-react";
import type { ProjectVariant } from "@/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const placeholderClasses: Record<ProjectVariant, string> = {
  marine: "ph-project-marine",
  industrial: "ph-project-industrial",
  aviation: "ph-project-aviation",
  hospitality: "ph-project-hospitality",
  retail: "ph-project-retail",
  construction: "ph-project-construction",
};

interface ProjectTourViewerProps {
  projectTitle: string;
  /** Empty string → "coming soon" panel; iframe is never rendered. */
  matterportUrl: string;
  /** Poster resolved server-side (fs is unavailable in client components). */
  posterSrc: string | null;
  variant: ProjectVariant;
}

/**
 * The iframe is mounted only after the user clicks — no Matterport
 * payload on initial page load. With no URL configured, the click shows
 * a calm "coming soon" panel instead of a broken embed.
 */
export function ProjectTourViewer({
  projectTitle,
  matterportUrl,
  posterSrc,
  variant,
}: ProjectTourViewerProps) {
  const [started, setStarted] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border-subtle",
        started ? "bg-surface-2" : "bg-surface",
      )}
    >
      {started ? (
        matterportUrl ? (
          <iframe
            src={matterportUrl}
            title={`${projectTitle} — Matterport 3D sanal tur`}
            loading="lazy"
            allow="fullscreen; xr-spatial-tracking"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <span
              aria-hidden="true"
              className="inline-flex size-14 items-center justify-center rounded-full border border-border-subtle bg-surface-2 text-accent"
            >
              <Rotate3d className="size-6" />
            </span>
            <p className="font-display text-lg font-semibold text-foreground">
              Tur bağlantısı hazırlanıyor
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Bu projenin interaktif tur bağlantısı yakında eklenecektir.
            </p>
          </div>
        )
      ) : (
        <>
          {/* Poster: real image when available, project surface otherwise */}
          {posterSrc ? (
            <Image
              src={posterSrc}
              alt={`${projectTitle} sanal tur önizlemesi`}
              fill
              sizes="(min-width: 1000px) 75vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className={cn("absolute inset-0", placeholderClasses[variant])}
            />
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25 p-8 text-center">
            <span
              aria-hidden="true"
              className="inline-flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_-10px_var(--ring)]"
            >
              <Play className="ml-0.5 size-7" />
            </span>
            <p className="font-display text-lg font-semibold text-white drop-shadow">
              {projectTitle}
            </p>
            <Button type="button" size="md" onClick={() => setStarted(true)}>
              Turu Başlat
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
