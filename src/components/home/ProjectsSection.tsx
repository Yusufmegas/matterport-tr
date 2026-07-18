import {
  portfolioDescription,
  portfolioEyebrow,
  portfolioProjects,
  portfolioTitle,
} from "@/data/portfolio-projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/home/ProjectCard";
import { ProjectLoop } from "@/components/home/ProjectLoop";

export function ProjectsSection() {
  return (
    <section
      id="projeler"
      aria-labelledby="projects-title"
      className="py-16 md:py-20"
    >
      <Container>
        <SectionHeading
          id="projects-title"
          eyebrow={portfolioEyebrow}
          title={portfolioTitle}
          description={portfolioDescription}
        />
      </Container>

      {/* Kesintisiz sola kayan portföy vitrini — kartlar tıklanabilir değil */}
      <Container className="mt-11 md:mt-14">
        <ProjectLoop pauseOnHover fadeEdges>
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="w-[min(82vw,310px)] shrink-0 snap-start sm:w-[290px] lg:w-[300px]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </ProjectLoop>
      </Container>
    </section>
  );
}
