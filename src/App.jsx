import { useState } from 'react';
import './App.css';
import './modal.css';
import './layout.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { DocumentModal } from './components/DocumentModal';
import { Sidebar } from './components/Sidebar';
import { services, categories } from './data/services';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service => {
    // 1. Filter by Category
    if (selectedCategory && service.categoryId !== selectedCategory) return false;

    // 2. Filter by Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        service.title.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term)
      );
    }

    return true;
  });

  const activeCategory = categories.find(c => c.id === selectedCategory);

  // Theme segregations
  const isPrivateSection = activeCategory?.isPrivate;

  return (
    <div className={`app-container ${isPrivateSection ? 'theme-private' : ''}`}>
      <Header />

      <main className="main-layout">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => {
            setSelectedCategory(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        <div className="content-wrapper">
          <Hero />

          <div className="content-container">
            <section className="services-section">
              <div className="section-header">
                <h3>{activeCategory ? activeCategory.title : 'All Services'}</h3>
                <p>{activeCategory ? activeCategory.description : 'Select a service to view document requirements'}</p>
              </div>

              <div className="services-grid">
                {filteredServices.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={setSelectedService}
                  />
                ))}

                {filteredServices.length === 0 && (
                  <div className="no-results">
                    <p>No services found matching your criteria.</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 GovDocs Assist. Not affiliated with the Government of India.</p>
      </footer>

      <DocumentModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

export default App;
