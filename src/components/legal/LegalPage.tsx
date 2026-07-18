import Link from "next/link";
import { Info } from "lucide-react";
import type { LegalPageData } from "@/data/legal-pages";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/internal/Breadcrumbs";

/** Shared reading-focused template for KVKK / privacy / cookie pages:
 *  narrow measure, calm hierarchy, no marketing CTAs. */
export function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <>
      {/* Compact legal hero */}
      <section className="border-b border-border-subtle bg-surface">
        <Container className="max-w-[900px] pb-10 pt-24 md:pt-28">
          <Breadcrumbs
            items={[{ label: "Ana Sayfa", href: "/" }, { label: page.title }]}
          />
          <h1 className="mt-7 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {page.title}
          </h1>
          {page.intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted">
              {page.intro}
            </p>
          ) : null}
        </Container>
      </section>

      <Container className="max-w-[900px] py-10 md:py-12">
        {/* Review notice */}
        {siteConfig.legalReviewRequired ? (
          <div
            role="note"
            className="mb-10 flex items-start gap-3 rounded-lg border border-border-subtle bg-surface px-4 py-3.5"
          >
            <Info
              className="mt-0.5 size-4 shrink-0 text-accent"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted">
              Bu metin, kurumsal ve iletişim bilgilerinin
              kesinleştirilmesinin ardından hukuk danışmanı tarafından son
              kontrole tabi tutulacaktır.
            </p>
          </div>
        ) : null}

        {/* Sections */}
        <div className="space-y-10">
          {page.sections.map((section, index) => (
            <section
              key={section.title}
              aria-label={section.title}
              className={
                index > 0 ? "border-t border-border-subtle pt-10" : undefined
              }
            >
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {index + 1}. {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 text-[15px] leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-2 pl-1">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {/* Plain contact link */}
        <p className="mt-12 border-t border-border-subtle pt-8 text-sm leading-relaxed text-muted">
          Bu metinle ilgili sorularınız için{" "}
          <Link
            href="/iletisim"
            className="font-medium text-accent transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            iletişim sayfamızı
          </Link>{" "}
          ziyaret edebilirsiniz.
        </p>
      </Container>
    </>
  );
}
