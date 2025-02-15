// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import './index.css';
 

function App() {
    return (
        <Router>
            {/* Header is globally included on all pages */}
            <Header />

            {/* Define the routes for each page */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Footer is globally included on all pages */}
            <Footer />
        </Router>
    );
}

export default App;
