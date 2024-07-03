import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './theme.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Preloader from './components/Preloader/Preloader';
import { useEffect, useState } from 'react';

const App: React.FC = () => {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Sidebar />
              <div className='content' style={{ flex: 1, }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Add other routes here */}
                </Routes>
              </div>
            </div>
          </Router>
        </>
      )}
    </div>

  );
}

export default App;
