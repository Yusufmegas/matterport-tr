import type { Metadata } from "next";
import { HelpCircle, MessageCircle } from "lucide-react";
import {
  allFaqItems,
  faqPageDescription,
  faqPageTitle,
} from "@/data/faq";
import { siteConfig } from "@/config/site";
import { WHATSAPP_CUSTOMER_SERVICE_MESSAGE, whatsappHref } from "@/lib/whatsapp";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InternalHero } from "@/components/internal/InternalHero";
import { FaqExplorer } from "@/components/faq/FaqExplorer";

const META_TITLE = "Sık Sorulan Sorular | Matterport TR";
const META_DESCRIPTION =
  "Matterport çekimi, 3D sanal tur, dijital ikiz, teknik dosyalar, yayın süresi ve müşteri desteği hakkında sık sorulan sorular.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: "/sss" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    url: "/sss",
    images: [{ url: "/opengraph-image.png", width: 1731, height: 909 }],
  },
};

/** Sayfada görünen sorularla birebir aynı listeden üretilir. */
function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Sık Sorulan Sorular" },
          ]}
          eyebrow="SSS"
          title={faqPageTitle}
          description={faqPageDescription}
          icon={HelpCircle}
          primaryCta={{ label: "Teklif ve Bilgi Alın", href: "/iletisim" }}
          secondaryCta={{
            label: "Müşteri Desteği",
            href: "/iletisim#musteri-destegi",
          }}
        />

        <section aria-label="Sık sorulan sorular" className="py-12 md:py-16">
          <Container>
            <FaqExplorer />
          </Container>
        </section>

        {/* Kapanış CTA */}
        <section
          aria-labelledby="faq-cta-title"
          className="border-t border-border-subtle bg-surface py-12 md:py-16"
        >
          <Container className="max-w-3xl text-center">
            <h2
              id="faq-cta-title"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Aradığınız yanıtı bulamadınız mı?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-secondary">
              Projeniz veya mevcut sanal turunuzla ilgili sorularınız için
              ekibimizle iletişime geçebilirsiniz.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/iletisim" size="lg">
                Teklif ve Bilgi Alın
              </Button>
              <Button
                href={whatsappHref(
                  siteConfig.customerServiceWhatsapp,
                  WHATSAPP_CUSTOMER_SERVICE_MESSAGE,
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                Müşteri Hizmetlerine Ulaşın
                <MessageCircle className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FaqJsonLd />
    </>
  );
}
