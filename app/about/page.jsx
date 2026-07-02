import Link from "next/link";
import { Footer } from "@/components/Footer";
import { EditorialByline } from "@/components/EditorialByline";
import { organizationSchema, articleSchema } from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";

export const metadata = {
  title: "About BharatApply",
  description:
    "Learn how BharatApply helps citizens prepare for Indian government document applications with accurate checklists, file requirements, and official references.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const today = new Date().toISOString().split("T")[0];
  const schemas = [
    organizationSchema,
    articleSchema(
      "About BharatApply",
      metadata.description,
      today,
      today
    ),
  ];

  return (
    <div className="static-page-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="about-container">
        <div className="about-content">
          <h1>About BharatApply: Simplifying Government Paperwork</h1>

          <EditorialByline updated={today} />

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At BharatApply, our mission is to make government documentation
              simple and clear. The process can be confusing, and small errors
              cause delays and rejections. We reduce that confusion by giving
              accurate, structured information in one place so you can prepare the
              right documents with confidence.
            </p>
            <p>
              Explore our <Link href="/">service directory</Link> to find
              document requirements for <Link href="/aadhaar-card">Aadhaar</Link>,{" "}
              <Link href="/pan-card">PAN Card</Link>,{" "}
              <Link href="/passport">Passport</Link>, and many other government
              services.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Do</h2>
            <p>
              We provide a citizen friendly guide for common services like
              Passport, Aadhaar, PAN, Voter ID, Driving License, and
              certificates. On BharatApply, you can find:
            </p>
            <ul className="about-list">
              <li>
                <strong>Complete Document Checklists:</strong> Know exactly what
                proofs are accepted for Identity, Address, and Date of Birth.
                Check our guides for{" "}
                <Link href="/birth-certificate">Birth Certificate</Link>,{" "}
                <Link href="/income-certificate">Income Certificate</Link>, and
                other essential documents.
              </li>
              <li>
                <strong>File Upload Specifications:</strong> Clear file size and
                format rules (JPEG/PDF) to avoid upload errors.
              </li>
              <li>
                <strong>Photo & Signature Guidelines:</strong> Simple size and
                resolution requirements.
              </li>
              <li>
                <strong>Interactive Checklists:</strong> Tick off documents as you
                gather them and print the list before you visit an office.
              </li>
              <li>
                <strong>Tips to Avoid Rejection:</strong> Practical advice based
                on the most common mistakes.
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h2>How We Keep Information Accurate</h2>
            <p>
              Every guide is prepared by the BharatApply editorial team and
              checked against official government portals such as UIDAI, Passport
              Seva, the Income Tax department, and state service portals. We
              record the date each guide was last reviewed so you know how fresh
              the information is. Rules do change, so we always link to the
              official source for final confirmation.
            </p>
          </section>

          <section className="about-section">
            <h2>Popular Services</h2>
            <ul className="about-list">
              <li>
                <Link href="/aadhaar-card">Aadhaar Card</Link> - Enrolment and
                updates
              </li>
              <li>
                <Link href="/pan-card">PAN Card</Link> - New applications and
                corrections
              </li>
              <li>
                <Link href="/passport">Passport</Link> - Fresh applications and
                renewals
              </li>
              <li>
                <Link href="/driving-licence">Driving License</Link> - Learner and
                permanent licenses
              </li>
              <li>
                <Link href="/voter-id">Voter ID</Link> - Registration and updates
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Your Privacy & Data Safety</h2>
            <p>
              Applying for government documents involves sensitive information.
              <strong> BharatApply is an informational guide.</strong> We do not
              collect, store, or process your personal data, biometrics, or
              financial information. We point you to official government portals
              for submission and processing.
            </p>
            <p>
              Never share OTPs or passwords with anyone claiming to represent our
              site. Always check the URL and use official .gov.in or .nic.in
              websites before entering personal details.
            </p>
          </section>

          <section className="about-section disclaimer">
            <h3>Disclaimer</h3>
            <p>
              We are an independent informational platform and are{" "}
              <strong>not affiliated with the Government of India</strong> or any
              government agency. While we strive for accuracy, official rules may
              change. Please always verify with the respective official
              government portals like{" "}
              <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">
                uidai.gov.in
              </a>
              ,{" "}
              <a
                href="https://passportindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                passportindia.gov.in
              </a>
              , or{" "}
              <a href="https://incometax.gov.in" target="_blank" rel="noopener noreferrer">
                incometax.gov.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
