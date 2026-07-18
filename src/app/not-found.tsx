import { ArrowRight } from "lucide-react";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border-subtle bg-surface">
          <div className="tech-grid absolute inset-0" aria-hidden="true" />
          <Container className="relative flex min-h-[60svh] flex-col items-center justify-center py-28 text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-accent">
              404
            </p>
            <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Aradığınız sayfa bulunamadı.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Sayfa kaldırılmış, adresi değiştirilmiş veya bağlantı hatalı
              olabilir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/" size="lg">
                Ana Sayfaya Dön
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              {SOLUTIONS_AND_SECTORS_ENABLED ? (
                <Button href="/cozumler" variant="outline" size="lg">
                  Çözümleri İncele
                </Button>
              ) : null}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
