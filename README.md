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

## Teklif Formu

Teklif formu sunucu kullanmaz; doğrulanan bilgilerle hazır bir WhatsApp
mesajı (`wa.me`) açar. SMTP veya backend kurulumu gerekmez.

Tek ortam değişkeni `NEXT_PUBLIC_SITE_URL`'dir (production:
`https://www.matterporttr.com.tr`). Bu depoya gerçek credential eklemeyin;
`.env*` dosyaları `.gitignore` kapsamındadır.
