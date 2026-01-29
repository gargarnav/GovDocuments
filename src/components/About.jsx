import { SEOHead } from './SEOHead';

export function About() {
    return (
        <div className="about-container">
            <SEOHead
                title="About Us"
                description="Learn about BharatApply's mission to simplify Indian government documentation. We provide clear checklists and file requirements for confident applications."
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
                </section>

                {/* EDIT SECTION 3: WHAT WE DO */}
                <section className="about-section">
                    <h2>What We Do</h2>
                    <p>
                        We provide a citizen-friendly documentation guide for common Indian government services, including passport, Aadhaar, PAN, voter ID, driving license, certificates, and more.
                        On BharatApply, you can find:
                    </p>
                    <ul className="about-list">
                        <li><strong>Complete Document Checklists:</strong> Know exactly what proofs are accepted for Identity, Address, and Date of Birth.</li>
                        <li><strong>File Upload Specifications:</strong> Detailed file size and format (JPEG/PDF) requirements for each portal to avoid upload errors.</li>
                        <li><strong>Photo & Signature Guidelines:</strong> Specific dimensions and pixel resolutions required by NSDL, uidai, and Passport Seva.</li>
                        <li><strong>Step-by-Step Guidance:</strong> (Coming Soon) Detailed walkthroughs for online application portals.</li>
                        <li><strong>Tips & Tricks:</strong> Practical advice to help avoid common mistakes that lead to application rejection.</li>
                    </ul>
                </section>

                {/* EDIT SECTION 4: DISCLAIMER */}
                <section className="about-section disclaimer">
                    <h3>Disclaimer</h3>
                    <p>
                        We are an independent informational platform and are <strong>not affiliated with the Government of India</strong> or any government agency.
                        While we strive for accuracy, official rules may change. Please always verify with the respective official government portals like <a href="https://uidai.gov.in" target="_blank" rel="nofollow">uidai.gov.in</a>, <a href="https://passportindia.gov.in" target="_blank" rel="nofollow">passportindia.gov.in</a>, or <a href="https://incometax.gov.in" target="_blank" rel="nofollow">incometax.gov.in</a>.
                    </p>
                </section>
            </div>
            <footer className="footer" style={{ marginTop: 'auto' }}>
                <p>© 2024 BharatApply. Not affiliated with the Government of India.</p>
            </footer>
        </div >
    );
}
