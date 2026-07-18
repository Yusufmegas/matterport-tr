import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { NeedsSection } from "@/components/home/NeedsSection";
import { MatterportExperience } from "@/components/home/MatterportExperience";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { QuoteSection } from "@/components/home/QuoteSection";
import { TrustedBrands } from "@/components/home/TrustedBrands";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <NeedsSection />
        <MatterportExperience />
        <SolutionsSection />
        <SectorsSection />
        <ProjectsSection />
        <HowItWorksSection />
        <QuoteSection />
        <TrustedBrands />
      </main>
      <Footer />
    </>
  );
}
