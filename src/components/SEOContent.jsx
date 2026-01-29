import { Link } from 'react-router-dom';

export function SEOContent({ setSearchTerm }) {
    const handleLinkClick = (term) => {
        if (setSearchTerm) {
            setSearchTerm(term);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <section className="seo-content-section" style={{ padding: '2rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <div className="content-container">
                <div style={{ maxWidth: '800px', margin: '0 auto', color: '#334155', lineHeight: '1.7' }}>

                    <h2 style={{ color: '#1e293b', marginBottom: '1rem' }}>Guide to Indian Government Documents & Certification</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Navigating the landscape of <strong>Indian government documents</strong> can often feel overwhelming. Whether you are applying for a new
                        <button className="text-link" onClick={() => handleLinkClick('Passport')}>Passport</button> or updating your
                        <button className="text-link" onClick={() => handleLinkClick('Aadhaar')}>Aadhaar card</button> details, having the correct
                        documentation is crucial for a successful application. BharatApply acts as your comprehensive guide, providing efficient,
                        up-to-date checklists for all major certificates and identity proofs required by state and central authorities.
                    </p>

                    <h2 style={{ color: '#1e293b', marginBottom: '1rem', marginTop: '2rem' }}>Essential Document Checklists for Every Citizen</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        One of the most common reasons for application rejection is missing or incorrect **proof of identity** or **proof of address**.
                        For instance, when applying for a <button className="text-link" onClick={() => handleLinkClick('PAN')}>PAN Card</button>,
                        it is mandatory to ensure that your demographic details match exactly with your Aadhaar data. Similarly, obtaining a
                        <button className="text-link" onClick={() => handleLinkClick('Driving')}>Driving License</button> requires a specific set of
                        forms depending on whether you are applying for a learner's license or a permanent one. Our platform simplifies this by
                        categorizing requirements for every major service, ensuring you have the right **certificates** before you visit a government office.
                    </p>

                    <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Understanding Vital Certificates</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Beyond identity cards, life events require specific documentation. A <button className="text-link" onClick={() => handleLinkClick('Birth')}>Birth Certificate</button>
                        is the first legal document for any citizen, essential for school admissions and passport issuance. For financial matters, an
                        <button className="text-link" onClick={() => handleLinkClick('Income')}>Income Certificate</button> is often needed for
                        scholarships and subsidy claims. We provide detailed file size specifications (e.g., JPEG under 50KB) and format requirements
                        to help you prepare your uploads for online portals like those of the Income Tax Department or the Ministry of External Affairs.
                    </p>

                    <h3 style={{ color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Why Accurate Documentation Matters</h3>
                    <p>
                        In the digital age, most services like the <strong>Passport Seva</strong> or <strong>NSDL PAN</strong> portal utilize automated
                        systems to verify uploaded documents. ensuring your **proof documents** are clear, valid, and correctly formatted is the
                        best way to avoid delays. From understanding the difference between a <button className="text-link" onClick={() => handleLinkClick('Voter')}>Voter ID</button>
                        application and a correction form, to knowing which gazetted officer is authorized to attest your documents, BharatApply covers
                        the nuanced details that official manuals often miss. Explore our popular services to find exactly what you need today.
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
