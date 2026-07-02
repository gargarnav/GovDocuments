import { ProofFinderTool } from "@/components/ProofFinderTool";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";

export const metadata = {
  title: "Document Proof Finder: What Can I Apply For?",
  description:
    "Select the documents you already have (Aadhaar, PAN, Voter ID, and more) and instantly see which Indian government services you are ready to apply for.",
  alternates: { canonical: "/document-finder" },
};

export default function DocumentFinderPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: `${BASE}/` },
    { name: "Document Proof Finder", url: `${BASE}/document-finder` },
  ]);

  return (
    <div className="static-page-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="content-container guide-content-wrapper">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Document Proof Finder" },
          ]}
        />
        <article className="long-form-content">
          <h1>Document Proof Finder</h1>
          <p className="intro-text">
            Not sure what you already have covered? Tick off the documents in
            your hand below and this tool checks them against every service
            checklist on BharatApply, so you know exactly what you are ready to
            apply for right now and what is still missing.
          </p>
          <ProofFinderTool />
          <p style={{ color: "var(--color-text-muted, #64748b)", fontSize: "0.9rem" }}>
            This tool gives a quick first read based on common proof categories.
            Some services also require situational documents, such as an FIR for
            a lost passport or a wedding invitation for a marriage certificate,
            which are listed separately under each result. Always confirm the
            final list on the service's own guide page before applying.
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
