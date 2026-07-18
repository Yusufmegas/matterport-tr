import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import {
  projectCategories,
  projectPages,
  projectsListMeta,
} from "@/data/projects-pages";
import { resolvePublicImage } from "@/lib/assets";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { InternalHero } from "@/components/internal/InternalHero";
import { InternalCta } from "@/components/internal/InternalCta";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: { absolute: projectsListMeta.metaTitle },
  description: projectsListMeta.metaDescription,
  alternates: { canonical: "/projeler" },
  /* Sayfa yalnızca doğrudan URL ile erişilir; görünür site yapısında
     kullanılmaz ve arama motorlarında listelenmez. */
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: projectsListMeta.metaTitle,
    description: projectsListMeta.metaDescription,
    type: "website",
    url: "/projeler",
  },
};

export default function ProjectsListPage() {
  /* Images are resolved on the server; the client explorer receives
     plain serialisable data and never touches the filesystem. */
  const explorerProjects = projectPages.map((project) => ({
    slug: project.slug,
    title: project.shortTitle,
    category: project.category,
    categorySlug: project.categorySlug,
    location: project.location,
    description: project.description,
    imageSrc: resolvePublicImage(...project.thumbnailCandidates),
    imageAlt: project.imageAlt,
    variant: project.variant,
  }));

  return (
    <>
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Projeler" },
          ]}
          eyebrow={projectsListMeta.eyebrow}
          title={projectsListMeta.title}
          description={projectsListMeta.description}
          icon={FolderKanban}
        />

        <section aria-label="Proje listesi" className="py-12 md:py-16">
          <Container>
            <ProjectsExplorer
              projects={explorerProjects}
              categories={projectCategories}
            />
          </Container>
        </section>

        <InternalCta />
      </main>
      <Footer />
    </>
  );
}
