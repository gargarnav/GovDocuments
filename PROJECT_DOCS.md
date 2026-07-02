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
  [serviceId]/page.jsx   Service guide pages (SSG, 10 pages)
  guides/page.jsx        Guides index
  guides/[slug]/page.jsx Long-tail guide pages (SSG, 18 pages)
  about/ contact/ privacy-policy/ disclaimer/   Static pages
  sitemap.js             Dynamic sitemap.xml (all routes)
  robots.js              robots.txt
  not-found.jsx          Custom 404
components/              React components (Header, Footer, HomeClient, etc.)
context/ThemeContext.jsx Light/dark theme (client)
data/                    Content data (services, serviceContent, guidePages)
lib/                     seoSchemas, pageMetadata, internal-link helpers
styles/                  All CSS (imported once in the root layout)
public/                  favicon.svg, og-image.svg, ads.txt
```

Content is data-driven. To add or edit a guide, edit the objects in
`data/serviceContent.js` (full service pages) or `data/guidePages.js` (long-tail
guides). Static params and the sitemap update automatically from that data.

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
| Only 10 of 21 services had real pages; others were noindex query-param modals | Home shows all services; the 10 full pages are real static URLs. Query-param routes removed |
| Thin trust signals | Editorial byline, "checked against official portals", updated dates, stronger About/Privacy/Disclaimer |
| No genuine utility | Interactive, printable, persistent "Documents to Prepare" checklist on every guide, plus related-guide cross-linking |

### Value features added
- **Document checklist tool:** tick off documents as you gather them; progress is
  saved per device and the list is print friendly.
- **Editorial byline + last-updated date** on every guide (E-E-A-T).
- **Related guides / other services** cross-linking blocks.
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
