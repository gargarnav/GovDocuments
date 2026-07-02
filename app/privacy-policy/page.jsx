import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for BharatApply. Learn how we handle data, cookies, Google AdSense, and analytics.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const updated = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="static-page-layout">
      <div className="content-container guide-content-wrapper">
        <article className="long-form-content">
          <h1>Privacy Policy</h1>
          <p>
            <strong>Last Updated:</strong> {updated}
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to BharatApply ("we," "our," or "us"). We are committed to
            protecting your privacy and ensuring you have a positive experience
            on our website. This Privacy Policy outlines our practices regarding
            the collection, use, and disclosure of information when you use our
            services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We do not collect any personal information (such as name, email, or
            phone number) unless you voluntarily provide it to us through our
            contact form. Our contact form opens your own email application and
            does not store your message on our servers.
          </p>
          <h3>Log Data</h3>
          <p>
            Like most websites, we collect information that your browser sends
            whenever you visit our site ("Log Data"). This may include your IP
            address, browser type and version, the pages you visit, the time and
            date of your visit, and the time spent on those pages.
          </p>

          <h2>3. Cookies and Web Beacons</h2>
          <p>
            We use cookies to store information about visitor preferences and to
            understand which pages are visited. You can instruct your browser to
            refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>4. Google AdSense & the DoubleClick DART Cookie</h2>
          <p>
            Google is a third-party vendor that may serve ads on our site once
            our account is approved. Google uses cookies, including the DART
            cookie, to serve ads based on a user's visit to our site and other
            sites on the internet. Users may opt out of the DART cookie by
            visiting the Google ad and content network Privacy Policy at{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/technologies/ads
            </a>
            .
          </p>

          <h2>5. Third-Party Privacy Policies</h2>
          <p>
            BharatApply's Privacy Policy does not apply to other advertisers or
            websites. We advise you to consult the respective Privacy Policies of
            these third-party ad servers for more detailed information, including
            their practices and instructions about how to opt out.
          </p>

          <h2>6. Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use our site.
            Google Analytics is a web analytics service that tracks and reports
            website traffic using aggregated, non-identifying data.
          </p>

          <h2>7. Your Data Protection Rights</h2>
          <p>
            We want you to be fully aware of your data protection rights. Every
            user is entitled to the right to access, rectification, erasure,
            restriction of processing, objection to processing, and data
            portability.
          </p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, contact us:</p>
          <ul>
            <li>By email: support@bharatapply.online</li>
            <li>
              By visiting this page on our website: <Link href="/contact">/contact</Link>
            </li>
          </ul>
        </article>
      </div>
      <Footer />
    </div>
  );
}
