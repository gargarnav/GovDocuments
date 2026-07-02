import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the BharatApply team for questions, corrections, or feedback about our government document guides.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="static-page-layout">
      <div className="content-container guide-content-wrapper">
        <article className="long-form-content">
          <h1>Contact Us</h1>
          <p className="intro-text">
            Have a question about a document requirement? Found something that
            looks out of date in our guides? Or just want to say hello? We would
            love to hear from you.
          </p>

          <div className="contact-grid" style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
            <div
              className="contact-card"
              style={{
                padding: "2rem",
                background: "var(--color-surface-alt, #f8fafc)",
                borderRadius: "12px",
                border: "1px solid var(--color-border, #e2e8f0)",
              }}
            >
              <Mail size={32} color="var(--color-primary, #2563eb)" style={{ marginBottom: "1rem" }} />
              <h3>Email Us</h3>
              <p>For general enquiries, corrections, and feedback:</p>
              <a
                href="mailto:support@bharatapply.online"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "var(--color-primary, #2563eb)",
                  textDecoration: "none",
                }}
              >
                support@bharatapply.online
              </a>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2>Send us a Message</h2>
            <p>
              This form opens your email app with the details pre-filled so you
              can send it directly to our team.
            </p>
            <ContactForm />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
