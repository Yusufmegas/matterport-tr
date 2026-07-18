# Matterport TR — Kurumsal Web Sitesi

Next.js App Router, TypeScript ve Tailwind CSS v4 ile geliştirilen
Matterport TR kurumsal web sitesi.

## Geliştirme

```bash
npm install
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır.

```bash
npm run lint   # ESLint
npm run build  # Production build
```

## Teklif Formu SMTP Kurulumu

Ana sayfa ve iletişim sayfasındaki teklif formu, `/api/quote` Route
Handler'ı üzerinden SMTP ile e-posta bildirimi gönderir. Altyapı
herhangi bir SMTP sağlayıcısıyla çalışır.

1. `.env.example` dosyasını `.env.local` olarak kopyalayın.
2. SMTP sağlayıcınızın bilgilerini girin (`SMTP_HOST`, `SMTP_PORT`,
   `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM_EMAIL`).
3. `QUOTE_RECIPIENT_EMAIL` alanına taleplerin ulaşacağı adresi yazın.
4. Development server'ı yeniden başlatın.
5. Test formu gönderin.
6. Production'da aynı değişkenleri Railway Variables alanına ekleyin.

Notlar:

- SMTP bilgileri girilmediğinde site normal çalışır; form gönderimi
  "şu anda kullanılamıyor" (HTTP 503) yanıtı verir.
- `SMTP_PASS` gibi secret değerler asla `NEXT_PUBLIC_` öneki almaz ve
  yalnızca sunucu tarafında okunur.
- Bu depoya gerçek credential eklemeyin; `.env*` dosyaları
  `.gitignore` kapsamındadır.
