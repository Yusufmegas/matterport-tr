export interface LegalSectionData {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalPageData {
  slug: string;
  title: string;
  intro?: string;
  metaTitle: string;
  metaDescription: string;
  sections: LegalSectionData[];
}

/* ------------------------------------------------------------------ */
/* KVKK Aydınlatma Metni                                              */
/* ------------------------------------------------------------------ */
export const kvkkPage: LegalPageData = {
  slug: "kvkk",
  title: "KVKK Aydınlatma Metni",
  intro:
    "Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, web sitemiz üzerinden toplanan kişisel verilerin işlenmesine ilişkin genel bilgilendirme amacıyla hazırlanmıştır.",
  metaTitle: "KVKK Aydınlatma Metni | Matterport TR",
  metaDescription:
    "Matterport TR kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni.",
  sections: [
    {
      title: "Veri Sorumlusu Hakkında",
      paragraphs: [
        "Bu web sitesi üzerinden paylaşılan kişisel veriler, Matterport TR markası altında hizmet veren Matterport Türkiye Dijital Bilişim tarafından veri sorumlusu sıfatıyla işlenir. Veri sorumlusuna 0501 580 01 01 numaralı telefon veya info@matterporttr.com e-posta adresi üzerinden ulaşabilirsiniz.",
      ],
    },
    {
      title: "İşlenen Kişisel Veri Kategorileri",
      paragraphs: [
        "Web sitemizin kullanımı ve teklif süreçleri kapsamında aşağıdaki veri kategorileri işlenebilir:",
      ],
      bullets: [
        "Kimlik ve iletişim bilgileri (ad soyad, telefon, e-posta)",
        "Şirket ve proje bilgileri (şirket adı, sektör, proje türü, şehir, alan bilgisi)",
        "Teklif formu üzerinden iletilen bilgiler",
        "Teknik işlem ve güvenlik kayıtları",
        "Çerez ve kullanım verileri",
      ],
    },
    {
      title: "Kişisel Verilerin İşlenme Amaçları",
      bullets: [
        "Teklif taleplerinin alınması ve yanıtlanması",
        "Proje kapsamının değerlendirilmesi ve planlanması",
        "İletişim süreçlerinin yürütülmesi",
        "Hizmet kalitesinin geliştirilmesi",
        "Yasal yükümlülüklerin yerine getirilmesi",
        "Web sitesinin güvenli ve doğru çalışmasının sağlanması",
      ],
    },
    {
      title: "Kişisel Verilerin Aktarılması",
      paragraphs: [
        "Teklif ve iletişim formları üzerinden girilen bilgiler, proje talebinin değerlendirilmesi ve geri dönüş yapılması amacıyla işlenir; yapılandırılmış bir e-posta bildirimi olarak belirlenen kurumsal alıcı adresine iletilir. Bu iletim sırasında aktarım, e-posta (SMTP) hizmet sağlayıcısının teknik altyapısı üzerinden gerçekleşebilir.",
        "Bunun dışında kişisel veriler; yalnızca hizmetin sunulması için gerekli olduğu ölçüde, yasal yükümlülükler çerçevesinde yetkili kurum ve kuruluşlarla ya da hizmet alınan teknik altyapı sağlayıcılarıyla (ör. barındırma hizmetleri) paylaşılabilir. Kişisel veriler üçüncü kişilere pazarlama amacıyla satılmaz veya kiralanmaz; ayrı bir izin alınmadıkça bülten veya reklam iletişimi gönderilmez.",
      ],
    },
    {
      title: "Verilerin Toplanma Yöntemi ve Hukuki Sebep",
      paragraphs: [
        "Kişisel veriler; web sitesi üzerindeki formlar aracılığıyla ve sitenin kullanımı sırasında oluşan teknik kayıtlar yoluyla, elektronik ortamda toplanır. Veriler; sözleşmenin kurulması ve ifası, veri sorumlusunun meşru menfaati ve ilgili kişinin talebine bağlı işlemlerin yürütülmesi hukuki sebeplerine dayanılarak işlenir. Saklama süreleri, hukuki ve ticari gerekliliklere göre kurumsal politikada kesinleştirilecektir.",
      ],
    },
    {
      title: "İlgili Kişinin Hakları",
      paragraphs: [
        "KVKK'nın 11. maddesi kapsamında ilgili kişiler aşağıdaki haklara sahiptir:",
      ],
      bullets: [
        "Kişisel verilerinin işlenip işlenmediğini öğrenme",
        "İşlenmişse buna ilişkin bilgi talep etme",
        "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
        "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
        "Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
        "İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhe bir sonucun ortaya çıkmasına itiraz etme",
        "Kanuna aykırı işleme nedeniyle zarara uğranması hâlinde zararın giderilmesini talep etme",
      ],
    },
    {
      title: "Başvuru Yöntemi",
      paragraphs: [
        "İlgili kişiler, haklarına ilişkin taleplerini web sitemizdeki iletişim kanalları üzerinden yazılı olarak iletebilir. Başvurular, KVKK'da öngörülen süre ve usule uygun olarak yanıtlanır. Veri sorumlusunun resmî başvuru adresi, kurumsal bilgilerin kesinleşmesiyle birlikte bu bölümde yayımlanacaktır.",
      ],
    },
    {
      title: "Güncelleme Tarihi",
      paragraphs: [
        "Bu metin gerektiğinde güncellenebilir. Yürürlük ve güncelleme tarihi, metnin nihai onayıyla birlikte bu bölümde duyurulacaktır.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Gizlilik Politikası                                                */
/* ------------------------------------------------------------------ */
export const privacyPage: LegalPageData = {
  slug: "gizlilik-politikasi",
  title: "Gizlilik Politikası",
  intro:
    "Bu politika, Matterport TR web sitesinin ziyaretçilerine ait bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.",
  metaTitle: "Gizlilik Politikası | Matterport TR",
  metaDescription:
    "Matterport TR web sitesinin kişisel veriler, iletişim formları, teknik kayıtlar ve üçüncü taraf hizmetlerle ilgili gizlilik yaklaşımı.",
  sections: [
    {
      title: "Politikanın Kapsamı",
      paragraphs: [
        "Bu politika, www.matterporttr.com.tr alan adı altında yayınlanan web sitesinin kullanımını kapsar. Site üzerinden bağlantı verilen üçüncü taraf web siteleri ve platformlar kendi gizlilik politikalarına tabidir.",
      ],
    },
    {
      title: "Toplanan Bilgiler",
      bullets: [
        "Teklif ve iletişim formları aracılığıyla doğrudan paylaştığınız bilgiler",
        "Sitenin çalışması sırasında oluşan teknik kayıtlar (tarayıcı türü, cihaz bilgisi, erişim zamanı gibi)",
        "Tema tercihi gibi tarayıcınızda saklanan kullanım tercihleri",
      ],
    },
    {
      title: "Bilgilerin Kullanım Amaçları",
      bullets: [
        "Teklif taleplerini değerlendirmek ve yanıtlamak",
        "Hizmetlerimizi planlamak ve geliştirmek",
        "Sitenin güvenli ve doğru çalışmasını sağlamak",
        "Yasal yükümlülükleri yerine getirmek",
      ],
    },
    {
      title: "İletişim ve Teklif Formları",
      paragraphs: [
        "Formlar aracılığıyla paylaşılan bilgiler yalnızca proje talebinin değerlendirilmesi ve geri dönüş yapılması amacıyla kullanılır. Form verileri, yapılandırılmış bir e-posta bildirimi olarak belirlenen kurumsal alıcı adresine iletilir; bu aktarım e-posta (SMTP) hizmet sağlayıcısının teknik altyapısı üzerinden gerçekleşebilir.",
        "Form verileri pazarlama listelerine otomatik olarak eklenmez ve üçüncü kişilerle pazarlama amacıyla paylaşılmaz; ayrı bir izin alınmadıkça bülten veya reklam iletişimi gönderilmez. Saklama süreleri hukuki ve ticari gerekliliklere göre kurumsal politikada kesinleştirilecektir.",
      ],
    },
    {
      title: "Teknik Kayıtlar",
      paragraphs: [
        "Web sitesinin barındırıldığı altyapı, güvenlik ve hata takibi amacıyla standart erişim kayıtları oluşturabilir. Bu kayıtlar, sistem güvenliğinin sağlanması ve teknik sorunların giderilmesi dışında bir amaçla kullanılmaz.",
      ],
    },
    {
      title: "Üçüncü Taraf Hizmetler",
      paragraphs: [
        "Sitede şu an üçüncü taraf analiz, reklam veya pazarlama takip sistemi aktif olarak kullanılmamaktadır. İleride Matterport sanal tur içerikleri, harita veya benzeri gömülü hizmetler eklendiğinde, bu hizmetlerin sağlayıcılarına ait koşullar geçerli olabilir; böyle bir durumda bu politika güncellenir.",
      ],
    },
    {
      title: "Veri Güvenliği",
      paragraphs: [
        "Paylaşılan bilgilerin korunması için erişim kontrolü ve şifreli bağlantı (HTTPS) dahil makul teknik ve idari tedbirler uygulanır. İnternet üzerinden yapılan hiçbir aktarımın tamamen risksiz olmadığını hatırlatırız.",
      ],
    },
    {
      title: "Saklama Süreleri",
      paragraphs: [
        "Bilgiler; toplanma amacının gerektirdiği süre ve ilgili mevzuatta öngörülen saklama yükümlülükleri boyunca saklanır, sürenin sonunda silinir veya anonim hale getirilir.",
      ],
    },
    {
      title: "Kullanıcı Hakları",
      paragraphs: [
        "Kişisel verilerinize ilişkin haklarınız ve başvuru yöntemi hakkında ayrıntılı bilgi için KVKK Aydınlatma Metni'ni inceleyebilirsiniz.",
      ],
    },
    {
      title: "Politika Güncellemeleri",
      paragraphs: [
        "Bu politika, hizmetlerdeki veya mevzuattaki değişikliklere bağlı olarak güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.",
      ],
    },
    {
      title: "İletişim",
      paragraphs: [
        "Gizlilik uygulamalarımızla ilgili sorularınızı web sitemizin iletişim sayfası üzerinden iletebilirsiniz.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Çerez Politikası ve Ayarları                                       */
/* ------------------------------------------------------------------ */
export const cookiesPage: LegalPageData = {
  slug: "cerez-ayarlari",
  title: "Çerez Politikası ve Ayarları",
  intro:
    "Bu sayfa, Matterport TR web sitesinde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi verir.",
  metaTitle: "Çerez Politikası ve Ayarları | Matterport TR",
  metaDescription:
    "Matterport TR web sitesinde kullanılan zorunlu, tercih, analiz ve üçüncü taraf çerezleri hakkında bilgi.",
  sections: [
    {
      title: "Çerez Nedir?",
      paragraphs: [
        "Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Benzer şekilde, tarayıcının yerel depolama alanı da bazı tercihlerin hatırlanması için kullanılabilir.",
      ],
    },
    {
      title: "Zorunlu Çerezler ve Depolama",
      paragraphs: [
        "Sitenin temel işlevleri için gereken sınırlı veriler kullanılır. Örneğin gündüz/gece tema tercihiniz, tarayıcınızın yerel depolama alanında saklanır. Bu veriler kimlik tespiti veya takip amacıyla kullanılmaz.",
      ],
    },
    {
      title: "Tercih Çerezleri",
      paragraphs: [
        "Tercih çerezleri, site deneyiminizi kişiselleştiren seçimleri (ör. görüntüleme tercihleri) hatırlamak için kullanılabilir. Şu an tema tercihi dışında ayrı bir tercih çerezi kullanılmamaktadır.",
      ],
    },
    {
      title: "Analiz Çerezleri",
      paragraphs: [
        "Sitede şu an herhangi bir analiz veya istatistik çerezi aktif değildir. İleride ziyaretçi istatistikleri için bir analiz aracı kullanılmaya başlanırsa, bu sayfa güncellenecek ve gerekli bilgilendirme yapılacaktır.",
      ],
    },
    {
      title: "Üçüncü Taraf İçerikler",
      paragraphs: [
        "İleride sayfalara Matterport sanal tur görüntüleyicisi, Google Street View veya harita gibi gömülü içerikler eklendiğinde, bu içeriklerin sağlayıcıları kendi çerezlerini kullanabilir. Bu tür içerikler devreye alındığında ilgili sağlayıcıların koşulları geçerli olur ve bu politika buna göre güncellenir.",
      ],
    },
    {
      title: "Tarayıcıdan Çerez Yönetimi",
      paragraphs: [
        "Tarayıcınızın ayarlarından çerezleri görüntüleyebilir, silebilir veya engelleyebilirsiniz. Yaygın tarayıcıların tümü; çerezleri temizleme, belirli siteler için engelleme ve üçüncü taraf çerezlerini sınırlama seçenekleri sunar. Zorunlu çerezlerin engellenmesi bazı site işlevlerini etkileyebilir.",
      ],
    },
    {
      title: "Politika Güncellemeleri",
      paragraphs: [
        "Kullanılan çerez ve depolama teknolojileri değiştikçe bu sayfa güncellenir. Güncel sürüm her zaman bu adreste yayımlanır.",
      ],
    },
  ],
};
