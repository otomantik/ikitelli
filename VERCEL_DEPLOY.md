# Vercel Deployment Rehberi

Bu proje Vercel'e deploy edilmek için hazırlanmıştır.

## 🚀 Hızlı Başlangıç

### 1. GitHub Repository Oluşturma

Eğer henüz GitHub repository'niz yoksa:

1. [GitHub](https://github.com) hesabınıza giriş yapın
2. Yeni repository oluşturun (New Repository)
3. Repository adı: `ikitelli-turbocu` (veya istediğiniz isim)
4. **Public** veya **Private** seçin
5. **Initialize with README** seçeneğini **işaretlemeyin** (zaten README var)
6. **Create repository** butonuna tıklayın

### 2. Local Repository'yi GitHub'a Bağlama

GitHub'da repository oluşturduktan sonra, size verilen URL'i kullanın:

```bash
# GitHub repository URL'inizi buraya ekleyin
git remote add origin https://github.com/KULLANICI_ADI/ikitelli-turbocu.git

# Veya SSH kullanıyorsanız:
# git remote add origin git@github.com:KULLANICI_ADI/ikitelli-turbocu.git

# Değişiklikleri push edin
git branch -M main
git push -u origin main
```

### 3. Vercel'e Deploy Etme

#### Yöntem 1: Vercel Dashboard (Önerilen)

1. [Vercel](https://vercel.com) hesabınıza giriş yapın (veya yeni hesap oluşturun)
2. **Add New Project** butonuna tıklayın
3. GitHub repository'nizi seçin (`ikitelli-turbocu`)
4. Vercel otomatik olarak Astro projesini algılayacak:
   - **Framework Preset**: Astro (otomatik algılanır)
   - **Build Command**: `npm run build` (otomatik)
   - **Output Directory**: `dist` (otomatik)
   - **Install Command**: `npm install` (otomatik)
5. **Environment Variables** bölümüne gidin:
   - **PUBLIC_GTM_ID**: `GTM-XXXXXXX` (Google Tag Manager ID'niz varsa)
6. **Deploy** butonuna tıklayın

#### Yöntem 2: Vercel CLI

```bash
# Vercel CLI'yi global olarak yükleyin
npm i -g vercel

# Projeyi deploy edin
vercel

# Production'a deploy etmek için
vercel --prod
```

### 4. Environment Variables (Ortam Değişkenleri)

Vercel Dashboard'da projenizin **Settings** → **Environment Variables** bölümünden ekleyin:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Production, Preview, Development |

**Not**: `PUBLIC_` prefix'i olan değişkenler client-side'da kullanılabilir.

### 5. Build Ayarları

Vercel otomatik olarak Astro projesini algılar, ancak manuel kontrol için:

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x veya üzeri

### 6. Domain Ayarları

1. Vercel Dashboard → Projeniz → **Settings** → **Domains**
2. Custom domain ekleyebilirsiniz
3. DNS ayarlarını Vercel'in talimatlarına göre yapın

## ✅ Deployment Sonrası Kontroller

- [ ] Site canlı mı? (Vercel size bir URL verecek: `https://proje-adi.vercel.app`)
- [ ] Tüm sayfalar çalışıyor mu?
- [ ] GTM yükleniyor mu? (GTM ID eklediyseniz)
- [ ] Resimler yükleniyor mu?
- [ ] Mobile responsive çalışıyor mu?

## 🔄 Yeni Değişiklikleri Deploy Etme

GitHub'a push yaptığınızda Vercel otomatik olarak yeni deployment başlatır:

```bash
git add .
git commit -m "Yeni özellikler"
git push origin main
```

Vercel otomatik olarak:
1. Yeni commit'i algılar
2. Build işlemini başlatır
3. Test eder
4. Production'a deploy eder

## 🐛 Sorun Giderme

### Build Hatası

- Vercel Dashboard → **Deployments** → Hatalı deployment'a tıklayın
- **Build Logs** bölümünden hatayı kontrol edin
- Genellikle dependency sorunları olabilir, `package.json`'ı kontrol edin

### Environment Variables Çalışmıyor

- `PUBLIC_` prefix'ini unutmayın
- Değişkenleri ekledikten sonra **redeploy** yapın
- Production, Preview ve Development için ayrı ayrı ekleyin

### Sharp Image Optimization Hatası

Astro.config.mjs'de Sharp servisi kullanılıyor. Vercel otomatik olarak Sharp'ı yükler, ancak sorun olursa:

```bash
npm install sharp
```

## 📚 Kaynaklar

- [Vercel Astro Documentation](https://vercel.com/docs/frameworks/astro)
- [Astro Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)

