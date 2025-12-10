# 📸 Resim Gereksinimleri ve Dosya İsimleri

Bu belge, İkitelli Turbocu websitesi için gereken tüm resimlerin listesini ve konumlarını içerir.

---

## 📁 Klasör Yapısı

```
src/assets/
├── hero/                    # Ana sayfa hero görselleri
│   ├── hero-poster.jpg      # Video poster (mevcut)
│   └── hero-bg.jpg          # Hero arka plan (opsiyonel)
├── hizmetler/               # Hizmet sayfaları hero görselleri
│   ├── turbo-tamiri-hero.jpg
│   ├── turbo-revizyonu-hero.jpg
│   ├── turbo-ariza-tespiti-hero.jpg
│   ├── turbo-temizligi-hero.jpg
│   ├── turbo-satisi-hero.jpg
│   └── turbo-servisi-hero.jpg
├── icons/                   # İkonlar (SVG - opsiyonel)
├── brands/                  # Marka logoları (SVG - opsiyonel)
├── map.jpg                  # Harita görseli
└── og-image.jpg             # Open Graph görseli (1200x630px)
```

---

## 🎯 Gerekli Resimler

### 1. Ana Sayfa Hero Görselleri

#### `hero/hero-poster.jpg`
- **Konum**: `src/assets/hero/hero-poster.jpg`
- **Kullanım**: Ana sayfa hero video poster (video yüklenene kadar)
- **Boyut**: 1920x1080px
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Turbo parçası veya turbo tamiri yapılan bir atölye görseli
- **Öneriler**: 
  - Net ve profesyonel görünüm
  - İkitelli Turbocu logosu/ismi eklenebilir
  - Turbo parçaları veya çalışma görseli

#### `hero/hero-bg.jpg` (Opsiyonel)
- **Konum**: `src/assets/hero/hero-bg.jpg`
- **Kullanım**: Hero bölümü arka plan (vignette efekti ile)
- **Boyut**: 1920x1080px
- **Format**: JPG (optimize edilmiş)
- **İçerik**: Atölye veya turbo ile ilgili genel görsel

---

### 2. Hizmet Sayfaları Hero Görselleri

Her hizmet sayfası için bir hero görseli gerekiyor. Tüm görseller aynı format ve stil olmalı.

#### `hizmetler/turbo-tamiri-hero.jpg`
- **Konum**: `src/assets/hizmetler/turbo-tamiri-hero.jpg`
- **Kullanım**: Turbo Tamiri sayfası hero bölümü
- **Boyut**: 1920x1080px (veya en az 1600x900px)
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Turbo tamiri yapılan bir görsel
  - Tamir edilen turbo parçası
  - Teknisyen turbo tamiri yaparken
  - Atölyede turbo tamiri işlemi

#### `hizmetler/turbo-revizyonu-hero.jpg`
- **Konum**: `src/assets/hizmetler/turbo-revizyonu-hero.jpg`
- **Kullanım**: Turbo Revizyonu sayfası hero bölümü
- **Boyut**: 1920x1080px (veya en az 1600x900px)
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Turbo revizyon işlemi
  - Revizyon edilmiş turbo
  - Turbo bileşenleri
  - Revizyon süreci görseli

#### `hizmetler/turbo-ariza-tespiti-hero.jpg`
- **Konum**: `src/assets/hizmetler/turbo-ariza-tespiti-hero.jpg`
- **Kullanım**: Turbo Arıza Tespiti sayfası hero bölümü
- **Boyut**: 1920x1080px (veya en az 1600x900px)
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Arıza tespiti görseli
  - Bilgisayarlı test cihazı ile test yapılırken
  - Teknisyen turbo arızasını tespit ederken
  - Diagnostik ekipmanlar

#### `hizmetler/turbo-temizligi-hero.jpg`
- **Konum**: `src/assets/hizmetler/turbo-temizligi-hero.jpg`
- **Kullanım**: Turbo Temizliği sayfası hero bölümü
- **Boyut**: 1920x1080px (veya en az 1600x900px)
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Turbo temizleme işlemi
  - Temizlenen turbo parçaları
  - Temizleme ekipmanları
  - Temizlik öncesi/sonrası görsel

#### `hizmetler/turbo-satisi-hero.jpg`
- **Konum**: `src/assets/hizmetler/turbo-satisi-hero.jpg`
- **Kullanım**: Turbo Satışı sayfası hero bölümü
- **Boyut**: 1920x1080px (veya en az 1600x900px)
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Yeni turbo satışı
  - Yeni turbo kutuları
  - Farklı marka turbolar
  - Stok görseli

#### `hizmetler/turbo-servisi-hero.jpg`
- **Konum**: `src/assets/hizmetler/turbo-servisi-hero.jpg`
- **Kullanım**: Turbo Servisi sayfası hero bölümü
- **Boyut**: 1920x1080px (veya en az 1600x900px)
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: Turbo servis işlemi
  - Araçtan turbo sökme/takma
  - Balans testi
  - Servis atölyesi görseli

---

### 3. Diğer Görseller

