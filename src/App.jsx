
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import './modal.css';
import './layout.css';
import './about.css';
import { Header } from './components/Header';
import { Analytics } from './components/Analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { AdLoader } from './components/AdLoader';

// Lazy loading components for performance
const Home = lazy(() => import('./Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
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

function App() {
  return (
    <Router>
      <Analytics />
      <AdLoader />
      <div className="app-container">
        <Header />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/guides" element={<GuidesIndex />} />
            <Route path="/guides/:slug" element={<GuidePage />} />
          </Routes>
        </Suspense>

        <VercelAnalytics />
      </div>
    </Router>
  );
}

export default App;
