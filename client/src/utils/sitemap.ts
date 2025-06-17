
export const generateSitemap = () => {
  const baseUrl = 'https://brandweave.ai';
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/why-it-matters', priority: '0.9', changefreq: 'monthly' },
    { url: '/ai-audit', priority: '0.9', changefreq: 'monthly' },
    { url: '/about-us', priority: '0.7', changefreq: 'monthly' },
    { url: '/pricing-contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
};
