/**
 * SEO Meta Helper
 * Generate consistent meta tags and page metadata
 */

export const pageMetadata = {
  home: {
    title: "Indian Government Documents Guide | BharatApply",
    description: "Find exact requirements for Aadhaar, PAN, Passport, Driving License, and 50+ government documents in India. Complete checklists and file specifications.",
    canonicalPath: "/",
    ogImage: "https://bharatapply.online/og-image.svg",
    type: "website",
    keywords: "government documents India, Aadhaar, PAN card, passport, driving license requirements"
  },
  about: {
    title: "About BharatApply | Government Document Guide",
    description: "Learn how BharatApply helps citizens prepare for Indian government document applications with accurate checklists and file requirements.",
    canonicalPath: "/about",
    ogImage: "https://bharatapply.online/og-image.svg",
    type: "website",
    keywords: "about BharatApply, government document guide India"
  }
};

export const getServiceMetadata = (service) => {
  const titleKeywords = service.title.toLowerCase();
  return {
    title: `${service.title} Requirements & Checklist | BharatApply`,
    description: `${service.title}: Get exact document requirements, file specifications, and step-by-step checklist for ${titleKeywords} application in India.`,
    canonicalPath: `/?service=${service.id}`,
    ogImage: "https://bharatapply.online/og-image.svg",
    type: "article",
    keywords: `${service.title}, ${service.title} requirements, ${service.title} application, documents needed for ${service.title}`
  };
};

export const lastUpdatedDate = new Date().toISOString().split('T')[0];

export const structuredDataHelper = {
  formatDate: (date) => new Date(date).toISOString().split('T')[0],
  generateUrl: (path) => `https://bharatapply.online${path}`,
  sanitizeText: (text) => text.replace(/[<>&"']/g, char => {
    const entities = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' };
    return entities[char];
  })
};
