# Ayşegül Yılmaz — Kişisel Web Sitesi

[Astro](https://astro.build) ile yapılmış statik kişisel web sitesi.
Cloudflare Pages üzerinde yayınlanmak üzere hazırlanmıştır.

## Bölümler
Ben Kimim · Nasıl Yazmaya Başladım · Neden Yazıyorum · Yazdıklarım ·
Okuduklarım · Yazdıran Fotoğraflar · Düşündüren Sözler · Ida’nın Güncesi ·
Seyahatler · Blog (dış link)

## Yerelde çalıştırma
> Node 18+ gerekir (bu makinede Homebrew ile kurulu: `/opt/homebrew/bin`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statik çıktı -> dist/
npm run preview  # build çıktısını önizle
```

## Cloudflare Pages’e bağlama (sen yapacaksın)
1. [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** →
   **Create application** → **Pages** → **Connect to Git**.
2. Bu GitHub deposunu (`aysyilmaz223/aysegulyilmaz`) seç.
3. Derleme ayarları:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy**. Her `git push`’ta otomatik yeniden yayınlanır.

Kendi alan adını bağlayınca `astro.config.mjs` içindeki `site` değerini güncelle.

## İçerik nasıl eklenir / düzenlenir
- **Yazdıklarım:** `src/content/yazdiklarim/` içine yeni bir `.md` dosyası ekle.
- **Seyahatler:** `src/content/seyahatler/` içine `.md` ekle; `kapak` ve
  `galeri` alanlarına `/images/...` yollarını yaz.
- **Ida’nın Güncesi:** `src/content/ida/` içine `.md` ekle.
- **Düşündüren Sözler:** `src/data/sozler.json` dosyasını düzenle.
- **Okuduklarım:** `src/data/okuduklarim.json` dosyasını düzenle.
- **Yazdıran Fotoğraflar:** görselleri `public/images/`’a koy, sonra
  `src/data/fotograflar.json`’a ekle.
- **Fotoğraflar:** tüm görseller `public/images/` klasöründe; siteye
  `/images/dosya-adi.jpg` şeklinde referans verilir.

## İletişim
E-posta: aysyilmaz@gmail.com · Instagram: [@aysegulyy](https://www.instagram.com/aysegulyy/) ·
Blog: [aysegulyilmaz.blogspot.com](https://aysegulyilmaz.blogspot.com/)
