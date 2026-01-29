import { Link } from 'react-router-dom';

export function SEOContent() {

    return (
        <section className="seo-content-section" style={{ padding: '2rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <div className="content-container">
                <div style={{ maxWidth: '800px', margin: '0 auto', color: '#334155', lineHeight: '1.7' }}>

                    <h2 style={{ color: '#1e293b', marginBottom: '1rem' }}>Guide to Indian Government Documents & Certification</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Indian government documents can be confusing. If you are applying for a
                        <Link to="/?search=Passport" className="text-link">Passport</Link> or updating your
                        <Link to="/?search=Aadhaar" className="text-link">Aadhaar card</Link>, you need the right documents.
                        BharatApply is a simple guide with clear, up‑to‑date checklists for the most common services.
                    </p>

                    <h2 style={{ color: '#1e293b', marginBottom: '1rem', marginTop: '2rem' }}>Essential Document Checklists for Every Citizen</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Many applications are rejected because a proof is missing or wrong. When you apply for a
                        <Link to="/?search=PAN" className="text-link">PAN Card</Link>, your details must match your Aadhaar.
                        A <Link to="/?search=Driving" className="text-link">Driving License</Link> also needs the right forms.
                        We group requirements by service so you know what to carry before you visit an office.
                    </p>

                    <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Understanding Vital Certificates</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Life events need specific papers. A <Link to="/?search=Birth" className="text-link">Birth Certificate</Link>
                        is needed for school admissions and passports. An
                        <Link to="/?search=Income" className="text-link">Income Certificate</Link> is used for scholarships and subsidies.
                        We list clear file sizes and formats, like “JPEG under 50KB,” so uploads are accepted.
                    </p>

                    <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Why Accurate Documentation Matters</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Most portals use automated checks. Clear, valid, and correctly sized files help you avoid delays.
                        We explain small but important details, like the difference between a new
                        <Link to="/?search=Voter" className="text-link">Voter ID</Link> application and a correction form.
                        Browse our <Link to="/" className="text-link">popular services</Link> to get started.
                    </p>

                    <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Common Application Pitfalls to Avoid</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Small errors cause many rejections. A
                        <Link to="/?search=Passport" className="text-link">Passport</Link> photo may need a white background,
                        while some state portals accept light blue. Name mismatches between
                        <Link to="/?search=Aadhaar" className="text-link">Aadhaar</Link> and school records are also common.
                        We give quick fixes and tips, including how to resize images or reduce file size. This helps your application move faster.
                    </p>

                </div>
            </div>
            <style jsx>{`
                .text-link {
                    background: none;
                    border: none;
                    padding: 0;
                    color: #2563eb;
                    font-weight: 500;
                    text-decoration: underline;
                    cursor: pointer;
                    font-size: inherit;
                    font-family: inherit;
                }
                .text-link:hover {
                    color: #1d4ed8;
                }
            `}</style>
        </section>
    );
}
