import ModernBlog from "./components/ModernBlog";
import { useRef } from 'react';
import ModernHero from './components/ModernHero';
import ModernAbout from './components/ModernAbout';
import ModernProjects from './components/ModernProjects';
import ModernContact from './components/ModernContact';
import ModernNavbar from './components/ModernNavbar';
import ScrollToTopButton from './components/ScrollToTopButton';

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
      <ModernNavbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToBlogs={() => scrollToSection(blogsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <div ref={homeRef} data-section="home"><ModernHero scrollToProjects={() => scrollToSection(projectsRef)} scrollToContact={() => scrollToSection(contactRef)} /></div>
      <div ref={aboutRef} data-section="about"><ModernAbout scrollToProjects={() => scrollToSection(projectsRef)} scrollToContact={() => scrollToSection(contactRef)} /></div>
      <div ref={projectsRef} data-section="projects"><ModernProjects scrollToContact={() => scrollToSection(contactRef)} /></div>
      <div ref={blogsRef} data-section="blogs"><ModernBlog /></div>
      <div ref={contactRef} data-section="contact"><ModernContact /></div>
      <ScrollToTopButton />
    </>
  );
}

export default App;
