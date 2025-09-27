import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import linkedin from '../linkedin.jpeg';
import github from '../github.png';
import website from '../website.png';

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      await axios.post('https://backend-10vkgtsgp-odimasharon.vercel.app/api/contact', formData);
      setStatusMessage('Thanks for your message. I will be in touch as soon as possible.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sharonodima',
      icon: linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sharonodima',
      icon: github,
      color: 'hover:bg-gray-600'
    },
    {
      name: 'Portfolio',
      url: 'https://sharonodima.github.io/myportfolio/',
      icon: website,
      color: 'hover:bg-purple-600'
    }
  ];

  const contactInfo = [
    {
      label: 'Email',
      value: 'odimasharon@gmail.com',
      href: 'mailto:odimasharon@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      )
    },
    {
      label: 'Phone',
      value: '+1 (919) 703-3335',
      href: 'tel:+19197033335',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container-modern">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="responsive-heading font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-2xl"></div>
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Contact Info Cards */}
            <div className="modern-card">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📞</span>
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="modern-card">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🌐</span>
                Find Me Online
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:scale-105 transition-all duration-200 ${social.color}`}
                  >
                    <div className="w-12 h-12 mb-3 overflow-hidden rounded-full bg-white p-2">
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white font-medium text-sm group-hover:text-indigo-200">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="modern-card">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Quick Response</h4>
                  <p className="text-gray-300 text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="modern-card">
              <h3 id="contact-form-heading" className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">✉️</span>
                Send a Message
              </h3>

              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                noValidate
                role="form"
                aria-labelledby="contact-form-heading"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or just say hello..."
                    className="form-input resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {statusMessage && (
                <div className={`mt-6 p-4 rounded-lg ${statusMessage.includes('Thanks') ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 'bg-red-500/20 border border-red-500/30 text-red-300'}`}>
                  <div className="flex items-center space-x-2">
                    {statusMessage.includes('Thanks') ? (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="font-medium">{statusMessage}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container-modern">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
              Sharon Odima
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white mb-8">
              Full-Stack Developer
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Bringing ideas to life through code, one project at a time. Let's build something extraordinary together.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ModernContact;