
import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { ServiceCard } from './components/ServiceCard';
import { DocumentModal } from './components/DocumentModal';
import { services, categories } from './data/services';
import { AdContainer } from './components/AdContainer';
import { SEOHead } from './components/SEOHead';
import { SEOContent } from './components/SEOContent';
import { Menu, Facebook, Twitter } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

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
        
        if (serviceId) {
            const service = services.find(s => s.id === serviceId);
            if (service) {
                setSelectedService(service);
            }
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

    return (
        <div className="main-layout">
            <SEOHead
                title="Indian Government Documents Guide"
                description="BharatApply: Your trusted guide for government documents in India. Easily find, apply, and track Aadhar, PAN, Passport, Driving License, and more."
                canonicalUrl="https://bharatapply.online"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "BharatApply",
                    "url": "https://bharatapply.online",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://bharatapply.online/?s={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
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
                <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />


                <div className="content-container">
                    {/* Interior Linking Section for SEO */}
                    <section className="popular-services" style={{ padding: '0 0 2rem 0' }}>
                        <h2>Popular Government Services</h2>
                        <div className="quick-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            <Link to="/?search=Aadhaar" onClick={(e) => { e.preventDefault(); setSearchTerm('Aadhaar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Aadhaar Card</Link>
                            <Link to="/?search=PAN" onClick={(e) => { e.preventDefault(); setSearchTerm('PAN'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">PAN Card</Link>
                            <Link to="/?search=Passport" onClick={(e) => { e.preventDefault(); setSearchTerm('Passport'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Passport</Link>
                            <Link to="/?search=Driving" onClick={(e) => { e.preventDefault(); setSearchTerm('Driving'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Driving License</Link>
                            <Link to="/?search=Birth" onClick={(e) => { e.preventDefault(); setSearchTerm('Birth'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Birth Certificate</Link>
                            <Link to="/?search=Income" onClick={(e) => { e.preventDefault(); setSearchTerm('Income'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-chip">Income Certificate</Link>
                        </div>
                    </section>
                </div>
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
                <SEOContent setSearchTerm={setSearchTerm} />

                {/* Additional Content Section for SEO */}
                <section className="additional-content-section" style={{ padding: '2rem', background: '#fff', marginTop: '2rem' }}>
                    <div className="content-container">
                        <h2>Complete Guide to Government Document Applications</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            Applying for government documents in India requires careful preparation and understanding of the specific requirements for each service. 
                            Whether you're a first-time applicant or need to update existing documents, having the correct paperwork ready can save you time and prevent 
                            application rejections. Our comprehensive guides cover all major government services including identity documents, travel documents, 
                            certificates, and more.
                        </p>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            Each government portal has specific file format and size requirements that must be strictly followed. For example, passport applications 
                            require JPEG images under 200KB, while PAN card applications need photos sized at 3.5x2.5cm. Understanding these specifications before 
                            uploading can prevent common errors that lead to application delays. Our detailed checklists ensure you have everything ready before 
                            starting your online application.
                        </p>
                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Common Application Mistakes to Avoid</h3>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            Many applications are rejected due to simple mistakes that can be easily avoided. Common issues include mismatched names across documents, 
                            incorrect file formats, oversized images, and missing self-attestation. Our guides highlight these common pitfalls and provide solutions to 
                            ensure your application is processed smoothly. Always verify that your name, date of birth, and address match exactly across all submitted documents.
                        </p>
                    </div>
                </section>

                {/* FAQ Section for SEO Content Depth */}
                <section className="faq-section" style={{ padding: '2rem', background: '#fff', marginTop: '2rem' }}>
                    <div className="content-container">
                        <h2>FAQs About Aadhaar, PAN & Passport Document</h2>
                        <div className="faq-grid" style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                            <article>
                                <h3>How do I apply for a PAN Card online?</h3>
                                <p>To apply for a PAN card, visit the NSDL or UTIITSL website. You will need proof of identity (Aadhaar), proof of address, and a photograph. Our guide details the exact file sizes needed for upload.</p>
                            </article>
                            <article>
                                <h3>What documents are required for a new Passport?</h3>
                                <p>For a fresh passport, you generally need proof of address (Aadhaar, Voter ID, etc.), proof of date of birth (Birth Certificate, 10th Marksheet), and possibly a non-ECR proof if eligible.</p>
                            </article>
                            <article>
                                <h3>Is it mandatory to link Aadhaar with PAN?</h3>
                                <p>Yes, as per CBDT guidelines, linking Aadhaar with PAN is mandatory to prevent your PAN from becoming inoperative. Ensure your demographic details match in both documents.</p>
                            </article>
                            <article>
                                <h3>How can I update my Aadhaar details?</h3>
                                <p>You can update your address online via the myAadhaar portal. For biometric or name changes, you must visit a permanent enrolment center. Check our specific service card for document lists.</p>
                            </article>
                            <article>
                                <h3>What is the processing time for government documents?</h3>
                                <p>Processing times vary by service. Aadhaar updates typically take 7-15 days, PAN card applications take 15-20 days, and passport applications can take 30-45 days depending on the type of application and verification required.</p>
                            </article>
                            <article>
                                <h3>Can I track my application status online?</h3>
                                <p>Yes, most government portals provide online tracking facilities. You can track your Aadhaar status using your enrolment number, PAN application using your acknowledgment number, and passport status using your file number on the respective official websites.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div className="footer-links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/?search=Aadhaar">Aadhaar</Link>
                            <Link to="/?search=PAN">PAN Card</Link>
                            <Link to="/?search=Passport">Passport</Link>
                            <Link to="/?search=Driving">Driving License</Link>
                            <Link to="/?search=Voter">Voter ID</Link>
                        </div>
                        <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={24} />
                            </a>
                        </div>
                        <p>© 2024 BharatApply. Not affiliated with the Government of India.</p>
                    </div>
                </footer>
            </div>

            <DocumentModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />
        </div>
    );
}
