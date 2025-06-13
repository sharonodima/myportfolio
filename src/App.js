import React, { useRef } from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  const contactRef = useRef(null); // ✪ This is the ref

  return (
    <>
      <Header />
      <Navbar scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Welcome />
      <About />
      <Projects />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
