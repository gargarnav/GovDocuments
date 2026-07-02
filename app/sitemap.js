import serviceContent from "@/data/serviceContent";
import { guidePages } from "@/data/guidePages";

const BASE = "https://bharatapply.online";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/guides`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/document-finder`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/id-proof-comparison`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/updates`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE}/editorial-process`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ].map((r) => ({ ...r, lastModified: now }));

  const serviceRoutes = Object.entries(serviceContent).map(([slug, data]) => ({
    url: `${BASE}/${slug}`,
    lastModified: data.dateModified ? new Date(data.dateModified) : now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideRoutes = guidePages.map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: g.dateModified ? new Date(g.dateModified) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...guideRoutes];
}
