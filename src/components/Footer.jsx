import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Main Footer Links */}
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/disclaimer">Disclaimer</Link>
                    <div className="footer-separator"></div>
                    <Link to="/aadhaar-card">Aadhaar</Link>
                    <Link to="/pan-card">PAN Card</Link>
                    <Link to="/passport">Passport</Link>
                    <Link to="/driving-licence">Driving License</Link>
                    <Link to="/voter-id">Voter ID</Link>
                </div>

                {/* Social Links */}
                <div className="social-links">
                    {/* Add social icons if needed */}
                </div>

                {/* Trust & Disclaimer Section */}
                <div className="trust-section">
                    <p className="footer-disclaimer">
                        <strong>Disclaimer:</strong> BharatApply is an independent informational platform and is <strong>not affiliated with the Government of India</strong> or any government agency.
                        We do not collect personal data. All applications must be submitted to official government portals ending in .gov.in or .nic.in.
                    </p>

                    <p className="official-portals">
                        <strong>Official Government Portals:</strong>
                        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">UIDAI (Aadhaar)</a> •
                        <a href="https://passportindia.gov.in" target="_blank" rel="noopener noreferrer">Passport Seva</a> •
                        <a href="https://incometax.gov.in" target="_blank" rel="noopener noreferrer">Income Tax (PAN)</a> •
                        <a href="https://saksham.gov.in" target="_blank" rel="noopener noreferrer">Driving License</a>
                    </p>
                </div>

                {/* Copyright */}
                <p className="copyright">
                    © {currentYear} BharatApply. Last updated: {new Date().toLocaleDateString()}.
                </p>
            </div>
        </footer>
    );
}
