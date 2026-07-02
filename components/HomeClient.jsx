"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Hero } from "./Hero";
import { Sidebar } from "./Sidebar";
import { ServiceCard } from "./ServiceCard";
import { SEOContent } from "./SEOContent";
import { Footer } from "./Footer";
import { services, categories } from "@/data/services";
import { guidePages } from "@/data/guidePages";

export function HomeClient() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredServices = services.filter((service) => {
    if (selectedCategory && service.categoryId !== selectedCategory) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        service.title.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const activeCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="main-layout">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          if (typeof window !== "undefined")
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="content-wrapper">
        <div className="mobile-category-bar">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={18} />
            <span>Categories</span>
          </button>
          <span className="current-category-label">
            {activeCategory ? activeCategory.title : "All Services"}
          </span>
        </div>

        <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm}>
          <div className="quick-links">
            <Link href="/aadhaar-card" className="link-chip">
              Aadhaar Card
            </Link>
            <Link href="/pan-card" className="link-chip">
              PAN Card
            </Link>
            <Link href="/passport" className="link-chip">
              Passport
            </Link>
            <Link href="/driving-licence" className="link-chip">
              Driving License
            </Link>
            <Link href="/birth-certificate" className="link-chip">
              Birth Certificate
            </Link>
            <Link href="/income-certificate" className="link-chip">
              Income Certificate
            </Link>
          </div>
        </Hero>

        <div className="content-container">
          <section className="services-section">
            <div className="section-header">
              <h2>{activeCategory ? activeCategory.title : "All Services"}</h2>
              <p>
                {activeCategory
                  ? activeCategory.description
                  : "Select a service to view its document requirements"}
              </p>
            </div>

            <div className="services-grid">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}

              {filteredServices.length === 0 && (
                <div className="no-results">
                  <p>No services found matching your criteria.</p>
                </div>
              )}
            </div>
          </section>
        </div>

        <section className="content-container">
          <div
            className="recent-guides-preview"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              margin: "2rem 0",
            }}
          >
            <Link href="/document-finder" className="guide-card-preview">
              <h3>Document Proof Finder</h3>
              <p>
                Tick the documents you already have and instantly see which
                services you are ready to apply for.
              </p>
              <span className="guide-preview-cta">Try the tool &rarr;</span>
            </Link>
            <Link href="/id-proof-comparison" className="guide-card-preview">
              <h3>Aadhaar vs PAN vs Voter ID vs DL</h3>
              <p>
                A side-by-side comparison of which document works as identity,
                address, and date of birth proof.
              </p>
              <span className="guide-preview-cta">Compare now &rarr;</span>
            </Link>
          </div>
        </section>

        <SEOContent />

        <section className="additional-content-section">
          <div className="content-container">
            <h2>Complete Guide to Government Document Applications</h2>
            <p>
              Applying for government documents in India takes preparation. Each
              service has its own rules. Whether you are applying for the first
              time or updating a document, having the right papers ready saves
              time and avoids rejections. Our guides cover identity cards, travel
              documents, certificates, and more.
            </p>
            <p>
              Government portals have strict file size and format rules. For
              example, a passport photo may need to be a JPEG under 200KB, and a
              PAN card photo often requires a 3.5 x 2.5 cm size. Knowing these
              rules before upload prevents delays. Our checklists help you prepare
              everything before you start.
            </p>
            <h3>Common Application Mistakes to Avoid</h3>
            <p>
              Many applications fail because of small mistakes. Common issues
              include name mismatches, wrong file formats, oversized images, and
              missing self-attestation. We list these problems and simple fixes so
              your application moves faster. Always match your name, date of
              birth, and address across every document.
            </p>
          </div>
        </section>

        <section className="faq-section">
          <div className="content-container">
            <h2>Detailed Guides for Government Documents</h2>
            <p className="section-desc">
              Need detailed, step-by-step guidance on specific documents? Our
              guides cover every major government service with complete
              checklists, FAQ answers, and official government references.
            </p>
            <Link href="/guides" className="guides-link-btn">
              Browse All Guides &rarr;
            </Link>

            <div
              className="recent-guides-preview"
              style={{
                marginTop: "3rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {guidePages.slice(0, 3).map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="guide-card-preview"
                >
                  <h3>{guide.h1}</h3>
                  <p>{guide.description.substring(0, 100)}...</p>
                  <span className="guide-preview-cta">Read Guide &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="content-container">
            <h2>FAQs About Aadhaar, PAN & Passport Documents</h2>
            <div className="faq-grid">
              <article>
                <h3>How do I apply for a PAN Card online?</h3>
                <p>
                  Visit the NSDL or UTIITSL website. You will need proof of
                  identity (Aadhaar), proof of address, and a photo. Our{" "}
                  <Link href="/pan-card" className="text-link">
                    PAN card guide
                  </Link>{" "}
                  lists the exact file sizes.
                </p>
              </article>
              <article>
                <h3>What documents are required for a new Passport?</h3>
                <p>
                  You usually need proof of address, proof of date of birth, and
                  sometimes a non-ECR proof if eligible. See the full{" "}
                  <Link href="/passport" className="text-link">
                    passport checklist
                  </Link>
                  .
                </p>
              </article>
              <article>
                <h3>Is it mandatory to link Aadhaar with PAN?</h3>
                <p>
                  Yes. Linking Aadhaar with PAN is required to keep the PAN
                  active. Make sure your details match in both documents.
                </p>
              </article>
              <article>
                <h3>How can I update my Aadhaar details?</h3>
                <p>
                  You can update your address online on the myAadhaar portal. For
                  biometrics or name changes, visit an enrolment center.
                </p>
              </article>
              <article>
                <h3>What is the processing time for government documents?</h3>
                <p>
                  Processing times vary. Aadhaar updates often take 7 to 15 days,
                  PAN cards 15 to 20 days, and passports 30 to 45 days.
                </p>
              </article>
              <article>
                <h3>Can I track my application status online?</h3>
                <p>
                  Yes. Most portals provide tracking. Use your enrolment,
                  acknowledgment, or file number on the official site.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
