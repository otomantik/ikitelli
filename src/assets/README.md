# Görsel Dosyaları - Image Assets

Bu klasöre aşağıdaki görselleri ekleyin:

## Hero Bölümü (`hero/`)

1. **hero-poster.jpg** (veya .webp)
   - Boyut: 1920x1080px
   - Format: Optimize edilmiş JPG veya WebP
   - Açıklama: Video yüklenene kadar görünecek poster görseli
   - Hero video için placeholder olarak kullanılacak

2. **hero-turbo.mp4**
   - Format: MP4 (H.264)
   - Süre: 10-15 saniye
   - Boyut: Mümkün olduğunca küçük (<2MB)
   - Açıklama: Veo-generated turbo tanıtım videosu

3. **hero-bg.jpg** (opsiyonel)
   - Boyut: 1920x1080px
   - Format: Optimize edilmiş JPG
   - Açıklama: Hero bölümü arka plan görseli (vignette efekti ile)

## İkonlar (`icons/`)

SVG formatında küçük ikonlar (opsiyonel, şu an emoji kullanılıyor):
- check-icon.svg
- star-icon.svg
- turbo-icon.svg

## Markalar (`brands/`)

SVG formatında marka logoları (opsiyonel):
- garrett.svg
- borgwarner.svg
- holset.svg
- ihi.svg
- mitsubishi.svg
- cummins.svg
- kkk.svg

## Diğer Görseller

1. **map.jpg** (root of assets/)
   - Boyut: 1200x600px
   - Format: Optimize edilmiş JPG veya WebP
   - Açıklama: İletişim bölümü için harita placeholder'ı
   - Google Maps screenshot veya basit harita görseli

2. **og-image.jpg** (root of assets/)
   - Boyut: 1200x630px
   - Format: Optimize edilmiş JPG
   - Açıklama: Open Graph görseli (sosyal medya paylaşımları için)

## Notlar

- Tüm görseller Astro'nun Image component'i ile optimize edilecek
- Görseller eklenene kadar placeholder'lar gösterilecek
- Video dosyaları için `preload="none"` kullanılıyor (performans için)