#### `map.jpg`
- **Konum**: `src/assets/map.jpg`
- **Kullanım**: İletişim bölümü harita placeholder'ı
- **Boyut**: 1200x600px
- **Format**: JPG veya WebP (optimize edilmiş)
- **İçerik**: 
  - Google Maps screenshot (İkitelli/Başakşehir lokasyonu)
  - Veya basit harita görseli
  - Lokasyon işaretli

#### `og-image.jpg`
- **Konum**: `src/assets/og-image.jpg`
- **Kullanım**: Open Graph görseli (sosyal medya paylaşımları)
- **Boyut**: 1200x630px (Tam boyut)
- **Format**: JPG veya PNG
- **İçerik**: 
  - İkitelli Turbocu logosu
  - "İkitelli Turbocu | Turbo Tamiri ve Revizyon" yazısı
  - Turbo görseli veya atölye görseli
  - Profesyonel tasarım

---

## 📋 Özet: Toplam Resim Sayısı

| Kategori | Adet | Durum |
|----------|------|-------|
| Ana Sayfa Hero | 1-2 | `hero-poster.jpg` (zorunlu), `hero-bg.jpg` (opsiyonel) |
| Hizmet Sayfaları Hero | 6 | Tümü zorunlu |
| Harita Görseli | 1 | `map.jpg` (zorunlu) |
| OG Image | 1 | `og-image.jpg` (zorunlu) |
| **TOPLAM** | **9-10** | |

---

## 🎨 Görsel Stil Rehberi

### Genel Kurallar
- **Kalite**: Yüksek çözünürlüklü, net görseller
- **Format**: JPG (fotoğraflar için) veya WebP (daha iyi sıkıştırma)
- **Optimizasyon**: Tüm görseller web için optimize edilmiş olmalı
- **Renk**: Gerçekçi renkler, doğal görünüm
- **Stil**: Profesyonel, temiz, modern

### Hero Görselleri İçin
- **Aspect Ratio**: 16:9 (1920x1080px)
- **Odak**: Merkez odaklı kompozisyon
- **Vignette**: Koyu kenarlar (CSS ile eklenecek)
- **Text Overlay**: Açık renkli metinler için koyu arka plan kısmı

### Görsel İçerik İpuçları
1. **Atölye Görselleri**: Temiz, profesyonel atölye ortamı
2. **Turbo Görselleri**: Yüksek kaliteli, net turbo parçaları
3. **Teknisyen Görselleri**: Profesyonel görünümlü teknisyenler
4. **Ekipman Görselleri**: Modern, temiz ekipmanlar

---

## 📝 Nasıl Ekleyeceksiniz?

### Adım 1: Klasörleri Oluşturun
```
src/assets/hizmetler/ klasörünü oluşturun
```

### Adım 2: Resimleri Ekleyin
1. Yukarıdaki dosya isimlerini kullanarak resimleri `src/assets/` klasörüne ekleyin
2. Dosya isimlerini tam olarak yukarıdaki gibi yazın (küçük/büyük harf duyarlı)

### Adım 3: Kod Güncellemesi
Resimler eklendikten sonra, ilgili `.astro` dosyalarındaki yorum satırlarını kaldırıp resim import'larını aktif edin:

**Örnek (turbo-tamiri.astro):**
```astro
// Bu satırı yorumdan çıkarın:
import heroImage from '../../assets/hizmetler/turbo-tamiri-hero.jpg';

// ServiceHero component'ine ekleyin:
<ServiceHero
  title="Turbo Tamiri"
  subtitle="..."
  imageSrc={heroImage}
  imageAlt="Turbo tamiri işlemi"
/>
```

---

## ✅ Kontrol Listesi

- [ ] `hero/hero-poster.jpg` eklendi
- [ ] `hero/hero-bg.jpg` eklendi (opsiyonel)
- [ ] `hizmetler/turbo-tamiri-hero.jpg` eklendi
- [ ] `hizmetler/turbo-revizyonu-hero.jpg` eklendi
- [ ] `hizmetler/turbo-ariza-tespiti-hero.jpg` eklendi
- [ ] `hizmetler/turbo-temizligi-hero.jpg` eklendi
- [ ] `hizmetler/turbo-satisi-hero.jpg` eklendi
- [ ] `hizmetler/turbo-servisi-hero.jpg` eklendi
- [ ] `map.jpg` eklendi
- [ ] `og-image.jpg` eklendi

---

## 💡 İpuçları

1. **Stok Fotoğrafları**: Unsplash, Pexels gibi sitelerden ücretsiz turbo/otomotiv görselleri bulabilirsiniz
2. **Kendi Fotoğraflarınız**: Kendi atölyenizden çektiğiniz fotoğraflar daha otantik olur
3. **Optimizasyon**: Görselleri eklemeden önce TinyPNG veya Squoosh ile optimize edin
4. **Aspect Ratio**: Hero görselleri 16:9 oranında olmalı (1920x1080, 1600x900, vb.)

---

## 📞 Sorular?

Resim ekleme konusunda sorunuz varsa veya görselleri ekledikten sonra test etmek isterseniz, `npm run dev` komutu ile local development server'ı çalıştırın ve sayfaları kontrol edin.



