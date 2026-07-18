import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  footerColumns,
  footerDescription,
  footerLegalLinks,
} from "@/data/footer-navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

const footerLinkClasses =
  "inline-flex min-h-[36px] items-center text-sm text-secondary transition-colors duration-150 " +
  "hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Footer() {
  const year = new Date().getFullYear();

  /* Only verified contact details are rendered; empty config values
     simply disappear (see src/config/site.ts). */
  const contactItems = [
    { value: siteConfig.phone, icon: Phone, href: `tel:${siteConfig.phone}` },
    { value: siteConfig.email, icon: Mail, href: `mailto:${siteConfig.email}` },
    { value: siteConfig.address, icon: MapPin, href: undefined },
  ].filter((item) => item.value !== "");

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {footerDescription}
            </p>

            {contactItems.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const body = (
                    <>
                      <Icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                      {item.value}
                    </>
                  );
                  return (
                    <li key={item.value} className="flex items-center gap-2.5 text-sm text-muted">
                      {item.href ? (
                        <a href={item.href} className={footerLinkClasses}>
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : null}

            {siteConfig.socialLinks.length > 0 ? (
              <ul className="mt-5 flex items-center gap-4">
                {siteConfig.socialLinks.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} className={footerLinkClasses}>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Navigation columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold tracking-[0.18em] text-foreground">
                {column.title.toLocaleUpperCase("tr-TR")}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={footerLinkClasses}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <Container className="flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{" "}
        {siteConfig.companyLegalName || siteConfig.siteName}. Tüm hakları
        saklıdır.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLinkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
