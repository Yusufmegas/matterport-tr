import { Factory, FileCode2, Map, MapPinned, Radar } from "lucide-react";
import type { TrustItem } from "@/types";

export const trustItems: TrustItem[] = [
  { title: "Matterport Pro3 LiDAR", icon: Radar },
  { title: "Google Street View Entegrasyonu", icon: MapPinned },
  { title: "Türkiye Geneli Hizmet", icon: Map },
  { title: "Kurumsal ve Endüstriyel Projeler", icon: Factory },
  { title: "BIM, CAD ve E57 Çıktıları", icon: FileCode2 },
];
