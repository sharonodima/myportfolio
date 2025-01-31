import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Import the shared Header
import "/src/Theme.css"

function App() {
  return (
    <Router>
      <div>
        {/* Include the global header */}
        <Header />
        {/* Include the navigation bar */}
        <Navbar />
        {/* Define routes for the app */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
