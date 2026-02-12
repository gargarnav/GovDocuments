import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Info, FileText, CheckCircle, AlertTriangle, Clock, HelpCircle } from 'lucide-react';
import serviceContent from '../data/serviceContent';
import { SEOHead } from './SEOHead';
import { DelayedAd } from './DelayedAd';
import { AdContainer } from './AdContainer';
import '../styles/GuidesIndex.css';

export function ServicePage() {
    const { serviceId } = useParams();
    const data = serviceContent[serviceId];

    if (!data) {
        return (
            <div className="content-container">
                <h1>Service Not Found</h1>
                <p>The requested document guide could not be found.</p>
                <Link to="/" className="btn-primary">Go Home</Link>
            </div>
        );
    }

    const { title, metaTitle, metaDescription, content } = data;

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bharatapply.online"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": `https://bharatapply.online/${serviceId}`
            }
        ]
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.sections.find(s => s.heading === 'Frequently Asked Questions')?.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        })) || []
    };

    return (
        <div className="service-page-layout">
            <SEOHead
                title={metaTitle}
                description={metaDescription}
                canonicalUrl={`https://bharatapply.online/${serviceId}`}
                schema={[breadcrumbSchema, faqSchema]}
            />

            <div className="content-container guide-content-wrapper">
                <nav className="breadcrumb">
                    <Link to="/">Home</Link> &gt; <span>{title}</span>
                </nav>

                <article className="long-form-content">
                    <h1>{title}</h1>

                    <div className="intro-box">
                        <Info className="intro-icon" size={24} />
                        <p>{content.intro}</p>
                    </div>

                    <DelayedAd />

                    {content.sections.map((section, index) => (
                        <section key={index} className="guide-section">
                            <h2>{section.heading}</h2>

                            {section.body && (
                                <div className="section-body" dangerouslySetInnerHTML={{
                                    __html: section.body.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                }} />
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

                            {section.subsections && section.subsections.map((sub, idx) => (
                                <div key={idx} className="subsection">
                                    <h3>{sub.subHeading}</h3>
                                    <ul>
                                        {sub.list.map((item, i) => (
                                            <li key={i}>
                                                <CheckCircle size={16} className="list-icon" />
                                                {item}
                                            </li>
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
                                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                                            {link.text} ↗
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Ad placement after 2nd section */}
                            {index === 2 && <AdContainer format="rectangle" />}
                        </section>
                    ))}

                    <div className="guide-footer-note">
                        <p><strong>Disclaimer:</strong> We are an informational guide and not affiliated with any government agency. Always verify details on the official portals linked above.</p>
                    </div>
                </article>
            </div>
        </div>
    );
}
