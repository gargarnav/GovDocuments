
import { FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="emblem-placeholder">
                        <FileText className="logo-icon" size={24} />
                    </div>
                    <Link to="/" className="brand-text">
                        <h1>BharatApply</h1>
                        <span className="subtitle">Official Document Guide</span>
                    </Link>
                </div>

                <nav className="nav-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/" className="nav-link">Services</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                </nav>
            </div>

            {/* Tricolor Strip */}
            <div className="tricolor-strip">
                <div className="band saffron"></div>
                <div className="band white"></div>
                <div className="band green"></div>
            </div>
        </header>
    );
}
