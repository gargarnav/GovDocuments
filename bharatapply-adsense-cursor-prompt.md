# Cursor Prompt: Fix bharatapply.online to Pass Google AdSense Review

---

## CONTEXT & GOAL

You are working on a website called **bharatapply.online** — an informational guide that helps Indian citizens understand document requirements for government services like Aadhaar, PAN Card, Passport, Driving Licence, Voter ID, and certificates (income, birth, caste, etc.).

The site has been **rejected by Google AdSense** for "Low value content." Your job is to rebuild and expand the site so it passes AdSense's content quality review. This means making the site genuinely useful, content-rich, technically sound, and fully policy-compliant.

The current site:
- Is a JavaScript-rendered SPA (Single Page Application)
- Shows document checklists dynamically based on `?search=` query parameters
- Has very little static, crawlable HTML content
- Is missing required pages (Privacy Policy, Contact, Disclaimer)
- Has no blog or long-form content section
- Has no unique URLs per document type

---

## PART 1: TECHNICAL ARCHITECTURE CHANGES

### 1.1 — Switch from Query Parameters to Proper Static Routes

**Current broken pattern:**
```
/?search=Aadhaar
/?search=PAN
/?search=Passport
```

**Required new pattern (one dedicated page per service):**
```
/aadhaar-card
/pan-card
/passport
/driving-licence
/voter-id
/birth-certificate
/income-certificate
/caste-certificate
/domicile-certificate
/ration-card
```

Each of these must be a **real, statically renderable route** — not a JS-only virtual route. If you are using React or Next.js, use `getStaticProps` + `getStaticPaths` or file-based routing. If using plain HTML, create actual `.html` files for each. The goal is that when Google's crawler visits `/aadhaar-card`, it sees fully rendered HTML content in the page source — not an empty `<div id="root">`.

### 1.2 — Implement Server-Side Rendering (SSR) or Static Site Generation (SSG)

If the project uses **Next.js**: convert all document pages to use `getStaticProps`. If it uses **React with Vite or CRA**: either migrate to Next.js, or use a static pre-rendering tool like `react-snap` or `vite-plugin-ssr`.

If the project is plain HTML/JS: ensure all content is written directly into the HTML, not injected after page load via JavaScript.

**Verify this works** by viewing the page source (`Ctrl+U` in browser) of any document page and confirming the article text is visible in the raw HTML source — not just in the rendered DOM.

### 1.3 — Add a `sitemap.xml`

Generate a sitemap at `/sitemap.xml` that lists every URL on the site. Include:
- Homepage
- Every document service page (at least 10)
- Every blog/guide article (at least 15)
- All static pages (About, Contact, Privacy Policy, Disclaimer)

Format:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bharatapply.online/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bharatapply.online/aadhaar-card</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ...all other pages -->
</urlset>
```

### 1.4 — Add a `robots.txt`

Create `/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://bharatapply.online/sitemap.xml
```

### 1.5 — Add Unique Meta Tags Per Page

Every page must have unique, descriptive meta tags in the `<head>`. Do not use the same title/description on multiple pages.

Example for the Aadhaar page:
```html
<title>Aadhaar Card Documents Required – Complete Checklist | BharatApply</title>
<meta name="description" content="Find out exactly which documents you need to apply for or update your Aadhaar card. Includes ID proof, address proof, and date of birth documents with file format requirements." />
<link rel="canonical" href="https://bharatapply.online/aadhaar-card" />
```

---

## PART 2: CONTENT — REQUIRED PAGES TO CREATE

### 2.1 — Document Service Pages (10 pages, ~1000 words each)

For **each** of the following services, create a dedicated page with the structure below. Do not make these pages thin — each must be genuinely helpful and thorough.

**Services to cover:**
1. Aadhaar Card
2. PAN Card
3. Passport
4. Driving Licence
5. Voter ID (EPIC)
6. Birth Certificate
7. Income Certificate
8. Caste Certificate
9. Domicile / Residence Certificate
10. Ration Card

**Required structure for each service page:**

```
H1: [Service Name] – Documents Required & Application Guide

[Intro paragraph: 100–150 words explaining what the document is, who needs it, 
and why having the right documents matters before applying]

