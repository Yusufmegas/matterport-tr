import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Cpu,
  Factory,
  FileCheck2,
  HardHat,
  Plane,
  Ship,
  Store,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getProjectPage, projectPages } from "@/data/projects-pages";
import { getSolutionPage } from "@/data/solutions-pages";
import { getSectorPage } from "@/data/sectors-pages";
import { resolvePublicImage } from "@/lib/assets";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/internal/SectionTitle";
import { ContentIntro } from "@/components/internal/ContentIntro";
import { ItemsGrid } from "@/components/internal/ItemsGrid";
import { FeatureList } from "@/components/internal/FeatureList";
import { ProcessSteps } from "@/components/internal/ProcessSteps";
import { RelatedCards } from "@/components/internal/RelatedCards";
import { FaqSection } from "@/components/internal/FaqSection";
import { InternalCta } from "@/components/internal/InternalCta";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectInfoPanel } from "@/components/projects/ProjectInfoPanel";
import { ProjectTourViewer } from "@/components/projects/ProjectTourViewer";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectJsonLd } from "@/components/projects/ProjectJsonLd";

const categoryIcons: Record<string, LucideIcon> = {
  "yat-denizcilik": Ship,
  "endustri-uretim": Factory,
  havacilik: Plane,
  "otel-konaklama": BedDouble,
  "perakende-magazacilik": Store,
  "insaat-mimarlik": HardHat,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectPages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectPage(slug);
  if (!project) return {};

  const path = `/projeler/${project.slug}`;
  const heroImage = resolvePublicImage(...project.heroImageCandidates);

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: path },
    /* Detay sayfaları yalnızca özel/doğrudan paylaşım içindir —
       arama motorlarında listelenmemeli. */
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      type: "article",
      url: path,
      ...(heroImage ? { images: [heroImage] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectPage(slug);
  if (!project) notFound();

  const heroImage = resolvePublicImage(...project.heroImageCandidates);
  const posterSrc = resolvePublicImage(
    ...(project.matterportPosterCandidates ?? []),
    ...project.thumbnailCandidates,
  );

  const relatedSolutions = (project.relatedSolutionSlugs ?? [])
    .map((s) => getSolutionPage(s))
    .filter((s) => s !== undefined)
    .map((s) => ({
      title: s.shortTitle,
      description: s.description,
      href: `/cozumler/${s.slug}`,
      icon: s.icon,
    }));

  const relatedSectors = (project.relatedSectorSlugs ?? [])
    .map((s) => getSectorPage(s))
    .filter((s) => s !== undefined)
    .map((s) => ({
      title: s.shortTitle,
      description: s.description,
      href: `/sektorler/${s.slug}`,
      icon: s.icon,
    }));

  const relatedProjects = (project.relatedProjectSlugs ?? [])
    .filter((s) => s !== project.slug)
    .map((s) => getProjectPage(s))
    .filter((p) => p !== undefined)
    .map((p) => ({
      title: p.shortTitle,
      description: p.description,
      href: `/projeler/${p.slug}`,
      icon: categoryIcons[p.categorySlug] ?? Target,
    }));

  return (
    <>
      <ProjectJsonLd
        name={project.title}
        description={project.metaDescription}
        path={`/projeler/${project.slug}`}
        about={project.projectType}
        locationName={project.location}
        imageSrc={heroImage}
      />
      <Header />
      <main>
        <ProjectHero project={project} />

        {project.overview ? (
          <ContentIntro title="Genel Bakış" paragraphs={project.overview} />
        ) : null}

        <ProjectInfoPanel project={project} />

        {project.objective ? (
          <ItemsGrid
            title="Projenin Amacı"
            items={project.objective}
            icon={Target}
          />
        ) : null}

        {project.scope ? (
          <FeatureList title="Proje Kapsamı" items={project.scope} />
        ) : null}

        {project.deliveredItems ? (
          <ItemsGrid
            title="Teslim Edilenler"
            items={project.deliveredItems}
            icon={FileCheck2}
          />
        ) : null}

        {project.technologies ? (
          <ItemsGrid
            title="Kullanılan Teknolojiler"
            items={project.technologies}
            icon={Cpu}
            columns={4}
            tone="surface"
          />
        ) : null}

        {/* Matterport tour — anchor target of the hero CTA */}
        <section
          id="matterport-turu"
          aria-label="Matterport sanal tur"
          className="scroll-mt-24 py-12 md:py-16"
        >
          <Container>
            <SectionTitle>Matterport Sanal Tur</SectionTitle>
            <div className="mt-8">
              <ProjectTourViewer
                projectTitle={project.shortTitle}
                matterportUrl={project.matterportUrl}
                posterSrc={posterSrc}
                variant={project.variant}
              />
            </div>
          </Container>
        </section>

        {project.process ? (
          <ProcessSteps title="Proje Süreci" steps={project.process} />
        ) : null}

        <ProjectGallery
          projectTitle={project.shortTitle}
          imageCandidates={project.galleryImageCandidates}
        />

        {relatedSolutions.length > 0 ? (
          <RelatedCards
            title="İlgili Çözümler"
            items={relatedSolutions}
            tone="surface"
          />
        ) : null}

        {relatedSectors.length > 0 ? (
          <RelatedCards title="İlgili Sektörler" items={relatedSectors} />
        ) : null}

        {relatedProjects.length > 0 ? (
          <RelatedCards
            title="İlgili Projeler"
            items={relatedProjects}
            tone="surface"
          />
        ) : null}

        {project.faq ? <FaqSection items={project.faq} /> : null}

        <InternalCta
          title={project.ctaTitle}
          description={project.ctaDescription}
        />
      </main>
      <Footer />
    </>
  );
}
