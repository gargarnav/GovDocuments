import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";
const PAGE_PATH = "/id-proof-comparison";
const LAST_REVIEWED = "2026-07-02";

export const metadata = {
  title: "Aadhaar vs PAN vs Voter ID vs Driving License: Which Proof Works Where",
  description:
    "A side-by-side comparison of Aadhaar, PAN Card, Voter ID, Driving License, and Passport as identity, address, and age proof, so you know exactly which document to use for each government service.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Aadhaar vs PAN vs Voter ID vs Driving License: Which Proof Works Where",
    description:
      "Side-by-side comparison of the five most common Indian ID documents and where each one is accepted.",
    url: `${BASE}${PAGE_PATH}`,
  },
};

const comparisonRows = [
  {
    doc: "Aadhaar Card",
    identity: "Yes",
    address: "Yes",
    dob: "Yes (self-declared, not always accepted as sole proof)",
    travel: "Yes (domestic flights)",
    notes: "Most widely accepted single document; required for many DBT and welfare schemes.",
  },
  {
    doc: "PAN Card",
    identity: "Yes",
    address: "No",
    dob: "Yes",
    travel: "Yes (domestic flights)",
    notes: "Mandatory for banking, income tax, and high-value financial transactions. Not an address proof.",
  },
  {
    doc: "Voter ID (EPIC)",
    identity: "Yes",
    address: "Yes",
    dob: "Limited (approximate age only)",
    travel: "Yes (domestic flights)",
    notes: "Good backup identity and address proof, but rarely used as primary DOB proof due to inconsistent birth dates on older cards.",
  },
  {
    doc: "Driving License",
    identity: "Yes",
    address: "Yes",
    dob: "Yes",
    travel: "Yes (domestic flights)",
    notes: "One of the few documents accepted for all three categories, but needs periodic renewal to stay valid as proof.",
  },
  {
    doc: "Passport",
    identity: "Yes",
    address: "Yes",
    dob: "Yes",
    travel: "Yes (domestic and international)",
    notes: "Strongest all-round proof; the only document on this list valid for international travel and visas.",
  },
];

const faqs = [
  {
    question: "Which single document works as both identity and address proof?",
    answer:
      "Aadhaar, Voter ID, Driving License, and Passport all work as both identity and address proof in most cases. PAN Card is identity proof only, not address proof.",
  },
  {
    question: "Can I use Aadhaar as proof of date of birth?",
    answer:
      "Aadhaar carries a declared date of birth, but many departments (such as passport and school authorities) prefer a Birth Certificate, 10th Marksheet, or Passport as stronger DOB proof, especially if the Aadhaar date of birth was self-declared rather than document-verified at enrollment.",
  },
  {
    question: "Why is PAN Card not accepted as address proof?",
    answer:
      "PAN records only your name, date of birth, and PAN number. It has no address field, so it cannot serve as address proof for any application, even though it is a valid photo identity document.",
  },
  {
    question: "Which document should I prioritize getting first?",
    answer:
      "Aadhaar is the fastest to obtain and unlocks the most services, so it is usually the first document a citizen should get. PAN follows next since it is mandatory for any banking or tax-related activity.",
  },
  {
    question: "Is Voter ID accepted for international travel?",
    answer:
      "No, Voter ID is only valid for domestic use. For any international travel, a Passport is mandatory.",
  },
];

export default function IdProofComparisonPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: `${BASE}/` },
      { name: "ID Proof Comparison", url: `${BASE}${PAGE_PATH}` },
    ]),
    articleSchema(
      metadata.title,
      metadata.description,
      LAST_REVIEWED,
      LAST_REVIEWED
    ),
    faqSchema(faqs),
  ];

  const relatedServices = [
    { href: "/aadhaar-card", label: "Aadhaar Card Guide" },
    { href: "/pan-card", label: "PAN Card Guide" },
    { href: "/voter-id", label: "Voter ID Guide" },
    { href: "/driving-licence", label: "Driving License Guide" },
    { href: "/passport", label: "Passport Guide" },
  ];

  return (
    <div className="guide-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="guide-container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "ID Proof Comparison" },
          ]}
        />

        <article className="guide-content">
          <div className="guide-meta">
            <h1 className="guide-title">
              Aadhaar vs PAN vs Voter ID vs Driving License: Which Proof Works
              Where
            </h1>
          </div>

          <EditorialByline updated={LAST_REVIEWED} />

          <section className="guide-section intro-section">
            <p className="intro-text">
              India has no single universal ID card, so most applications
              accept a defined list of "acceptable" documents rather than one
              fixed document. This guide compares the five most common Indian
              identity documents side by side across identity, address, date of
              birth, and travel use, so you can pick the right one instead of
              guessing.
            </p>
          </section>

          <section className="guide-section specs-section">
            <h2>Quick Comparison Table</h2>
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Identity Proof</th>
                  <th>Address Proof</th>
                  <th>Date of Birth Proof</th>
                  <th>Domestic Travel ID</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.doc}>
                    <td>
                      <strong>{row.doc}</strong>
                    </td>
                    <td>{row.identity}</td>
                    <td>{row.address}</td>
                    <td>{row.dob}</td>
                    <td>{row.travel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="guide-section">
            <h2>What Each Document Is Actually Good For</h2>
            {comparisonRows.map((row) => (
              <div key={row.doc} className="document-item">
                <h3>{row.doc}</h3>
                <p className="doc-description">{row.notes}</p>
              </div>
            ))}
          </section>

          <section className="guide-section">
            <h2>Which Proof Should You Use For Common Situations?</h2>
            <div className="mistakes-grid">
              <div className="mistake-card">
                <h4>Opening a Bank Account</h4>
                <p>
                  Aadhaar plus PAN is the standard combination requested by
                  almost every bank for KYC.
                </p>
              </div>
              <div className="mistake-card">
                <h4>Buying a SIM Card</h4>
                <p>
                  Aadhaar-based e-KYC is the fastest route; Passport, Voter ID,
                  or Driving License also work as alternatives.
                </p>
              </div>
              <div className="mistake-card">
                <h4>Filing Income Tax Returns</h4>
                <p>
                  PAN is mandatory. Aadhaar must be linked to it, or the PAN
                  becomes inoperative for filing purposes.
                </p>
              </div>
              <div className="mistake-card">
                <h4>Property Registration</h4>
                <p>
                  Most sub-registrar offices ask for Aadhaar plus PAN for both
                  buyer and seller, and sometimes Voter ID as a secondary
                  address check.
                </p>
              </div>
              <div className="mistake-card">
                <h4>Competitive Exams</h4>
                <p>
                  Exam bodies typically require a government photo ID at the
                  center: Aadhaar, Passport, Voter ID, or Driving License are
                  all commonly accepted.
                </p>
              </div>
              <div className="mistake-card">
                <h4>International Travel or Visa</h4>
                <p>
                  Only a Passport works. None of the other four documents on
                  this list are valid for crossing an international border.
                </p>
              </div>
            </div>
          </section>

          <section className="guide-section faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-items">
              {faqs.map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <RelatedLinks title="Full Document Checklists" links={relatedServices} />

          <div className="guide-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Acceptance rules vary slightly by
              state, bank, or institution. This comparison reflects common
              practice; always confirm the exact accepted document list with
              the specific office or portal you are applying to. Prefer a
              guided checklist?{" "}
              <Link href="/document-finder">Try the Document Proof Finder</Link>.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
