import React, { useState, useEffect, useRef } from 'react';
import PassportPhoto from '../Passport.jpeg';
import GraduationPhoto from '../Graduation.jpg';
import PortraitPhoto from '../Portrait.JPG';
import CitizenshipPhoto from '../Citizenship.jpg';

const ModernAbout = ({ scrollToProjects, scrollToContact }) => {
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

  const skills = [
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'Node.js', level: 82, icon: '🟢' },
    { name: 'Next.js', level: 78, icon: '⚫' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'AWS', level: 70, icon: '☁️' },
    { name: 'Git', level: 88, icon: '🌲' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Express.js', level: 80, icon: '🚂' },
    { name: 'SQL', level: 78, icon: '🗄️' },
    { name: 'Redux', level: 82, icon: '🔄' },
    { name: 'CSS/Sass', level: 85, icon: '🎨' },
    { name: 'Docker', level: 65, icon: '🐳' },
    { name: 'Tailwind CSS', level: 90, icon: '💨' },
  ];

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      description: 'Building modern web applications with React, Node.js, and cloud technologies',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript']
    },
    {
      role: 'Bootcamp Graduate',
      company: 'Bloom Institute of Technology',
      period: '2022 - 2023',
      description: 'Intensive full-stack web development program focusing on modern frameworks and best practices',
      technologies: ['JavaScript', 'React', 'Python', 'SQL', 'Git']
    },
    {
      role: 'Technical Support Specialist',
      company: 'LiveOps',
      period: '2024 - Present',
      description: 'Providing technical support and troubleshooting for complex applications',
      technologies: ['Problem Solving', 'Customer Service', 'Technical Documentation']
    },
    {
      role: 'Frontend Developer',
      company: 'Freelance Projects',
      period: '2023 - Present',
      description: 'Creating responsive and accessible user interfaces for various client projects',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'WCAG Compliance', 'Mobile-First Design']
    },
    {
      role: 'Software Development Student',
      company: 'Self-Directed Learning',
      period: '2021 - Present',
      description: 'Continuous learning through online courses, documentation, and hands-on projects',
      technologies: ['Algorithms', 'Data Structures', 'System Design', 'Best Practices', 'Code Reviews']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container-modern">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="responsive-heading font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with a unique journey from customer service to code. 
            I bring a customer-centric mindset to building intuitive, scalable applications.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="modern-card p-4">
            <div className="w-48 h-72 mx-auto overflow-hidden rounded-lg">
              <img
                src={PortraitPhoto}
                alt="Sharon Odima - Portrait with books"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-gray-400 text-sm text-center mt-3">Ready to Learn</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              I was born and raised in Kenya, Africa and I have been in the states since January 2010. During this time, I have been a jack of all trades, dabbling in the travel industry as a flight attendant in customer service and in home health care both as a certified nurse and a home aide. I attended Durham Technical Community College here in Durham, NC where I earned my associates degree in science. My favorite classes were anything to do with math or statistics.
            </p>
          </div>

          <div className="modern-card p-4">
            <div className="w-48 h-72 mx-auto overflow-hidden rounded-lg">
              <img
                src={GraduationPhoto}
                alt="Sharon Odima - Graduation day"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-gray-400 text-sm text-center mt-3">Graduation Day</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              I also attended a rigorous software engineering bootcamp for a whole year where I became proficient in Javascript, HTML, CSS, and SQL among other programming skills. I was able to build several Single page applications, work with high-level frameworks such as React, Redux, and Node, and even seed a database using Knex. I am very excited to be embarking on this rigorous journey to become a fully certified software engineer and I cannot wait to get into the job industry and actually put my skills to work.
            </p>
          </div>

          <div className="modern-card p-4">
            <div className="w-48 h-72 mx-auto overflow-hidden rounded-lg">
              <img
                src={CitizenshipPhoto}
                alt="Sharon Odima - American Citizenship"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-gray-400 text-sm text-center mt-3">American Citizen</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              In 2020, I proudly became an American citizen after years of putting it off since arriving in the U.S. in 2010. Though I had been lackadaisical about the process, I eventually committed, studied hard for the civics test, and reflected on my journey here. Taking the oath of allegiance was an emotional moment that made me feel truly rooted in the country I now call home
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {/* Personal Story */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* My Journey Card */}
            <div className="modern-card h-full flex flex-col justify-start">
              <div className="text-center space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3">My Journey</h3>
                    <p className="text-gray-300 leading-relaxed text-justify max-w-xs sm:max-w-sm lg:max-w-lg mx-auto text-sm sm:text-base">
                      From customer service to full-stack development, my non-traditional path has given me 
                      a unique perspective on creating user-focused applications. I understand the importance 
                      of empathy in tech and bring that mindset to every project. My background in customer 
                      service taught me to listen carefully, solve problems creatively, and always consider 
                      the end user's experience. This foundation has made me a more thoughtful developer who 
                      builds applications that are not just functional, but truly user-friendly and accessible. 
                      I approach each project with curiosity and determination, always eager to learn new 
                      technologies while maintaining a focus on clean, efficient code that serves real people 
                      solving real problems.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 space-y-4">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-4xl">💎</span>
                    </div>
                    <h4 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">CORE VALUES</h4>
                    <div className="space-y-2 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
                      <p className="flex items-center justify-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full flex-shrink-0"></span>
                        <span>User-centered design thinking</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full flex-shrink-0"></span>
                        <span>Continuous learning and growth</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full flex-shrink-0"></span>
                        <span>Clean, maintainable code</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base">
                        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full flex-shrink-0"></span>
                        <span>Collaborative team spirit</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Section Moved Inside */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <h4 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">TECHNICAL SKILLS</h4>
                  </div>
                  <div className="space-y-3 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="flex items-center space-x-2 text-gray-200 text-sm">
                            <span>{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          <span className="text-indigo-300 font-mono text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary transition-all duration-1000 ease-out rounded-full"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100 + 500}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="modern-card h-full flex flex-col justify-start px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className="space-y-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl">💼</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">Experience</h3>
                </div>
              
                <div className="space-y-6 lg:space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Line */}
                      {index < experiences.length && (
                        <div className="absolute left-0 top-12 sm:top-16 w-0.5 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                      )}
                      
                      <div className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute left-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-full flex items-center justify-center transform -translate-x-4 sm:-translate-x-5 lg:-translate-x-6">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-white rounded-full"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2 sm:space-y-3 pl-1">
                          <div className="text-center">
                            <h4 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h4>
                            <p className="text-indigo-300 font-medium text-sm sm:text-base">{exp.company}</p>
                            <p className="text-gray-400 font-mono text-xs sm:text-sm">{exp.period}</p>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md mx-auto text-center text-sm sm:text-base">
                            {exp.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 justify-center">
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs font-medium hover:bg-indigo-600 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

            {/* Fun Facts */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-col items-center space-y-4 text-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">Fun Facts</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <div className="text-center p-2 sm:p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-lg sm:text-2xl font-bold text-gradient">5+</div>
                  <p className="text-gray-300 text-xs sm:text-sm">Projects Built</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-lg sm:text-2xl font-bold text-gradient">24/7</div>
                  <p className="text-gray-300 text-xs sm:text-sm">Learning Mode</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-lg sm:text-2xl font-bold text-gradient">∞</div>
                  <p className="text-gray-300 text-xs sm:text-sm">Curiosity Level</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-lg sm:text-2xl font-bold text-gradient">☕</div>
                  <p className="text-gray-300 text-xs sm:text-sm">Coffee Powered</p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-300 mb-4">
              Let's collaborate and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToProjects} className="btn-primary">
                <span>View My Projects</span>
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                <span>Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;