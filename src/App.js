import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Ministries from './pages/Ministries';
import Donate from './pages/Donate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-green-50">
        <Navbar />
        {/* Add top padding to prevent content from being hidden behind navbar */}
        <main className="flex-grow pt-20 md:pt-24 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
