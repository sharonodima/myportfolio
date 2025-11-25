import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PassportPhoto from '../Passport.jpeg';

const ModernHero = ({ scrollToProjects, scrollToContact }) => {
  const [photoData, setPhotoData] = useState(null);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typedNameIndex, setTypedNameIndex] = useState(0);
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);
  const fullName = "SHARON ODIMA";
  const title = "Full-Stack Developer";

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=rvPwdMg8wKYuThGawmTfauaSbgid0Gz2HNr4TFY6'
        );
        setPhotoData(response.data);
      } catch (error) {
        setError(true);
        console.error('Error fetching NASA Photo of the Day:', error);
      }
    };

    fetchPhotoData();

    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    // Type the name first
    if (typedNameIndex < fullName.length) {
      const typingInterval = setTimeout(() => {
        setTypedNameIndex((prev) => prev + 1);
      }, 150); // Typing speed
      return () => clearTimeout(typingInterval);
    }
    // Once name is complete, type the title
    else if (typedTitleIndex < title.length) {
      const typingInterval = setTimeout(() => {
        setTypedTitleIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(typingInterval);
    }
  }, [typedNameIndex, typedTitleIndex, fullName.length, title.length]);

  const typedName = fullName.slice(0, typedNameIndex);
  const typedTitle = title.slice(0, typedTitleIndex);

  if (error) {
    return (
      <section className="hero-gradient min-h-screen flex items-center justify-center">
        <div className="container-modern text-center">
          <div className="modern-card max-w-md mx-auto">
            <div className="text-red-400 text-lg" role="alert">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 21.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p>Failed to load NASA data. Please try again later.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!photoData) {
    return (
      <section className="hero-gradient min-h-screen flex items-center justify-center">
        <div className="container-modern text-center">
          <div className="max-w-md mx-auto">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 animate-float"></div>
              <div className="skeleton h-8 w-3/4 mx-auto mb-4"></div>
              <div className="skeleton h-4 w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
      id="main-content"
      role="main"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-3 h-3 bg-purple-500 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-float" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-500 rounded-full animate-float" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-32 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-5 w-5 h-5 bg-blue-400 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-2/3 right-5 w-4 h-4 bg-cyan-400 rounded-full animate-float" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-float" style={{animationDelay: '0.9s'}}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>

      <div className="container-modern px-6 py-20">
        {/* Header Name */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 id="hero-heading" className="responsive-heading font-bold text-gradient mb-4 tracking-tight">
            {typedName}
            {typedNameIndex < fullName.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>
          <h2 className="responsive-heading font-bold text-gradient mb-8 tracking-tight">
            {typedTitle}
            {typedNameIndex >= fullName.length && typedTitleIndex < title.length && (
              <span className="animate-pulse">|</span>
            )}
          </h2>

          {/* Professional Headshot */}
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-rotate"></div>
              <div className="relative w-48 h-72 md:w-64 md:h-96 lg:w-72 lg:h-[432px] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <img
                  src={PassportPhoto}
                  alt="Professional headshot of Sharon Odima, Full-Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <span className="block text-gradient font-light mb-4 hover:scale-105 transition-transform">Welcome to</span>
            <span className="block text-gradient text-5xl md:text-6xl lg:text-7xl hover:scale-105 transition-transform">My Universe</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            Explore the cosmos of creativity where{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-bold animate-pulse">full-stack development</span>{' '}
            meets the infinite possibilities of space ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '1s'}}>
            <button
              onClick={scrollToProjects}
              className="btn-primary text-lg px-10 py-4 transform hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 group"
              aria-label="Explore my projects"
            >
              <span className="relative z-10">Explore My Work</span>
              <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={scrollToContact}
              className="btn-secondary text-lg px-10 py-4 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
              aria-label="Contact me"
            >
              <span>Contact Me</span>
              <span className="ml-2" aria-hidden="true">💫</span>
            </button>
          </div>
        </div>

        {/* NASA Photo Section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 hover:scale-105 transition-transform inline-block">
              Daily Cosmic Inspiration 🌌
            </h2>
            <p className="text-gray-100 font-mono text-sm md:text-base uppercase tracking-widest animate-pulse">
              NASA Astronomy Picture of the Day
            </p>
          </div>

          <div className="modern-card relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* NASA Media */}
              <div className="order-2 lg:order-1">
                {photoData.media_type === 'image' ? (
                  <div className="relative group">
                    <img
                      src={photoData.url}
                      alt={photoData.title}
                      className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                ) : photoData.media_type === 'video' ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={photoData.url}
                      title={photoData.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-red-400">Unsupported media type: {photoData.media_type}</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {photoData.title}
                  </h3>
                  <p className="text-indigo-200 font-mono text-sm">
                    {photoData.date}
                  </p>
                </div>

                <p className="text-gray-100 leading-relaxed text-justify text-xs">
                  {photoData.explanation}
                </p>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Powered by NASA API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm font-mono uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;