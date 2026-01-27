import { FileText } from 'lucide-react';

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="emblem-placeholder">
                        {/* Abstract representation of a seal or logo */}
                        <FileText className="logo-icon" size={24} />
                    </div>
                    <div className="brand-text">
                        <h1>GovDocs Assist</h1>
                        <span className="subtitle">Official Document Guide</span>
                    </div>
                </div>

                <nav className="nav-links">
                    <a href="#" className="nav-link active">Home</a>
                    <a href="#" className="nav-link">Services</a>
                    <a href="#" className="nav-link">About</a>
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
