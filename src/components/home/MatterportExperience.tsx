import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  experienceCta,
  experienceDescription,
  experienceEyebrow,
  experienceTitle,
} from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourViewer } from "@/components/home/TourViewer";

export function MatterportExperience() {
  return (
    <section
      id="deneyim"
      aria-labelledby="experience-title"
      className="relative overflow-hidden border-y border-border-subtle bg-surface"
    >
      <div className="tech-grid absolute inset-0" aria-hidden="true" />

      <Container className="relative py-14 md:py-16">
        <TourViewer ctaLabel={experienceCta}>
          <SectionHeading
            id="experience-title"
            eyebrow={experienceEyebrow}
            title={experienceTitle}
            description={experienceDescription}
            align="left"
          />
          <Link
            href="/matterport-nedir"
            className="group mt-5 inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Matterport teknolojisini yakından inceleyin
            <span
              aria-hidden="true"
              className="h-px w-8 bg-border-subtle transition-colors duration-200 group-hover:bg-accent/50"
            />
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </TourViewer>
      </Container>
    </section>
  );
}
