import type { Metadata } from "next";
import { kvkkPage } from "@/data/legal-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: { absolute: kvkkPage.metaTitle },
  description: kvkkPage.metaDescription,
  alternates: { canonical: "/kvkk" },
  openGraph: {
    title: kvkkPage.metaTitle,
    description: kvkkPage.metaDescription,
    type: "website",
    url: "/kvkk",
  },
};

export default function KvkkPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage page={kvkkPage} />
      </main>
      <Footer />
    </>
  );
}
