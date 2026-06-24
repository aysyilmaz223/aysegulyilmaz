import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Aynı depo iki yerde yayınlanıyor; base/site ortama göre seçilir:
//  - Cloudflare Pages (kendi alan adı, KÖK'te yayınlanır): base '/'
//    Cloudflare derlemede CF_PAGES ortam değişkenini set eder.
//  - GitHub Pages (proje sayfası, /aysegulyilmaz alt yolunda): base '/aysegulyilmaz'
// İç bağlantılar withBase()/BASE_URL kullandığı için ikisinde de doğru çalışır.
const isCloudflare = !!process.env.CF_PAGES;

const env = isCloudflare
  ? { site: 'https://aysegulyaziyor.com', base: '/' }
  : { site: 'https://aysyilmaz223.github.io', base: '/aysegulyilmaz' };

export default defineConfig({
  ...env,
  integrations: [sitemap()],
});
