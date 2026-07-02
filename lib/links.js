import { guidePages } from "@/data/guidePages";

// Short, human-friendly labels for the services that have full guide pages.
export const SERVICE_LABELS = {
  "aadhaar-card": "Aadhaar Card",
  "pan-card": "PAN Card",
  passport: "Passport",
  "driving-licence": "Driving License",
  "voter-id": "Voter ID",
  "birth-certificate": "Birth Certificate",
  "income-certificate": "Income Certificate",
  "caste-certificate": "Caste Certificate",
  "domicile-certificate": "Domicile Certificate",
  "ration-card": "Ration Card",
};

// Keyword used to find long-tail guide pages related to each service.
const SERVICE_TERMS = {
  "aadhaar-card": "aadhaar",
  "pan-card": "pan-card",
  passport: "passport",
  "driving-licence": "driving-license",
  "voter-id": "voter-id",
  "birth-certificate": "birth-certificate",
  "income-certificate": "income-certificate",
  "caste-certificate": "caste",
  "domicile-certificate": "domicile",
  "ration-card": "ration",
};

export const SERVICE_SLUGS = Object.keys(SERVICE_LABELS);

// Long-tail guides that relate to a given service slug.
export function getRelatedGuides(serviceId, limit = 4) {
  const term = SERVICE_TERMS[serviceId];
  if (!term) return [];
  return guidePages
    .filter((g) => g.slug.includes(term))
    .slice(0, limit)
    .map((g) => ({ href: `/guides/${g.slug}`, label: g.h1 }));
}

// A few sibling service pages for internal linking.
export function getServiceSiblings(serviceId, limit = 4) {
  return SERVICE_SLUGS.filter((s) => s !== serviceId)
    .slice(0, limit)
    .map((s) => ({ href: `/${s}`, label: SERVICE_LABELS[s] }));
}
