
import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { ServiceCard } from './components/ServiceCard';
import { DocumentModal } from './components/DocumentModal';
import { services, categories } from './data/services';
import { AdContainer } from './components/AdContainer';
import { DelayedAd } from './components/DelayedAd';
import { SEOHead } from './components/SEOHead';
import { SEOContent } from './components/SEOContent';
import { Footer } from './components/Footer';
import { Menu, Facebook, Twitter } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { websiteSchema, faqSchema, organizationSchema } from './utils/seoSchemas';
import { pageMetadata, lastUpdatedDate } from './utils/pageMetadata';

export function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

    // Handle URL parameters for SEO-friendly links
    useEffect(() => {
        const serviceId = searchParams.get('service');
        const search = searchParams.get('search');
        const category = searchParams.get('category');

        if (serviceId) {
            const service = services.find(s => s.id === serviceId);
            if (service) {
                setSelectedService(service);
            }
        } else {
            // Close modal if no service param
            setSelectedService(null);
        }

        if (category) {
            setSelectedCategory(category);
        } else {
            setSelectedCategory(null);
        }

        if (search) {
            setSearchTerm(search);
        }
    }, [searchParams]);

    const filteredServices = services.filter(service => {
        // ... (existing filter logic)
        // 1. Filter by Category
        if (selectedCategory && service.categoryId !== selectedCategory) return false;

        // 2. Filter by Search
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            return (
                service.title.toLowerCase().includes(term) ||
                service.description.toLowerCase().includes(term)
            );
        }

        return true;
    });

    const activeCategory = categories.find(c => c.id === selectedCategory);
    const hasParams = Array.from(searchParams.keys()).length > 0;
    const canonicalUrl = 'https://bharatapply.online';
    const robots = hasParams ? 'noindex,follow' : undefined;

    const faqItems = [
        {
            question: 'How do I apply for a PAN Card online?',
            answer: 'To apply for a PAN card, visit the NSDL or UTIITSL website. You will need proof of identity (Aadhaar), proof of address, and a photograph. Our guide details the exact file sizes needed for upload.'
        },
        {
            question: 'What documents are required for a new Passport?',
            answer: 'For a fresh passport, you generally need proof of address (Aadhaar, Voter ID, etc.), proof of date of birth (Birth Certificate, 10th Marksheet), and possibly a non-ECR proof if eligible.'
        },
        {
            question: 'Is it mandatory to link Aadhaar with PAN?',
            answer: 'Yes, as per CBDT guidelines, linking Aadhaar with PAN is mandatory to prevent your PAN from becoming inoperative. Ensure your demographic details match in both documents.'
        },
        {
            question: 'How can I update my Aadhaar details?',
            answer: 'You can update your address online via the myAadhaar portal. For biometric or name changes, you must visit a permanent enrolment center. Check our specific service card for document lists.'
        },
        {
            question: 'What is the processing time for government documents?',
            answer: 'Processing times vary by service. Aadhaar updates typically take 7-15 days, PAN card applications take 15-20 days, and passport applications can take 30-45 days depending on the type of application and verification required.'
        },
        {
            question: 'Can I track my application status online?',
            answer: 'Yes, most government portals provide online tracking facilities. You can track your Aadhaar status using your enrolment number, PAN application using your acknowledgment number, and passport status using your file number on the respective official websites.'
        }
    ];

    return (
        <div className="main-layout">
            <SEOHead
                title={pageMetadata.home.title}
                description={pageMetadata.home.description}
                keywords={pageMetadata.home.keywords}
                canonicalUrl="https://bharatapply.online"
                ogImage={pageMetadata.home.ogImage}
                robots={hasParams ? 'noindex,follow' : undefined}
                datePublished={lastUpdatedDate}
                dateModified={lastUpdatedDate}
                schema={[
                    organizationSchema,
                    websiteSchema(),
                    faqSchema(faqItems)
                ]}
            />
            <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={(id) => {
                    setSelectedCategory(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="content-wrapper">
                {/* Mobile Category Toggle */}
                <div className="mobile-category-bar">
                    <button
                        className="mobile-filter-btn"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu size={18} />
                        <span>Categories</span>
                    </button>
                    <span className="current-category-label">
                        {activeCategory ? activeCategory.title : 'All Services'}
                    </span>
                </div>
                <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm}>
                    <div className="quick-links">
                        <Link to="/?search=aadhaar" onClick={() => { setSearchTerm('aadhaar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Aadhaar Card</Link>
                        <Link to="/?search=pan" onClick={() => { setSearchTerm('pan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">PAN Card</Link>
                        <Link to="/?search=passport" onClick={() => { setSearchTerm('passport'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Passport</Link>
                        <Link to="/?search=driving" onClick={() => { setSearchTerm('driving'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Driving License</Link>
                        <Link to="/?search=birth" onClick={() => { setSearchTerm('birth'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Birth Certificate</Link>
                        <Link to="/?search=income" onClick={() => { setSearchTerm('income'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Income Certificate</Link>
                    </div>
                </Hero>




                <div className="content-container">
                    <section className="services-section">
                        <div className="section-header">
                            <h3>{activeCategory ? activeCategory.title : 'All Services'}</h3>
                            <p>{activeCategory ? activeCategory.description : 'Select a service to view document requirements'}</p>
                        </div>

                        <div className="services-grid">
                            {filteredServices.map(service => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    onClick={setSelectedService}
                                />
                            ))}

                            {filteredServices.length === 0 && (
                                <div className="no-results">
                                    <p>No services found matching your criteria.</p>
                                </div>
                            )}
                        </div>

                        <AdContainer format="banner" />
                    </section>
                </div>

                {/* Rich Semantic Content for SEO */}
                <SEOContent />

                {/* Additional Content Section for SEO */}
                <section className="additional-content-section">
                    <div className="content-container">
                        <h2>Complete Guide to Government Document Applications</h2>
                        <p>
                            Applying for government documents in India takes preparation. Each service has its own rules.
                            If you are applying for the first time or updating a document, having the right papers saves time and avoids rejections.
                            Our guides cover identity cards, travel documents, certificates, and more.
                        </p>
                        <p>
                            Government portals have strict file size and format rules. For example, a passport photo may need a JPEG under 200KB.
                            PAN card photos often require a 3.5x2.5cm size. Knowing these rules before upload prevents delays.
                            Our checklists help you prepare everything before you start.
                        </p>
                        <h3>Common Application Mistakes to Avoid</h3>
                        <p>
                            Many applications fail due to small mistakes. Common issues include name mismatches, wrong file formats, large images, and missing self‑attestation.
                            We list these problems and simple fixes so your application moves faster. Always match your name, date of birth, and address on every document.
                        </p>
                    </div>
                </section>

                {/* FAQ Section for SEO Content Depth */}
                <section className="faq-section">
                    <div className="content-container">
                        <h2>Detailed Guides for Government Documents</h2>
                        <p className="section-desc">
                            Need detailed step-by-step guidance on specific documents? Our comprehensive guides cover every major government service with complete checklists, FAQ answers, and official government references.
                        </p>
                        <Link
                            to="/guides"
                            className="guides-link-btn"
                        >
                            Browse All Guides →
                        </Link>
                    </div>
                </section>

                {/* FAQ Section for SEO Content Depth */}
                <section className="faq-section">
                    <div className="content-container">
                        <h2>FAQs About Aadhaar, PAN & Passport Document</h2>
                        <div className="faq-grid">
                            <article>
                                <h3>How do I apply for a PAN Card online?</h3>
                                <p>Visit the NSDL or UTIITSL website. You will need proof of identity (Aadhaar), proof of address, and a photo. Our guide lists the exact file sizes.</p>
                            </article>
                            <article>
                                <h3>What documents are required for a new Passport?</h3>
                                <p>You usually need proof of address, proof of date of birth, and sometimes a non‑ECR proof if eligible.</p>
                            </article>
                            <article>
                                <h3>Is it mandatory to link Aadhaar with PAN?</h3>
                                <p>Yes. Linking Aadhaar with PAN is required to keep the PAN active. Make sure your details match in both.</p>
                            </article>
                            <article>
                                <h3>How can I update my Aadhaar details?</h3>
                                <p>You can update your address online on the myAadhaar portal. For biometrics or name changes, visit an enrolment center.</p>
                            </article>
                            <article>
                                <h3>What is the processing time for government documents?</h3>
                                <p>Processing times vary. Aadhaar updates often take 7–15 days, PAN cards 15–20 days, and passports 30–45 days.</p>
                            </article>
                            <article>
                                <h3>Can I track my application status online?</h3>
                                <p>Yes. Most portals provide tracking. Use your enrolment, acknowledgment, or file number on the official site.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            <DocumentModal
                service={selectedService}
                onClose={() => {
                    setSelectedService(null);
                    // Remove service param from URL
                    setSearchParams(prev => {
                        const newParams = new URLSearchParams(prev);
                        newParams.delete('service');
                        return newParams;
                    });
                }}
            />
        </div>
    );
}
