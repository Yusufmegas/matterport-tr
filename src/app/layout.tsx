import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matterporttr.com"),
  title: {
    default: "Matterport 3D Sanal Tur ve Dijital İkiz | Matterport TR",
    template: "%s | Matterport TR",
  },
  description:
    "Matterport 3D sanal tur, dijital ikiz, Google Street View ve teknik veri çözümleriyle mekânlarınızı ölçülebilir dijital deneyimlere dönüştürün.",
  applicationName: "Matterport TR",
  creator: "Matterport TR",
  publisher: "Matterport Türkiye Dijital Bilişim",
  category: "technology",
  alternates: { canonical: "/" },
  keywords: [
    "Matterport",
    "3D dijital ikiz",
    "LiDAR tarama",
    "Matterport Pro3",
    "Google Street View",
    "BIM",
    "CAD",
    "IFC",
    "E57",
    "nokta bulutu",
    "mekânsal veri",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Matterport TR",
    title: "Matterport 3D Sanal Tur ve Dijital İkiz | Matterport TR",
    description:
      "Matterport 3D sanal tur, dijital ikiz, Google Street View ve teknik veri çözümleriyle mekânlarınızı ölçülebilir dijital deneyimlere dönüştürün.",
  },
  twitter: { card: "summary_large_image" },
  /* Search Console doğrulaması: yalnızca env tanımlıysa render edilir */
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#090d13" },
  ],
};

/**
 * Applies the persisted (or system-preferred) theme class before first
 * paint so there is no light/dark flash. Runs synchronously in <body>
 * ahead of all rendered content.
 */
const themeInitScript = `(function () {
  try {
    var theme = localStorage.getItem("mtr-theme");
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <OrganizationJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
