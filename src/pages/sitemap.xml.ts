import type { APIRoute } from 'astro';

const baseUrl = 'https://ikitelliturbocu.com';

const staticPages = [
  '',
  '/hakkimizda',
  '/iletisim',
  '/hizmetler',
  '/sss',
  '/gizlilik-politikasi',
  '/kullanim-sartlari',
  '/hizmetler/turbo-tamiri',
  '/hizmetler/turbo-revizyonu',
  '/hizmetler/turbo-satisi',
  '/hizmetler/turbo-servisi',
  '/hizmetler/turbo-temizligi',
  '/hizmetler/turbo-ariza-tespiti',
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticPages
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};


