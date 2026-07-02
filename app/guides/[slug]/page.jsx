import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, AlertCircle } from "lucide-react";
import { guidePages } from "@/data/guidePages";
import { Footer } from "@/components/Footer";
import { EditorialByline } from "@/components/EditorialByline";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  breadcrumbSchema,
  faqSchema,
  articleSchema,
} from "@/lib/seoSchemas";

const BASE = "https://bharatapply.online";

export function generateStaticParams() {
  return guidePages.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = guidePages.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: { absolute: guide.title },
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: `${BASE}/guides/${guide.slug}`,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
  };
}

export default async function GuideDetailPage({ params }) {
  const { slug } = await params;
  const guide = guidePages.find((g) => g.slug === slug);
  if (!guide) notFound();

  const canonicalUrl = `${BASE}/guides/${guide.slug}`;

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: `${BASE}/` },
      { name: "Guides", url: `${BASE}/guides` },
      { name: guide.h1, url: canonicalUrl },
    ]),
    articleSchema(
      guide.h1,
      guide.description,
      guide.datePublished,
      guide.dateModified
    ),
  ];
  if (guide.faqItems?.length) schemas.push(faqSchema(guide.faqItems));

  const checklistItems = (guide.requiredDocuments || []).map((d) => d.type);

  const relatedLinks = guidePages
    .filter((g) => g.category === guide.category && g.slug !== guide.slug)
    .slice(0, 4)
    .map((g) => ({ href: `/guides/${g.slug}`, label: g.h1 }));

  return (
    <div className="guide-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="guide-container">
        <div className="guide-header">
          <Link href="/guides" className="btn-back" aria-label="Back to guides">
            <ChevronLeft size={18} /> All Guides
          </Link>
        </div>

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: guide.h1 },
          ]}
        />

        <article className="guide-content">
          <div className="guide-meta">
            <h1 className="guide-title">{guide.h1}</h1>
          </div>

          <EditorialByline updated={guide.dateModified} category={guide.category} />

          <section className="guide-section intro-section">
            <p className="intro-text">{guide.intro}</p>
          </section>

          {checklistItems.length > 0 && (
            <DocumentChecklist
              items={checklistItems}
              storageKey={`guide:${guide.slug}`}
              title="Documents to Prepare"
            />
          )}

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
                        <td>{specIdx === 0 ? docType : ""}</td>
                        <td>
                          {key.charAt(0).toUpperCase() +
                            key.slice(1).replace(/([A-Z])/g, " $1")}
                        </td>
                        <td>
                          {typeof value === "object"
                            ? JSON.stringify(value)
                            : value}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </section>
          )}

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

          <RelatedLinks title="Related Guides" links={relatedLinks} />

          <div className="guide-disclaimer">
            <AlertCircle size={16} />
            <p>
              <strong>Disclaimer:</strong> This guide provides general
              information about document requirements. Specific requirements may
              vary by state or local authority. Always verify with official
              government portals before submission. BharatApply is not affiliated
              with the Government of India.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
