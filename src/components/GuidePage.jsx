import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ExternalLink, AlertCircle } from 'lucide-react';
import { guidePages } from '../data/guidePages';
import { breadcrumbSchema as createBreadcrumbSchema, faqSchema as createFaqSchema } from '../utils/seoSchemas';
import { SEOHead } from './SEOHead';
import { Footer } from './Footer';
import { DelayedAd } from './DelayedAd';
import '../styles/GuidePage.css';

export default function GuidePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the guide page by slug
  const guide = guidePages.find(g => g.slug === slug);

  if (!guide) {
    return (
      <div className="guide-not-found">
        <div className="guide-container">
          <h1>Guide Not Found</h1>
          <p>The guide you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/guides')} className="btn-back">
            <ChevronLeft size={16} /> Back to All Guides
          </button>
        </div>
      </div>
    );
  }

  // Generate canonical URL
  const canonicalUrl = `https://bharatapply.online/guides/${guide.slug}`;

  // Generate schemas
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: 'https://bharatapply.online/' },
    { name: 'Guides', url: 'https://bharatapply.online/guides' },
    { name: guide.h1, url: canonicalUrl }
  ]);

  const faq = createFaqSchema(
    guide.faqItems.map(item => ({
      question: item.question,
      answer: item.answer
    }))
  );

  return (
    <>
      <SEOHead
        title={guide.title}
        description={guide.description}
        keywords={guide.keywords}
        canonical={canonicalUrl}
        schemas={[breadcrumb, faq]}
        robots="index, follow"
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
      />

      <div className="guide-page">
        <div className="guide-container">
          {/* Header & Navigation */}
          <div className="guide-header">
            <button
              onClick={() => navigate('/guides')}
              className="btn-back"
              aria-label="Back to guides"
            >
              <ChevronLeft size={18} /> All Guides
            </button>
          </div>

          {/* Main Content */}
          <article className="guide-content">
            {/* Title & Meta Info */}
            <div className="guide-meta">
              <h1 className="guide-title">{guide.h1}</h1>
              <div className="guide-info">
                <span className="category-badge">{guide.category}</span>
                <span className="update-date">Last updated: {new Date(guide.dateModified).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Intro Section */}
            <section className="guide-section intro-section">
              <p className="intro-text">{guide.intro}</p>
            </section>

            {/* Required Documents Section */}
            {guide.requiredDocuments && guide.requiredDocuments.length > 0 && (
              <section className="guide-section documents-section">
                <h2>Required Documents</h2>
                <div className="documents-list">
                  {guide.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="document-item">
                      <h3>{doc.type}</h3>
                      <p className="doc-description">{doc.description}</p>
                      {doc.options && doc.options.length > 0 && (
                        <ul className="doc-options">
                          {doc.options.map((option, optIdx) => (
                            <li key={optIdx}>{option}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* File Specifications Table (if available) */}
            {guide.fileSpecs && Object.keys(guide.fileSpecs).length > 0 && (
              <section className="guide-section specs-section">
                <h2>File & Document Specifications</h2>
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Document Type</th>
                      <th>Requirement</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(guide.fileSpecs).map(([docType, specs], idx) =>
                      Object.entries(specs).map(([key, value], specIdx) => (
                        <tr key={`${idx}-${specIdx}`}>
                          <td>{specIdx === 0 ? docType : ''}</td>
                          <td>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</td>
                          <td>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </section>
            )}

            {/* FAQ Section */}
            <section className="guide-section faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-items">
                {guide.faqItems.map((faq, idx) => (
                  <details key={idx} className="faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Sources & References */}
            <section className="guide-section sources-section">
              <h2>Sources & Official References</h2>
              <div className="sources-list">
                {guide.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link"
                  >
                    <ExternalLink size={16} />
                    {source.name}
                  </a>
                ))}
              </div>
            </section>

            {/* Internal Links to Related Pages */}
            <section className="guide-section related-section">
              <h2>Related Guides</h2>
              <div className="related-guides">
                {guidePages
                  .filter(g => g.category === guide.category && g.slug !== guide.slug)
                  .slice(0, 3)
                  .map((relatedGuide) => (
                    <a
                      key={relatedGuide.slug}
                      href={`/guides/${relatedGuide.slug}`}
                      className="related-guide-link"
                    >
                      <span className="guide-title-small">{relatedGuide.h1}</span>
                      <span className="arrow">→</span>
                    </a>
                  ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div className="guide-disclaimer">
              <AlertCircle size={16} />
              <p>
                <strong>Disclaimer:</strong> This guide provides general information about document requirements.
                Specific requirements may vary by state or local authority. Always verify with official government portals
                before submission. BharatApply.online is not affiliated with the Government of India.
              </p>
            </div>

            <DelayedAd />
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}
