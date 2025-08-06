import Blog from "./components/Blog";
import { useRef } from 'react';
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
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToBlogs={() => scrollToSection(blogsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Header />
      <div ref={homeRef}><Welcome /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={blogsRef}><Blog /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
