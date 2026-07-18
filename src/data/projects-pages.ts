import type { ProjectPageItem } from "@/types";

export const projectsListMeta = {
  eyebrow: "PROJELERİMİZ",
  title: "Gerçek mekânlar, etkileşimli dijital deneyimler.",
  description:
    "Farklı ölçek ve sektörlerde gerçekleştirdiğimiz Matterport tarama, sanal tur, dijital ikiz ve teknik dokümantasyon projelerini keşfedin.",
  metaTitle: "Matterport Projeleri | 3D Dijital İkiz ve Sanal Tur",
  metaDescription:
    "Yat, otel, endüstri, havacılık, perakende ve inşaat sektörlerinde gerçekleştirdiğimiz Matterport 3D dijital ikiz ve sanal tur projelerini inceleyin.",
};

export const projectCategories = [
  { label: "Yat ve Denizcilik", slug: "yat-denizcilik" },
  { label: "Endüstri ve Üretim", slug: "endustri-uretim" },
  { label: "Havacılık", slug: "havacilik" },
  { label: "Otel ve Konaklama", slug: "otel-konaklama" },
  { label: "Perakende ve Mağazacılık", slug: "perakende-magazacilik" },
  { label: "İnşaat ve Mimarlık", slug: "insaat-mimarlik" },
];

