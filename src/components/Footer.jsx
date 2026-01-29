import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', paddingBottom: '2rem' }}>
                {/* Main Footer Links */}
                <div className="footer-links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px' }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/?search=aadhaar">Aadhaar</Link>
                    <Link to="/?search=pan">PAN Card</Link>
                    <Link to="/?search=passport">Passport</Link>
                    <Link to="/?search=driving">Driving License</Link>
                    <Link to="/?search=voter">Voter ID</Link>
                </div>

                {/* Social Links */}
                <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                    {/* Add social icons if needed */}
                </div>

                {/* Trust & Disclaimer Section */}
                <div className="trust-section" style={{ maxWidth: '700px', textAlign: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                        <strong>Disclaimer:</strong> BharatApply is an independent informational platform and is <strong>not affiliated with the Government of India</strong> or any government agency. 
                        We do not collect personal data. All applications must be submitted to official government portals ending in .gov.in or .nic.in.
                    </p>
                    
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                        <strong>Official Government Portals:</strong> 
                        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', color: 'var(--color-primary)' }}>UIDAI (Aadhaar)</a> • 
                        <a href="https://passportindia.gov.in" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', color: 'var(--color-primary)' }}>Passport Seva</a> • 
                        <a href="https://incometax.gov.in" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', color: 'var(--color-primary)' }}>Income Tax (PAN)</a> • 
                        <a href="https://saksham.gov.in" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', color: 'var(--color-primary)' }}>Driving License</a>
                    </p>
                </div>

                {/* Copyright */}
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    © {currentYear} BharatApply. Last updated: {new Date().toLocaleDateString()}.
                </p>
            </div>
        </footer>
    );
}
