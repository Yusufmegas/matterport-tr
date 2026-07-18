import { siteConfig } from "@/config/site";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  /** Route path starting with / */
  path: string;
}

/** Minimal Service schema — no fabricated address, rating or reviews. */
export function ServiceJsonLd({ name, description, path }: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    areaServed: "Türkiye",
    provider: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
