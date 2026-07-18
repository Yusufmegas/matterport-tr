import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  Building2,
  Clock,
  FileText,
  Globe,
  Headset,
  Link2,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Pencil,
  Phone,
  Receipt,
  Send,
  Server,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  WHATSAPP_CUSTOMER_SERVICE_MESSAGE,
  WHATSAPP_TECHNICAL_SUPPORT_MESSAGE,
  toTelHref,
  whatsappHref,
} from "@/lib/whatsapp";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/internal/SectionTitle";
import { InternalHero } from "@/components/internal/InternalHero";
import { SupportRequestButton } from "@/components/internal/SupportRequestButton";
import { QuoteForm } from "@/components/home/QuoteForm";

const META_TITLE = "Matterport Çekimi ve Teklif Talebi | İletişim";
const META_DESCRIPTION =
  "Matterport çekimi, 3D sanal tur, teknik çıktılar ve mevcut tur desteği için Teknik Destek veya Müşteri Hizmetleri ekibimize ulaşın.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    url: "/iletisim",
    images: [{ url: "/opengraph-image.png", width: 1731, height: 909 }],
  },
};

/** Müşteri Desteği kapsamındaki konular — kompakt iki kolonlu liste. */
const SUPPORT_TOPICS = [
  { label: "Sanal tur düzenleme ve revize talepleri", icon: Pencil },
  { label: "Tur bağlantısı ve erişim sorunları", icon: Link2 },
  { label: "Web sitesine sanal tur ekleme", icon: Globe },
  { label: "Google Street View yayın desteği", icon: MapPin },
  { label: "Yıllık yayın ve hosting işlemleri", icon: Server },
  { label: "Matterport tur transferi", icon: ArrowLeftRight },
  { label: "Teknik dosya teslim desteği", icon: FileText },
  { label: "Fatura ve ödeme konuları", icon: Receipt },
];

