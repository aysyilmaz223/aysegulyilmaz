import { defineConfig } from 'astro/config';

// GitHub Pages (proje sayfası) için:
//   site -> https://<kullanıcı>.github.io
//   base -> /<repo-adı>
// Site bu adresten yayınlanır: https://aysyilmaz223.github.io/aysegulyilmaz/
//
// Cloudflare’e (kendi alan adına) geçince base’i '/' yapıp site’ı kendi
// adresinle güncelleyebilirsin; iç bağlantılar BASE_URL kullandığı için
// her iki durumda da çalışır.
export default defineConfig({
  site: 'https://aysyilmaz223.github.io',
  base: '/aysegulyilmaz',
});
