import type { Metadata } from "next";
import { cookiesPage } from "@/data/legal-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: { absolute: cookiesPage.metaTitle },
  description: cookiesPage.metaDescription,
  alternates: { canonical: "/cerez-ayarlari" },
  openGraph: {
    title: cookiesPage.metaTitle,
    description: cookiesPage.metaDescription,
    type: "website",
    url: "/cerez-ayarlari",
  },
};

export default function CerezAyarlariPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage page={cookiesPage} />
      </main>
      <Footer />
    </>
  );
}
