/** Ana sayfa "Nasıl Çalışır?" süreç bölümünün merkezi verisi. */

export const howItWorksEyebrow = "NASIL ÇALIŞIR?";
export const howItWorksTitle =
  "Projeden dijital teslime, planlı ve şeffaf bir süreç.";
export const howItWorksDescription =
  "Her proje, mekânın yapısı ve ihtiyaç duyulan çıktılar doğrultusunda planlanır. Çekimden teslim aşamasına kadar tüm süreç kontrollü biçimde yürütülür.";

export const howItWorksNote =
  "Çekim ve teslim süresi her projenin alanına, kapsamına ve talep edilen çıktılara göre planlanır.";

export const howItWorksCta = {
  label: "Projenizi Görüşelim",
  href: "/#teklif",
};

export interface ProcessStage {
  number: string;
  title: string;
  description: string;
}

export const howItWorksStages: ProcessStage[] = [
  {
    number: "01",
    title: "İhtiyaç Analizi",
    description:
      "Mekânın büyüklüğü, kullanım amacı, saha koşulları ve talep edilen dijital ya da teknik çıktılar değerlendirilir.",
  },
  {
    number: "02",
    title: "Planlama ve Çekim",
    description:
      "Çekim tarihi, tarama rotası ve saha gereksinimleri belirlenerek profesyonel Matterport çekimi gerçekleştirilir.",
  },
  {
    number: "03",
    title: "Düzenleme ve Optimizasyon",
    description:
      "Sanal tur başlangıç noktaları, yönlendirmeler, katlar, etiketler ve proje kapsamında talep edilen içerikler düzenlenir.",
  },
  {
    number: "04",
    title: "Teslim ve Yayın Desteği",
    description:
      "Sanal tur bağlantısı ve talep edilen teknik çıktılar teslim edilir. Web sitesine ekleme, yayın ve erişim süreçlerinde destek sağlanır.",
  },
];
