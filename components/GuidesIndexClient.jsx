"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { guidePages } from "@/data/guidePages";

const CATEGORY_DISPLAY = {
  travel: { label: "Travel & Passport", icon: "✈️" },
  banking: { label: "Banking & Finance", icon: "🏦" },
  identity: { label: "Identity & Aadhaar", icon: "🆔" },
  transport: { label: "Transport & Driving", icon: "🚗" },
  certificates: { label: "Certificates & Proofs", icon: "📋" },
};

export function GuidesIndexClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGuides = guidePages.filter((guide) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      guide.h1.toLowerCase().includes(q) ||
      guide.description.toLowerCase().includes(q) ||
      guide.keywords.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "all" || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const guidesByCategory = {};
  guidePages.forEach((guide) => {
    if (!guidesByCategory[guide.category]) guidesByCategory[guide.category] = [];
    guidesByCategory[guide.category].push(guide);
  });

  return (
    <div className="guides-index">
      <div className="guides-container">
        <div className="guides-header">
          <h1 className="guides-title">Government Documents Guides</h1>
          <p className="guides-subtitle">
            Complete guides on documents required for Indian government services
            and certificates
          </p>
        </div>

        <div className="guides-search-section">
          <div className="guides-search-wrapper">
            <Search size={18} className="guides-search-icon" />
            <input
              type="text"
              placeholder="Search guides (e.g. 'passport renewal', 'aadhaar address')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="guides-search-input"
              aria-label="Search guides"
            />
          </div>

          <div className="category-filter">
            <button
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All Categories
            </button>
            {Object.entries(CATEGORY_DISPLAY).map(([key, { label }]) => (
              <button
                key={key}
                className={`filter-btn ${selectedCategory === key ? "active" : ""}`}
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="results-info">
          <p>
            Showing <strong>{filteredGuides.length}</strong> guide
            {filteredGuides.length !== 1 ? "s" : ""}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {filteredGuides.length > 0 ? (
          <div className="guides-grid">
            {filteredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="guide-card"
              >
                <div className="guide-card-category">
                  <span className="category-label">
                    {CATEGORY_DISPLAY[guide.category]?.label || guide.category}
                  </span>
                </div>

                <h2 className="guide-card-title">{guide.h1}</h2>
                <p className="guide-card-description">{guide.description}</p>

                <div className="guide-card-meta">
                  <span className="guide-docs-count">
                    {guide.requiredDocuments?.length || 0} document types
                  </span>
                  <span className="guide-faq-count">
                    {guide.faqItems?.length || 0} FAQs
                  </span>
                </div>

                <div className="guide-card-footer">
                  <span className="read-more">
                    Read Guide
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No guides found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="btn-reset"
            >
              Reset Filters
            </button>
          </div>
        )}

        {selectedCategory === "all" && !searchTerm && (
          <section className="category-overview">
            <h2>Browse by Category</h2>
            <div className="category-cards">
              {Object.entries(guidesByCategory).map(([category, guides]) => (
                <div key={category} className="category-card">
                  <h3>{CATEGORY_DISPLAY[category]?.label || category}</h3>
                  <p className="category-count">{guides.length} guides</p>
                  <button
                    className="category-link"
                    onClick={() => setSelectedCategory(category)}
                  >
                    Browse
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="guides-seo-content">
          <h2>Why Use BharatApply Guides?</h2>
          <ul className="benefits-list">
            <li>
              <strong>Complete Document Checklists:</strong> Never miss a required
              document for government applications
            </li>
            <li>
              <strong>State-Specific Information:</strong> Detailed guides for
              major states (Uttar Pradesh, Maharashtra, Delhi, and more)
            </li>
            <li>
              <strong>FAQ Sections:</strong> Answers to common questions about
              each process
            </li>
            <li>
              <strong>Official References:</strong> Direct links to government
              portals for verification
            </li>
            <li>
              <strong>Regular Updates:</strong> Guides kept in line with the
              latest government requirements
            </li>
          </ul>

          <h2>Common Document Requirements</h2>
          <p>Across most government processes, you will typically need:</p>
          <ul className="requirements-list">
            <li>Proof of Identity (Aadhaar, Passport, Voter ID, Driving License)</li>
            <li>Proof of Address (Utility Bills, Ration Card, Bank Statement)</li>
            <li>Proof of Birth or Age (Birth Certificate, SSLC, Passport)</li>
            <li>Photographs (specifications vary by document)</li>
            <li>Affidavits or certificates (depending on the service)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
