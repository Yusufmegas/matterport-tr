import type { ProjectPageItem } from "@/types";
import { Container } from "@/components/ui/Container";

interface ProjectInfoPanelProps {
  project: ProjectPageItem;
}

/** Compact corporate info strip — only fields with data are rendered. */
export function ProjectInfoPanel({ project }: ProjectInfoPanelProps) {
  const entries = [
    { label: "Müşteri", value: project.client },
    { label: "Sektör", value: project.category },
    { label: "Konum", value: project.location },
    { label: "Proje Türü", value: project.projectType },
    { label: "Kullanılan Teknoloji", value: project.technologies?.[0] },
    { label: "Proje Yılı", value: project.year },
  ].filter((entry) => Boolean(entry.value));

  if (entries.length === 0) return null;

  return (
    <section
      aria-label="Proje bilgileri"
      className="border-y border-border-subtle bg-surface"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 py-8 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-8">
          {entries.map((entry) => (
            <div key={entry.label} className="min-w-0">
              <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted">
                {entry.label.toLocaleUpperCase("tr-TR")}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold leading-snug tracking-tight text-foreground">
                {entry.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
