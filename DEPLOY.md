# 🚀 Cloudflare Pages'e Deploy Etme Rehberi

Bu proje Cloudflare Pages için hazırlanmıştır. İki farklı yöntemle deploy edebilirsiniz.

## Yöntem 1: GitHub ile Otomatik Deploy (Önerilen)

### Adım 1: GitHub'a Push Edin

```bash
# Git repository'si yoksa oluşturun
git init
git add .
git commit -m "Initial commit - İkitelli Turbocu website"

# GitHub'da yeni bir repository oluşturun, sonra:
git remote add origin https://github.com/KULLANICI_ADI/ikitelli-turbocu.git
git branch -M main
git push -u origin main
```

### Adım 2: Cloudflare Pages'e Bağlayın

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages** → **Create a project**
2. **Connect to Git** seçeneğini seçin
3. GitHub hesabınızı bağlayın ve repository'yi seçin
4. Build ayarlarını yapılandırın:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (veya boş bırakın)
   - **Node version**: 18 veya 20

### Adım 3: Environment Variables (Opsiyonel)

Eğer GTM ID gibi environment variable'lar kullanıyorsanız:
- **Settings** → **Environment variables** → **Add variable**
- `PUBLIC_GTM_ID` gibi değişkenleri ekleyin

### Adım 4: Deploy

- Cloudflare otomatik olarak deploy edecek
- Her push'ta yeni bir deploy oluşturulur
- Production branch'i (genellikle `main`) otomatik olarak canlıya alınır

---

## Yöntem 2: Wrangler CLI ile Manuel Deploy

### Adım 1: Wrangler CLI'ı Yükleyin

```bash
npm install -g wrangler
```

### Adım 2: Cloudflare'de Giriş Yapın

```bash
wrangler login
```

Bu komut tarayıcınızı açacak ve Cloudflare hesabınıza giriş yapmanızı isteyecek.

### Adım 3: Build Edin

```bash
npm run build
```

### Adım 4: Deploy Edin

```bash
# Pages için deploy
npx wrangler pages deploy dist

# Veya direkt build ile
npx wrangler pages deploy dist --project-name=ikitelli-turbocu
```

### Adım 5: Custom Domain (Opsiyonel)

1. Cloudflare Dashboard → **Pages** → Projenizi seçin
2. **Custom domains** → **Set up a custom domain**
3. Domain'inizi ekleyin ve DNS ayarlarını yapın

---

## ⚙️ Build Ayarları

Cloudflare Pages için önerilen ayarlar:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 18.x veya 20.x
- **Environment variables**: Gerekirse ekleyin

---

## 🔍 Kontrol Listesi

Deploy öncesi kontrol edin:

- [ ] `npm run build` başarıyla çalışıyor
- [ ] Tüm logolar eklendi (`src/assets/car-brands/`)
- [ ] GTM ID varsa environment variable olarak eklendi
- [ ] `.gitignore` dosyası doğru yapılandırıldı
- [ ] `dist` klasörü `.gitignore`'da (build output)

---

## 📝 Notlar

- Cloudflare Pages ücretsiz planında:
  - 500 build/dakika limiti
  - Unlimited bandwidth
  - Global CDN
  - Custom domain desteği

- Production build'de:
  - Tüm görseller optimize edilir
  - CSS ve JS minify edilir
  - HTML compress edilir

---

## 🐛 Sorun Giderme

### Build Hatası

```bash
# Node version kontrolü
node --version

# Dependencies temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Sonrası 404 Hatası

- `astro.config.mjs`'de `output: 'server'` olduğundan emin olun
- Cloudflare adapter'ın doğru yüklendiğini kontrol edin

### Environment Variables Çalışmıyor

- Cloudflare Pages'de environment variables'ları kontrol edin
- `PUBLIC_` prefix'i kullanın (ör: `PUBLIC_GTM_ID`)


