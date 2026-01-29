
import { useState } from 'react';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { ServiceCard } from './components/ServiceCard';
import { DocumentModal } from './components/DocumentModal';
import { services, categories } from './data/services';
import { AdContainer } from './components/AdContainer';
import { SEOHead } from './components/SEOHead';
import { Menu, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

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
                title="Home"
                description="BharatApply: Your trusted guide for government documents in India. Easily find, apply, and track Aadhar, PAN, Passport, Driving License, and more."
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

                {/* FAQ Section for SEO Content Depth */}
                <section className="faq-section" style={{ padding: '2rem', background: '#fff', marginTop: '2rem' }}>
                    <div className="content-container">
                        <h2>Frequently Asked Questions about Indian Government Documents</h2>
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
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={24} />
                            </a>
                        </div>
                        <div className="footer-links">
                            <Link to="/about">About Us</Link>
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