export const projectPages: ProjectPageItem[] = [
  {
    slug: "numarine-30xp",
    title: "Numarine 30XP",
    shortTitle: "Numarine 30XP",
    category: "Yat ve Denizcilik",
    categorySlug: "yat-denizcilik",
    location: "Tuzla, İstanbul",
    client: "Numarine",
    projectType: "3D Sanal Tur ve Dijital Yat Deneyimi",
    eyebrow: "YAT VE DENİZCİLİK",
    description:
      "Numarine 30XP yatının iç mekânları ve güverte alanları, uluslararası müşterilerin internet üzerinden ayrıntılı biçimde inceleyebileceği etkileşimli bir 3D dijital deneyime dönüştürüldü.",
    metaTitle: "Numarine 30XP — Yat 3D Sanal Tur Projesi",
    metaDescription:
      "Numarine 30XP yatının iç mekân ve güverte alanlarının Matterport ile etkileşimli 3D dijital deneyime dönüştürülmesi. Yat ve denizcilik projesi.",
    imageAlt: "Numarine 30XP yatının 3D sanal tur görünümü",
    heroImageCandidates: [
      "images/projects/numarine-30xp-hero.webp",
      "images/projects/numarine-30xp-hero.jpg",
      "images/projects/numarine-30xp.webp",
      "images/projects/numarine-30xp.jpg",
    ],
    galleryImageCandidates: [
      "images/projects/gallery/numarine-30xp-01.webp",
      "images/projects/gallery/numarine-30xp-02.webp",
      "images/projects/gallery/numarine-30xp-03.webp",
      "images/projects/gallery/numarine-30xp-01.jpg",
      "images/projects/gallery/numarine-30xp-02.jpg",
      "images/projects/gallery/numarine-30xp-03.jpg",
    ],
    thumbnailCandidates: [
      "images/projects/numarine-30xp.webp",
      "images/projects/numarine-30xp.jpg",
    ],
    variant: "marine",
    overview: [
      "Numarine 30XP, uzun menzilli keşif yatları arasında öne çıkan bir modeldir. Projede yatın salon, kamara ve güverte alanları Matterport Pro3 ile taranarak tek bağlantı üzerinden gezilebilir bir dijital deneyime dönüştürüldü.",
      "Uluslararası alıcılar ve broker ağı, tekneyi bulunduğu lokasyondan bağımsız olarak ayrıntılı biçimde inceleyebiliyor; bilgi etiketleri donanım ve tasarım detaylarını mekân içinde sunuyor.",
    ],
    objective: [
      "Yatın iç mekân tasarımını dijital ortamda sunmak",
      "Uluslararası müşterilerin uzaktan inceleme yapmasını sağlamak",
      "Satış ve tanıtım süreçlerini desteklemek",
      "Farklı bölümlerin tek bağlantı üzerinden gezilebilmesini sağlamak",
    ],
    scope: [
      "İç mekân taraması",
      "Güverte alanlarının taranması",
      "Matterport 3D model",
      "Dollhouse görünümü",
      "Bilgi etiketleri",
      "HDR fotoğraflar",
      "Mobil ve masaüstü uyumluluk",
    ],
    deliveredItems: [
      "Etkileşimli Matterport turu",
      "Paylaşılabilir proje bağlantısı",
      "Web sitesi embed kodu",
      "HDR proje görselleri",
      "Marka entegrasyonuna hazır dijital model",
    ],
    technologies: [
      "Matterport Pro3",
      "3D dijital ikiz",
      "HDR görüntüleme",
      "Mattertags",
    ],
    matterportUrl: "",
    matterportPosterCandidates: [
      "images/projects/numarine-30xp-poster.webp",
      "images/projects/numarine-30xp-poster.jpg",
    ],
    relatedProjectSlugs: ["europark-hotel", "thy-teknik"],
    relatedSolutionSlugs: ["3d-sanal-tur", "dijital-ikiz", "fotograf-video"],
    relatedSectorSlugs: ["yat-denizcilik"],
    faq: [
      {
        question: "Yat sanal turu uluslararası müşterilerle paylaşılabilir mi?",
        answer:
          "Evet. Tur tek bağlantıyla dünyanın her yerinden açılabilir; broker ağı ve potansiyel alıcılarla doğrudan paylaşılır.",
      },
      {
        question: "Tur web sitesine eklenebilir mi?",
        answer:
          "Evet. Teslim edilen embed koduyla tur, üretici veya broker web sitesine tek adımda gömülür.",
      },
      {
        question: "Tur mobil cihazlarda çalışır mı?",
        answer:
          "Evet. Matterport turları telefon, tablet ve masaüstünde ek uygulama gerektirmeden çalışır; VR başlıklarıyla da uyumludur.",
      },
    ],
    ctaTitle: "Yatınız için benzer bir dijital deneyim planlayalım.",
    ctaDescription:
      "Tekne bilgilerinizi paylaşın; çekim ve sunum planını birlikte netleştirelim.",
  },
  {
    slug: "santa-farma",
    title: "Santa Farma Üretim Tesisi",
    shortTitle: "Santa Farma",
    category: "Endüstri ve Üretim",
    categorySlug: "endustri-uretim",
    location: "Tekirdağ",
    client: "Santa Farma",
    projectType: "Endüstriyel Dijital İkiz ve Tesis Dokümantasyonu",
    eyebrow: "ENDÜSTRİ VE ÜRETİM",
    description:
      "Geniş üretim ve operasyon alanları, uzaktan inceleme, kurumsal dokümantasyon ve teknik ekip koordinasyonu amacıyla dijitalleştirildi.",
    metaTitle: "Santa Farma — Endüstriyel Dijital İkiz Projesi",
    metaDescription:
      "Santa Farma üretim tesisinin Matterport Pro3 LiDAR ile dijital ikize dönüştürülmesi: uzaktan inceleme, kurumsal dokümantasyon ve güvenli erişim.",
    imageAlt: "Santa Farma üretim tesisinin 3D dijital ikiz görünümü",
    heroImageCandidates: [
      "images/projects/santa-farma-hero.webp",
      "images/projects/santa-farma-hero.jpg",
      "images/projects/santa-farma.webp",
      "images/projects/santa-farma.jpg",
    ],
    galleryImageCandidates: [
      "images/projects/gallery/santa-farma-01.webp",
      "images/projects/gallery/santa-farma-02.webp",
      "images/projects/gallery/santa-farma-03.webp",
      "images/projects/gallery/santa-farma-01.jpg",
      "images/projects/gallery/santa-farma-02.jpg",
      "images/projects/gallery/santa-farma-03.jpg",
    ],
    thumbnailCandidates: [
      "images/projects/santa-farma.webp",
      "images/projects/santa-farma.jpg",
    ],
    variant: "industrial",
    overview: [
      "İlaç üretimi gibi hassas bir alanda faaliyet gösteren tesisin üretim ve operasyon bölümleri, Matterport Pro3 LiDAR ile taranarak ölçülebilir bir dijital ikize dönüştürüldü.",
      "Teknik ekipler ve yönetim, tesisi sahaya gitmeden inceleyebiliyor; model, kurumsal dokümantasyon ve ekipler arası koordinasyon için ortak referans olarak kullanılıyor.",
    ],
    objective: [
      "Üretim alanlarını kayıt altına almak",
      "Uzaktan saha incelemesini mümkün kılmak",
      "Teknik ekipler arasında ortak mekânsal veri oluşturmak",
      "Fiziksel ziyaret ihtiyacını azaltmak",
    ],
    scope: [
      "Geniş alan taraması",
      "Üretim alanları",
      "Teknik ve operasyonel bölümler",
      "Güvenli erişim altyapısı",
      "HDR görüntüler",
      "Kat ve alan bazlı inceleme",
    ],
    deliveredItems: [
      "Kurumsal 3D dijital ikiz",
      "Şifreli erişim seçeneği",
      "HDR fotoğraflar",
      "Teknik ekip paylaşım bağlantıları",
      "Mekânsal dokümantasyon",
    ],
    technologies: [
      "Matterport Pro3 LiDAR",
      "Dijital ikiz",
      "Uzaktan saha inceleme",
      "Mekânsal dokümantasyon",
    ],
    matterportUrl: "",
    matterportPosterCandidates: [
      "images/projects/santa-farma-poster.webp",
      "images/projects/santa-farma-poster.jpg",
    ],
    relatedProjectSlugs: ["florentia-village", "thy-teknik"],
    relatedSolutionSlugs: [
      "dijital-ikiz",
      "teknik-dosyalar",
      "kurumsal-portfoy-tarama",
    ],
    relatedSectorSlugs: ["endustri-lojistik"],
    faq: [
      {
        question: "Büyük endüstriyel tesislerin taraması nasıl planlanır?",
        answer:
          "Tesis bölgelere ayrılır; çekim, üretim ve vardiya programına göre bölge bölge planlanır. Operasyon aksatılmadan geniş alanlar kısa sürede taranır.",
      },
      {
        question: "Dijital ikize kimler erişebilir?",
        answer:
          "Erişim tamamen kontrollüdür. Model şifreli tutulur ve yalnızca yetkilendirilmiş ekiplerle, rol bazlı bağlantılar üzerinden paylaşılır.",
      },
      {
        question: "Bu modelden teknik çıktı alınabilir mi?",
        answer:
          "Evet. Aynı taramadan E57 nokta bulutu, MatterPak ve kat planı gibi teknik çıktılar üretilebilir.",
      },
    ],
    ctaTitle: "Tesisiniz için benzer bir dijital ikiz planlayalım.",
    ctaDescription:
      "Alan bilgisi ve kullanım amacınızı paylaşın; kapsamı birlikte netleştirelim.",
  },
  {
    slug: "thy-teknik",
    title: "THY Teknik",
    shortTitle: "THY Teknik",
    category: "Havacılık",
    categorySlug: "havacilik",
    location: "İstanbul",
    client: "THY Teknik",
    projectType: "Teknik Alan ve Uçak İçi Dijital Dokümantasyon",
    eyebrow: "HAVACILIK",
    description:
      "Havacılık alanlarının ve uçak içi bölümlerin 3D tarama altyapısıyla kayıt altına alınmasına yönelik dijital deneyim ve dokümantasyon çalışması.",
    metaTitle: "THY Teknik — Havacılık Dijital Dokümantasyon Projesi",
    metaDescription:
      "Havacılık alanları ve uçak içi bölümler için Matterport 3D tarama ve dijital dokümantasyon çalışması. Kontrollü paylaşım ve kurumsal sunum altyapısı.",
    imageAlt: "THY Teknik hangar alanının 3D tarama görünümü",
    heroImageCandidates: [
      "images/projects/thy-teknik-hero.webp",
      "images/projects/thy-teknik-hero.jpg",
      "images/projects/thy-teknik.webp",
      "images/projects/thy-teknik.jpg",
    ],
    galleryImageCandidates: [
      "images/projects/gallery/thy-teknik-01.webp",
      "images/projects/gallery/thy-teknik-02.webp",
      "images/projects/gallery/thy-teknik-03.webp",
      "images/projects/gallery/thy-teknik-01.jpg",
      "images/projects/gallery/thy-teknik-02.jpg",
      "images/projects/gallery/thy-teknik-03.jpg",
    ],
    thumbnailCandidates: [
      "images/projects/thy-teknik.webp",
      "images/projects/thy-teknik.jpg",
    ],
    variant: "aviation",
    overview: [
      "Çalışma kapsamında havacılık ortamındaki teknik bölümler ve uçak içi alanlar 3D tarama altyapısıyla dijital ortama aktarıldı. Üretilen modeller, kurumsal sunum ve dokümantasyon süreçlerinde kullanılmak üzere düzenlendi.",
      "İçerikler kontrollü paylaşım yaklaşımıyla yönetildi; modeller yalnızca ilgili ekiplerin erişimine uygun biçimde yapılandırıldı.",
    ],
    objective: [
      "Teknik alanları uzaktan incelenebilir hale getirmek",
      "Uçak içi mekânları dijital ortamda sunmak",
      "Kurumsal sunum ve dokümantasyon süreçlerini desteklemek",
      "Tekrarlanan fiziksel inceleme ihtiyacını azaltmak",
    ],
    scope: [
      "Uçak içi alan taraması",
      "Teknik bölümler",
      "3D sanal tur",
      "HDR fotoğraflar",
      "Kontrollü paylaşım",
      "Revizyon süreci",
    ],
    deliveredItems: [
      "Matterport 3D tur",
      "Web entegrasyon bağlantısı",
      "HDR proje görselleri",
      "Kurumsal paylaşım bağlantısı",
      "Düzenlenmiş dijital model",
    ],
    technologies: [
      "Matterport Pro2 / Pro3",
      "HDR görüntüleme",
      "3D sanal tur",
      "Dijital dokümantasyon",
    ],
    matterportUrl: "",
    matterportPosterCandidates: [
      "images/projects/thy-teknik-poster.webp",
      "images/projects/thy-teknik-poster.jpg",
    ],
    relatedProjectSlugs: ["santa-farma", "numarine-30xp"],
    relatedSolutionSlugs: ["3d-sanal-tur", "dijital-ikiz", "teknik-dosyalar"],
    relatedSectorSlugs: ["endustri-lojistik"],
    faq: [
      {
        question: "Havacılık alanlarında çekim için özel izin gerekir mi?",
        answer:
          "Evet. Bu tür çekimler kurumun güvenlik ve erişim prosedürlerine tam uyumla, önceden planlanmış izinler dahilinde yürütülür.",
      },
      {
        question: "Modeller herkese açık mı yayınlanır?",
        answer:
          "Hayır. Kurumsal projelerde modeller kontrollü bağlantılarla yalnızca yetkilendirilmiş kullanıcıların erişimine sunulur.",
      },
      {
        question: "Uçak içi gibi dar alanlarda tarama mümkün mü?",
        answer:
          "Evet. Tarama noktaları dar hacimlere göre sıklaştırılır; kabin ve teknik bölümler bütünlüklü şekilde modellenir.",
      },
    ],
    ctaTitle: "Kurumsal dokümantasyon projenizi birlikte planlayalım.",
    ctaDescription:
      "Alan ve erişim gereksinimlerinizi paylaşın; uygun çekim planını hazırlayalım.",
  },
  {
    slug: "europark-hotel",
    title: "Europark Hotel",
    shortTitle: "Europark Hotel",
    category: "Otel ve Konaklama",
    categorySlug: "otel-konaklama",
    location: "İstanbul",
    client: "Europark Hotel",
    projectType: "Otel Sanal Tur ve Dijital Deneyim",
    eyebrow: "OTEL VE KONAKLAMA",
    description:
      "Otelin sosyal alanları ve farklı oda grupları, rezervasyon öncesinde ziyaretçilerin ayrıntılı biçimde inceleyebileceği etkileşimli sanal turlara dönüştürüldü.",
    metaTitle: "Europark Hotel — Otel Sanal Tur Projesi",
    metaDescription:
      "Europark Hotel'in sosyal alanları ve oda gruplarının Matterport ile etkileşimli sanal turlara dönüştürülmesi. Otel ve konaklama projesi.",
    imageAlt: "Europark Hotel konaklama alanlarının sanal tur görünümü",
    heroImageCandidates: [
      "images/projects/europark-hotel-hero.webp",
      "images/projects/europark-hotel-hero.jpg",
      "images/projects/europark-hotel.webp",
      "images/projects/europark-hotel.jpg",
    ],
    galleryImageCandidates: [
      "images/projects/gallery/europark-hotel-01.webp",
      "images/projects/gallery/europark-hotel-02.webp",
      "images/projects/gallery/europark-hotel-03.webp",
      "images/projects/gallery/europark-hotel-01.jpg",
      "images/projects/gallery/europark-hotel-02.jpg",
      "images/projects/gallery/europark-hotel-03.jpg",
    ],
    thumbnailCandidates: [
      "images/projects/europark-hotel.webp",
      "images/projects/europark-hotel.jpg",
    ],
    variant: "hospitality",
    overview: [
      "Otelin lobisi, restoranı ve sosyal alanları ile farklı oda grupları ayrı Matterport turları olarak hazırlandı. Misafirler rezervasyon öncesinde hem genel atmosferi hem de konaklayacakları oda tipini ayrıntılı biçimde inceleyebiliyor.",
      "Turlar, otelin web sitesine gömülmeye hazır biçimde optimize edildi; her tur grubu düzenli ve yönetilebilir bir yapıda teslim edildi.",
    ],
    objective: [
      "Misafir güvenini artırmak",
      "Oda ve sosyal alanları rezervasyon öncesinde göstermek",
      "Web sitesinde etkileşimli deneyim sunmak",
      "Farklı tur gruplarını düzenli biçimde yönetmek",
    ],
    scope: [
      "Sosyal alanlar",
      "Oda grupları",
      "Birden fazla Matterport turu",
      "Model düzenleme ve optimizasyon",
      "Web sitesi entegrasyonu",
    ],
    deliveredItems: [
      "Sosyal alanlar sanal turu",
      "Oda grubu turları",
      "Web embed bağlantıları",
      "Optimize edilmiş modeller",
      "HDR görseller",
    ],
    technologies: [
      "Matterport 3D",
      "Otel sanal turu",
      "HDR fotoğraf",
      "Web embed",
    ],
    matterportUrl: "",
    matterportPosterCandidates: [
      "images/projects/europark-hotel-poster.webp",
      "images/projects/europark-hotel-poster.jpg",
    ],
    relatedProjectSlugs: ["altunbas-mobilya", "numarine-30xp"],
    relatedSolutionSlugs: [
      "3d-sanal-tur",
      "google-street-view",
      "fotograf-video",
    ],
    relatedSectorSlugs: ["otel-konaklama"],
    faq: [
      {
        question: "Birden fazla otel turu aynı web sitesinde gösterilebilir mi?",
        answer:
          "Evet. Sosyal alanlar ve her oda grubu ayrı tur olarak gömülür; ziyaretçi istediği bölümü seçerek gezer.",
      },
      {
        question: "Oda grupları ayrı ayrı hazırlanabilir mi?",
        answer:
          "Evet. Her oda tipi kendi turu olarak çekilir ve düzenlenir; rezervasyon sayfalarıyla eşleştirilebilir.",
      },
      {
        question: "Google Street View entegrasyonu yapılabilir mi?",
        answer:
          "Evet. Otelin genel alanları Google Haritalar ve İşletme Profili üzerinde içeriden gezilebilir şekilde yayınlanabilir.",
      },
    ],
    ctaTitle: "Oteliniz için benzer bir dijital deneyim kuralım.",
    ctaDescription:
      "Oda tipleri ve alanlarınızı paylaşın; tur yapısını birlikte planlayalım.",
  },
  {
    slug: "altunbas-mobilya",
    title: "Altunbaş Mobilya — İstanbul Şubeleri",
    shortTitle: "Altunbaş Mobilya",
    category: "Perakende ve Mağazacılık",
    categorySlug: "perakende-magazacilik",
    location: "İstanbul",
    client: "Altunbaş Mobilya",
    projectType: "Çoklu Şube Sanal Tur ve Google Entegrasyonu",
    eyebrow: "PERAKENDE VE MAĞAZACILIK",
    description:
      "İstanbul'daki farklı mağaza şubelerinin tek bir dijital sunum standardı altında gezilebilir hale getirilmesine yönelik çoklu lokasyon projesi.",
    metaTitle: "Altunbaş Mobilya — Çoklu Şube Sanal Tur Projesi",
    metaDescription:
      "Altunbaş Mobilya'nın İstanbul şubelerinin tek standartta sanal turlara dönüştürülmesi ve Google Street View entegrasyonu. Çoklu lokasyon projesi.",
    imageAlt: "Altunbaş Mobilya mağazasının sanal tur görünümü",
    heroImageCandidates: [
      "images/projects/altunbas-mobilya-hero.webp",
      "images/projects/altunbas-mobilya-hero.jpg",
      "images/projects/altunbas-mobilya.webp",
      "images/projects/altunbas-mobilya.jpg",
    ],
    galleryImageCandidates: [
      "images/projects/gallery/altunbas-mobilya-01.webp",
      "images/projects/gallery/altunbas-mobilya-02.webp",
      "images/projects/gallery/altunbas-mobilya-03.webp",
      "images/projects/gallery/altunbas-mobilya-01.jpg",
      "images/projects/gallery/altunbas-mobilya-02.jpg",
      "images/projects/gallery/altunbas-mobilya-03.jpg",
    ],
    thumbnailCandidates: [
      "images/projects/altunbas-mobilya.webp",
      "images/projects/altunbas-mobilya.jpg",
    ],
    variant: "retail",
    overview: [
      "İstanbul'daki mağaza şubeleri, aynı çekim ve sunum standardında Matterport turlarına dönüştürüldü. Müşteriler showroom düzenini ve ürün gruplarını ziyaret öncesinde inceleyebiliyor.",
      "Turlar Google Street View'da yayınlanarak şubelerin Haritalar ve Arama görünürlüğü güçlendirildi; menü, sosyal medya ve iletişim bağlantıları tur deneyimine entegre edildi.",
    ],
    objective: [
      "Şubelerin dijital ortamda tanıtılması",
      "Google görünürlüğünün güçlendirilmesi",
      "Müşterilerin ziyaret öncesi mağazaları incelemesi",
      "Çoklu lokasyonların standartlaştırılması",
    ],
    scope: [
      "Çoklu şube taraması",
      "Mağaza içi sanal tur",
      "Google Maps ve İşletme Profili entegrasyonu",
      "Menü, sosyal medya ve iletişim bağlantıları",
      "Web sitesi embed altyapısı",
    ],
    deliveredItems: [
      "Şube bazlı Matterport turları",
      "Google Street View yayını",
      "Web sitesi entegrasyonu",
      "Şube bağlantıları",
      "HDR görüntüler",
    ],
    technologies: [
      "Matterport",
      "Google Street View",
      "Çoklu lokasyon",
      "Kurumsal portföy tarama",
    ],
    matterportUrl: "",
    matterportPosterCandidates: [
      "images/projects/altunbas-mobilya-poster.webp",
      "images/projects/altunbas-mobilya-poster.jpg",
    ],
    relatedProjectSlugs: ["europark-hotel", "florentia-village"],
    relatedSolutionSlugs: [
      "3d-sanal-tur",
      "google-street-view",
      "kurumsal-portfoy-tarama",
    ],
    relatedSectorSlugs: ["perakende-restoran"],
    faq: [
      {
        question: "Tüm şubeler aynı anda mı çekildi?",
        answer:
          "Şubeler bölge bazlı bir programla art arda tarandı; tüm lokasyonlar aynı standart ve adlandırma düzeniyle teslim edildi.",
      },
      {
        question: "Yeni açılan şubeler eklenebilir mi?",
        answer:
          "Evet. Portföy yapısı genişlemeye uygundur; yeni şubeler aynı standartla taranarak mevcut yapıya dahil edilir.",
      },
      {
        question: "Street View yayını her şube için ayrı mı yapılır?",
        answer:
          "Evet. Her şube kendi Google İşletme Profiliyle eşleştirilir; yayınlar şube bazında yönetilir.",
      },
    ],
    ctaTitle: "Şube ağınız için standart bir dijital altyapı kuralım.",
    ctaDescription:
      "Lokasyon sayınızı paylaşın; çekim programını birlikte planlayalım.",
  },
  {
    slug: "florentia-village",
    title: "Florentia Village Outlet",
    shortTitle: "Florentia Village",
    category: "İnşaat ve Mimarlık",
    categorySlug: "insaat-mimarlik",
    location: "İstanbul",
    client: "Florentia Village",
    projectType: "İnşaat İlerleme ve Dijital Saha Dokümantasyonu",
    eyebrow: "İNŞAAT VE MİMARLIK",
    description:
      "Geniş ölçekli outlet projesinin inşaat sürecini dönemsel olarak kayıt altına almak ve teknik ekiplerin uzaktan incelemesini desteklemek amacıyla planlanan dijital saha dokümantasyonu.",
    metaTitle: "Florentia Village — İnşaat Dokümantasyon Projesi",
    metaDescription:
      "Florentia Village outlet projesinde dönemsel Matterport taramalarıyla inşaat ilerleme dokümantasyonu, BIM/IFC ve E57 teknik çıktı hazırlığı.",
    imageAlt: "Florentia Village şantiyesinin dijital saha dokümantasyonu görünümü",
    heroImageCandidates: [
      "images/projects/florentia-village-hero.webp",
      "images/projects/florentia-village-hero.jpg",
      "images/projects/florentia-village.webp",
      "images/projects/florentia-village.jpg",
    ],
    galleryImageCandidates: [
      "images/projects/gallery/florentia-village-01.webp",
      "images/projects/gallery/florentia-village-02.webp",
      "images/projects/gallery/florentia-village-03.webp",
      "images/projects/gallery/florentia-village-01.jpg",
      "images/projects/gallery/florentia-village-02.jpg",
      "images/projects/gallery/florentia-village-03.jpg",
    ],
    thumbnailCandidates: [
      "images/projects/florentia-village.webp",
      "images/projects/florentia-village.jpg",
    ],
    variant: "construction",
    overview: [
      "Geniş ölçekli outlet projesi için hazırlanan proje modeli, şantiyenin dönemsel Matterport taramalarıyla kayıt altına alınmasını esas alıyor. Kapsam dahilinde tam alan taramalarının yanı sıra kritik bölgeler için haftalık bölgesel taramalar öngörülüyor.",
      "Tarih bazlı modeller, teknik ekiplerin sahayı uzaktan incelemesini ve saha durumu ile proje verileri arasındaki koordinasyonu desteklemeyi amaçlıyor; kapsam kapsamında BIM/IFC ve E57 çıktı hazırlığı da yer alıyor.",
    ],
    objective: [
      "İnşaat ilerlemesini kayıt altına almak",
      "Haftalık ve aylık saha durumlarını belgelemek",
      "Teknik ekiplerin uzaktan inceleme yapmasını sağlamak",
      "BIM ve saha verileri arasındaki koordinasyonu desteklemek",
    ],
    scope: [
      "Periyodik tam alan taraması",
      "Bölgesel haftalık taramalar",
      "Geniş saha operasyonu",
      "Çoklu Matterport Pro3 cihazı",
      "BIM ve teknik çıktı hazırlığı",
    ],
    deliveredItems: [
      "Tarih bazlı Matterport modelleri",
      "İnşaat ilerleme kayıtları",
      "MatterPak™",
      "BIM / IFC çıktıları",
      "E57 nokta bulutu",
      "Teknik paylaşım bağlantıları",
    ],
    technologies: [
      "Matterport Pro3 LiDAR",
      "BIM",
      "IFC",
      "E57",
      "MatterPak™",
      "İnşaat dokümantasyonu",
    ],
    process: [
      {
        title: "Dokümantasyon planı",
        description:
          "Tarama sıklığı ve bölgeler, iş programına göre planlanır.",
      },
      {
        title: "Dönemsel taramalar",
        description:
          "Tam alan ve bölgesel taramalar programa uygun yürütülür.",
      },
      {
        title: "Tarih bazlı arşiv",
        description:
          "Her tarama tarihlenerek karşılaştırılabilir arşive eklenir.",
      },
      {
        title: "Teknik çıktı hazırlığı",
        description:
          "Kapsam dahilinde BIM/IFC ve E57 çıktıları hazırlanır.",
      },
    ],
    matterportUrl: "",
    matterportPosterCandidates: [
      "images/projects/florentia-village-poster.webp",
      "images/projects/florentia-village-poster.jpg",
    ],
    relatedProjectSlugs: ["santa-farma", "altunbas-mobilya"],
    relatedSolutionSlugs: [
      "dijital-ikiz",
      "teknik-dosyalar",
      "insaat-dokumantasyonu",
    ],
    relatedSectorSlugs: ["insaat-mimarlik"],
    faq: [
      {
        question: "Dönemsel taramalar şantiyeyi aksatır mı?",
        answer:
          "Hayır. Taramalar iş programına ve saha güvenliği kurallarına göre planlanır; imalat akışını etkilemeden bölge bölge yürütülür.",
      },
      {
        question: "Farklı tarihlerdeki modeller karşılaştırılabilir mi?",
        answer:
          "Evet. Tarih bazlı modeller aynı yapıda arşivlenir; aynı bölgenin farklı dönemlerdeki durumu yan yana incelenebilir.",
      },
      {
        question: "Teknik çıktılar hangi formatlarda hazırlanıyor?",
        answer:
          "Kapsam dahilinde MatterPak™, E57 nokta bulutu ve BIM/IFC formatlarında çıktı hazırlığı yer alıyor.",
      },
    ],
    ctaTitle: "Şantiyeniz için dokümantasyon programı planlayalım.",
    ctaDescription:
      "Proje süresi ve saha bilgisini paylaşın; tarama takvimini birlikte çıkaralım.",
  },
];

export function getProjectPage(slug: string): ProjectPageItem | undefined {
  return projectPages.find((item) => item.slug === slug);
}
