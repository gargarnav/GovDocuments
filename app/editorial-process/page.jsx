import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { organizationSchema, articleSchema } from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";
const LAST_REVIEWED = "2026-07-02";

export const metadata = {
  title: "Our Editorial Process & Sources",
  description:
    "How BharatApply researches, verifies, and updates its document guides, and the official government sources we check every entry against.",
  alternates: { canonical: "/editorial-process" },
};

const sourcesByCategory = [
  {
    category: "Identity Documents",
    sources: [
      { name: "UIDAI (Aadhaar)", url: "https://uidai.gov.in" },
      { name: "Income Tax Department (PAN)", url: "https://www.incometax.gov.in" },
      { name: "Election Commission of India (Voter ID)", url: "https://voters.eci.gov.in" },
    ],
  },
  {
    category: "Travel Documents",
    sources: [{ name: "Passport Seva (Ministry of External Affairs)", url: "https://passportindia.gov.in" }],
  },
  {
    category: "Vehicle & Transport",
    sources: [{ name: "Parivahan Sewa (Ministry of Road Transport)", url: "https://parivahan.gov.in" }],
  },
  {
    category: "Banking & Tax",
    sources: [
      { name: "GST Portal", url: "https://www.gst.gov.in" },
      { name: "Income Tax e-Filing Portal", url: "https://www.incometax.gov.in" },
      { name: "EPFO", url: "https://www.epfindia.gov.in" },
    ],
  },
  {
    category: "Education",
    sources: [
      { name: "National Scholarship Portal", url: "https://scholarships.gov.in" },
      { name: "DigiLocker", url: "https://www.digilocker.gov.in" },
    ],
  },
  {
    category: "Health & Welfare",
    sources: [
      { name: "Ayushman Bharat (PM-JAY)", url: "https://pmjay.gov.in" },
      { name: "National Food Security Act Portal (Ration Card)", url: "https://nfsa.gov.in" },
    ],
  },
];

export default function EditorialProcessPage() {
  const schemas = [
    organizationSchema,
    articleSchema(
      "Our Editorial Process & Sources",
      metadata.description,
      LAST_REVIEWED,
      LAST_REVIEWED
    ),
  ];

  return (
    <div className="static-page-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="content-container guide-content-wrapper">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Editorial Process" }]}
        />
        <article className="long-form-content">
          <h1>Our Editorial Process & Sources</h1>
          <p className="intro-text">
            BharatApply exists to save you a confusing search across dozens of
            government websites. Here is exactly how each guide is put
            together and kept current, and the official sources we check
            against.
          </p>

          <section className="about-section">
            <h2>How a Guide Is Written</h2>
            <ol style={{ paddingLeft: "1.25rem", lineHeight: 1.8 }}>
              <li>
                <strong>Research:</strong> We start from the official
                government portal for that service (listed below by category)
                and read the current application form, eligibility rules, and
                fee schedule.
              </li>
              <li>
                <strong>Structuring:</strong> Requirements are grouped into
                identity proof, address proof, date of birth proof, and any
                service-specific documents, so you can scan a checklist instead
                of a wall of text.
              </li>
              <li>
                <strong>Common mistakes:</strong> We separately note the
                rejection reasons that come up most often for each service,
                such as name mismatches or expired utility bills used as
                address proof.
              </li>
              <li>
                <strong>Review:</strong> Each entry carries a "Last updated"
                date, visible at the top of the guide, so you know how fresh
                the information is at a glance.
              </li>
            </ol>
          </section>

          <section className="about-section">
            <h2>What We Do Not Do</h2>
            <ul className="about-list">
              <li>
                We do not submit applications on your behalf or ask for your
                personal documents. Every guide ends with a link to the actual
                official portal for submission.
              </li>
              <li>
                We do not claim affiliation with any government department. See
                our <Link href="/disclaimer">Disclaimer</Link> for details.
              </li>
              <li>
                We do not guarantee outcomes. Rules change, and state-level
                variations exist; always cross-check with the official source
                before a final submission.
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Official Sources We Check, By Category</h2>
            <p>
              These are the primary government portals referenced while writing
              and updating our guides:
            </p>
            {sourcesByCategory.map((group) => (
              <div key={group.category} style={{ marginBottom: "1.25rem" }}>
                <h3 style={{ marginBottom: "0.4rem" }}>{group.category}</h3>
                <ul className="about-list">
                  {group.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="about-section">
            <h2>Found Something Out of Date?</h2>
            <p>
              Government rules change, and we rely on reader feedback to catch
              it fast. If a fee, document requirement, or portal link looks
              outdated, tell us on the{" "}
              <Link href="/contact">Contact page</Link> and we will review it.
              You can also see when each guide was last reviewed on our{" "}
              <Link href="/updates">Recently Updated</Link> page.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
}
