import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { solutionPages } from "@/data/solutions-pages";
import { sectorPages } from "@/data/sectors-pages";
import { SOLUTIONS_AND_SECTORS_ENABLED } from "@/config/feature-flags";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
    /* NOT: /projeler ve /projeler/[slug] bilinçli olarak sitemap DIŞI —
       yalnızca özel/doğrudan paylaşım için kullanılır (noindex). */
    /* GEÇİCİ: kapalıyken listelenmez — bkz. src/config/feature-flags.ts */
    ...(SOLUTIONS_AND_SECTORS_ENABLED
      ? ["/cozumler", "/sektorler"].map((path) => ({
          url: `${base}${path}`,
              changeFrequency: "weekly" as const,
          priority: 0.8,
        }))
      : []),
    ...["/teknik-ciktilar", "/matterport-nedir", "/sss", "/hakkimizda", "/iletisim"].map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...["/kvkk", "/gizlilik-politikasi", "/cerez-ayarlari"].map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  /* Detail routes come straight from the central data files — adding a
     new solution/sector automatically extends the sitemap.
     NOT: /projeler/[slug] detay sayfaları bilinçli olarak sitemap DIŞI —
     yalnızca özel/doğrudan paylaşım için kullanılır (noindex). */
  const detailPages: MetadataRoute.Sitemap = SOLUTIONS_AND_SECTORS_ENABLED
    ? [
    ...solutionPages.map((solution) => ({
      url: `${base}/cozumler/${solution.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...sectorPages.map((sector) => ({
      url: `${base}/sektorler/${sector.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
    : [];

  return [...staticPages, ...detailPages];
}
