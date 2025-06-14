import React, { useRef } from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null); // ✪ This is the ref

const scrollTo = (ref) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <>
      <Header />
      <Navbar
        scrollToHome={() => scrollTo(homeRef)}
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToProjects={() => scrollTo(projectsRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <div ref={homeRef}><Welcome /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
