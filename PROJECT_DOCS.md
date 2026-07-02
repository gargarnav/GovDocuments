# BharatApply: Project Documentation

This single document replaces the previous scattered notes (SEO summaries, guide
implementation notes, deployment notes, and AdSense prompts). It is the one place
to understand what the site is, how it is built, and how to run and ship it.

---

## 1. What this is

**BharatApply** is a free, independent informational guide to the documents
required for Indian government services (Aadhaar, PAN, Passport, Driving License,
Voter ID, and various certificates). It lists exact document checklists, file
size and format rules, fees, processing times, and common rejection reasons.

It is **not** affiliated with the Government of India. Every guide links to the
official government portal for final confirmation.

---

## 2. Tech stack

The site was migrated from a client-rendered Vite + React Router single page app
to **Next.js (App Router)** so that every URL is prerendered to real static HTML.
This was done specifically to satisfy Google AdSense and to improve SEO.

- **Framework:** Next.js 15 (App Router, static generation)
- **UI:** React 19
- **Icons:** lucide-react
- **Analytics:** Google Analytics 4 (via `next/script`) and Vercel Analytics
- **Styling:** plain CSS with CSS variables (in `styles/`)
- **Hosting:** Vercel (framework auto-detected; no `vercel.json` needed)

---

## 3. Project structure

```
app/                     App Router routes
  layout.jsx             Root layout: metadata, GA + AdSense scripts, theme, Header
  page.jsx               Home (server) -> renders HomeClient
  [serviceId]/page.jsx   Service guide pages (SSG, 19 pages)
  guides/page.jsx        Guides index
  guides/[slug]/page.jsx Long-tail guide pages (SSG, 18 pages)
  document-finder/       Document Proof Finder tool
  id-proof-comparison/   Aadhaar vs PAN vs Voter ID vs DL comparison page
  updates/               Recently Updated log (pulls dateModified from data)
  editorial-process/     Editorial process & sources (E-E-A-T page)
  about/ contact/ privacy-policy/ disclaimer/   Static pages
  sitemap.js             Dynamic sitemap.xml (all routes)
  robots.js              robots.txt
  not-found.jsx          Custom 404
components/              React components (Header, Footer, HomeClient, etc.)
context/ThemeContext.jsx Light/dark theme (client)
data/                    Content data (services, serviceContent, guidePages)
lib/                     seoSchemas, pageMetadata, links, proofFinder
styles/                  All CSS (imported once in the root layout)
public/                  favicon.svg, og-image.svg, ads.txt
```

Content is data-driven. To add or edit a guide, edit the objects in
`data/serviceContent.js` (full service pages) or `data/guidePages.js` (long-tail
guides). Static params, the sitemap, and the Recently Updated page all update
automatically from that data. Every service in `data/services.js` now has a
`slug` and a matching full-page entry in `serviceContent.js`; there is no
modal-only fallback left.

---

## 4. Running the project

```bash
npm install
npm run dev      # local dev server at http://localhost:3000
npm run build    # production build (prerenders all pages)
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

---

## 5. AdSense readiness: what was wrong and what changed

The site was repeatedly rejected with "Low value content" and "Google-served ads
on screens without publisher content." The root causes and fixes:

| Problem (before) | Fix (now) |
| --- | --- |
| Client-rendered SPA: every URL served an empty `<div id="root">` to crawlers | Next.js static generation: every URL ships full HTML (service pages carry 2,000+ words) |
| Ad units used a fake slot id (`1234567890`) and rendered empty dashed placeholder boxes | All ad units removed. Only the AdSense loader script remains for verification |
| Only 10 of 21 services had real pages; the other 11 were modal-only, non-indexable | All 21 services (19 unique slugs) now have full static pages with checklists, FAQs, fees, and sources |
| Thin trust signals | Editorial byline, "checked against official portals", real per-page last-updated dates, an Editorial Process page, and a Recently Updated log |
| No genuine utility | Printable "Documents to Prepare" checklist on every guide, a Document Proof Finder tool, and an ID-proof comparison page |

### Value features added
- **Document checklist tool:** tick off documents as you gather them; progress is
  saved per device and the list is print friendly.
- **Document Proof Finder** (`/document-finder`): select the documents you
  already hold and see which of the 19 services you are ready to apply for,
  matched against each service's actual requirement options in `data/services.js`.
- **ID Proof Comparison** (`/id-proof-comparison`): Aadhaar vs PAN vs Voter ID vs
  Driving License vs Passport, compared as identity/address/DOB/travel proof.
- **Editorial byline + real last-updated date** on every guide (E-E-A-T), sourced
  from `dateModified` on each data entry, not the build timestamp.
- **Editorial Process & Sources page** (`/editorial-process`): explains the
  research/review method and lists the official portal used per category.
- **Recently Updated page** (`/updates`): every service and guide sorted by
  `dateModified`, a freshness signal and internal-linking hub.
- **Related guides / other services** cross-linking blocks, plus visible
  breadcrumb navigation on service and guide pages (previously schema-only).
- **Working contact form** that opens the user's mail client (no fake backend).

---

## 6. After AdSense approval: turning ads back on

Ads are intentionally OFF until the account is approved. Once approved, choose one:

1. **Auto Ads (simplest):** enable Auto ads in the AdSense dashboard. The loader
   script is already in `app/layout.jsx`, so nothing else is needed.
2. **Manual units:** create real ad units in AdSense, then add an `<ins class="adsbygoogle">`
   component using the **real** `data-ad-slot` values (never placeholders), and
   place it between content sections. Keep at least a screenful of real content
   above any ad.

Do not reintroduce empty ad boxes or placeholder slot ids; that is what caused
the original policy violation.

---

## 7. Key identifiers

- Production domain: `https://bharatapply.online`
- AdSense publisher id: `ca-pub-8431329527460254` (also in `public/ads.txt`)
- GA4 measurement id: `G-4S2264NZPY`

---

## 8. Pre-launch checklist

- [ ] `npm run build` passes
- [ ] Deploy to Vercel and confirm each URL returns real HTML (view source)
- [ ] Submit `https://bharatapply.online/sitemap.xml` in Google Search Console
- [ ] Request an AdSense review once content is live and crawlable
- [ ] After approval, enable Auto Ads or add real manual ad units
