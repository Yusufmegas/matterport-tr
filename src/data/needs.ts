import { Building2, ClipboardList, Layers, MapPin } from "lucide-react";
import type { NeedItem } from "@/types";

export const needsEyebrow = "İHTİYACINIZ NEDİR?";
export const needsTitle = "Projeniz için doğru çözümü birlikte belirleyelim.";
export const needsDescription =
  "İhtiyacınıza en uygun hizmeti seçin, mekânınıza nasıl değer kattığımızı görün.";

/** Önizleme panelinin altındaki CTA metni. */
export const needsCtaLabel = "Detayları İncele";

export const needs: NeedItem[] = [
  {
    id: "mekan-tanitimi",
    title: "Mekânımı dijital ortamda tanıtmak istiyorum",
    description:
      "Otel, restoran, mağaza, showroom, okul, sağlık tesisi ve yaşam alanlarınızı etkileyici bir dijital deneyime dönüştürün.",
    icon: Building2,
    href: "/cozumler/3d-sanal-tur",
    linkLabel: "Çözümü İncele",
    eyebrow: "3D SANAL TUR VE DİJİTAL DENEYİM",
    previewDescription:
      "Mekânınızı etkileşimli 3D sanal turlarla her yerden erişilebilir hâle getiriyoruz.",
    features: [
      "Gerçekçi 3D deneyim",
      "Web’de paylaşılabilir",
      "Mobil, tablet ve masaüstü uyumlu",
    ],
    previewType: "tour",
  },
  {
    id: "proje-belgeleme",
    title: "Projemin mevcut durumunu belgelemek istiyorum",
    description:
      "İnşaat ilerlemesini takip edin, mevcut durumu kayıt altına alın ve saha süreçlerini uzaktan inceleyin.",
    icon: ClipboardList,
    href: "/cozumler/insaat-dokumantasyonu",
    linkLabel: "Çözümü İncele",
    eyebrow: "MEVCUT DURUM VE SÜREÇ BELGELEME",
    previewDescription:
      "Projenin mevcut durumunu, ilerleme aşamalarını ve saha koşullarını merkezi bir dijital kaynakta belgeliyoruz.",
    features: [
      "Tarihsel kayıt",
      "Uzaktan saha inceleme",
      "Ekipler arası koordinasyon",
    ],
    previewType: "docs",
  },
  {
    id: "teknik-dosyalar",
    title: "Teknik dosyalara ihtiyacım var",
    description:
      "MatterPak™, E57, BIM, IFC, CAD/DWG, kat planı ve ölçüm raporlarına ulaşın.",
    icon: Layers,
    href: "/cozumler/teknik-dosyalar",
    linkLabel: "Çözümü İncele",
    eyebrow: "BIM, CAD VE NOKTA BULUTU",
    previewDescription:
      "Mimarlık, mühendislik ve uygulama ekipleri için projeye uygun teknik veri ve dosya teslimleri hazırlıyoruz.",
    features: [
      "MatterPak ve E57",
      "BIM / RVT / IFC",
      "CAD / DWG ve kat planları",
    ],
    previewType: "files",
  },
  {
    id: "google-street-view",
    title: "Google Street View’da görünmek istiyorum",
    description:
      "Mekânınızı Google İşletme Profili ve Street View üzerinde ziyaret edilebilir hale getirin.",
    icon: MapPin,
    href: "/cozumler/google-street-view",
    linkLabel: "Çözümü İncele",
    eyebrow: "GOOGLE HARİTALARDA DİJİTAL GÖRÜNÜRLÜK",
    previewDescription:
      "İşletmenizin iç mekânını Google Maps ve Street View üzerinden erişilebilir hâle getiriyoruz.",
    features: [
      "Google Maps entegrasyonu",
      "İşletme profili görünürlüğü",
      "Şubeler için standart yayın",
    ],
    previewType: "maps",
  },
];
