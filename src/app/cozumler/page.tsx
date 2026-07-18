import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { ScanLine } from "lucide-react";
import { solutionPages, solutionsListMeta } from "@/data/solutions-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternalHero } from "@/components/internal/InternalHero";
import { RelatedCards } from "@/components/internal/RelatedCards";
import { InternalCta } from "@/components/internal/InternalCta";

export const metadata: Metadata = {
  title: { absolute: solutionsListMeta.metaTitle },
  description: solutionsListMeta.metaDescription,
  alternates: { canonical: "/cozumler" },
  openGraph: {
    title: solutionsListMeta.metaTitle,
    description: solutionsListMeta.metaDescription,
    type: "website",
    url: "/cozumler",
  },
};

export default function SolutionsListPage() {
  /* GEÇİCİ: bolum kapali — bkz. src/config/feature-flags.ts */
  if (!SOLUTIONS_AND_SECTORS_ENABLED) redirect("/");

  const cards = solutionPages.map((solution) => ({
    title: solution.shortTitle,
    description: solution.description,
    href: `/cozumler/${solution.slug}`,
    icon: solution.icon,
  }));

  return (
    <>
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Çözümler" },
          ]}
          eyebrow={solutionsListMeta.eyebrow}
          title={solutionsListMeta.title}
          description={solutionsListMeta.description}
          icon={ScanLine}
          secondaryCta={{ label: "Sektörleri İnceleyin", href: "/sektorler" }}
        />
        <RelatedCards items={cards} ariaLabel="Tüm çözümler" headerHidden />
        <InternalCta />
      </main>
      <Footer />
    </>
  );
}
