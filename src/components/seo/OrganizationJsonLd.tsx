import { siteConfig } from "@/config/site";
import { resolvePublicImage } from "@/lib/assets";

/**
 * Site geneli Organization + WebSite schema'ları — root layout'ta bir kez
 * render edilir. Yalnızca DOĞRULANMIŞ config değerleri yayınlanır: boş
 * adres/sosyal bağlantı alanları hiç üretilmez; adres uydurulmaz.
 */
export function OrganizationJsonLd() {
  const logoSrc = resolvePublicImage(
    "brand/matterport-tr-logo.svg",
    "brand/matterport-tr-logo-dark.svg",
    "brand/matterport-tr-logo-light.svg",
  );

  const contactPoints = [
    siteConfig.technicalSupportPhone
      ? {
          "@type": "ContactPoint",
          contactType: "technical support",
          name: "Teknik Destek",
          telephone: siteConfig.technicalSupportPhone,
          areaServed: "TR",
          availableLanguage: "Turkish",
          ...(siteConfig.email ? { email: siteConfig.email } : {}),
        }
      : null,
    siteConfig.customerServicePhone
      ? {
          "@type": "ContactPoint",
          contactType: "customer service",
          name: "Müşteri Hizmetleri",
          telephone: siteConfig.customerServicePhone,
          areaServed: "TR",
          availableLanguage: "Turkish",
        }
      : null,
  ].filter(Boolean);

  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.siteName,
    ...(siteConfig.companyLegalName
      ? { legalName: siteConfig.companyLegalName }
      : {}),
    url: siteConfig.url,
    ...(logoSrc ? { logo: `${siteConfig.url}${logoSrc}` } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.technicalSupportPhone
      ? { telephone: siteConfig.technicalSupportPhone }
      : {}),
    ...(contactPoints.length > 0 ? { contactPoint: contactPoints } : {}),
    ...(siteConfig.address ? { address: siteConfig.address } : {}),
    ...(siteConfig.socialLinks.length > 0
      ? { sameAs: siteConfig.socialLinks.map((social) => social.href) }
      : {}),
  };

  /* Gerçek site içi arama olmadığından SearchAction bilinçli olarak yok. */
  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.siteName,
    url: siteConfig.url,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
