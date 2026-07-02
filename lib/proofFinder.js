import { services } from "@/data/services";

// The common documents a person is likely to already hold. Each has a set of
// keywords used to match against the free-text "options" lists in services.js.
export const CORE_DOCUMENTS = [
  { id: "aadhaar", label: "Aadhaar Card", keywords: ["aadhaar"] },
  { id: "pan", label: "PAN Card", keywords: ["pan card", "pan"] },
  { id: "voter", label: "Voter ID", keywords: ["voter"] },
  { id: "passport", label: "Passport", keywords: ["passport"] },
  { id: "driving-license", label: "Driving License", keywords: ["driving licen"] },
  { id: "birth-cert", label: "Birth Certificate", keywords: ["birth certificate"] },
  { id: "ration-card", label: "Ration Card", keywords: ["ration card"] },
  {
    id: "bank-proof",
    label: "Bank Statement / Passbook",
    keywords: ["bank statement", "bank passbook", "passbook", "bank proof", "bank account"],
  },
  {
    id: "utility-bill",
    label: "Utility Bill (Electricity/Water/Phone)",
    keywords: ["electricity bill", "water bill", "utility bill", "telephone", "landline"],
  },
  {
    id: "marksheet",
    label: "10th/12th Marksheet",
    keywords: ["marksheet", "matriculation", "sslc"],
  },
  { id: "income-cert", label: "Income Certificate", keywords: ["income certificate"] },
];

// True if `text` contains `keyword` as a whole word (single-token keywords)
// or as a substring (multi-word phrases, which are specific enough to be safe).
function containsKeyword(text, keyword) {
  if (keyword.includes(" ")) return text.includes(keyword);
  return new RegExp(`\\b${keyword}\\b`, "i").test(text);
}

function keywordsFor(selectedIds) {
  return selectedIds.flatMap(
    (id) => CORE_DOCUMENTS.find((d) => d.id === id)?.keywords || []
  );
}

// Evaluate every service against the documents the user says they already have.
export function evaluateServices(selectedIds) {
  const selectedKeywords = keywordsFor(selectedIds);
  // De-duplicate services that share a slug (e.g. Aadhaar new + update).
  const seenSlugs = new Set();

  const results = services
    .filter((service) => {
      if (seenSlugs.has(service.slug)) return false;
      seenSlugs.add(service.slug);
      return true;
    })
    .map((service) => {
      const reqWithOptions = service.requirements.filter(
        (r) => r.options && r.options.length
      );
      const reqWithoutOptions = service.requirements.filter(
        (r) => !r.options || !r.options.length
      );

      const missing = [];
      let satisfied = 0;
      reqWithOptions.forEach((req) => {
        const isSatisfied = req.options.some((opt) =>
          selectedKeywords.some((kw) => containsKeyword(opt.toLowerCase(), kw))
        );
        if (isSatisfied) satisfied++;
        else missing.push(req.type);
      });

      const total = reqWithOptions.length;
      let status;
      if (total === 0) status = "unassessable";
      else if (satisfied === total) status = "ready";
      else if (satisfied > 0) status = "partial";
      else status = "not-ready";

      return {
        id: service.id,
        slug: service.slug,
        title: service.title,
        description: service.description,
        status,
        satisfied,
        total,
        missing,
        situational: reqWithoutOptions.map((r) => r.type),
      };
    });

  const order = { ready: 0, partial: 1, "not-ready": 2, unassessable: 3 };
  return results.sort((a, b) => {
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return (b.satisfied / (b.total || 1)) - (a.satisfied / (a.total || 1));
  });
}
