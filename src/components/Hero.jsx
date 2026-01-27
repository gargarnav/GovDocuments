import { Search } from 'lucide-react';

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>Simplifying Government Paperwork</h2>
                <p>Find exact document requirements and file specifications for all your essential applications.</p>

                <div className="search-bar-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="What document are you looking for? (e.g. Passport, PAN)"
                        className="search-input"
                    />
                </div>
            </div>
        </section>
    );
}