export default function IletisimPage() {
  const technicalWaHref = whatsappHref(
    siteConfig.technicalSupportWhatsapp,
    WHATSAPP_TECHNICAL_SUPPORT_MESSAGE,
  );
  const customerWaHref = whatsappHref(
    siteConfig.customerServiceWhatsapp,
    WHATSAPP_CUSTOMER_SERVICE_MESSAGE,
  );

  /* Çalışma saatleri ve kurumsal bilgiler — yalnızca dolu değerler */
  const corporateRows: {
    label: string;
    lines: string[];
    icon: typeof Phone;
    href?: string;
  }[] = [
    {
      label: "Teknik Destek",
      lines: [siteConfig.technicalSupportPhone],
      icon: Wrench,
      href: toTelHref(siteConfig.technicalSupportPhone),
    },
    {
      label: "Müşteri Hizmetleri",
      lines: [siteConfig.customerServicePhone],
      icon: Headset,
      href: toTelHref(siteConfig.customerServicePhone),
    },
    {
      label: "E-posta",
      lines: [siteConfig.email],
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "Çalışma Saatleri",
      lines: [
        siteConfig.workingHours.weekdays,
        siteConfig.workingHours.saturday,
        siteConfig.workingHours.sunday,
      ],
      icon: Clock,
    },
    {
      label: "Çalışma Bölgesi",
      lines: [siteConfig.serviceArea],
      icon: Map,
    },
    {
      label: "Şirket Unvanı",
      lines: [siteConfig.companyLegalName],
      icon: Building2,
    },
    {
      label: "Web",
      lines: [siteConfig.website],
      icon: Globe,
      href: siteConfig.url,
    },
  ].filter((row) => row.lines.every((line) => line !== ""));

  return (
    <>
      <Header />
      <main>
        {/* 1 — Hero */}
        <InternalHero
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "İletişim" },
          ]}
          eyebrow="İLETİŞİM"
          title="Projenizi birlikte planlayalım."
          description="Mekânınızın yapısını, projenizin kapsamını ve ihtiyaç duyduğunuz çıktıları paylaşın. Ekibimiz talebinizi değerlendirerek uygun çekim ve teslim planı hakkında sizinle iletişime geçsin."
          icon={Send}
          imageCandidates={[
            "images/contact/hero.webp",
            "images/contact/hero.jpg",
          ]}
          imageAlt="Matterport TR iletişim"
          primaryCta={{ label: "Hızlı Teklif Formu", href: "#iletisim-formu" }}
          secondaryCta={{
            label: "Müşteri Desteği",
            href: "#musteri-destegi",
          }}
        />

        {/* 2 — Doğru birime ulaşın */}
        <section
          aria-labelledby="birimler-baslik"
          className="py-12 md:py-16"
        >
          <Container>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle id="birimler-baslik">
                Doğru birime ulaşın
              </SectionTitle>
              <p className="text-sm text-muted">
                Türkiye genelindeki projeler için planlama yapılabilir.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {/* Teknik Destek — yeni projeler */}
              <article className="flex flex-col rounded-[20px] border border-border-subtle bg-surface p-7 sm:p-8">
                <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent">
                  <Wrench className="size-4" aria-hidden="true" />
                  TEKNİK DESTEK
                </p>
                <a
                  href={toTelHref(siteConfig.technicalSupportPhone)}
                  className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-3xl"
                >
                  {siteConfig.technicalSupportPhone}
                </a>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-secondary">
                  Yeni proje planlaması, çekim kapsamı, teknik çıktılar,
                  entegrasyon ve hizmet detayları hakkında bilgi alın.
                </p>
                <div className="mt-6 border-t border-border-subtle pt-5">
                  <Button
                    href={technicalWaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="lg"
                  >
                    Teknik Destek ile Görüşün
                    <MessageCircle className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </article>

              {/* Müşteri Hizmetleri — mevcut projeler */}
              <article className="flex flex-col rounded-[20px] border border-accent/30 bg-surface p-7 sm:p-8">
                <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent">
                  <Headset className="size-4" aria-hidden="true" />
                  MÜŞTERİ HİZMETLERİ
                </p>
                <a
                  href={toTelHref(siteConfig.customerServicePhone)}
                  className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-3xl"
                >
                  {siteConfig.customerServicePhone}
                </a>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-secondary">
                  Mevcut sanal turunuzun yayını, düzenleme talepleri, erişim
                  sorunları, transfer ve yıllık yayın işlemleri için destek
                  alın.
                </p>
                <div className="mt-6 border-t border-border-subtle pt-5">
                  <Button
                    href={customerWaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    Müşteri Hizmetlerine Ulaşın
                    <MessageCircle className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            </div>
          </Container>
        </section>

        {/* 3 — Teklif ve proje formu */}
        <section
          id="iletisim-formu"
          aria-label="Teklif formu"
          className="scroll-mt-24 border-y border-border-subtle bg-surface py-12 md:py-16"
        >
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionTitle>Hızlı Teklif</SectionTitle>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Formu doldurun; bilgileriniz düzenli bir proje talebi olarak
                ilgili WhatsApp hattına aktarılsın.
              </p>
            </div>
            <div className="lg:col-span-8">
              <QuoteForm
                title="Proje Bilgilerinizi Paylaşın"
                showProjectNote
              />
            </div>
          </Container>
        </section>

        {/* 4 — Mevcut müşteri desteği */}
        <section
          id="musteri-destegi"
          aria-labelledby="musteri-destegi-baslik"
          className="scroll-mt-24 py-12 md:py-16"
        >
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent">
                <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
                MÜŞTERİ DESTEĞİ
              </p>
              <h2
                id="musteri-destegi-baslik"
                className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl"
              >
                Yayındaki sanal turunuz için desteğe mi ihtiyacınız var?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                Sanal turunuz, yayın bağlantınız, teknik dosyalarınız veya
                mevcut projenizle ilgili destek talepleriniz için Müşteri
                Hizmetleri ekibimize ulaşabilirsiniz.
              </p>

              <p className="mt-7 flex items-baseline justify-between gap-4 border-t border-border-subtle pt-6 text-sm">
                <span className="text-muted">Müşteri Hizmetleri</span>
                <a
                  href={toTelHref(siteConfig.customerServicePhone)}
                  className="font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {siteConfig.customerServicePhone}
                </a>
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={customerWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  WhatsApp’tan Destek Alın
                  <MessageCircle className="size-4" aria-hidden="true" />
                </Button>
                <SupportRequestButton />
              </div>
            </div>

            {/* Destek konuları — kompakt iki kolonlu liste */}
            <ul className="lg:col-span-7 grid grid-cols-1 gap-x-10 self-start sm:grid-cols-2">
              {SUPPORT_TOPICS.map((topic) => {
                const Icon = topic.icon;
                return (
                  <li
                    key={topic.label}
                    className="flex min-h-[44px] items-center gap-3 border-b border-border-subtle py-3.5 text-sm font-medium text-foreground/90"
                  >
                    <Icon
                      className="size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {topic.label}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* 5 — Çalışma saatleri ve kurumsal bilgiler */}
        <section
          aria-labelledby="kurumsal-bilgiler-baslik"
          className="border-t border-border-subtle bg-surface py-12 md:py-16"
        >
          <Container>
            <SectionTitle id="kurumsal-bilgiler-baslik">
              Çalışma Saatleri ve Kurumsal Bilgiler
            </SectionTitle>
            <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {corporateRows.map((row) => {
                const Icon = row.icon;
                const body = (
                  <>
                    <span
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-[0.16em] text-muted">
                        {row.label.toLocaleUpperCase("tr-TR")}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold leading-snug text-foreground">
                        {row.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li
                    key={row.label}
                    className="border-b border-border-subtle py-4"
                  >
                    {row.href ? (
                      <a
                        href={row.href}
                        className="flex items-center gap-3 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* 6 — SSS yönlendirmesi */}
        <section
          aria-labelledby="sss-yonlendirme-baslik"
          className="border-t border-border-subtle py-12 md:py-16"
        >
          <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2
                id="sss-yonlendirme-baslik"
                className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                Sorularınız mı var?
              </h2>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-secondary">
                Çekim, teslim, yayın süresi ve teknik çıktılarla ilgili sık
                sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>
            <Link
              href="/sss"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Sık Sorulan Sorular
              <span
                aria-hidden="true"
                className="h-px w-8 bg-border-subtle transition-colors duration-200 group-hover:bg-accent/50"
              />
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
              />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
