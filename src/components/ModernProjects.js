import React, { useState, useEffect, useRef } from 'react';
import project1 from "../Project1.jpeg";
import project2 from "../Project2.jpeg";
import project3 from "../Project3.jpeg";

const ModernProjects = ({ scrollToContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const projects = [
    {
      title: "Store Front",
      category: "Frontend Development",
      img: project1,
      link: "https://sharonodima.github.io/HTML-CSS-Responsive-Practice/",
      desc: "Created a Single Page Application with HTML, CSS, and JavaScript to showcase responsive design elements and executed responsive layouts by leveraging media queries to facilitate mobile viewing. I enhanced accessibility in accordance with WCAG standards by using scalable font units and ensuring content was available to assistive technologies like screen readers.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WCAG"],
      featured: false
    },
    {
      title: "Instagram Clone",
      category: "Full Stack Development",
      img: project2,
      link: "https://sharonodimainstagram-clone.vercel.app",
      desc: "Built a responsive social media app using Next.js with SSR and SSG for performance and SEO. Developed reusable React components and a clean interface with TypeScript and Tailwind CSS. Implemented secure authentication with JWT and bcrypt.js, and stored user data in MongoDB. Deployed to Vercel and managed version control with Git and GitHub.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "JWT", "Vercel"],
      featured: true
    },
    {
      title: "NASA Space Portfolio",
      category: "React Development",
      img: project3,
      link: "https://sharonodimaportfolio.vercel.app/",
      desc: "Designed and deployed a responsive personal portfolio using React, integrating NASA's APOD API to dynamically showcase space imagery. Employed reusable components and deployed the site with a CI/CD pipeline on Vercel. Focused on modern design, performance optimization, and WCAG-compliant accessibility standards.",
      technologies: ["React", "NASA API", "Vercel", "CI/CD", "Responsive Design"],
      featured: false
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" aria-label="Featured Projects">
      <div className="container-modern">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="responsive-heading font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Explore my latest work showcasing modern web development technologies
            and innovative solutions to real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group modern-card hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 200 + 300}ms` 
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl mb-6">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-bold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <img
                  src={project.img}
                  alt={`Screenshot of ${project.title} - ${project.desc.substring(0, 80)}...`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center space-x-2"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <span>View Live</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-100 leading-relaxed text-sm line-clamp-4">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-xs font-medium hover:bg-indigo-600/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-300 hover:text-indigo-200 transition-colors duration-200 p-2 -m-2"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>


                  <div className="flex items-center space-x-3 text-gray-400">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-300 transition-colors duration-200 p-2 -m-2"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="modern-card max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Interested in working together?
                </h3>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://github.com/sharonodima', '_blank')}
                  className="btn-primary"
                >
                  View All Projects
                </button>
                <button
                  onClick={scrollToContact}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;