export interface TechnicalOutput {
  id: string;
  title: string;
  shortTitle?: string;
  eyebrow: string;
  description: string;
  formats: string[];
  includedItems: string[];
  useCases: string[];
  compatibleSoftware?: string[];
  note?: string;
  iconKey: string;
}

export const technicalOutputsMeta = {
  metaTitle: "MatterPak, E57, BIM ve CAD Teknik Çıktıları | Matterport TR",
  metaDescription:
    "Matterport çekimlerinden elde edilebilen MatterPak, E57 nokta bulutu, BIM, CAD, kat planı ve ölçüm raporu teslimlerini inceleyin.",
  ogTitle: "Matterport Teknik Dosyalar ve Profesyonel Çıktılar",
  ogDescription:
    "Mimarlık, mühendislik, inşaat ve tesis yönetimi süreçleri için projeye hazır Matterport teknik verileri.",
};

/**
 * Altı ana teknik çıktının TEK merkezi kaynağı. Teknik doğruluk
 * kuralları: mutlak garanti ifadeleri kullanılmaz; kapsam daima
 * "seçilen teslim paketine / projenin teknik uygunluğuna göre" anlatılır.
 */
export const technicalOutputs: TechnicalOutput[] = [
  {
    id: "matterpak",
    title: "MatterPak™ Bundle",
    shortTitle: "MatterPak™",
    eyebrow: "NOKTA BULUTU VE 3D VERİ PAKETİ",
    description:
      "MatterPak™, Matterport dijital ikizinden elde edilen temel geometrik ve görsel dosyaları tek pakette sunar. Mimarlar, mühendisler ve uygulama ekipleri mevcut durum verisini kendi tasarım yazılımlarına aktararak proje başlangıcını hızlandırabilir.",
    formats: [".XYZ", ".OBJ", ".JPG", ".PDF"],
    includedItems: [
      "Renkli nokta bulutu — XYZ",
      "Dokulu 3D mesh modeli — OBJ",
      "OBJ modeli için JPG doku dosyaları",
      "Yüksek çözünürlüklü kat planı görüntüleri",
      "Yansıtılmış tavan planı görüntüleri",
      "Çok katlı projelerde katlara ayrılmış görseller",
      "Tüm katları içeren PDF plan dosyaları",
    ],
    useCases: [
      "Mevcut durum modellemesi",
      "Renovasyon ve yeniden tasarım",
      "3D modelleme başlangıç verisi",
      "Mimari koordinasyon",
      "Mekânsal referans",
      "Görselleştirme çalışmaları",
    ],
    compatibleSoftware: [
      "Autodesk ReCap",
      "Autodesk Revit",
      "AutoCAD",
      "3ds Max",
    ],
    note: "MatterPak kapsamı, kullanılan yakalama cihazı ve projenin teknik uygunluğuna göre değişebilir.",
    iconKey: "package",
  },
  {
    id: "e57",
    title: "E57 Yüksek Yoğunluklu Nokta Bulutu",
    shortTitle: "E57",
    eyebrow: "TARAMA VERİSİ",
    description:
      "E57 dosyası, Matterport alanındaki tarama konumlarına ait yüksek yoğunluklu nokta bulutunu, panoramik görüntüleri ve ilgili metadata'yı tek ve yaygın biçimde desteklenen bir dosya yapısında sunar.",
    formats: [".E57"],
    includedItems: [
      "Yüksek yoğunluklu nokta bulutu",
      "Tarama konumlarına bağlı panoramik görüntüler",
      "Tarama konumu metadata'sı",
      "Yazılımlar arası aktarılabilir geometrik veri",
    ],
    useCases: [
      "Scan-to-BIM süreçleri",
      "Mevcut durum analizi",
      "Mimari ve mühendislik modellemesi",
      "Tesis ve endüstriyel alan belgelemesi",
      "Nokta bulutu karşılaştırması",
      "Uzaktan teknik inceleme",
    ],
    compatibleSoftware: [
      "Autodesk ReCap",
      "Autodesk Revit",
      "AutoCAD",
      "CloudCompare",
      "E57 destekleyen nokta bulutu yazılımları",
    ],
    note: "E57 dosyası hazır bir BIM modeli değildir. Modellemede kullanılacak yüksek yoğunluklu tarama verisidir.",
    iconKey: "scan",
  },
  {
    id: "bim",
    title: "BIM Modeli ve IFC Teslimi",
    shortTitle: "BIM / IFC",
    eyebrow: "SCAN-TO-BIM",
    description:
      "Matterport BIM teslimi, taranan mevcut alanın tasarım ve koordinasyon ekipleri tarafından kullanılabilecek yapılandırılmış bir bina bilgi modeline dönüştürülmesini sağlar. Teslim kapsamı projenin ihtiyaçlarına göre mimari, iç mekân ve ilgili yapı elemanlarını içerebilir.",
    formats: [".RVT", ".IFC", ".RCS", ".DWG"],
    includedItems: [
      "Revit proje dosyası — RVT",
      "Açık veri paylaşımı için IFC4 dosyası",
      "ReCap nokta bulutu — RCS",
      "DWG kat planı",
      "DWG yansıtılmış tavan planı",
      "Seçilen kapsama göre modellenmiş mimari elemanlar",
    ],
    useCases: [
      "Mevcut bina modelinin oluşturulması",
      "Renovasyon ve yeniden kullanım projeleri",
      "Mimari koordinasyon",
      "Disiplinler arası proje paylaşımı",
      "Alan yönetimi",
      "Tasarım öncesi mevcut durum modellemesi",
    ],
    compatibleSoftware: [
      "Autodesk Revit",
      "Autodesk ReCap",
      "AutoCAD",
      "IFC destekleyen BIM yazılımları",
    ],
    note: "Model ayrıntısı, eleman kapsamı ve teslim seviyesi sipariş edilen BIM paketine göre belirlenir.",
    iconKey: "building",
  },
  {
    id: "cad",
    title: "CAD ve DWG Çizimleri",
    shortTitle: "CAD / DWG",
    eyebrow: "2D TEKNİK ÇİZİM",
    description:
      "Matterport CAD teslimi, taranan mekânın düzenlenebilir 2D çizgisel planlarını profesyonel CAD iş akışlarında kullanılabilecek formatlarda sunar.",
    formats: [".DWG", ".DXF", ".PDF"],
    includedItems: [
      "Düzenlenebilir DWG kat planı",
      "DWG dosyasından üretilmiş DXF",
      "Katlara ait PDF çizim seti",
      "Seçilen kapsama göre yansıtılmış tavan planı",
      "Duvar, kapı, pencere ve temel mimari plan geometrileri",
    ],
    useCases: [
      "Renovasyon planlaması",
      "İç mimari yerleşim",
      "Mağaza ve ofis düzenlemeleri",
      "Mevcut durum çizimi",
      "Uygulama öncesi teknik hazırlık",
      "Alan ve yerleşim koordinasyonu",
    ],
    compatibleSoftware: [
      "AutoCAD",
      "DraftSight",
      "BricsCAD",
      "DWG ve DXF destekleyen CAD yazılımları",
    ],
    note: "Teslimde bulunacak çizim katmanları ve tavan planı, seçilen CAD kapsamına göre değişebilir.",
    iconKey: "ruler",
  },
  {
    id: "schematic-floor-plan",
    title: "Şematik Kat Planı",
    shortTitle: "Şematik Kat Planı",
    eyebrow: "ÖLÇÜLÜ 2D PLAN",
    description:
      "Şematik kat planı, mekânın oda dağılımını, temel ölçülerini ve alan ilişkilerini anlaşılır bir 2D sunumda gösterir. Gayrimenkul sunumu, alan planlama ve genel dokümantasyon için hızlı ve okunabilir bir çıktıdır.",
    formats: [".PNG", ".SVG", ".PDF"],
    includedItems: [
      "Her kat için PNG plan",
      "Her kat için SVG plan",
      "Tüm katları birleştiren PDF",
      "Oda isimleri",
      "Oda ölçüleri",
      "Toplam kat veya alan bilgileri",
      "Temel kapı, pencere ve sabit eleman gösterimleri",
    ],
    useCases: [
      "Gayrimenkul sunumu",
      "Alan planlama",
      "Otel ve konut dokümantasyonu",
      "Kiralama ve satış dosyaları",
      "Tesis envanteri",
      "Genel yerleşim incelemesi",
    ],
    note: "Şematik kat planı, CAD çizimi veya mimari uygulama projesi değildir. İnşaat, imalat veya resmî ölçüm işlemlerinde tek başına kullanılmamalıdır.",
    iconKey: "layout",
  },
  {
    id: "property-report",
    title: "Property Report ve Ölçüm Raporu",
    shortTitle: "Property Report",
    eyebrow: "ALAN VE ODA VERİLERİ",
    description:
      "Property Report, dijital ikizin genel mekân özetini ve oda bazındaki alan ile boyut bilgilerini indirilebilir bir rapor hâlinde sunar. Teknik ekiplerin alanı masa başından incelemesini ve ilk kapsam çalışmalarını hızlandırır.",
    formats: [".PDF", "RAPOR"],
    includedItems: [
      "Genel mekân özeti",
      "Kat bazında alan bilgileri",
      "Oda bazında alan dökümü",
      "Oda boyutları",
      "Kapı, pencere ve açıklık bilgileri",
      "Yazdırılabilir ve paylaşılabilir rapor",
    ],
    useCases: [
      "Ön keşif",
      "Alan hesaplama",
      "Renovasyon kapsamı oluşturma",
      "Malzeme miktarı için ön çalışma",
      "Tesis dokümantasyonu",
      "Sigorta ve restorasyon iş akışları",
    ],
    note: "Rapordaki ölçüm ve alan verileri, kullanılan cihazın doğruluğuna, tarama kalitesine, mekân koşullarına ve dijital ikizin işlenmesine bağlıdır.",
    iconKey: "file",
  },
];

