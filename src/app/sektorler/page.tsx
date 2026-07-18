import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { LayoutGrid } from "lucide-react";
import { sectorPages, sectorsListMeta } from "@/data/sectors-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternalHero } from "@/components/internal/InternalHero";
import { RelatedCards } from "@/components/internal/RelatedCards";
import { InternalCta } from "@/components/internal/InternalCta";

export const metadata: Metadata = {
  title: { absolute: sectorsListMeta.metaTitle },
  description: sectorsListMeta.metaDescription,
  alternates: { canonical: "/sektorler" },
  openGraph: {
    title: sectorsListMeta.metaTitle,
    description: sectorsListMeta.metaDescription,
    type: "website",
    url: "/sektorler",
  },
};

export default function SectorsListPage() {
  /* GEÇİCİ: bolum kapali — bkz. src/config/feature-flags.ts */
  if (!SOLUTIONS_AND_SECTORS_ENABLED) redirect("/");

  const cards = sectorPages.map((sector) => ({
    title: sector.shortTitle,
    description: sector.description,
    href: `/sektorler/${sector.slug}`,
    icon: sector.icon,
  }));

  return (
    <>
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Sektörler" },
          ]}
          eyebrow={sectorsListMeta.eyebrow}
          title={sectorsListMeta.title}
          description={sectorsListMeta.description}
          icon={LayoutGrid}
        />
        <RelatedCards items={cards} ariaLabel="Tüm sektörler" headerHidden />
        <InternalCta />
      </main>
      <Footer />
    </>
  );
}
