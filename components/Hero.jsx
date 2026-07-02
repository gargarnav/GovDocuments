import { Search } from "lucide-react";

export function Hero({ searchTerm, onSearchChange, children }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Government Document Requirements in India</h1>
        <p>
          Find the exact documents, file specifications, fees, and processing
          times for essential government applications, all in one place.
        </p>

        <div className="search-bar-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="What document are you looking for? (e.g. Passport, PAN)"
            className="search-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search documents"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
