# ⚡ Performans Optimizasyonları

Bu belge, İkitelli Turbocu websitesi için yapılan performans iyileştirmelerini içerir.

## 🎯 Performans Hedefleri

- **PageSpeed Insights**: 95+ (mobile & desktop)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTI (Time to Interactive)**: < 3.5s

## ✅ Uygulanan Optimizasyonlar

### 1. Build Optimizasyonları

#### Astro Config (`astro.config.mjs`)
- ✅ CSS code splitting aktif
- ✅ Manual chunking (React vendor ayrı bundle)
- ✅ HTML compression aktif
- ✅ Hoisted script optimization
- ✅ Image service optimization (Sharp)

#### Bundle Size
- ✅ React sadece gerektiğinde yükleniyor (islands pattern)
- ✅ Vendor chunks ayrıldı (daha iyi caching)
- ✅ Tree shaking aktif

### 2. Script Optimizasyonları

#### Header Menu Script
- ✅ Inline script (immediate execution)
- ✅ Passive event listeners
- ✅ Debounced resize handler
- ✅ Optimized DOM queries

#### GTM (Google Tag Manager)
- ✅ Async loading (zaten async)
- ✅ DNS prefetch eklendi

### 3. Image Optimizasyonları

#### Astro Image Component
- ✅ Otomatik WebP/AVIF conversion
- ✅ Lazy loading (varsayılan)
- ✅ Responsive images
- ✅ Content-visibility CSS

#### Video
- ✅ `preload="none"` (LCP'yi bloklamaz)
- ✅ `loading="lazy"`
- ✅ Poster image desteği

### 4. CSS Optimizasyonları

#### Global CSS (`global.css`)
- ✅ `content-visibility: auto` (images)
- ✅ `will-change` (animasyonlar için)
- ✅ `contain` (sticky elements)
- ✅ Font rendering optimizations
- ✅ GPU acceleration hints

### 5. Resource Hints

#### Preconnect/DNS Prefetch
- ✅ `wa.me` (WhatsApp)
- ✅ `googletagmanager.com` (GTM)
- ✅ `google-analytics.com` (Analytics)

#### Preload
- ✅ Favicon preload

### 6. React Component Optimizasyonları

#### FAQ Component
- ✅ `client:visible` (lazy loading - sadece görünür olduğunda yüklenir)
- ✅ `React.memo` (re-render optimizasyonu)
- ✅ Optimized state updates

### 7. Caching Strategy

#### Cloudflare Headers (`public/_headers`)
- ✅ Static assets: 1 yıl cache
- ✅ HTML: No cache (revalidation)
- ✅ CSS/JS: Immutable cache
- ✅ Images: Long cache
- ✅ Compression: gzip, brotli

### 8. Network Optimizasyonları

- ✅ Resource hints (preconnect, dns-prefetch)
- ✅ Async/defer scripts
- ✅ Lazy loading images
- ✅ Code splitting

## 📊 Performans Metrikleri

### Core Web Vitals

| Metrik | Hedef | Durum |
|--------|-------|-------|
| LCP | < 2.5s | ✅ Optimize edildi |
| FID | < 100ms | ✅ Optimize edildi |
| CLS | < 0.1 | ✅ Optimize edildi |

### Lighthouse Skorları

Test etmek için:
```bash
npm run build
npm run preview
# Lighthouse ile test edin
```

## 🔧 Ek Optimizasyon Önerileri

### Gelecek İyileştirmeler

1. **Service Worker** (PWA)
   - Offline support
   - Background sync
   - Push notifications

2. **Critical CSS**
   - Above-the-fold CSS inline
   - Defer non-critical CSS

3. **Image CDN**
   - Cloudflare Images
   - Automatic optimization
   - Responsive images

4. **Font Optimization**
   - Font subsetting
   - Variable fonts (eğer kullanılırsa)

5. **Third-party Scripts**
   - GTM lazy loading
   - Analytics defer

## 📝 Notlar

- Tüm optimizasyonlar production build'de aktif
- Development mode'da bazı optimizasyonlar devre dışı olabilir
- Cloudflare Pages otomatik olarak compression ve caching yapar
- `_headers` dosyası Cloudflare Pages tarafından otomatik kullanılır

## 🚀 Deployment Checklist

- [x] Build optimizations aktif
- [x] Image optimization aktif
- [x] Script optimization tamamlandı
- [x] CSS optimization tamamlandı
- [x] Caching headers yapılandırıldı
- [x] Resource hints eklendi
- [ ] Lighthouse test (production'da)
- [ ] Real User Monitoring (RUM) kurulumu


