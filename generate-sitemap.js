/**
 * Sitemap Generator for Services & Guides
 * Run: node generate-sitemap.js
 * Uses regex parsing to avoid EPERM/ESM issues during build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://bharatapply.online';
const today = new Date().toISOString().split('T')[0];

function extractData(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const items = [];

    // Naive but effective regex for this specific file structure
    // Matches objects { ... } roughly
    // We'll just look for blocks that look like objects and contain slug/id

    // Strategy: Split by "{" to get object chunks, then regex inside
    // This assumes specific formatting, but file structure is consistent
    const chunks = content.split(/{\s*\n/);

    chunks.forEach(chunk => {
      const slugMatch = chunk.match(/slug:\s*['"]([^'"]+)['"]/);
      const idMatch = chunk.match(/id:\s*['"]([^'"]+)['"]/);
      const dateMatch = chunk.match(/dateModified:\s*['"]([^'"]+)['"]/);

      if (slugMatch || idMatch) {
        items.push({
          slug: slugMatch ? slugMatch[1] : null,
          id: idMatch ? idMatch[1] : null,
          dateModified: dateMatch ? dateMatch[1] : today
        });
      }
    });

    return items;
  } catch (e) {
    console.warn(`Could not parse ${filePath}:`, e);
    return [];
  }
}

const generateServicesSitemap = () => {
  const services = extractData(path.join(__dirname, 'src/data/services.js'));

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  services.forEach(service => {
    // Only verify valid service entries
    if (!service.id && !service.slug) return;

    xml += `  <url>\n`;
    const url = service.slug ? `${baseUrl}/${service.slug}` : `${baseUrl}/?service=${encodeURIComponent(service.id)}`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += '</urlset>';
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap-services.xml'), xml);
  console.log(`✓ Generated service URLs in sitemap-services.xml`);
};

const generateGuidesSitemap = () => {
  const guides = extractData(path.join(__dirname, 'src/data/guidePages.js'));

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add main guides index page
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/guides</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;

  guides.forEach(guide => {
    if (!guide.slug) return;

    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/guides/${guide.slug}</loc>\n`;
    xml += `    <lastmod>${guide.dateModified || today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += '</urlset>';
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap-guides.xml'), xml);
  console.log(`✓ Generated guide URLs in sitemap-guides.xml`);
};

generateServicesSitemap();
generateGuidesSitemap();
