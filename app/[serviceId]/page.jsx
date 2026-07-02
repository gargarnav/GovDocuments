import { notFound } from "next/navigation";
import { Info, AlertTriangle, HelpCircle } from "lucide-react";
import serviceContent from "@/data/serviceContent";
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
import { getRelatedGuides, getServiceSiblings } from "@/lib/links";

const BASE = "https://bharatapply.online";

export function generateStaticParams() {
  return Object.keys(serviceContent).map((serviceId) => ({ serviceId }));
}

// Only the known service slugs are valid; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { serviceId } = await params;
  const data = serviceContent[serviceId];
  if (!data) return {};
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: `/${serviceId}` },
    openGraph: {
      type: "article",
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${BASE}/${serviceId}`,
    },
  };
}

function renderBody(body) {
  return body
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

// Build a "documents to prepare" checklist from the content sections.
function buildChecklist(content) {
  const items = [];
  content.sections.forEach((section) => {
    if (section.subsections) {
      section.subsections.forEach((sub) => {
        if (sub.subHeading) items.push(sub.subHeading);
      });
    }
  });
  return items;
}

export default async function ServicePage({ params }) {
  const { serviceId } = await params;
  const data = serviceContent[serviceId];
  if (!data) notFound();

  const { title, content, dateModified } = data;
  const canonicalUrl = `${BASE}/${serviceId}`;
  const faqSection = content.sections.find(
    (s) => s.heading === "Frequently Asked Questions"
  );

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: `${BASE}/` },
      { name: title, url: canonicalUrl },
    ]),
    articleSchema(title, data.metaDescription, dateModified, dateModified),
  ];
  if (faqSection?.faqs?.length) {
    schemas.push(faqSchema(faqSection.faqs));
  }

  const checklistItems = buildChecklist(content);
  const relatedGuides = getRelatedGuides(serviceId);
  const siblingLinks = getServiceSiblings(serviceId);

  return (
    <div className="service-page-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="content-container guide-content-wrapper">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />

        <article className="long-form-content">
          <h1>{title}</h1>

          <EditorialByline updated={dateModified} />

          <div className="intro-box">
            <Info className="intro-icon" size={24} />
            <p>{content.intro}</p>
          </div>

          <DocumentChecklist
            items={checklistItems}
            storageKey={serviceId}
            title="Documents to Prepare"
          />

          {content.sections.map((section, index) => (
            <section key={index} className="guide-section">
              <h2>{section.heading}</h2>

              {section.body && (
                <div
                  className="section-body"
                  dangerouslySetInnerHTML={{ __html: renderBody(section.body) }}
                />
              )}

              {section.steps && (
                <div className="steps-container">
                  {section.steps.map((step, idx) => (
                    <div key={idx} className="step-item">
                      <div className="step-number">{idx + 1}</div>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.subsections &&
                section.subsections.map((sub, idx) => (
                  <div key={idx} className="subsection">
                    <h3>{sub.subHeading}</h3>
                    <ul className="sub-list">
                      {sub.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              {section.items && (
                <div className="mistakes-grid">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="mistake-card">
                      <AlertTriangle size={20} className="mistake-icon" />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.faqs && (
                <div className="faq-list">
                  {section.faqs.map((faq, idx) => (
                    <details key={idx} className="faq-item">
                      <summary className="faq-question">
                        <HelpCircle size={18} />
                        {faq.question}
                      </summary>
                      <p className="faq-answer">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              )}

              {section.links && (
                <div className="important-links">
                  {section.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link-btn"
                    >
                      {link.text} &#8599;
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}

          <RelatedLinks title="Related Step-by-Step Guides" links={relatedGuides} />
          <RelatedLinks title="Other Popular Services" links={siblingLinks} />

          <div className="guide-footer-note">
            <p>
              <strong>Disclaimer:</strong> BharatApply is an informational guide
              and is not affiliated with any government agency. Always verify the
              latest requirements on the official portals linked above before you
              apply.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
