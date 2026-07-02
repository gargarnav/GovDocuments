import Link from "next/link";

export function SEOContent() {
  return (
    <section
      className="seo-content-section"
      style={{
        padding: "2rem 0",
        background: "var(--color-surface-alt, #f8fafc)",
        borderTop: "1px solid var(--color-border, #e2e8f0)",
      }}
    >
      <div className="content-container">
        <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
          <h2 style={{ marginBottom: "1rem" }}>
            Guide to Indian Government Documents and Certificates
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Indian government paperwork can be confusing. If you are applying for
            a{" "}
            <Link href="/passport" className="text-link">
              Passport
            </Link>{" "}
            or updating your{" "}
            <Link href="/aadhaar-card" className="text-link">
              Aadhaar card
            </Link>
            , you need the right documents in the right format. BharatApply is a
            simple guide with clear, up to date checklists for the most common
            services.
          </p>

          <h2 style={{ marginBottom: "1rem", marginTop: "2rem" }}>
            Essential Document Checklists for Every Citizen
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Many applications are rejected because a proof is missing or in the
            wrong format. When you apply for a{" "}
            <Link href="/pan-card" className="text-link">
              PAN Card
            </Link>
            , your details must match your Aadhaar. A{" "}
            <Link href="/driving-licence" className="text-link">
              Driving License
            </Link>{" "}
            needs its own set of forms and medical certificates. We group
            requirements by service so you know exactly what to carry before you
            visit an office.
          </p>

          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
            Understanding Vital Certificates
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Life events need specific papers. A{" "}
            <Link href="/birth-certificate" className="text-link">
              Birth Certificate
            </Link>{" "}
            is needed for school admissions and passports. An{" "}
            <Link href="/income-certificate" className="text-link">
              Income Certificate
            </Link>{" "}
            is used for scholarships and subsidies. We list clear file sizes and
            formats, such as "JPEG under 50KB", so your uploads are accepted the
            first time.
          </p>

          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
            Why Accurate Documentation Matters
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Most portals use automated checks. Clear, valid, and correctly sized
            files help you avoid delays. We explain small but important details,
            such as the difference between a new{" "}
            <Link href="/voter-id" className="text-link">
              Voter ID
            </Link>{" "}
            application and a correction form. Browse our{" "}
            <Link href="/" className="text-link">
              popular services
            </Link>{" "}
            to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
