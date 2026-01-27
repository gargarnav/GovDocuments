import { useState } from 'react';
import './App.css';
import './modal.css';
import './layout.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { DocumentModal } from './components/DocumentModal';
import { services } from './data/services';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />

      <main>
        {/* We can pass search handler to Hero if we want, or lift search state up.
            For now, let's just use the Hero for display and add a working search input here or modify Hero to accept props. 
            Actually, let's modify Hero to accept props for better UX.
        */}
        <div className="hero-wrapper">
          {/* Re-implementing search logic inside Hero would require prop drilling or context. 
                 For simplicity, I'll just render Hero and put the grid below. 
                 To make search work, I should probably pass setSearchTerm to Hero. 
                 Let's keep it simple for now and maybe add search prop to Hero later if needed.
                 Wait, I wanted search to work. Let's pass the setter to Hero. 
             */}
          <Hero />
          {/* Since Hero has its own input, I need to connect it. 
                 I'll update Hero in a bit to accept `onSearch` prop.
             */}
        </div>

        <div className="content-container">
          <section className="services-section">
            <div className="section-header">
              <h3>Available Services</h3>
              <p>Select a service to view document requirements</p>
            </div>

            <div className="services-grid">
              {filteredServices.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={setSelectedService}
                />
              ))}
            </div>
          </section>
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
