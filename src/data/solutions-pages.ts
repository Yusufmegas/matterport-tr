import {
  Boxes,
  Building2,
  Camera,
  ClipboardList,
  FileCode2,
  MapPinned,
  Rotate3d,
} from "lucide-react";
import type { SolutionPageItem } from "@/types";

export const solutionsListMeta = {
  eyebrow: "ÇÖZÜMLERİMİZ",
  title: "Mekânlarınızı dijitalleştiren uçtan uca çözümler.",
  description:
    "Tanıtım, dokümantasyon, ölçüm ve teknik veri ihtiyaçlarınız için profesyonel Matterport çözümlerini keşfedin.",
  metaTitle: "Matterport Çözümleri | 3D Sanal Tur ve Dijital İkiz",
  metaDescription:
    "3D sanal tur, dijital ikiz, Google Street View, teknik dosya, BIM, CAD ve inşaat dokümantasyonu çözümlerini inceleyin.",
};

export const solutionPages: SolutionPageItem[] = [
  {
    slug: "3d-sanal-tur",
    title: "Profesyonel 3D Sanal Tur",
    shortTitle: "3D Sanal Tur",
    eyebrow: "ÇÖZÜM",
    description:
      "Mekânınızı kullanıcıların internet üzerinden adım adım gezebileceği, etkileşimli ve yüksek kaliteli bir dijital deneyime dönüştürün.",
    metaTitle: "Profesyonel 3D Sanal Tur Çekimi",
    metaDescription:
      "Matterport Pro3 ile otel, mağaza, showroom ve tüm mekânlar için etkileşimli 3D sanal tur çekimi. Dollhouse, kat planı ve bilgi etiketleriyle premium dijital deneyim.",
    heroImageCandidates: [
      "images/solutions/3d-sanal-tur.webp",
      "images/solutions/3d-sanal-tur.jpg",
    ],
    icon: Rotate3d,
    overview: [
      "3D sanal tur, mekânınızın Matterport Pro3 LiDAR kamerayla taranarak fotogerçekçi ve gezilebilir bir dijital modele dönüştürülmesidir. Ziyaretçiler mekânın içinde serbestçe yürür, katlar arasında geçiş yapar ve Dollhouse görünümüyle yapının tamamını tek bakışta inceler.",
      "Sanal tur; web sitenize, Google İşletme Profilinize ve sosyal medya kanallarınıza entegre edilerek mekânınızı 7/24 ziyaret edilebilir hale getirir.",
    ],
    benefits: [
      "Mekânın 7/24 ziyaret edilebilmesi",
      "Müşteri güveninin artırılması",
      "Karar verme süresinin kısalması",
      "Fiziksel ziyaret ihtiyacının azalması",
      "Web sitesi ve sosyal medya entegrasyonu",
    ],
    features: [
      "Matterport 3D gezinme",
      "Dollhouse görünümü",
      "Kat planı görünümü",
      "Bilgi etiketleri",
      "Mini harita",
      "Çoklu dil desteği",
      "VR uyumluluğu",
      "Şifreli erişim seçeneği",
    ],
    process: [
      {
        title: "Keşif ve planlama",
        description: "Mekân büyüklüğü ve hedefe göre çekim planı çıkarılır.",
      },
      {
        title: "Profesyonel çekim",
        description: "Matterport Pro3 ile mekân LiDAR hassasiyetinde taranır.",
      },
      {
        title: "Model işleme ve düzenleme",
        description:
          "Tur; etiketler, başlangıç noktası ve marka öğeleriyle düzenlenir.",
      },
      {
        title: "Yayın ve teslim",
        description:
          "Tur bağlantısı ve gömme kodu kullanım kılavuzuyla teslim edilir.",
      },
    ],
    useCases: [
      "Oteller",
      "Restoranlar",
      "Mağazalar",
      "Showroomlar",
      "Okullar",
      "Hastaneler",
      "Gayrimenkuller",
      "Yatlar",
    ],
    faq: [
      {
        question: "3D sanal tur çekimi ne kadar sürer?",
        answer:
          "Süre mekânın büyüklüğüne göre değişir. Ortalama bir mağaza veya daire birkaç saat içinde taranır; büyük tesislerde çekim planlı şekilde bir veya birkaç güne yayılabilir.",
      },
      {
        question: "Sanal tur web siteme eklenebilir mi?",
        answer:
          "Evet. Tur, tek satırlık gömme koduyla web sitenize eklenir; ayrıca bağlantı olarak sosyal medya ve dijital kataloglarda paylaşılabilir.",
      },
      {
        question: "Tur yayınlandıktan sonra güncellenebilir mi?",
        answer:
          "Bilgi etiketleri, başlangıç görünümü ve erişim ayarları yayın sonrasında da güncellenebilir. Mekânda büyük değişiklik olduğunda yeniden tarama planlanır.",
      },
      {
        question: "Turu kimlerin görebileceğini kontrol edebilir miyim?",
        answer:
          "Evet. Tur herkese açık yayınlanabileceği gibi şifreli veya yalnızca bağlantıya sahip kişilerin erişebileceği şekilde de yapılandırılabilir.",
      },
    ],
    relatedSectorSlugs: ["otel-konaklama", "gayrimenkul", "perakende-restoran"],
    ctaTitle: "Mekânınızı gezilebilir bir deneyime dönüştürelim.",
    ctaDescription:
      "Mekân bilgilerinizi paylaşın; çekim planı ve fiyatlandırmayı birlikte netleştirelim.",
  },
  {
    slug: "dijital-ikiz",
    title: "3D Dijital İkiz Çözümleri",
    shortTitle: "Dijital İkiz",
    eyebrow: "ÇÖZÜM",
    description:
      "Fiziksel mekânınızın ölçülebilir, incelenebilir ve uzaktan yönetilebilir dijital kopyasını oluşturun.",
    metaTitle: "3D Dijital İkiz Çözümleri",
    metaDescription:
      "Fabrika, tesis, bina ve tüm mekânlar için ölçülebilir 3D dijital ikiz. Uzaktan inceleme, ölçüm araçları ve ekipler arası koordinasyon için mekânsal veri.",
    heroImageCandidates: [
      "images/solutions/dijital-ikiz.webp",
      "images/solutions/dijital-ikiz.jpg",
    ],
    icon: Boxes,
    overview: [
      "Dijital ikiz, mekânın belirli bir andaki durumunun milimetrik hassasiyetle kayıt altına alınmış üç boyutlu kopyasıdır. Tanıtımdan farklı olarak buradaki öncelik ölçülebilirlik, dokümantasyon ve operasyonel kullanımdır.",
      "Ekipleriniz mekânı sahaya gitmeden inceler, ölçüm alır ve aynı model üzerinden koordineli çalışır. Dijital ikiz; planlama, bakım ve raporlama süreçlerinde ortak referans haline gelir.",
    ],
    benefits: [
      "Mevcut durumun kayıt altına alınması",
      "Uzaktan inceleme",
      "Ekipler arası koordinasyon",
      "Operasyonel verimlilik",
      "Mekânsal veriye hızlı erişim",
    ],
    features: [
      "Yüksek çözünürlüklü 3D model",
      "Ölçüm araçları",
      "Kat bazlı inceleme",
      "Bilgi etiketleri",
      "Paylaşılabilir bağlantılar",
      "Yetkilendirilmiş erişim",
    ],
    process: [
      {
        title: "İhtiyaç analizi",
        description:
          "Modelin hangi ekipler tarafından, hangi amaçla kullanılacağı belirlenir.",
      },
      {
        title: "LiDAR tarama",
        description: "Mekân Pro3 ile ölçüm hassasiyetinde taranır.",
      },
      {
        title: "Model yapılandırma",
        description:
          "Etiketler, erişim yetkileri ve kat yapısı ihtiyaca göre düzenlenir.",
      },
      {
        title: "Teslim ve eğitim",
        description:
          "Model, kullanım senaryolarıyla birlikte ekiplerinize teslim edilir.",
      },
    ],
    useCases: [
      "Fabrikalar ve üretim tesisleri",
      "Ofis ve kampüs binaları",
      "Depo ve lojistik merkezleri",
      "Hastane ve teknik altyapı alanları",
      "Tarihi yapılar",
      "Yönetilen gayrimenkul portföyleri",
    ],
    faq: [
      {
        question: "Dijital ikiz ile sanal tur arasındaki fark nedir?",
        answer:
          "Sanal tur tanıtım odaklıdır; dijital ikiz ise ölçüm, dokümantasyon ve operasyon odaklıdır. Aynı taramadan iki amaç için de çıktı üretilebilir.",
      },
      {
        question: "Model üzerinden ölçüm alınabilir mi?",
        answer:
          "Evet. Matterport ölçüm araçlarıyla model üzerinden mesafe ve alan ölçümleri ±%1 hassasiyet aralığında alınabilir.",
      },
      {
        question: "Erişimi ekip bazında sınırlayabilir miyiz?",
        answer:
          "Evet. Model şifreli tutulabilir, yalnızca yetkilendirilmiş kullanıcılarla paylaşılabilir ve bağlantı bazlı erişim kontrol edilebilir.",
      },
    ],
    relatedSectorSlugs: ["insaat-mimarlik", "endustri-lojistik", "saglik"],
    ctaTitle: "Tesisiniz için ölçülebilir bir dijital ikiz planlayalım.",
    ctaDescription:
      "Alan bilgisi ve kullanım amacınızı paylaşın; kapsamı birlikte netleştirelim.",
  },
  {
    slug: "google-street-view",
    title: "Google Street View Entegrasyonu",
    shortTitle: "Google Street View",
    eyebrow: "ÇÖZÜM",
    description:
      "İşletmenizi Google Arama ve Google Haritalar üzerinde içeriden gezilebilir hale getirin.",
    metaTitle: "Google Street View Entegrasyonu",
    metaDescription:
      "İşletmenizi Google Haritalar ve Google Arama'da içeriden gezilebilir yapın. Profesyonel Street View çekimi ve Google İşletme Profili entegrasyonu.",
    heroImageCandidates: [
      "images/solutions/google-street-view.webp",
      "images/solutions/google-street-view.jpg",
    ],
    icon: MapPinned,
    overview: [
      "Google Street View yayını, mekânınızın iç görünümünü doğrudan Google Arama sonuçlarına ve Google Haritalar'a taşır. Potansiyel müşteriler işletmenizi daha kapıdan girmeden tanır.",
      "Çekimler resmî yayın standartlarına uygun yapılır ve Google İşletme Profilinizle ilişkilendirilir; böylece görünürlük, güven ve etkileşim birlikte artar.",
    ],
    benefits: [
      "Google görünürlüğünün artırılması",
      "İşletme güveninin güçlendirilmesi",
      "Müşterinin ziyaret öncesi mekânı incelemesi",
      "Google İşletme Profiliyle bütünleşme",
    ],
    features: [
      "Street View yayını",
      "Google İşletme Profili entegrasyonu",
      "Profesyonel çekim",
      "Yayın ve konum kontrolleri",
      "Birden fazla kat veya alan desteği",
    ],
    process: [
      {
        title: "Profil kontrolü",
        description:
          "Google İşletme Profiliniz ve konum bilgileri yayına hazırlanır.",
      },
      {
        title: "Çekim",
        description: "Mekân, Street View standartlarına uygun taranır.",
      },
      {
        title: "Yayın",
        description:
          "İç mekân görünümü Google Haritalar ve Arama ile ilişkilendirilir.",
      },
      {
        title: "Doğrulama",
        description:
          "Yayın kontrol edilir; erişim ve görünürlük ayarları teslim edilir.",
      },
    ],
    useCases: [
      "Restoran ve kafeler",
      "Mağazalar",
      "Oteller",
      "Showroomlar",
      "Klinikler",
      "Spor ve yaşam merkezleri",
    ],
    faq: [
      {
        question: "Street View yayını herkes tarafından görülebilir mi?",
        answer:
          "Evet. Yayınlanan iç mekân görünümü, işletmenizi Google'da arayan veya Haritalar'da inceleyen tüm kullanıcılara açıktır.",
      },
      {
        question: "Yayın için işletme profili zorunlu mu?",
        answer:
          "Google İşletme Profili, yayının işletmenizle doğru şekilde ilişkilendirilmesi için gereklidir. Profiliniz yoksa kurulum sürecinde birlikte oluştururuz.",
      },
      {
        question: "Mekânın tamamı mı yayınlanmak zorunda?",
        answer:
          "Hayır. Hangi alanların yayınlanacağına siz karar verirsiniz; özel bölümler çekim ve yayın dışında tutulabilir.",
      },
    ],
    relatedSectorSlugs: [
      "otel-konaklama",
      "perakende-restoran",
      "otomotiv-showroom",
    ],
    ctaTitle: "İşletmenizi Google'da içeriden gezilebilir yapalım.",
    ctaDescription:
      "Konum ve mekân bilgilerinizi paylaşın; yayın sürecini birlikte planlayalım.",
  },
  {
    slug: "teknik-dosyalar",
    title: "Matterport Teknik Dosya ve Veri Çözümleri",
    shortTitle: "Teknik Dosyalar",
    eyebrow: "ÇÖZÜM",
    description:
      "3D taramalardan elde edilen mekânsal verileri mimarlık, mühendislik ve proje ekiplerinin kullanabileceği teknik çıktılara dönüştürün.",
    metaTitle: "Teknik Dosya ve Mekânsal Veri Çözümleri",
    metaDescription:
      "Matterport taramasından MatterPak, E57 nokta bulutu, BIM, IFC, CAD/DWG, kat planı ve ölçüm raporu. Mimarlık ve mühendislik ekipleri için teknik veri.",
    heroImageCandidates: [
      "images/solutions/teknik-dosyalar.webp",
      "images/solutions/teknik-dosyalar.jpg",
    ],
    icon: FileCode2,
    overview: [
      "Matterport taraması yalnızca görsel bir model üretmez; mekânın tüm geometrisini içeren zengin bir veri seti oluşturur. Bu veri; nokta bulutu, BIM modeli, CAD çizimi ve kat planı gibi teknik formatlara dönüştürülerek proje ekiplerinin doğrudan kullanımına sunulur.",
      "Böylece rölöve ve mevcut durum tespiti için tekrarlanan saha ziyaretleri ortadan kalkar; tüm disiplinler aynı güncel veri üzerinde çalışır.",
    ],
    outputs: [
      "MatterPak™",
      "E57 nokta bulutu",
      "BIM",
      "IFC",
      "CAD / DWG",
      "Şematik kat planı",
      "Ölçüm raporu",
      "HDR fotoğraflar",
    ],
    benefits: [
      "Tekrar saha ziyaretlerinin azalması",
      "Projelendirme sürecinin hızlanması",
      "Mevcut durum verisine erişim",
      "Farklı ekipler arasında ortak veri kullanımı",
    ],
    process: [
      {
        title: "Kapsam belirleme",
        description:
          "İhtiyaç duyulan formatlar ve hassasiyet düzeyi netleştirilir.",
      },
      {
        title: "LiDAR tarama",
        description: "Mekân Pro3 ile teknik üretime uygun şekilde taranır.",
      },
      {
        title: "Veri üretimi",
        description:
          "Nokta bulutu, BIM/CAD ve kat planı çıktıları hazırlanır.",
      },
      {
        title: "Teslim",
        description:
          "Dosyalar, ekiplerinizin kullandığı yazılımlara uygun teslim edilir.",
      },
    ],
    useCases: [
      "Rölöve ve mevcut durum tespiti",
      "Renovasyon ve tadilat projeleri",
      "BIM tabanlı projelendirme",
      "Tesis ve altyapı mühendisliği",
      "Restorasyon çalışmaları",
    ],
    faq: [
      {
        question: "Teknik dosyalar ne kadar sürede hazırlanır?",
        answer:
          "MatterPak ve E57 çıktıları genellikle birkaç iş günü içinde teslim edilir. BIM ve CAD üretimi, kapsam ve detay düzeyine göre planlanır ve süre en başta netleştirilir.",
      },
      {
        question: "Nokta bulutu hangi yazılımlarla uyumlu?",
        answer:
          "E57 formatı; Autodesk, Bentley, Archicad ve yaygın nokta bulutu işleme yazılımlarının tamamı tarafından desteklenen açık bir standarttır.",
      },
      {
        question: "Ölçüm hassasiyeti proje için yeterli mi?",
        answer:
          "Pro3 LiDAR taraması ±20 mm aralığında hassasiyet sunar. Bu değer rölöve, tadilat ve dokümantasyon projelerinin büyük çoğunluğu için yeterlidir.",
      },
      {
        question: "Eski bir taramadan teknik dosya üretilebilir mi?",
        answer:
          "Evet. Mevcut bir Matterport modeliniz varsa, yeni tarama yapılmadan aynı modelden teknik çıktılar üretilebilir.",
      },
    ],
    relatedSectorSlugs: ["insaat-mimarlik", "endustri-lojistik", "saglik"],
    ctaTitle: "Projenize uygun teknik veri paketini birlikte belirleyelim.",
    ctaDescription:
      "İhtiyacınız olan formatları paylaşın; kapsam ve teslim planını netleştirelim.",
  },
  {
    slug: "insaat-dokumantasyonu",
    title: "İnşaat İlerleme ve Mevcut Durum Dokümantasyonu",
    shortTitle: "İnşaat Dokümantasyonu",
    eyebrow: "ÇÖZÜM",
    description:
      "Şantiyenizi düzenli aralıklarla dijitalleştirerek ilerlemeyi kayıt altına alın, uzaktan inceleyin ve ekipler arası koordinasyonu geliştirin.",
    metaTitle: "İnşaat İlerleme Dokümantasyonu",
    metaDescription:
      "Şantiye ilerlemesini periyodik 3D taramayla kayıt altına alın. Tarihsel kayıt, uzaktan saha inceleme ve yatırımcı raporlaması için inşaat dokümantasyonu.",
    heroImageCandidates: [
      "images/solutions/insaat-dokumantasyonu.webp",
      "images/solutions/insaat-dokumantasyonu.jpg",
    ],
    icon: ClipboardList,
    overview: [
      "İnşaat dokümantasyonu, şantiyenin belirli aralıklarla taranarak her aşamanın tarihli ve gezilebilir kayda dönüştürülmesidir. Duvarlar kapanmadan önceki altyapı dahil her aşama kalıcı olarak arşivlenir.",
      "Proje yöneticileri, yatırımcılar ve teknik ekipler sahaya gitmeden ilerlemeyi inceler; anlaşmazlık durumlarında tarihli kayıtlar güvenilir referans olur.",
    ],
    benefits: [
      "İnşaat ilerleme takibi",
      "Tarihsel kayıt",
      "Uzaktan saha inceleme",
      "Revizyon ve uyuşmazlıkların azaltılması",
      "Yönetici ve yatırımcı erişimi",
    ],
    process: [
      {
        title: "Proje planlaması",
        description:
          "Tarama sıklığı ve kapsam, iş programına göre belirlenir.",
      },
      {
        title: "Periyodik saha taraması",
        description: "Şantiye planlanan aralıklarla Pro3 ile taranır.",
      },
      {
        title: "Model düzenleme",
        description:
          "Her tarama tarihlenir, alanlar etiketlenir ve arşive eklenir.",
      },
      {
        title: "Alan ve tarih bazlı karşılaştırma",
        description:
          "Aynı noktanın farklı tarihlerdeki durumu karşılaştırılır.",
      },
      {
        title: "Yetkili ekiplere teslim",
        description:
          "Modeller yetkilendirilmiş kullanıcıların erişimine açılır.",
      },
    ],
    useCases: [
      "Konut ve karma projeler",
      "Ticari bina inşaatları",
      "Endüstriyel tesis yatırımları",
      "Renovasyon süreçleri",
      "Kamu ve altyapı projeleri",
    ],
    faq: [
      {
        question: "Tarama hangi sıklıkla yapılmalı?",
        answer:
          "Yaygın uygulama aylık veya kritik imalat aşamalarına bağlı taramadır. Sıklık, iş programınıza ve bütçenize göre birlikte planlanır.",
      },
      {
        question: "Kayıtlar uyuşmazlık durumunda kullanılabilir mi?",
        answer:
          "Tarihli 3D kayıtlar, imalatın hangi tarihte hangi durumda olduğunu gösteren güçlü bir referanstır ve taraflar arası değerlendirmelerde kullanılabilir.",
      },
      {
        question: "Şantiye tozlu ve düzensizken tarama yapılabilir mi?",
        answer:
          "Evet. Pro3 şantiye koşullarında çalışmak üzere tasarlanmıştır; aktif imalat alanlarında güvenlik kurallarına uygun şekilde tarama yapılır.",
      },
    ],
    relatedSectorSlugs: ["insaat-mimarlik", "endustri-lojistik", "gayrimenkul"],
    ctaTitle: "Şantiyeniz için dokümantasyon programı oluşturalım.",
    ctaDescription:
      "Proje süresi ve alan bilgisini paylaşın; tarama takvimini birlikte planlayalım.",
  },
  {
    slug: "kurumsal-portfoy-tarama",
    title: "Kurumsal Portföy ve Çoklu Lokasyon Tarama",
    shortTitle: "Kurumsal Portföy Tarama",
    eyebrow: "ÇÖZÜM",
    description:
      "Birden fazla şube, mağaza, tesis veya gayrimenkulü standart bir dijital altyapı altında yönetin.",
    metaTitle: "Kurumsal Portföy ve Çoklu Lokasyon Tarama",
    metaDescription:
      "Şube, mağaza ve tesis portföyünüzü tek standartta dijitalleştirin. Merkezi erişim, kurumsal sunum ve operasyonel dokümantasyon için çoklu lokasyon tarama.",
    heroImageCandidates: [
      "images/solutions/kurumsal-portfoy-tarama.webp",
      "images/solutions/kurumsal-portfoy-tarama.jpg",
    ],
    icon: Building2,
    overview: [
      "Çok lokasyonlu markalar için her şubenin ayrı yöntemlerle belgelenmesi zaman kaybı ve standart sorunu yaratır. Kurumsal portföy tarama, tüm lokasyonları aynı çekim ve adlandırma standardında dijitalleştirir.",
      "Yönetim ekipleri tüm portföyü merkezi olarak görüntüler; pazarlama, operasyon ve teknik ekipler aynı altyapıyı kendi amaçları için kullanır.",
    ],
    benefits: [
      "Portföy standardizasyonu",
      "Merkezi erişim",
      "Çoklu lokasyon yönetimi",
      "Kurumsal sunum",
      "Operasyonel dokümantasyon",
    ],
    process: [
      {
        title: "Portföy planlaması",
        description:
          "Lokasyon listesi, öncelik sırası ve standartlar belirlenir.",
      },
      {
        title: "Programlı çekimler",
        description:
          "Lokasyonlar bölge bazlı planla verimli şekilde taranır.",
      },
      {
        title: "Standart yapılandırma",
        description:
          "Tüm modeller aynı adlandırma ve etiket düzeniyle hazırlanır.",
      },
      {
        title: "Merkezi teslim",
        description:
          "Portföy, yetki yapısına uygun tek çatı altında teslim edilir.",
      },
    ],
    useCases: [
      "Perakende zincirleri",
      "Banka ve finans şubeleri",
      "Restoran zincirleri",
      "GYO ve gayrimenkul portföyleri",
      "Franchise ağları",
      "Kurumsal ofis ağları",
    ],
    faq: [
      {
        question: "Farklı şehirlerdeki lokasyonlar tek projede toplanabilir mi?",
        answer:
          "Evet. Türkiye genelinde çekim yapıyoruz; tüm lokasyonlar tek program dahilinde taranır ve merkezi bir yapıda teslim edilir.",
      },
      {
        question: "Yeni açılan şubeler sonradan eklenebilir mi?",
        answer:
          "Evet. Portföy yapısı genişlemeye uygundur; yeni lokasyonlar aynı standartla taranarak mevcut yapıya dahil edilir.",
      },
      {
        question: "Her lokasyon için farklı erişim yetkisi tanımlanabilir mi?",
        answer:
          "Evet. Bölge müdürü, şube ekibi veya merkez yönetim gibi farklı roller için lokasyon bazlı erişim düzenlenebilir.",
      },
    ],
    relatedSectorSlugs: ["gayrimenkul", "perakende-restoran", "ofis-coworking"],
    ctaTitle: "Portföyünüz için standart bir dijital altyapı kuralım.",
    ctaDescription:
      "Lokasyon sayısı ve hedeflerinizi paylaşın; portföy planını birlikte çıkaralım.",
  },
  {
    slug: "fotograf-video",
    title: "4K HDR Fotoğraf ve Tanıtım İçerikleri",
    shortTitle: "Fotoğraf ve Tanıtım Videosu",
    eyebrow: "ÇÖZÜM",
    description:
      "Matterport çekiminizden elde edilen profesyonel görseller ve tanıtım içerikleriyle dijital iletişiminizi güçlendirin.",
    metaTitle: "4K HDR Fotoğraf ve Tanıtım Videosu",
    metaDescription:
      "Matterport çekiminden 4K HDR fotoğraflar, sosyal medya içerikleri ve kısa tanıtım videoları. Web sitesi, katalog ve sunumlar için profesyonel görseller.",
    heroImageCandidates: [
      "images/solutions/fotograf-video.webp",
      "images/solutions/fotograf-video.jpg",
    ],
    icon: Camera,
    overview: [
      "Matterport taraması sırasında mekânınızın her noktasından yüksek çözünürlüklü HDR kareler üretilir. Bu kareler; web sitesi, ilan platformları, sosyal medya ve baskı materyalleri için profesyonel görsel setine dönüştürülür.",
      "Sanal turdan türetilen kısa gezinme videoları ise mekânınızı sosyal medyada etkili biçimde öne çıkarır — ayrı bir çekim ekibi gerekmeden.",
    ],
    features: [
      "4K HDR fotoğraflar",
      "Sosyal medya içerikleri",
      "Kısa tanıtım videoları",
      "Web sitesi görselleri",
      "Sunum ve katalog içerikleri",
    ],
    benefits: [
      "Tek çekimden çok kanallı içerik",
      "Tutarlı ve kurumsal görsel dil",
      "Hızlı teslim süresi",
      "İlan ve platform uyumlu formatlar",
    ],
    process: [
      {
        title: "Çekim",
        description: "Mekân taranırken HDR kareler otomatik üretilir.",
      },
      {
        title: "Seçim ve düzenleme",
        description:
          "En güçlü kareler seçilir; renk ve perspektif düzenlenir.",
      },
      {
        title: "İçerik üretimi",
        description:
          "Fotoğraf seti ve kısa tanıtım videoları formatlara göre hazırlanır.",
      },
      {
        title: "Teslim",
        description:
          "İçerikler web, sosyal medya ve baskı için uygun boyutlarda iletilir.",
      },
    ],
    useCases: [
      "Web sitesi ve ilan görselleri",
      "Sosyal medya kampanyaları",
      "Kurumsal sunumlar",
      "Katalog ve broşürler",
      "Basın kitleri",
    ],
    faq: [
      {
        question: "Fotoğraflar için ayrı bir çekim gerekiyor mu?",
        answer:
          "Hayır. HDR kareler Matterport taraması sırasında üretilir; ek çekim olmadan mekânın her noktasından görsel elde edilir.",
      },
      {
        question: "Videolar hangi formatlarda teslim edilir?",
        answer:
          "Sosyal medya için dikey (9:16), web ve sunum için yatay (16:9) formatlarda, platformlara uygun sürelerde teslim edilir.",
      },
      {
        question: "Görsellerin kullanım hakkı kime ait?",
        answer:
          "Teslim edilen tüm fotoğraf ve videoların kullanım hakkı size aittir; tüm kanallarınızda süresiz kullanabilirsiniz.",
      },
    ],
    relatedSectorSlugs: ["otel-konaklama", "yat-denizcilik", "fuar-etkinlik"],
    ctaTitle: "Mekânınız için profesyonel görsel seti hazırlayalım.",
    ctaDescription:
      "İhtiyacınız olan kanalları paylaşın; içerik paketini birlikte belirleyelim.",
  },
];

export function getSolutionPage(slug: string): SolutionPageItem | undefined {
  return solutionPages.find((item) => item.slug === slug);
}
