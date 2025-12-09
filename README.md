# İkitelli Turbocu - Astro 5 Website

High-performance Astro 5 website for a turbocharger repair shop in Istanbul, Turkey.

## 🚀 Tech Stack

- **Astro 5** - Static site generator
- **TypeScript** - Type safety
- **React** - Interactive components (islands)
- **Tailwind CSS v4** - Utility-first CSS
- **Cloudflare Pages** - Deployment target

## 📁 Project Structure

```
ikitelli-turbocu/
├── public/
│   └── images/          # Static assets (videos)
├── src/
│   ├── assets/          # Optimized images (processed by Astro)
│   │   ├── hero/
│   │   ├── icons/
│   │   └── brands/
│   ├── components/      # Astro & React components
│   ├── layouts/         # Layout components
│   ├── pages/           # Pages (file-based routing)
│   └── styles/          # Global styles
└── astro.config.mjs     # Astro configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321`

### Build

```bash
npm run build
```

Build output: `dist/`

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment (Cloudflare Pages)

1. Connect your Git repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `18` or higher
3. Add environment variables:
   - **PUBLIC_GTM_ID**: Your Google Tag Manager Container ID (e.g., `GTM-XXXXXXX`)
4. Deploy!

## 📊 Google Tag Manager (GTM) Setup

### Configuration

GTM is integrated in a non-blocking, performance-safe way:

1. Set `PUBLIC_GTM_ID` environment variable in Cloudflare Pages (or `.env` for local development)
2. GTM scripts load asynchronously and don't block page rendering
3. Components are located in:
   - `src/components/GTMHead.astro` - Head script
   - `src/components/GTMBody.astro` - Noscript fallback

### Recommended GTM Tags

Configure these tags in your GTM container:

- **Google Analytics 4** - Page views and events
- **Google Ads Conversion Tracking** - Conversion pixels
- **Phone Click Tracking** - Track `tel:` link clicks
- **WhatsApp Click Tracking** - Track WhatsApp button clicks
- **Scroll Depth Tracking** - User engagement metrics

### Event Tracking Examples

The following elements have trackable interactions:
- Phone number links: `tel:+905326584722`
- WhatsApp links: `https://wa.me/905326584722`
- Service detail buttons
- FAQ accordion interactions

Use GTM's "Click" trigger with appropriate selectors to track these events.

## 🎨 Design System

### Colors

- **Primary**: `#FFC107` (Golden Yellow)
- **WhatsApp Green**: `#25D366`
- **Dark Background**: `#1a1a1a`
- **Dark Light**: `#2d2d2d`

### Typography

System font stack for maximum performance:
```css
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

## 📸 Image Assets

### Required Images

Add the following images to `src/assets/`:

1. **Hero Poster** (`hero/hero-poster.jpg`) - 1920x1080px
2. **Map Image** (`map.jpg`) - 1200x600px
3. **OG Image** (`og-image.jpg`) - 1200x630px

### Video

Add hero video to `public/images/hero-turbo.mp4`

See `src/assets/README.md` for complete image requirements.

## ⚡ Performance Targets

- **PageSpeed Insights**: 95+ (mobile & desktop)
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Optimization Features

- ✅ System fonts (no external font loading)
- ✅ Lazy loaded images
- ✅ Astro Image optimization (WebP/AVIF)
- ✅ Minimal JavaScript (React islands only)
- ✅ Video preload="none" (no LCP blocking)
- ✅ Deferred scripts

## 📱 Mobile Features

- Sticky mobile contact bar (bottom)
- Responsive navigation with hamburger menu
- Mobile-first design
- Touch-optimized buttons

## 🔍 SEO Features

- Semantic HTML
- Meta tags (Open Graph, Twitter)
- JSON-LD structured data (LocalBusiness)
- Canonical URLs
- Proper heading hierarchy

## 📞 Contact Information

- **Phone**: +90 532 658 47 22
- **WhatsApp**: https://wa.me/905326584722
- **Address**: Güngören-Bağcılar Sanayi Sitesi 15. Blok No: 13, Başakşehir / İstanbul

## 📝 License

All rights reserved. © 2024 İkitelli Turbocu
