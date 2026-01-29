import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

export function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="emblem-placeholder">
                        <Logo className="logo-icon" size={24} />
                    </div>
                    <Link to="/" className="brand-text">
                        <div className="brand-title">BharatApply</div>
                        <span className="subtitle">Official Document Guide</span>
                    </Link>
                </div>

                <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/" className="nav-link">Services</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <ThemeToggle />
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
