
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './modal.css';
import './layout.css';
import './about.css';
import { Header } from './components/Header';
import { Home } from './Home';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
