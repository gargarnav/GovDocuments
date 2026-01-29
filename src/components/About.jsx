import { SEOHead } from './SEOHead';
import { Link } from 'react-router-dom';

export function About() {
    return (
        <div className="about-container">
            <SEOHead
                title="About BharatApply"
                description="Learn about BharatApply's mission to simplify Indian government documentation. We provide clear checklists and file requirements for confident applications."
                canonicalUrl="https://bharatapply.online/about"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "BharatApply",
                    "url": "https://bharatapply.online",
                    "logo": "https://bharatapply.online/favicon.svg",
                    "sameAs": [
                        "https://facebook.com/bharatapply",
                        "https://twitter.com/bharatapply"
                    ]
                }}
            />
            <div className="about-content">
                {/* EDIT SECTION 1: HEADER */}
                <h1>About BharatApply - Simplifying Government Paperwork</h1>

                {/* EDIT SECTION 2: INTRODUCTION */}
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At BharatApply, our mission is to make Indian government documentation simple, clear, and accessible for everyone.

                        Navigating bureaucracy can be overwhelming. Many citizens face unnecessary delays and rejections due to unclear document requirements, changing guidelines,
                        and strict file upload rules (like "JPEG only, under 200KB"). We aim to reduce this confusion by providing accurate, structured information in one place—so users can prepare the correct documents and
                        complete applications confidently.
                    </p>
                    <p>
                        Explore our <Link to="/">comprehensive service directory</Link> to find document requirements for <Link to="/?search=Aadhaar">Aadhaar</Link>, <Link to="/?search=PAN">PAN Card</Link>, <Link to="/?search=Passport">Passport</Link>, and many other government services.
                    </p>
                </section>

                {/* EDIT SECTION 3: WHAT WE DO */}
                <section className="about-section">
                    <h2>What We Do</h2>
                    <p>
                        We provide a citizen-friendly documentation guide for common Indian government services, including passport, Aadhaar, PAN, voter ID, driving license, certificates, and more.
                        On BharatApply, you can find:
                    </p>
                    <ul className="about-list">
                        <li><strong>Complete Document Checklists:</strong> Know exactly what proofs are accepted for Identity, Address, and Date of Birth. Check our guides for <Link to="/?search=Birth">Birth Certificate</Link>, <Link to="/?search=Income">Income Certificate</Link>, and other essential documents.</li>
                        <li><strong>File Upload Specifications:</strong> Detailed file size and format (JPEG/PDF) requirements for each portal to avoid upload errors.</li>
                        <li><strong>Photo & Signature Guidelines:</strong> Specific dimensions and pixel resolutions required by NSDL, uidai, and Passport Seva.</li>
                        <li><strong>Step-by-Step Guidance:</strong> (Coming Soon) Detailed walkthroughs for online application portals.</li>
                        <li><strong>Tips & Tricks:</strong> Practical advice to help avoid common mistakes that lead to application rejection.</li>
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
                        <li><Link to="/?search=Aadhaar">Aadhaar Card</Link> - Enrolment and updates</li>
                        <li><Link to="/?search=PAN">PAN Card</Link> - New applications and corrections</li>
                        <li><Link to="/?search=Passport">Passport</Link> - Fresh applications and renewals</li>
                        <li><Link to="/?search=Driving">Driving License</Link> - Learner's and permanent licenses</li>
                        <li><Link to="/?search=Voter">Voter ID</Link> - Registration and updates</li>
                        <li><Link to="/">View all services</Link></li>
                    </ul>
                </section>

                {/* EDIT SECTION 5: HOW WE HELP */}
                <section className="about-section">
                    <h2>How BharatApply Helps You</h2>
                    <p>
                        Our platform is designed to save you time and reduce the frustration often associated with government document applications. 
                        Instead of searching through multiple government websites and trying to decipher complex guidelines, BharatApply provides 
                        everything you need in one place. We've compiled information from official sources and organized it in an easy-to-understand format.
                    </p>
                    <p>
                        Each service guide includes a complete checklist of required documents, specific file format requirements, size limitations, 
                        and step-by-step instructions where applicable. We also provide tips based on common issues faced by applicants, helping you 
                        avoid mistakes that could delay your application. Our goal is to make the process as smooth as possible so you can complete 
                        your applications with confidence.
                    </p>
                    <p>
                        Whether you're applying for your first Aadhaar card, renewing your passport, updating your PAN details, or applying for 
                        any other government document, BharatApply is here to guide you through the process. We regularly update our information to 
                        reflect the latest guidelines and requirements from official government portals.
                    </p>
                </section>

                {/* EDIT SECTION 6: DISCLAIMER */}
                <section className="about-section disclaimer">
                    <h3>Disclaimer</h3>
                    <p>
                        We are an independent informational platform and are <strong>not affiliated with the Government of India</strong> or any government agency.
                        While we strive for accuracy, official rules may change. Please always verify with the respective official government portals like <a href="https://uidai.gov.in" target="_blank" rel="nofollow">uidai.gov.in</a>, <a href="https://passportindia.gov.in" target="_blank" rel="nofollow">passportindia.gov.in</a>, or <a href="https://incometax.gov.in" target="_blank" rel="nofollow">incometax.gov.in</a>.
                    </p>
                </section>
            </div>
            <footer className="footer" style={{ marginTop: 'auto' }}>
                <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <div className="footer-links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/?search=Aadhaar">Aadhaar</Link>
                        <Link to="/?search=PAN">PAN Card</Link>
                        <Link to="/?search=Passport">Passport</Link>
                    </div>
                    <p>© 2024 BharatApply. Not affiliated with the Government of India.</p>
                </div>
            </footer>
        </div >
    );
}
