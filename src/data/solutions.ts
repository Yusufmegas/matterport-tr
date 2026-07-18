import {
  Box,
  Building2,
  Camera,
  ClipboardList,
  FileText,
  Layers,
  MapPin,
} from "lucide-react";
import type { SolutionGroup } from "@/types";

export const solutionsEyebrow = "ÇÖZÜMLER";
export const solutionsDescription =
  "Tek bir çekimden, farklı iş süreçlerine uygun dijital deneyimler ve teknik veriler üretiyoruz.";

export const solutionsCta = {
  label: "Tüm Çözümleri İnceleyin",
  href: "/cozumler",
};

/**
 * Yedi çözüm detay sayfası ana sayfada üç grupta sunulur;
 * route'ların tamamı alt hizmet bağlantıları olarak korunur.
 */
export const solutionGroups: SolutionGroup[] = [
  {
    id: "tanitim",
    number: "01",
    title: "TANITIM VE DİJİTAL GÖRÜNÜRLÜK",
    description:
      "Mekânınızı her yerden erişilebilir, etkileyici ve paylaşılabilir bir dijital deneyime dönüştürün.",
    services: [
      { label: "3D Sanal Tur", href: "/cozumler/3d-sanal-tur", icon: Box },
      {
        label: "Google Street View",
        href: "/cozumler/google-street-view",
        icon: MapPin,
      },
      {
        label: "Fotoğraf ve Tanıtım Videosu",
        href: "/cozumler/fotograf-video",
        icon: Camera,
      },
    ],
    visual: "wireframe",
  },
  {
    id: "dokumantasyon",
    number: "02",
    title: "DİJİTAL İKİZ VE DOKÜMANTASYON",
    description:
      "Saha verilerinden doğru, güncel ve ekipler arasında paylaşılabilir dijital kaynaklar oluşturun.",
    services: [
      { label: "Dijital İkiz", href: "/cozumler/dijital-ikiz", icon: Layers },
      {
        label: "İnşaat Dokümantasyonu",
        href: "/cozumler/insaat-dokumantasyonu",
        icon: ClipboardList,
      },
      {
        label: "Kurumsal Portföy Tarama",
        href: "/cozumler/kurumsal-portfoy-tarama",
        icon: Building2,
      },
    ],
    visual: "dollhouse",
  },
  {
    id: "teknik-veri",
    number: "03",
    title: "TEKNİK VERİ VE DOSYA TESLİMLERİ",
    description:
      "Projeleriniz için nokta bulutu, BIM, CAD ve ölçümlü teknik dosyaları planlı bir teslim süreciyle alın.",
    services: [
      {
        label: "Teknik Dosyalar",
        href: "/cozumler/teknik-dosyalar",
        icon: FileText,
      },
    ],
    extraLink: {
      label: "Tüm Teknik Çıktıları İnceleyin",
      href: "/teknik-ciktilar",
    },
    formatTags: ["MATTERPAK", "E57", "BIM / RVT", "IFC", "CAD / DWG", "KAT PLANI"],
    visual: "pointcloud",
  },
];
