import { SEOHead } from './SEOHead';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { organizationSchema, articleSchema } from '../utils/seoSchemas';
import { pageMetadata, lastUpdatedDate } from '../utils/pageMetadata';

export function About() {
    return (
        <div className="about-container">
            <SEOHead
                title={pageMetadata.about.title}
                description={pageMetadata.about.description}
                keywords={pageMetadata.about.keywords}
                canonicalUrl="https://bharatapply.online/about"
                ogImage={pageMetadata.about.ogImage}
                datePublished={lastUpdatedDate}
                dateModified={lastUpdatedDate}
                schema={[
                    organizationSchema,
                    articleSchema("About BharatApply", pageMetadata.about.description, lastUpdatedDate, lastUpdatedDate)
                ]}
            />
            <div className="about-content">
                {/* EDIT SECTION 1: HEADER */}
                <h1>About BharatApply - Simplifying Government Paperwork</h1>

                {/* EDIT SECTION 2: INTRODUCTION */}
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At BharatApply, our mission is to make government documentation simple and clear.
                        The process can be confusing, and small errors cause delays and rejections.
                        We reduce that confusion by giving accurate, structured information in one place so you can prepare the right documents with confidence.
                    </p>
                    <p>
                        Explore our <Link to="/">comprehensive service directory</Link> to find document requirements for <Link to="/?search=aadhaar">Aadhaar</Link>, <Link to="/?search=pan">PAN Card</Link>, <Link to="/?search=passport">Passport</Link>, and many other government services.
                    </p>
                </section>

                {/* EDIT SECTION 3: WHAT WE DO */}
                <section className="about-section">
                    <h2>What We Do</h2>
                    <p>
                        We provide a citizen‑friendly guide for common services like Passport, Aadhaar, PAN, Voter ID, Driving License, and certificates.
                        On BharatApply, you can find:
                    </p>
                    <ul className="about-list">
                        <li><strong>Complete Document Checklists:</strong> Know exactly what proofs are accepted for Identity, Address, and Date of Birth. Check our guides for <Link to="/?search=birth">Birth Certificate</Link>, <Link to="/?search=income">Income Certificate</Link>, and other essential documents.</li>
                        <li><strong>File Upload Specifications:</strong> Clear file size and format rules (JPEG/PDF) to avoid upload errors.</li>
                        <li><strong>Photo & Signature Guidelines:</strong> Simple size and resolution requirements.</li>
                        <li><strong>Step-by-Step Guidance:</strong> (Coming Soon) Easy walkthroughs for online portals.</li>
                        <li><strong>Tips & Tricks:</strong> Practical advice to avoid common mistakes.</li>
                    </ul>
                    <p>
                        Browse our <Link to="/">complete list of services</Link> organized by categories including Identity Documents, Travel Documents, Certificates, Education, Banking & Tax, Vehicle & Transport, Police & Legal, and Health & Welfare.
                    </p>
                </section>

                {/* EDIT SECTION 4: POPULAR SERVICES */}
                <section className="about-section">
                    <h2>Popular Services</h2>
                    <p>
                        Get started with our most frequently accessed services:
                    </p>
                    <ul className="about-list">
                        <li><Link to="/?search=aadhaar">Aadhaar Card</Link> - Enrolment and updates</li>
                        <li><Link to="/?search=pan">PAN Card</Link> - New applications and corrections</li>
                        <li><Link to="/?search=passport">Passport</Link> - Fresh applications and renewals</li>
                        <li><Link to="/?search=driving">Driving License</Link> - Learner's and permanent licenses</li>
                        <li><Link to="/?search=voter">Voter ID</Link> - Registration and updates</li>
                        <li><Link to="/">View all services</Link></li>
                    </ul>
                </section>

                {/* EDIT SECTION 5: HOW WE HELP */}
                <section className="about-section">
                    <h2>How BharatApply Helps You</h2>
                    <p>
                        Our platform saves time and reduces frustration.
                        Instead of searching many sites and decoding complex rules, you get everything in one place.
                        We compile information from official sources and keep it easy to understand.
                    </p>
                    <p>
                        Each guide includes a complete checklist, clear file formats, and size limits.
                        We also share tips based on common issues so you can avoid delays.
                        Our goal is to help you finish your applications with confidence.
                    </p>
                    <p>
                        Whether you are applying for Aadhaar, renewing a passport, or updating PAN details, BharatApply can guide you.
                        We update our information to reflect the latest official guidelines.
                    </p>
                </section>

                {/* EDIT SECTION 6: DATA PRIVACY */}
                <section className="about-section">
                    <h2>Your Privacy & Data Safety</h2>
                    <p>
                        Applying for government documents involves sensitive information.
                        <strong>BharatApply is an informational guide</strong>. We do not collect, store, or process your personal data, biometrics, or financial information.
                        We point you to official government portals for submission and processing.
                    </p>
                    <p>
                        Never share OTPs or passwords with anyone claiming to represent our site.
                        Always check the URL and use official .gov.in or .nic.in websites before entering personal details.
                        Our checklists help you prepare documents safely before you go online.
                    </p>
                </section>

                {/* EDIT SECTION 7: DISCLAIMER */}
                <section className="about-section disclaimer">
                    <h3>Disclaimer</h3>
                    <p>
                        We are an independent informational platform and are <strong>not affiliated with the Government of India</strong> or any government agency.
                        While we strive for accuracy, official rules may change. Please always verify with the respective official government portals like <a href="https://uidai.gov.in" target="_blank" rel="nofollow">uidai.gov.in</a>, <a href="https://passportindia.gov.in" target="_blank" rel="nofollow">passportindia.gov.in</a>, or <a href="https://incometax.gov.in" target="_blank" rel="nofollow">incometax.gov.in</a>.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
