import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export type Theme = "light" | "dark";

/** Sağ önizleme panelindeki teknik motifin türü. */
export type NeedPreviewType = "tour" | "docs" | "files" | "maps";

export interface NeedItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  linkLabel: string;
  /** Önizleme panelindeki büyük harfli üst başlık. */
  eyebrow: string;
  /** Önizleme panelindeki açıklama metni. */
  previewDescription: string;
  /** Önizlemede listelenen üç kısa özellik. */
  features: string[];
  /** Hangi teknik SVG motifinin çizileceğini belirler. */
  previewType: NeedPreviewType;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description?: string;
}

export interface SolutionPageItem {
  slug: string;
  /** h1 on the detail page */
  title: string;
  /** Short name used on cards and navigation */
  shortTitle: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  /** Checked in order; first existing file under public/ wins. */
  heroImageCandidates: string[];
  icon: LucideIcon;
  overview?: string[];
  benefits?: string[];
  features?: string[];
  process?: ProcessStep[];
  outputs?: string[];
  useCases?: string[];
  faq?: FaqItem[];
  relatedSectorSlugs?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export interface SectorPageItem {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  /** Checked in order; first existing file under public/ wins. */
  heroImageCandidates: string[];
  icon: LucideIcon;
  /** Sektörel ihtiyaçlar */
  challenges?: string[];
  /** "Matterport çözümü" paragrafları */
  solutions?: string[];
  benefits?: string[];
  useCases?: string[];
  recommendedSolutionSlugs?: string[];
  process?: ProcessStep[];
  faq?: FaqItem[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export type ProjectVariant =
  | "marine"
  | "industrial"
  | "aviation"
  | "hospitality"
  | "retail"
  | "construction";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  href: string;
  /** Checked in order; first existing file under public/ wins. */
  imageCandidates: string[];
  imageAlt: string;
  variant: ProjectVariant;
}

export interface ProjectStat {
  label: string;
  value: string;
}

/** Ana sayfa Seçilmiş Projeler vitrinindeki kart verisi. */
export interface PortfolioProject {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  /** Yalnızca kesin biliniyorsa; yoksa satır hiç render edilmez. */
  location?: string;
  /** Checked in order; first existing file under public/ wins. */
  imageCandidates: string[];
  imageAlt: string;
  variant: ProjectVariant;
}

export interface ProjectPageItem {
  slug: string;
  /** h1 on the detail page */
  title: string;
  /** Short name used on cards */
  shortTitle: string;
  category: string;
  categorySlug: string;
  location: string;
  year?: string;
  client?: string;
  projectType: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  imageAlt: string;
  /** Checked in order; first existing file under public/ wins. */
  heroImageCandidates: string[];
  /** All existing files render in the gallery; empty → section hidden. */
  galleryImageCandidates: string[];
  thumbnailCandidates: string[];
  variant: ProjectVariant;
  overview?: string[];
  objective?: string[];
  scope?: string[];
  deliveredItems?: string[];
  technologies?: string[];
  highlights?: string[];
  process?: ProcessStep[];
  stats?: ProjectStat[];
  /** Empty string → tour panel shows a "coming soon" state, no iframe. */
  matterportUrl: string;
  matterportPosterCandidates?: string[];
  relatedProjectSlugs?: string[];
  relatedSolutionSlugs?: string[];
  relatedSectorSlugs?: string[];
  faq?: FaqItem[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/** Ana sayfa Çözümler panelindeki teknik görselin türü. */
export type SolutionVisualType = "wireframe" | "dollhouse" | "pointcloud";

export interface SolutionGroupService {
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Ana sayfadaki üç çözüm grubundan biri (yedi detay route'unu gruplar). */
export interface SolutionGroup {
  id: string;
  /** "01" – "03"; sol sticky göstergesi ve panel numarası. */
  number: string;
  title: string;
  description: string;
  services: SolutionGroupService[];
  /** Örn. Teknik Çıktılar sayfasına giden ek bağlantı. */
  extraLink?: { label: string; href: string };
  /** Teknik format mikro etiketleri (yalnızca teknik grup). */
  formatTags?: string[];
  visual: SolutionVisualType;
}
