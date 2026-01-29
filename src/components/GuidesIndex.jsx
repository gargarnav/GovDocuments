import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { guidePages } from '../data/guidePages';
import { SEOHead } from './SEOHead';
import { Footer } from './Footer';
import { breadcrumbSchema as createBreadcrumbSchema } from '../utils/seoSchemas';
import '../styles/GuidesIndex.css';

const CATEGORY_DISPLAY = {
  travel: { label: 'Travel & Passport', icon: '✈️' },
  banking: { label: 'Banking & Finance', icon: '🏦' },
  identity: { label: 'Identity & Aadhaar', icon: '🆔' },
  transport: { label: 'Transport & Driving', icon: '🚗' },
  certificates: { label: 'Certificates & Proofs', icon: '📋' }
};

export default function GuidesIndex() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter guides based on search and category
  const filteredGuides = guidePages.filter(guide => {
    const matchesSearch = guide.h1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.keywords.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group guides by category
  const guidesByCategory = {};
  guidePages.forEach(guide => {
    if (!guidesByCategory[guide.category]) {
      guidesByCategory[guide.category] = [];
    }
    guidesByCategory[guide.category].push(guide);
  });

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: 'https://bharatapply.online/' },
    { name: 'Guides', url: 'https://bharatapply.online/guides' }
  ]);

  const canonicalUrl = 'https://bharatapply.online/guides';

  return (
    <>
      <SEOHead
        title="Government Documents Guides | BharatApply"
        description="Complete guides on required documents for Indian government services. Passport, PAN, Aadhaar, Driving License, Voter ID, and more."
        keywords="government documents guides, india government documents, passport documents, aadhaar documents, pan card documents"
        canonical={canonicalUrl}
        schemas={[breadcrumb]}
        robots="index, follow"
      />

      <div className="guides-index">
        <div className="guides-container">
          {/* Header */}
          <div className="guides-header">
            <h1 className="guides-title">Government Documents Guides</h1>
            <p className="guides-subtitle">
              Complete guides on documents required for Indian government services and certificates
            </p>
          </div>

          {/* Search & Filter Section */}
          <div className="guides-search-section">
            <div className="guides-search-wrapper">
              <Search size={18} className="guides-search-icon" />
              <input
                type="text"
                placeholder="Search guides (e.g., 'passport renewal', 'aadhaar address')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="guides-search-input"
                aria-label="Search guides"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              <button
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Categories
              </button>
              {Object.entries(CATEGORY_DISPLAY).map(([key, { label }]) => (
                <button
                  key={key}
                  className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>
              Showing <strong>{filteredGuides.length}</strong> guide{filteredGuides.length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Guides Grid/List */}
          {filteredGuides.length > 0 ? (
            <div className="guides-grid">
              {filteredGuides.map(guide => (
                <article
                  key={guide.slug}
                  className="guide-card"
                  onClick={() => navigate(`/guides/${guide.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') navigate(`/guides/${guide.slug}`);
                  }}
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
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No guides found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-reset"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Category Overview Section */}
          {selectedCategory === 'all' && !searchTerm && (
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

          {/* SEO Content Section */}
          <section className="guides-seo-content">
            <h2>Why Use BharatApply Guides?</h2>
            <ul className="benefits-list">
              <li>
                <strong>Complete Document Checklists:</strong> Never miss a required document for government applications
              </li>
              <li>
                <strong>State-Specific Information:</strong> Detailed guides for major states (Uttar Pradesh, Maharashtra, Delhi, etc.)
              </li>
              <li>
                <strong>FAQ Sections:</strong> Answers to common questions about each process
              </li>
              <li>
                <strong>Official References:</strong> Direct links to government portals for verification
              </li>
              <li>
                <strong>Regular Updates:</strong> All guides updated with latest government requirements
              </li>
            </ul>

            <h2>Common Document Requirements</h2>
            <p>
              Across all government documentation processes, you'll typically need:
            </p>
            <ul className="requirements-list">
              <li>Proof of Identity (Aadhaar, Passport, Voter ID, Driving License)</li>
              <li>Proof of Address (Utility Bills, Ration Card, Bank Statement)</li>
              <li>Proof of Birth/Age (Birth Certificate, SSLC, Passport)</li>
              <li>Photographs (specifications vary by document)</li>
              <li>Affidavits or certificates (depending on service)</li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              Select a guide from above to learn exact document requirements, specifications, fees, processing times,
              and answers to frequently asked questions. Each guide includes official government portal links for
              direct verification and application.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
