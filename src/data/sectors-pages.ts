import {
  BedDouble,
  Briefcase,
  Car,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  Ship,
  Store,
  Tent,
} from "lucide-react";
import type { SectorPageItem } from "@/types";

export const sectorsListMeta = {
  eyebrow: "SEKTÖRLER",
  title: "Her sektör için farklı bir dijital ikiz yaklaşımı.",
  description:
    "Tanıtım, satış, dokümantasyon ve operasyon ihtiyaçlarına göre özelleştirilmiş Matterport çözümlerini inceleyin.",
  metaTitle: "Sektörel Matterport Çözümleri | Matterport TR",
  metaDescription:
    "İnşaat, endüstri, otel, gayrimenkul, otomotiv, sağlık, eğitim ve diğer sektörlere özel Matterport çözümlerini keşfedin.",
};

export const sectorPages: SectorPageItem[] = [
  {
    slug: "insaat-mimarlik",
    title: "İnşaat ve Mimarlık",
    shortTitle: "İnşaat ve Mimarlık",
    eyebrow: "SEKTÖR",
    description:
      "Mevcut durum kaydından ilerleme takibine, nokta bulutundan BIM'e — proje ekiplerinizin ihtiyaç duyduğu mekânsal veriyi tek taramadan üretin.",
    metaTitle: "İnşaat ve Mimarlık için Matterport Çözümleri",
    metaDescription:
      "İnşaat ilerleme takibi, mevcut durum kaydı, E57 nokta bulutu, BIM/IFC/CAD çıktıları ve uzaktan saha inceleme. İnşaat ve mimarlık için Matterport.",
    heroImageCandidates: [
      "images/sectors/insaat-mimarlik.webp",
      "images/sectors/insaat-mimarlik.jpg",
    ],
    icon: HardHat,
    challenges: [
      "Mevcut durumun güvenilir şekilde kayıt altına alınması",
      "Şantiye ilerlemesinin uzaktan takip edilememesi",
      "Rölöve için tekrarlanan saha ziyaretleri",
      "Disiplinler arasında güncel olmayan veri kullanımı",
      "İmalat uyuşmazlıklarında kanıt eksikliği",
    ],
    solutions: [
      "Matterport taraması; sahanın belirli bir andaki durumunu milimetrik hassasiyetle kaydeder ve bu kayıttan E57 nokta bulutu, BIM, IFC ve CAD/DWG gibi teknik çıktılar üretir. Proje ekipleri aynı güncel model üzerinden çalışır, ölçüleri modelden alır ve sahaya gitme ihtiyacını azaltır.",
      "Periyodik taramalarla şantiye ilerlemesi tarihli olarak arşivlenir; kapanan imalatların altında kalan altyapı bile sonradan incelenebilir durumda kalır.",
    ],
    benefits: [
      "Tekrar ölçüm ihtiyacının azaltılması",
      "Tarihli ve gezilebilir saha arşivi",
      "Uzaktan saha inceleme",
      "BIM tabanlı iş akışlarına doğrudan veri",
      "Taraflar arası şeffaf iletişim",
    ],
    useCases: [
      "Rölöve ve mevcut durum tespiti",
      "İnşaat ilerleme dokümantasyonu",
      "Renovasyon projeleri",
      "As-built doğrulama",
      "Uzaktan saha denetimi",
    ],
    recommendedSolutionSlugs: [
      "dijital-ikiz",
      "teknik-dosyalar",
      "insaat-dokumantasyonu",
    ],
    process: [
      {
        title: "Proje analizi",
        description: "Kapsam, formatlar ve tarama sıklığı belirlenir.",
      },
      {
        title: "Saha taraması",
        description: "Alan Pro3 ile ölçüm hassasiyetinde taranır.",
      },
      {
        title: "Teknik üretim",
        description: "Nokta bulutu, BIM/CAD ve kat planları hazırlanır.",
      },
      {
        title: "Teslim ve erişim",
        description: "Model ve dosyalar ekiplerin erişimine açılır.",
      },
    ],
    faq: [
      {
        question: "Nokta bulutu hangi hassasiyette üretiliyor?",
        answer:
          "Pro3 LiDAR taraması ±20 mm aralığında hassasiyet sunar; rölöve, tadilat ve dokümantasyon projelerinin büyük çoğunluğu için yeterlidir.",
      },
      {
        question: "Aktif şantiyede tarama yapılabilir mi?",
        answer:
          "Evet. Çekimler iş güvenliği kurallarına uygun planlanır; imalatı aksatmadan kısa sürede tamamlanır.",
      },
      {
        question: "Revit'e veri aktarabilir miyiz?",
        answer:
          "Evet. E57 nokta bulutu Revit'e doğrudan aktarılır; talebe göre modelleme dahil BIM/IFC teslimi de yapılır.",
      },
    ],
    ctaTitle: "Projenizin mekânsal veri altyapısını birlikte kuralım.",
    ctaDescription:
      "Saha bilgisi ve ihtiyaç duyduğunuz çıktıları paylaşın; kapsamı netleştirelim.",
  },
  {
    slug: "endustri-lojistik",
    title: "Endüstri ve Lojistik",
    shortTitle: "Endüstri ve Lojistik",
    eyebrow: "SEKTÖR",
    description:
      "Fabrika, depo ve teknik alanlarınızı dijitalleştirin; bakım, planlama ve eğitim süreçlerini tek model üzerinden yönetin.",
    metaTitle: "Endüstri ve Lojistik için Matterport Çözümleri",
    metaDescription:
      "Fabrika ve depo dijitalleştirme, teknik alan dokümantasyonu, bakım ekipleri için uzaktan erişim ve yerleşim planlaması. Endüstriyel Matterport çözümleri.",
    heroImageCandidates: [
      "images/sectors/endustri-lojistik.webp",
      "images/sectors/endustri-lojistik.jpg",
    ],
    icon: Factory,
    challenges: [
      "Geniş tesislerin belgelenmesinin zaman alması",
      "Bakım ve operasyon ekiplerinin sahaya bağımlılığı",
      "Yeni ekipman ve yerleşim planlamasında ölçü eksikliği",
      "Tesis bilgisinin kişilere bağlı kalması",
      "Güvenlik ve eğitim içeriklerinin güncel tutulamaması",
    ],
    solutions: [
      "Tesisiniz tek seferde taranarak ölçülebilir bir dijital ikize dönüştürülür. Bakım ekipleri ekipmanların konumunu ve çevresini uzaktan inceler; yerleşim değişiklikleri gerçek ölçüler üzerinden planlanır.",
      "Model; iş güvenliği eğitimleri, acil durum planları ve yeni personel oryantasyonu için gezilebilir eğitim ortamı olarak da kullanılır.",
    ],
    benefits: [
      "Sahaya gitmeden teknik inceleme",
      "Gerçek ölçülerle yerleşim planlaması",
      "Kurumsal tesis hafızası",
      "Eğitim ve oryantasyon altyapısı",
      "Çok tesisli yapılarda standart dokümantasyon",
    ],
    useCases: [
      "Fabrika ve üretim hatları",
      "Depo ve lojistik merkezleri",
      "Teknik ve mekanik alanlar",
      "Enerji ve altyapı tesisleri",
      "İSG eğitim içerikleri",
    ],
    recommendedSolutionSlugs: [
      "dijital-ikiz",
      "teknik-dosyalar",
      "kurumsal-portfoy-tarama",
    ],
    process: [
      {
        title: "Tesis planlaması",
        description: "Alanlar, vardiya düzeni ve öncelikler belirlenir.",
      },
      {
        title: "Kesintisiz tarama",
        description: "Üretimi aksatmadan bölge bölge çekim yapılır.",
      },
      {
        title: "Yapılandırma",
        description: "Ekipman etiketleri ve erişim yetkileri düzenlenir.",
      },
      {
        title: "Ekip teslimi",
        description: "Model bakım, operasyon ve İSG ekiplerine açılır.",
      },
    ],
    faq: [
      {
        question: "Üretimi durdurmadan çekim yapılabilir mi?",
        answer:
          "Evet. Çekim planı vardiya ve üretim programına göre yapılır; tarama üretimi aksatmadan bölge bölge ilerler.",
      },
      {
        question: "Modele kimler erişebilir?",
        answer:
          "Erişim tamamen kontrollüdür; ekip, rol veya lokasyon bazında yetkilendirme yapılabilir.",
      },
      {
        question: "Tesisin yalnızca bir bölümü taranabilir mi?",
        answer:
          "Evet. Kritik alanlarla başlayıp kapsamı zamanla genişletmek yaygın ve verimli bir yaklaşımdır.",
      },
    ],
  },
  {
    slug: "otel-konaklama",
    title: "Otel ve Konaklama",
    shortTitle: "Otel ve Konaklama",
    eyebrow: "SEKTÖR",
    description:
      "Odalarınızı ve sosyal alanlarınızı rezervasyon öncesi gezilebilir yapın; misafir güvenini artırıp dönüşümü yükseltin.",
    metaTitle: "Otel ve Konaklama için Matterport Çözümleri",
    metaDescription:
      "Otel odaları ve sosyal alanlar için 3D sanal tur, Google Street View yayını ve web sitesi entegrasyonu. Rezervasyon öncesi güven ve daha yüksek dönüşüm.",
    heroImageCandidates: [
      "images/sectors/otel-konaklama.webp",
      "images/sectors/otel-konaklama.jpg",
    ],
    icon: BedDouble,
    challenges: [
      "Fotoğrafların mekânı yeterince yansıtmaması",
      "Rezervasyon öncesi güven eksikliği",
      "Toplantı ve etkinlik alanlarının uzaktan pazarlanamaması",
      "OTA platformlarında farklılaşma zorluğu",
    ],
    solutions: [
      "Oda tipleri, restoran, spa ve toplantı alanları gezilebilir 3D sanal tura dönüştürülür. Misafir, rezervasyondan önce mekânın gerçek halini deneyimler; bu güven doğrudan rezervasyona yansır.",
      "Turlar web sitenize gömülür, Google Street View yayınıyla otel Google Haritalar'da içeriden gezilebilir hale gelir; etkinlik ekipleri toplantı alanlarını uzaktan sunar.",
    ],
    benefits: [
      "Rezervasyon öncesi güven",
      "Web sitesi ve OTA farklılaşması",
      "Google görünürlüğü",
      "Etkinlik satışlarında uzaktan sunum",
      "Tek çekimden fotoğraf ve video içerikleri",
    ],
    useCases: [
      "Oda tipleri ve süitler",
      "Restoran ve barlar",
      "Spa ve fitness alanları",
      "Toplantı ve balo salonları",
      "Otel genel alanları",
    ],
    recommendedSolutionSlugs: [
      "3d-sanal-tur",
      "google-street-view",
      "fotograf-video",
    ],
    faq: [
      {
        question: "Tur rezervasyon sistemimize bağlanabilir mi?",
        answer:
          "Tur içine bilgi etiketleriyle rezervasyon bağlantıları eklenebilir; misafir turdan çıkmadan rezervasyon sayfanıza yönlenir.",
      },
      {
        question: "Tüm oda tiplerini çekmek gerekir mi?",
        answer:
          "Hayır. Genellikle her oda tipinden bir örnek çekilir; sosyal alanlarla birlikte otelin tamamını temsil eden bir tur oluşturulur.",
      },
      {
        question: "Çekim otel operasyonunu etkiler mi?",
        answer:
          "Hayır. Çekimler doluluk ve housekeeping programına göre planlanır; misafir alanlarında sessiz ve hızlı ilerler.",
      },
    ],
  },
  {
    slug: "gayrimenkul",
    title: "Gayrimenkul",
    shortTitle: "Gayrimenkul",
    eyebrow: "SEKTÖR",
    description:
      "Konut ve ticari portföyünüzü uzaktan gezilebilir yapın; nitelikli alıcıyla daha hızlı buluşun.",
    metaTitle: "Gayrimenkul için Matterport Çözümleri",
    metaDescription:
      "Konut ve ticari mülkler için 3D sanal tur, ölçüm, kat planı ve portföy standardizasyonu. Satış ve kiralama sürecini hızlandıran Matterport çözümleri.",
    heroImageCandidates: [
      "images/sectors/gayrimenkul.webp",
      "images/sectors/gayrimenkul.jpg",
    ],
    icon: Home,
    challenges: [
      "Verimsiz fiziksel gezdirme trafiği",
      "İlan fotoğraflarının gerçeği yansıtmaması",
      "Uzaktaki alıcı ve yatırımcılara sunum zorluğu",
      "Portföyde standart eksikliği",
    ],
    solutions: [
      "Her mülk gezilebilir 3D tura, ölçekli kat planına ve profesyonel görsellere dönüştürülür. Alıcılar mülkü uzaktan gerçekçi biçimde deneyimler; fiziksel ziyaretler yalnızca ciddi adaylarla yapılır.",
      "Kurumsal portföylerde tüm mülkler aynı standartta sunulur; uluslararası yatırımcılara tek bağlantıyla eksiksiz sunum yapılır.",
    ],
    benefits: [
      "Satış ve kiralama sürecinin hızlanması",
      "Nitelikli alıcı trafiği",
      "Uzaktan müşteri gezisi",
      "Ölçüm ve kat planına anında erişim",
      "Portföy standardizasyonu",
    ],
    useCases: [
      "Satılık ve kiralık konutlar",
      "Ticari mülk ve ofisler",
      "Lansman projeleri ve örnek daireler",
      "Uluslararası yatırımcı sunumları",
      "Kurumsal portföy yönetimi",
    ],
    recommendedSolutionSlugs: [
      "3d-sanal-tur",
      "dijital-ikiz",
      "kurumsal-portfoy-tarama",
    ],
    process: [
      {
        title: "Portföy önceliği",
        description: "Öne çıkarılacak mülkler ve sıralama belirlenir.",
      },
      {
        title: "Çekim",
        description: "Mülkler hazırlanmış haliyle hızlıca taranır.",
      },
      {
        title: "İçerik seti",
        description: "Tur, kat planı ve HDR görseller hazırlanır.",
      },
      {
        title: "Yayın",
        description: "İçerikler ilan ve web kanallarınıza entegre edilir.",
      },
    ],
    faq: [
      {
        question: "Sanal tur ilan sitelerine eklenebilir mi?",
        answer:
          "Evet. Tur bağlantısı büyük ilan platformlarının tamamında paylaşılabilir; web sitenize ise doğrudan gömülür.",
      },
      {
        question: "Eşyalı olmayan mülklerde tur etkili olur mu?",
        answer:
          "Evet. Boş mülklerde ölçüler ve mekân akışı net biçimde algılanır; kat planı görünümü karar sürecini destekler.",
      },
      {
        question: "Tur üzerinden ölçü alınabilir mi?",
        answer:
          "Evet. Alıcılar ve ekipleriniz model üzerinden mesafe ölçümü yapabilir; ayrıca ölçekli şematik kat planı teslim edilir.",
      },
    ],
  },
  {
    slug: "otomotiv-showroom",
    title: "Otomotiv ve Showroom",
    shortTitle: "Otomotiv ve Showroom",
    eyebrow: "SEKTÖR",
    description:
      "Showroomunuzu ve özel araçlarınızı dijital ortamda sergileyin; müşteriyi salonunuza gelmeden etkileyin.",
    metaTitle: "Otomotiv ve Showroom için Matterport Çözümleri",
    metaDescription:
      "Showroom sanal turu, araç içi 3D deneyim, VIP araç tasarımlarının dijital sunumu ve Google görünürlüğü. Otomotiv sektörü için Matterport.",
    heroImageCandidates: [
      "images/sectors/otomotiv-showroom.webp",
      "images/sectors/otomotiv-showroom.jpg",
    ],
    icon: Car,
    challenges: [
      "Showroom deneyiminin dijitale taşınamaması",
      "Özel üretim araçların uzak müşterilere sunulamaması",
      "Marka standartlarının şubeler arasında farklılaşması",
      "Google'da rakiplerden farklılaşma ihtiyacı",
    ],
    solutions: [
      "Showroomunuz, araç teşhir düzeniyle birlikte gezilebilir bir dijital deneyime dönüştürülür. VIP ve özel tasarım araçların iç mekânları 3D taranarak uzaktaki alıcılara ayrıntılı biçimde sunulur.",
      "Google Street View yayını showroomunuzu Haritalar'da içeriden gezilebilir yapar; çoklu şube yapılarında tüm lokasyonlar aynı marka standardında dijitalleştirilir.",
    ],
    benefits: [
      "Uzak müşterilere gerçekçi sunum",
      "Google görünürlüğü",
      "Marka ve model bazlı dijital portföy",
      "Şubeler arası standart deneyim",
      "Satış ekibine sunum aracı",
    ],
    useCases: [
      "Otomobil showroomları",
      "VIP ve özel üretim araçlar",
      "Karavan ve ticari araçlar",
      "Servis ve teslimat alanları",
      "Bayi ağı portföyü",
    ],
    recommendedSolutionSlugs: [
      "3d-sanal-tur",
      "google-street-view",
      "fotograf-video",
    ],
    faq: [
      {
        question: "Araç içi çekim yapılabiliyor mu?",
        answer:
          "Evet. Karavan, VIP araç ve geniş iç hacimli araçların içi taranabilir; binek araçlarda iç mekân için HDR fotoğraf setleri kullanılır.",
      },
      {
        question: "Araçlar değiştikçe tur güncellenebilir mi?",
        answer:
          "Showroom düzeni önemli ölçüde değiştiğinde kısa bir yeniden çekimle tur güncel tutulur; etiketler her zaman güncellenebilir.",
      },
      {
        question: "Tur satış sürecinde nasıl kullanılır?",
        answer:
          "Satış ekibi turu görüşme sırasında ekranda gezdirir veya bağlantıyı müşteriyle paylaşır; araç etiketleri fiyat ve donanım bilgisi taşıyabilir.",
      },
    ],
  },
  {
    slug: "perakende-restoran",
    title: "Perakende ve Restoran",
    shortTitle: "Perakende ve Restoran",
    eyebrow: "SEKTÖR",
    description:
      "Mağaza ve restoranlarınızı Google'da ve web sitenizde içeriden gezilebilir yapın; müşteriyi kapıdan girmeden kazanın.",
    metaTitle: "Perakende ve Restoran için Matterport Çözümleri",
    metaDescription:
      "Mağaza ve restoran sanal turu, Google Street View yayını, menü ve bilgi etiketleri, çoklu şube yönetimi. Perakende için Matterport çözümleri.",
    heroImageCandidates: [
      "images/sectors/perakende-restoran.webp",
      "images/sectors/perakende-restoran.jpg",
    ],
    icon: Store,
    challenges: [
      "Mekân atmosferinin dijitalde aktarılamaması",
      "Google'da görünürlük ve güven ihtiyacı",
      "Şube deneyiminin standartlaştırılamaması",
      "Etkinlik ve rezervasyon satışında sunum eksikliği",
    ],
    solutions: [
      "Mağaza veya restoranınız, atmosferini gerçekçi yansıtan bir sanal tura dönüştürülür ve Google Street View'da yayınlanır. Müşteriler mekânı ziyaret öncesi inceler; bu güven ziyarete ve rezervasyona dönüşür.",
      "Tur içindeki bilgi etiketleriyle menü, kampanya ve ürün bilgileri sunulur; zincir yapılarında tüm şubeler tek standartta dijitalleştirilir.",
    ],
    benefits: [
      "Google görünürlüğü ve güven",
      "Ziyaret öncesi mekân deneyimi",
      "Menü ve bilgi etiketleri",
      "Çoklu lokasyon yönetimi",
      "Etkinlik alanlarının uzaktan satışı",
    ],
    useCases: [
      "Restoran ve kafeler",
      "Mağazalar ve konsept alanlar",
      "AVM içi üniteler",
      "Etkinlik alanları",
      "Zincir şube ağları",
    ],
    recommendedSolutionSlugs: [
      "3d-sanal-tur",
      "google-street-view",
      "kurumsal-portfoy-tarama",
    ],
    faq: [
      {
        question: "Çekim çalışma saatlerinde mi yapılıyor?",
        answer:
          "Tercihen açılış öncesi veya tenha saatlerde yapılır; mekân en düzenli haliyle, müşteri yoğunluğu olmadan taranır.",
      },
      {
        question: "Menü değişince tur da değişmeli mi?",
        answer:
          "Hayır. Menü ve kampanya bilgileri etiketlerle sunulur; etiket içerikleri yeniden çekim olmadan güncellenebilir.",
      },
      {
        question: "Tek şube için de anlamlı mı?",
        answer:
          "Evet. Tek lokasyonlu işletmelerde bile Google Street View yayını görünürlüğü ve gelen müşteri güvenini belirgin şekilde artırır.",
      },
    ],
  },
  {
    slug: "egitim",
    title: "Eğitim",
    shortTitle: "Eğitim",
    eyebrow: "SEKTÖR",
    description:
      "Kampüsünüzü ve okulunuzu kayıt öncesi gezilebilir yapın; velilere ve öğrencilere güven veren bir dijital deneyim sunun.",
    metaTitle: "Eğitim Kurumları için Matterport Çözümleri",
    metaDescription:
      "Kampüs ve okul sanal turu, kayıt öncesi gezi, laboratuvar ve sınıf dokümantasyonu, çoklu dil desteği. Eğitim kurumları için Matterport.",
    heroImageCandidates: [
      "images/sectors/egitim.webp",
      "images/sectors/egitim.jpg",
    ],
    icon: GraduationCap,
    challenges: [
      "Kayıt döneminde yoğun kampüs gezdirme trafiği",
      "Şehir dışı ve yurt dışı adaylara ulaşma zorluğu",
      "Tesis ve imkânların yeterince gösterilememesi",
      "Güvenlik nedeniyle kampüs erişiminin sınırlı olması",
    ],
    solutions: [
      "Kampüs; derslikler, laboratuvarlar, spor ve sosyal alanlarla birlikte gezilebilir bir sanal tura dönüştürülür. Aday öğrenciler ve veliler kurumu diledikleri zaman, diledikleri yerden inceler.",
      "Çoklu dil desteğiyle uluslararası öğrencilere ulaşılır; tur yalnızca bağlantıya sahip kişilerle paylaşılarak erişim kontrol altında tutulur.",
    ],
    benefits: [
      "Kayıt öncesi 7/24 kampüs gezisi",
      "Uzaktaki adaylara erişim",
      "İmkânların eksiksiz sunumu",
      "Çoklu dil desteği",
      "Kontrollü ve güvenli paylaşım",
    ],
    useCases: [
      "Üniversite kampüsleri",
      "Okul ve kolejler",
      "Laboratuvar ve atölyeler",
      "Yurt ve konaklama alanları",
      "Spor ve sosyal tesisler",
    ],
    recommendedSolutionSlugs: ["3d-sanal-tur", "dijital-ikiz", "fotograf-video"],
    faq: [
      {
        question: "Tur kayıt dönemine yetişir mi?",
        answer:
          "Standart bir kampüs çekimi ve yayını birkaç iş günü içinde tamamlanır; kayıt takvimi paylaşıldığında plan buna göre yapılır.",
      },
      {
        question: "Öğrencilerin olduğu saatlerde çekim yapılır mı?",
        answer:
          "Hayır. Çekimler ders saatleri dışında veya alanlar boşken yapılır; turda kişiler yer almaz.",
      },
      {
        question: "Tur birden fazla dilde sunulabilir mi?",
        answer:
          "Evet. Bilgi etiketleri ve tur arayüzü çoklu dil destekler; uluslararası adaylara kendi dillerinde sunum yapılır.",
      },
    ],
  },
  {
    slug: "saglik",
    title: "Sağlık",
    shortTitle: "Sağlık",
    eyebrow: "SEKTÖR",
    description:
      "Hastane ve kliniklerinizi tanıtım, yönlendirme ve teknik dokümantasyon için güvenli biçimde dijitalleştirin.",
    metaTitle: "Sağlık Kurumları için Matterport Çözümleri",
    metaDescription:
      "Hastane ve klinik tanıtımı, hasta yönlendirmesi, teknik alan dokümantasyonu ve yeni tesis planlaması. Sağlık kurumları için Matterport çözümleri.",
    heroImageCandidates: [
      "images/sectors/saglik.webp",
      "images/sectors/saglik.jpg",
    ],
    icon: HeartPulse,
    challenges: [
      "Hasta ve ziyaretçilerin tesis öncesi bilgi ihtiyacı",
      "Uluslararası hasta sunumlarında güven eksikliği",
      "Teknik alanların belgelenme zorluğu",
      "Yeni tesis ve renovasyon planlamasında veri eksikliği",
    ],
    solutions: [
      "Hastane ve kliniklerin hasta kabul, poliklinik ve konfor alanları gezilebilir tura dönüştürülür; hastalar ve yakınları tesisi ziyaret öncesi tanır. Sağlık turizminde uluslararası hastalara güven veren gerçekçi bir sunum sağlanır.",
      "Teknik ve medikal altyapı alanları ise yetkilendirilmiş erişimle ayrıca belgelenir; bakım ve renovasyon projeleri gerçek ölçüler üzerinden planlanır.",
    ],
    benefits: [
      "Hasta ve ziyaretçi güveni",
      "Sağlık turizmi sunumları",
      "Teknik alan dokümantasyonu",
      "Renovasyon planlamasına ölçülebilir veri",
      "Yetkilendirilmiş erişim",
    ],
    useCases: [
      "Hastaneler",
      "Klinik ve poliklinikler",
      "Laboratuvar ve görüntüleme merkezleri",
      "Rehabilitasyon merkezleri",
      "Teknik altyapı alanları",
    ],
    recommendedSolutionSlugs: ["dijital-ikiz", "3d-sanal-tur", "teknik-dosyalar"],
    faq: [
      {
        question: "Hasta mahremiyeti nasıl korunuyor?",
        answer:
          "Çekimler hasta bulunmayan saatlerde ve alanlarda yapılır; yayınlanacak bölümler kurumla birlikte belirlenir.",
      },
      {
        question: "Steril alanlarda çekim mümkün mü?",
        answer:
          "Kurumun hijyen prosedürlerine tam uyumla mümkündür; ekipman ve ekip, alan kurallarına göre hazırlanır.",
      },
      {
        question: "Teknik alan modeli kimlere açık olur?",
        answer:
          "Yalnızca yetkilendirilmiş kullanıcılara. Tanıtım turu ile teknik dokümantasyon ayrı modeller olarak yönetilir.",
      },
    ],
  },
  {
    slug: "yat-denizcilik",
    title: "Yat ve Denizcilik",
    shortTitle: "Yat ve Denizcilik",
    eyebrow: "SEKTÖR",
    description:
      "Yatlarınızın iç mekânlarını ve güvertesini uluslararası alıcılara gezilebilir biçimde sunun.",
    metaTitle: "Yat ve Denizcilik için Matterport Çözümleri",
    metaDescription:
      "Yat içi ve güverte 3D sanal turu, uluslararası müşteri sunumu, satış ve kiralama süreçleri, teknik dokümantasyon. Denizcilik için Matterport.",
    heroImageCandidates: [
      "images/sectors/yat-denizcilik.webp",
      "images/sectors/yat-denizcilik.jpg",
    ],
    icon: Ship,
    challenges: [
      "Alıcıların çoğunun teknenin bulunduğu ülkede olmaması",
      "Fotoğrafların iç mekân akışını aktaramaması",
      "Kiralama kararlarında güven ihtiyacı",
      "Tersane ve refit süreçlerinde dokümantasyon eksikliği",
    ],
    solutions: [
      "Yatın tüm iç mekânları, kamaraları ve güvertesi gerçek ölçüleriyle gezilebilir bir 3D tura dönüştürülür. Uluslararası alıcılar ve kiralama müşterileri tekneyi bulunduğu yerden bağımsız olarak ayrıntılı inceler.",
      "Satış ve kiralama ekipleri turu sunum aracı olarak kullanır; tersane süreçlerinde ise mevcut durum kaydı ve refit planlaması için teknik dokümantasyon üretilir.",
    ],
    benefits: [
      "Uluslararası alıcılara 7/24 sunum",
      "Gerçek ölçülerle iç mekân deneyimi",
      "Satış ve kiralama sürecinin hızlanması",
      "Refit ve teknik dokümantasyon",
      "Marka standardında broker sunumları",
    ],
    useCases: [
      "Motor yat ve gulet satışı",
      "Kiralama filoları",
      "Tersane ve refit projeleri",
      "Marina ve tesis tanıtımı",
      "Üretici model portföyleri",
    ],
    recommendedSolutionSlugs: ["3d-sanal-tur", "fotograf-video", "teknik-dosyalar"],
    faq: [
      {
        question: "Çekim teknede ne kadar sürer?",
        answer:
          "Orta boy bir motor yat birkaç saatte taranır; süperyat ölçeğinde çekim planı tekne programına göre yapılır.",
      },
      {
        question: "Tur marina dışında, seyir halindeyken yapılabilir mi?",
        answer:
          "Çekim teknenin sabit olduğu koşullarda yapılır; marina veya çekek sahasında planlamak en doğru sonucu verir.",
      },
      {
        question: "Tekne bilgileri tur içinde gösterilebilir mi?",
        answer:
          "Evet. Donanım, ölçü ve broşür bilgileri bilgi etiketleriyle turun içine yerleştirilir.",
      },
    ],
  },
  {
    slug: "muze-kulturel-miras",
    title: "Müze ve Kültürel Miras",
    shortTitle: "Müze ve Kültürel Miras",
    eyebrow: "SEKTÖR",
    description:
      "Müzelerinizi ve tarihi mekânlarınızı dijital arşive dönüştürün; dünyanın her yerinden ziyarete açın.",
    metaTitle: "Müze ve Kültürel Miras için Matterport Çözümleri",
    metaDescription:
      "Müze sanal turu, dijital arşiv, eser ve mekân dokümantasyonu, çoklu dil ve eğitim içerikleri. Kültürel miras için Matterport çözümleri.",
    heroImageCandidates: [
      "images/sectors/muze-kulturel-miras.webp",
      "images/sectors/muze-kulturel-miras.jpg",
    ],
    icon: Landmark,
    challenges: [
      "Tarihi mekânların hassas dokümantasyon ihtiyacı",
      "Fiziksel ziyaret kapasitesinin sınırlı olması",
      "Eser bilgilerinin mekânla ilişkili sunulamaması",
      "Restorasyon öncesi durum kaydı gerekliliği",
    ],
    solutions: [
      "Müze ve tarihi yapılar, mevcut durumlarıyla milimetrik hassasiyette taranarak kalıcı bir dijital arşive dönüştürülür. Bu kayıt hem restorasyon süreçlerine teknik veri sağlar hem de mekânı uzaktan ziyarete açar.",
      "Bilgi etiketleriyle eserlerin hikâyeleri çoklu dilde sunulur; okullar ve araştırmacılar için gezilebilir eğitim içerikleri oluşturulur.",
    ],
    benefits: [
      "Kalıcı dijital arşiv",
      "Uzaktan ziyaret imkânı",
      "Çoklu dilde eser anlatımı",
      "Restorasyona teknik veri",
      "Eğitim ve araştırma erişimi",
    ],
    useCases: [
      "Müzeler ve sergi salonları",
      "Tarihi yapılar ve sitler",
      "Dini ve anıtsal yapılar",
      "Geçici sergilerin arşivlenmesi",
      "Kültürel eğitim programları",
    ],
    recommendedSolutionSlugs: ["3d-sanal-tur", "dijital-ikiz", "fotograf-video"],
    faq: [
      {
        question: "Hassas eserlerin olduğu alanlarda çekim güvenli mi?",
        answer:
          "Evet. Tarama tamamen temassızdır; ekipman eserlerle temas etmez ve çekim kurum gözetiminde yürütülür.",
      },
      {
        question: "Geçici sergiler de arşivlenebilir mi?",
        answer:
          "Evet. Sergi süresi dolmadan yapılan çekimle sergi kalıcı olarak arşivlenir ve sonrasında da gezilebilir kalır.",
      },
      {
        question: "Restorasyon için hangi veriler üretilebilir?",
        answer:
          "E57 nokta bulutu, ölçekli kat planları ve yüksek çözünürlüklü görseller restorasyon projelerine altlık olarak teslim edilir.",
      },
    ],
  },
  {
    slug: "ofis-coworking",
    title: "Ofis ve Coworking",
    shortTitle: "Ofis ve Coworking",
    eyebrow: "SEKTÖR",
    description:
      "Ofis ve çalışma alanlarınızı kiralama, kurumsal sunum ve planlama için dijitalleştirin.",
    metaTitle: "Ofis ve Coworking için Matterport Çözümleri",
    metaDescription:
      "Ofis tanıtımı, kiralama sunumları, çalışma alanı planlaması ve çoklu lokasyon portföyü. Ofis ve coworking alanları için Matterport.",
    heroImageCandidates: [
      "images/sectors/ofis-coworking.webp",
      "images/sectors/ofis-coworking.jpg",
    ],
    icon: Briefcase,
    challenges: [
      "Kiralama adaylarının yerinde gezi beklentisi",
      "Boş ofis alanlarının potansiyelinin gösterilememesi",
      "Çalışma alanı planlamasında ölçü ihtiyacı",
      "Çok lokasyonlu operatörlerde standart eksikliği",
    ],
    solutions: [
      "Ofis katları ve coworking alanları gezilebilir 3D tura dönüştürülür; kiralama adayları alanı uzaktan inceler, ciddi adaylar yerinde ziyarete gelir. Ölçüm araçlarıyla yerleşim ve kapasite planlaması gerçek veriler üzerinden yapılır.",
      "Coworking operatörlerinde tüm lokasyonlar aynı standartta sunulur; kurumsal müşterilere portföyün tamamı tek bağlantıyla iletilir.",
    ],
    benefits: [
      "Kiralama sürecinin hızlanması",
      "Uzaktan kurumsal sunum",
      "Gerçek ölçülerle alan planlaması",
      "Çoklu lokasyon portföyü",
      "Web sitesi entegrasyonu",
    ],
    useCases: [
      "Kiralık ofis katları",
      "Coworking ve esnek ofisler",
      "Genel merkez tanıtımları",
      "Toplantı ve etkinlik alanları",
      "Plaza ve iş merkezleri",
    ],
    recommendedSolutionSlugs: [
      "3d-sanal-tur",
      "dijital-ikiz",
      "kurumsal-portfoy-tarama",
    ],
    faq: [
      {
        question: "Boş ofis alanı için tur anlamlı mı?",
        answer:
          "Evet. Boş alanlarda ölçüler ve bölümlenme potansiyeli net algılanır; ölçüm araçları yerleşim planlamasını destekler.",
      },
      {
        question: "Mevcut kiracılar varken çekim yapılabilir mi?",
        answer:
          "Evet. Çekim mesai dışı saatlerde planlanır; kişiler ve hassas bilgiler turda yer almaz.",
      },
      {
        question: "Tur kiralama platformlarında kullanılabilir mi?",
        answer:
          "Evet. Tur bağlantısı ilan platformlarında paylaşılır, web sitenize gömülür ve e-posta sunumlarına eklenir.",
      },
    ],
  },
  {
    slug: "fuar-etkinlik",
    title: "Fuar ve Etkinlik",
    shortTitle: "Fuar ve Etkinlik",
    eyebrow: "SEKTÖR",
    description:
      "Fuar alanlarınızı ve stantlarınızı kalıcı dijital deneyimlere dönüştürün; etkinliği bittiği yerde yaşatmaya devam edin.",
    metaTitle: "Fuar ve Etkinlik için Matterport Çözümleri",
    metaDescription:
      "Fuar alanı ve stant dijitalleştirme, etkinlik sonrası erişim, sponsor etiketleri ve sanal sergi. Fuar ve etkinlikler için Matterport çözümleri.",
    heroImageCandidates: [
      "images/sectors/fuar-etkinlik.webp",
      "images/sectors/fuar-etkinlik.jpg",
    ],
    icon: Tent,
    challenges: [
      "Etkinliğin süresiyle sınırlı erişim",
      "Katılamayan ziyaretçilere ulaşamama",
      "Stant yatırımının kısa ömürlü olması",
      "Sponsor görünürlüğünün ölçülememesi",
    ],
    solutions: [
      "Fuar alanı veya stant, etkinlik sırasında taranarak kalıcı bir sanal sergiye dönüştürülür. Etkinliğe katılamayan ziyaretçiler ve uluslararası kitle, alanı etkinlik sonrasında da gezebilir.",
      "Sponsor ve ürün etiketleriyle turun içinde marka görünürlüğü sürer; bir sonraki etkinliğin satış sunumlarında gerçek mekân deneyimi kullanılır.",
    ],
    benefits: [
      "Etkinlik sonrası kalıcı erişim",
      "Uluslararası ziyaretçi kitlesi",
      "Stant yatırımının ömrünün uzaması",
      "Sponsor ve ürün etiketleri",
      "Gelecek etkinlik satışına referans",
    ],
    useCases: [
      "Fuar stantları",
      "Sergi ve lansman alanları",
      "Kongre ve etkinlik mekânları",
      "Sanal sergiler",
      "Showcase ve pop-up alanlar",
    ],
    recommendedSolutionSlugs: [
      "3d-sanal-tur",
      "fotograf-video",
      "google-street-view",
    ],
    faq: [
      {
        question: "Çekim etkinlik sırasında mı yapılıyor?",
        answer:
          "Genellikle etkinlik açılmadan önce veya ziyaretçi yoğunluğu düşükken yapılır; stant en düzenli haliyle kaydedilir.",
      },
      {
        question: "Tur etkinlikten sonra ne kadar erişilebilir kalır?",
        answer:
          "Dilediğiniz süre boyunca. Tur, siz yayından kaldırana kadar erişilebilir kalır ve arşiv değeri taşır.",
      },
      {
        question: "Sponsor logoları tura eklenebilir mi?",
        answer:
          "Evet. Sponsor ve ürün bilgileri etiketlerle tura yerleştirilir; bağlantılarla sponsor sayfalarına yönlendirme yapılır.",
      },
    ],
  },
];

export function getSectorPage(slug: string): SectorPageItem | undefined {
  return sectorPages.find((item) => item.slug === slug);
}