/** İkincil görsel teslimler — ana teknik kartlarla aynı ağırlıkta değil. */
export const visualAssets = {
  eyebrow: "EK GÖRSEL TESLİMLER",
  title: "Yüksek Çözünürlüklü Görsel Çıktılar",
  description:
    "Teknik dosyalara ek olarak Matterport modelinden web sitesi, sunum, teklif dosyası ve dijital arşivlerde kullanılabilecek yüksek çözünürlüklü görseller üretilebilir.",
  items: [
    "4K HDR iç mekân görselleri",
    "360° panoramik görüntüler",
    "Kat planı görünümü",
    "Dollhouse görünümü",
    "Sosyal medya ve web kullanımına uygun seçilmiş kareler",
  ],
  note: "Google Street View yayını, dosya tesliminden farklı olarak dijital görünürlük ve platform entegrasyonu hizmetidir.",
};

/** "Hangi çıktı ne için?" karşılaştırma satırları. */
export const outputComparison: Array<{ need: string; answer: string }> = [
  {
    need: "Mevcut durumu nokta bulutu olarak almak",
    answer: "MatterPak veya E57",
  },
  { need: "Revit tabanlı bina modeli", answer: "BIM / RVT" },
  { need: "Farklı BIM yazılımları arasında paylaşım", answer: "IFC" },
  { need: "Düzenlenebilir 2D plan", answer: "CAD / DWG / DXF" },
  { need: "Hızlı ve okunabilir ölçülü plan", answer: "Şematik Kat Planı" },
  { need: "Oda ve alan verilerini raporlamak", answer: "Property Report" },
  { need: "Web ve sunum görselleri", answer: "4K HDR Görseller" },
];
