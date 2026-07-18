import type { Metadata } from "next";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { notFound, redirect } from "next/navigation";
import { CircleAlert } from "lucide-react";
import { getSectorPage, sectorPages } from "@/data/sectors-pages";
import { getSolutionPage } from "@/data/solutions-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternalHero } from "@/components/internal/InternalHero";
import { ContentIntro } from "@/components/internal/ContentIntro";
import { ItemsGrid } from "@/components/internal/ItemsGrid";
import { ProcessSteps } from "@/components/internal/ProcessSteps";
import { RelatedCards } from "@/components/internal/RelatedCards";
import { FaqSection } from "@/components/internal/FaqSection";
import { InternalCta } from "@/components/internal/InternalCta";
import { ServiceJsonLd } from "@/components/internal/ServiceJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sectorPages.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorPage(slug);
  if (!sector) return {};

  const path = `/sektorler/${sector.slug}`;
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      type: "website",
      url: path,
    },
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  /* GEÇİCİ: bolum kapali — bkz. src/config/feature-flags.ts */
  if (!SOLUTIONS_AND_SECTORS_ENABLED) redirect("/");

  const { slug } = await params;
  const sector = getSectorPage(slug);
  if (!sector) notFound();

  const recommendedSolutions = (sector.recommendedSolutionSlugs ?? [])
    .map((solutionSlug) => getSolutionPage(solutionSlug))
    .filter((solution) => solution !== undefined)
    .map((solution) => ({
      title: solution.shortTitle,
      description: solution.description,
      href: `/cozumler/${solution.slug}`,
      icon: solution.icon,
    }));

  return (
    <>
      <ServiceJsonLd
        name={`${sector.title} için Matterport Çözümleri`}
        description={sector.metaDescription}
        path={`/sektorler/${sector.slug}`}
      />
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Sektörler", href: "/sektorler" },
            { label: sector.shortTitle },
          ]}
          eyebrow={sector.eyebrow}
          title={sector.title}
          description={sector.description}
          icon={sector.icon}
          imageCandidates={sector.heroImageCandidates}
          imageAlt={sector.title}
        />

        {sector.challenges ? (
          <ItemsGrid
            title="Sektörel İhtiyaçlar"
            items={sector.challenges}
            icon={CircleAlert}
          />
        ) : null}

        {sector.solutions ? (
          <ContentIntro
            title="Matterport Çözümü"
            paragraphs={sector.solutions}
          />
        ) : null}

        {sector.benefits ? (
          <ItemsGrid
            title="Sağlanan Faydalar"
            items={sector.benefits}
            tone="surface"
          />
        ) : null}

        {sector.useCases ? (
          <ItemsGrid
            title="Kullanım Senaryoları"
            items={sector.useCases}
            columns={4}
          />
        ) : null}

        {recommendedSolutions.length > 0 ? (
          <RelatedCards
            title="Önerilen Çözümler"
            description="Bu sektörde en sık uygulanan Matterport çözümlerini inceleyin."
            items={recommendedSolutions}
            tone="surface"
          />
        ) : null}

        {sector.process ? (
          <ProcessSteps title="Süreç" steps={sector.process} />
        ) : null}

        {sector.faq ? <FaqSection items={sector.faq} /> : null}

        <InternalCta
          title={sector.ctaTitle}
          description={sector.ctaDescription}
        />
      </main>
      <Footer />
    </>
  );
}
