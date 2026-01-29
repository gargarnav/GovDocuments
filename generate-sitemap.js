/**
 * Sitemap Generator for Services & Guides
 * Run: node generate-sitemap.js
 * This generates sitemap-services.xml and sitemap-guides.xml dynamically
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import services and guides data
const servicesModule = await import('./src/data/services.js');
const guidesModule = await import('./src/data/guidePages.js');
const { services } = servicesModule;
const { guidePages } = guidesModule;

const generateServicesSitemap = () => {
  const baseUrl = 'https://bharatapply.online';
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  services.forEach(service => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/?service=${encodeURIComponent(service.id)}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += '</urlset>';
  
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-services.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✓ Generated ${services.length} service URLs in sitemap-services.xml`);
};

const generateGuidesSitemap = () => {
  const baseUrl = 'https://bharatapply.online';
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add main guides index page
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/guides</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
  
  // Add individual guide pages
  guidePages.forEach(guide => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/guides/${guide.slug}</loc>\n`;
    xml += `    <lastmod>${guide.dateModified}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += '</urlset>';
  
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-guides.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✓ Generated ${guidePages.length + 1} guide URLs in sitemap-guides.xml`);
};

generateServicesSitemap();
generateGuidesSitemap();
