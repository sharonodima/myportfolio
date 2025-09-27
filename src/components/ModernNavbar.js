import React, { useState, useEffect } from 'react';

const ModernNavbar = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToBlogs, scrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'blogs', 'contact'];
      const sectionElements = sections.map(id => document.querySelector(`[data-section="${id}"]`));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', action: scrollToHome, section: 'home' },
    { name: 'About', action: scrollToAbout, section: 'about' },
    { name: 'Projects', action: scrollToProjects, section: 'projects' },
    { name: 'Blog', action: scrollToBlogs, section: 'blogs' },
    { name: 'Contact', action: scrollToContact, section: 'contact' },
  ];

  const handleNavClick = (action, section) => {
    action();
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip Navigation for WCAG 2.1 AA */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-50 font-medium"
      >
        Skip to main content
      </a>
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 navbar-blur backdrop-blur-md py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-modern">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.action, item.section)}
                  className="relative px-4 py-2 font-medium transition-all duration-300 text-gradient hover:text-gradient"
                >
                  {item.name}
                  {activeSection === item.section && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`w-6 h-6 text-white transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.action, item.section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item.section
                      ? 'bg-gradient-primary text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default ModernNavbar;