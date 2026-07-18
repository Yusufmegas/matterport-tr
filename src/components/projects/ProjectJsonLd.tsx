import { siteConfig } from "@/config/site";

interface ProjectJsonLdProps {
  name: string;
  description: string;
  /** Route path starting with / */
  path: string;
  about: string;
  /** City / location as plain text */
  locationName?: string;
  /** Absolute-resolvable public path — pass ONLY when the file really exists */
  imageSrc?: string | null;
}

/** Safe CreativeWork schema — no fabricated dates, awards or ratings. */
export function ProjectJsonLd({
  name,
  description,
  path,
  about,
  locationName,
  imageSrc,
}: ProjectJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    about,
    creator: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.url,
    },
    ...(locationName
      ? { locationCreated: { "@type": "Place", name: locationName } }
      : {}),
    ...(imageSrc ? { image: `${siteConfig.url}${imageSrc}` } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
