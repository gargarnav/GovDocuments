import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="static-page-layout">
      <div className="content-container guide-content-wrapper">
        <article className="long-form-content" style={{ textAlign: "center" }}>
          <h1>Page Not Found</h1>
          <p>
            The page you are looking for does not exist or may have moved. Try one
            of these instead:
          </p>
          <p style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/guides" className="btn-primary">
              Browse Guides
            </Link>
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
