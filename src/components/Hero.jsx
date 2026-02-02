import { Search } from 'lucide-react';

export function Hero({ searchTerm, onSearchChange, children }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Government Document Requirements in India – BharatApply</h1>
                <p>Find exact document requirements and file specifications for all your essential applications.</p>

                <div className="search-bar-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="What document are you looking for? (e.g. Passport, PAN)"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                {children}
            </div>
        </section>
    );
}
