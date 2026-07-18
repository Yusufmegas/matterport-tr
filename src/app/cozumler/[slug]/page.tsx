import type { Metadata } from "next";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { notFound, redirect } from "next/navigation";
import { FileCheck2 } from "lucide-react";
import { getSolutionPage, solutionPages } from "@/data/solutions-pages";
import { getSectorPage } from "@/data/sectors-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternalHero } from "@/components/internal/InternalHero";
import { ContentIntro } from "@/components/internal/ContentIntro";
import { ItemsGrid } from "@/components/internal/ItemsGrid";
import { FeatureList } from "@/components/internal/FeatureList";
import { ProcessSteps } from "@/components/internal/ProcessSteps";
import { RelatedCards } from "@/components/internal/RelatedCards";
import { FaqSection } from "@/components/internal/FaqSection";
import { InternalCta } from "@/components/internal/InternalCta";
import { ServiceJsonLd } from "@/components/internal/ServiceJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solutionPages.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionPage(slug);
  if (!solution) return {};

  const path = `/cozumler/${solution.slug}`;
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      type: "website",
      url: path,
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  /* GEÇİCİ: bolum kapali — bkz. src/config/feature-flags.ts */
  if (!SOLUTIONS_AND_SECTORS_ENABLED) redirect("/");

  const { slug } = await params;
  const solution = getSolutionPage(slug);
  if (!solution) notFound();

  const relatedSectors = (solution.relatedSectorSlugs ?? [])
    .map((sectorSlug) => getSectorPage(sectorSlug))
    .filter((sector) => sector !== undefined)
    .map((sector) => ({
      title: sector.shortTitle,
      description: sector.description,
      href: `/sektorler/${sector.slug}`,
      icon: sector.icon,
    }));

  return (
    <>
      <ServiceJsonLd
        name={solution.title}
        description={solution.metaDescription}
        path={`/cozumler/${solution.slug}`}
      />
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Çözümler", href: "/cozumler" },
            { label: solution.shortTitle },
          ]}
          eyebrow={solution.eyebrow}
          title={solution.title}
          description={solution.description}
          icon={solution.icon}
          imageCandidates={solution.heroImageCandidates}
          imageAlt={solution.title}
        />

        {solution.overview ? (
          <ContentIntro title="Genel Bakış" paragraphs={solution.overview} />
        ) : null}

        {solution.benefits ? (
          <ItemsGrid title="Temel Faydalar" items={solution.benefits} />
        ) : null}

        {solution.features ? (
          <FeatureList
            title="Özellikler ve Kapsam"
            items={solution.features}
          />
        ) : null}

        {solution.process ? (
          <ProcessSteps title="Süreç" steps={solution.process} />
        ) : null}

        {solution.outputs ? (
          <ItemsGrid
            title="Teslim Edilen Çıktılar"
            items={solution.outputs}
            icon={FileCheck2}
            columns={4}
            tone="surface"
          />
        ) : null}

        {solution.useCases ? (
          <ItemsGrid
            title="Kullanım Alanları"
            items={solution.useCases}
            columns={4}
          />
        ) : null}

        {relatedSectors.length > 0 ? (
          <RelatedCards
            title="İlgili Sektörler"
            description="Bu çözümün en sık tercih edildiği sektörleri inceleyin."
            items={relatedSectors}
            tone="surface"
          />
        ) : null}

        {solution.faq ? <FaqSection items={solution.faq} /> : null}

        <InternalCta
          title={solution.ctaTitle}
          description={solution.ctaDescription}
        />
      </main>
      <Footer />
    </>
  );
}
