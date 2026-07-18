import type { MetadataRoute } from "next";

/**
 * PWA manifesti — yalnızca public/icons/ altında fiziksel olarak
 * doğrulanmış ikonlar tanımlıdır. Not: icon-512.png gerçekte 513×513
 * pikseldir; sizes alanı gerçek ölçüyü bildirir (yüklenebilirlik
 * eşiği ≥512 olduğundan sorun oluşturmaz).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Matterport TR",
    short_name: "Matterport TR",
    description:
      "Matterport 3D dijital ikiz, sanal tur ve teknik veri çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d13",
    theme_color: "#d81a3c",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "513x513",
        type: "image/png",
      },
    ],
  };
}
