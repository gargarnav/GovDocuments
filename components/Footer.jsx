import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Links */}
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/guides">Guides</Link>
          <div className="footer-separator"></div>
          <Link href="/aadhaar-card">Aadhaar</Link>
          <Link href="/pan-card">PAN Card</Link>
          <Link href="/passport">Passport</Link>
          <Link href="/driving-licence">Driving License</Link>
          <Link href="/voter-id">Voter ID</Link>
        </div>

        {/* Trust & Disclaimer Section */}
        <div className="trust-section">
          <p className="footer-disclaimer">
            <strong>Disclaimer:</strong> BharatApply is an independent
            informational platform and is{" "}
            <strong>not affiliated with the Government of India</strong> or any
            government agency. We do not collect personal data. All applications
            must be submitted on official government portals ending in .gov.in or
            .nic.in.
          </p>

          <p className="official-portals">
            <strong>Official Government Portals:</strong>{" "}
            <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">
              UIDAI (Aadhaar)
            </a>{" "}
            &bull;{" "}
            <a
              href="https://passportindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Passport Seva
            </a>{" "}
            &bull;{" "}
            <a
              href="https://incometax.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Income Tax (PAN)
            </a>{" "}
            &bull;{" "}
            <a href="https://parivahan.gov.in" target="_blank" rel="noopener noreferrer">
              Driving License
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="copyright">
          &copy; {currentYear} BharatApply. Independent informational guide.
        </p>
      </div>
    </footer>
  );
}
