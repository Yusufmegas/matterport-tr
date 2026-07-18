import type { Metadata } from "next";
import { privacyPage } from "@/data/legal-pages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: { absolute: privacyPage.metaTitle },
  description: privacyPage.metaDescription,
  alternates: { canonical: "/gizlilik-politikasi" },
  openGraph: {
    title: privacyPage.metaTitle,
    description: privacyPage.metaDescription,
    type: "website",
    url: "/gizlilik-politikasi",
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage page={privacyPage} />
      </main>
      <Footer />
    </>
  );
}
