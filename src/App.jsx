import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import './modal.css';
import './layout.css';
import './about.css';
import { Header } from './components/Header';

import { Analytics as SiteAnalytics } from './components/Analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';


// Lazy loading components for performance

// Lazy loading components for performance
const Home = lazy(() => import('./Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const ServicePage = lazy(() => import('./components/ServicePage').then(module => ({ default: module.ServicePage })));
const GuidesIndex = lazy(() => import('./components/GuidesIndex'));
const GuidePage = lazy(() => import('./components/GuidePage'));

const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    color: '#64748b'
  }}>
    Loading...
  </div>
);

import ScrollToTop from './components/ScrollToTop';

// ... (existing imports)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SiteAnalytics />
      <div className="app-container">
        <Header />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/guides" element={<GuidesIndex />} />
            <Route path="/guides/:slug" element={<GuidePage />} />

            {/* Core Service Static Routes */}
            <Route path="/:serviceId" element={<ServicePage />} />

            {/* Sitemap Route (optional if needed for react-router) */}
            <Route path="/sitemap.xml" />
          </Routes>
        </Suspense>

        <VercelAnalytics />
      </div>
    </Router>
  );
}

export default App;