H2: What is [Service Name]?
[2–3 paragraphs explaining the document, its importance, who issues it, 
and what it's used for in daily life]

H2: Documents Required for [Service Name]
H3: Proof of Identity (any one of the following)
[List with description of each accepted document]

H3: Proof of Address (any one of the following)
[List with description of each accepted document]

H3: Proof of Date of Birth (any one of the following)
[List with description]

H3: Additional Documents (if applicable)
[Passport photos, fees, specific forms, etc.]

H2: File Format & Upload Requirements
[Specific details: JPEG/PDF requirements, file size limits in KB, 
pixel dimensions where applicable, how to compress a file if needed]

H2: Step-by-Step Application Process
[Numbered steps: where to go, which portal to use, what to fill out, 
how to submit — written in plain language]

H2: Common Mistakes That Cause Rejection
[5–7 specific mistakes: expired documents, wrong file format, 
name mismatch between documents, etc. Each with a brief explanation]

H2: Processing Time & Fees
[Current government fees, typical processing timeline, 
how to track application status]

H2: Frequently Asked Questions
[Minimum 6 Q&A pairs specific to this service]

H2: Important Links
[Links to official .gov.in or .nic.in portals — clearly labeled as external official sources]
```

**Minimum word count per page: 900 words.** The content must be original, written in clear English, and feel like it was written by someone with real knowledge of the Indian government document process.

---

### 2.2 — Blog / Guide Section (15 articles, ~800 words each)

Create a `/blog` or `/guides` section. These articles should target informational search queries that real users type into Google. Write all 15 of the following articles:

1. **"How to Apply for PAN Card Online in 2025 – Step by Step"**
2. **"Lost Your Aadhaar Card? Here's Exactly What to Do"**
3. **"Aadhaar vs Voter ID: Which Document to Use and When"**
4. **"How to Link Aadhaar to PAN Card Online (2025 Guide)"**
5. **"How to Update Your Address on Aadhaar Card Online"**
6. **"How to Apply for a Fresh Passport in India – First Timer's Guide"**
7. **"Tatkal Passport vs Normal Passport: Differences, Cost, and Processing Time"**
8. **"How to Get a Driving Licence in India – State-by-State Guide"**
9. **"What Documents Do You Need to Open a Bank Account in India?"**
10. **"How to Get an Income Certificate – Process Explained by State"**
11. **"Voter ID Registration: How to Apply Online for EPIC Card"**
12. **"Birth Certificate Application: Hospital vs Municipal Corporation – What's the Difference?"**
13. **"How to Change Name on Government Documents After Marriage"**
14. **"DigiLocker vs Physical Documents: What's Accepted Where in India"**
15. **"10 Documents Every Indian Citizen Should Have and Keep Updated"**

**Required structure for each blog article:**

```
H1: [Article Title]

[Meta description: write this as a comment in the code or in frontmatter]

[Introduction paragraph: hook the reader, explain what the article covers, 
and why it matters — 80–120 words]

H2: [Section 1]
[200–250 words]

H2: [Section 2]
[200–250 words]

H2: [Section 3]
[200–250 words]

H2: Conclusion / Key Takeaways
[100 words summarizing the main points]

[Author note: "This guide is for informational purposes. 
For official applications, always use the relevant .gov.in portal."]
```

---

### 2.3 — Required Static Pages

#### `/about`
Write 300–400 words. Include:
- What BharatApply is and what it does
- Who it's for (Indian citizens applying for government documents)
- What it does NOT do (not affiliated with government, not a service provider)
- A statement about content accuracy and update frequency

#### `/contact`
Include:
- A working contact form (Name, Email, Message fields) OR a clearly displayed contact email address
- A note about response time
- A statement: "We do not assist with actual applications or government portals."

#### `/privacy-policy`
This page is **mandatory for AdSense**. It must include the following sections:

```
1. Introduction — what this policy covers
2. Information We Collect — (state clearly if you collect none, or list what you do collect)
3. How We Use Information — 
4. Cookies — must explicitly mention that Google AdSense uses cookies to serve ads, 
   and that users can opt out via Google's Ad Settings
5. Third-Party Advertising — specifically mention Google AdSense by name and 
   link to Google's privacy policy
6. Data Retention
7. Your Rights
8. Contact Information
9. Last Updated Date
```

**Critical:** The privacy policy MUST mention Google AdSense and cookies. Without this, AdSense will not approve the account.

#### `/disclaimer`
Include:
- Statement that BharatApply is not affiliated with, endorsed by, or connected to any Indian government agency
- Statement that all information is for guidance only and may not reflect the most current government requirements
- Instruction to always verify information on official .gov.in portals
- Limitation of liability statement

---

## PART 3: SITE STRUCTURE & NAVIGATION

### 3.1 — Header Navigation
The header must include links to:
- Home
- Document Guides (dropdown or separate page listing all 10 services)
- Blog / Guides
- About
- Contact

### 3.2 — Footer
The footer must include links to:
- Privacy Policy
- Disclaimer
- Contact
- Sitemap (link to /sitemap.xml)
- A brief one-line description: "BharatApply is an independent informational guide. Not affiliated with any government agency."

### 3.3 — Internal Linking
- Each document service page should link to at least 3 related blog articles
- Each blog article should link to at least 2 relevant document service pages
- The homepage should link to all 10 document service pages and the 5 most recent blog articles
- Add breadcrumbs to all service pages and blog articles

### 3.4 — Homepage Content
The homepage must not be empty or minimal. It should include:
- A clear H1 headline explaining what the site does
- A 150–200 word intro paragraph
- A grid or card layout linking to all 10 document service pages (with a 1–2 sentence description for each)
- A "Latest Guides" section showing the 3 most recent blog articles with titles and excerpts
- A "How It Works" section with 3 steps (e.g., Search → Read → Apply)
- A brief About section (2–3 sentences) with a link to the full About page

---

## PART 4: TECHNICAL SEO & PERFORMANCE

### 4.1 — Image Optimization
- All images must have descriptive `alt` text (not just "image" or empty)
- Use WebP format where possible
- Compress all images — no image should be larger than 150KB
- Use `loading="lazy"` on all images below the fold

### 4.2 — Page Speed
- Aim for a Google PageSpeed score of 80+ on mobile
- Defer non-critical JavaScript
- Preload critical fonts
- Avoid render-blocking resources

### 4.3 — Structured Data (Schema Markup)
Add JSON-LD schema markup to pages:

For blog articles:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Article description",
  "author": { "@type": "Organization", "name": "BharatApply" },
  "publisher": { "@type": "Organization", "name": "BharatApply" },
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-01"
}
```

For the homepage:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BharatApply",
  "url": "https://bharatapply.online",
  "description": "A guide to Indian government document requirements"
}
```

### 4.4 — No Broken Links
Run a broken link check on the entire site before requesting AdSense review. Every internal link must resolve to a real page with a 200 status code.

---

## PART 5: CONTENT QUALITY RULES

These rules apply to ALL content written for this site. Violating them is the reason AdSense rejected the site.

1. **No AI-sounding filler.** No phrases like "In today's fast-paced world" or "Navigating the complexities of." Write plainly and directly.

2. **No copied content.** Do not copy text from government websites, NIC portals, or other guides. All content must be original.

3. **Specificity over vagueness.** Instead of "you will need identity proof," write "you will need any one of the following: Aadhaar card, Voter ID, PAN card, Passport, or driving licence."

4. **Every page must solve a real problem.** Ask yourself: "If someone Googled this and landed here, would they get a genuinely useful answer?" If not, add more detail.

5. **No doorway pages.** Don't create multiple nearly-identical pages for slight variations of the same service.

6. **Use real dates.** Where processing times or fees are mentioned, note when the information was last verified (e.g., "As of January 2025") and acknowledge it may change.

7. **Accessible language.** Write for someone who is educated but not an expert in bureaucratic processes. Avoid jargon without explanation.

---

## PART 6: PRE-REVIEW CHECKLIST

Before checking "I confirm I have fixed the issues" and clicking Request Review in AdSense, verify every item:

**Content:**
- [ ] At least 10 document service pages, each 900+ words
- [ ] At least 15 blog articles, each 800+ words
- [ ] All content is original and not copied
- [ ] Every page has a unique H1, meta title, and meta description

**Required Pages:**
- [ ] `/about` — 300+ words
- [ ] `/contact` — working contact method
- [ ] `/privacy-policy` — mentions Google AdSense and cookies explicitly
- [ ] `/disclaimer` — includes government non-affiliation statement

**Technical:**
- [ ] Every document service has its own unique URL (no `?search=` params)
- [ ] All content visible in HTML page source (not JS-only rendered)
- [ ] `sitemap.xml` exists and lists all pages
- [ ] `robots.txt` exists and points to sitemap
- [ ] No broken links anywhere on the site
- [ ] Site loads on mobile without horizontal scroll
- [ ] Google Search Console set up and sitemap submitted

**Navigation:**
- [ ] Header links to all main sections
- [ ] Footer includes Privacy Policy, Disclaimer, Contact links
- [ ] Breadcrumbs on all inner pages
- [ ] Homepage links to all 10 service pages

---

## NOTES FOR CURSOR

- Do not delete the existing checklist functionality — preserve it and integrate it within the new long-form page structure (e.g., the checklist can be a styled section within the full service page)
- Prioritize getting the 10 service pages and required static pages (About, Contact, Privacy Policy, Disclaimer) done first — these are the minimum needed for a review request
- Blog articles can be added iteratively after the initial fixes
- If the project uses a framework like Next.js, use its file-based routing system for all new pages
- Keep the design consistent across all new pages — match whatever visual style currently exists
- If the project uses a CMS or markdown files for content, create the articles as `.md` files with appropriate frontmatter
