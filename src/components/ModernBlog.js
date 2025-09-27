import React, { useEffect, useState, useRef } from "react";
import portraitImg from "../Portrait.JPG";
import project1Img from "../Project1.jpeg";
import graduationImg from "../Graduation.jpg";

// Define fallback posts outside component to prevent re-creation
const fallbackPosts = [
  {
    id: 1,
    title: "How I Fell in Love with Coding!",
    excerpt: "From customer service to coding - how I discovered my passion for web development and made the career transition that changed my life.",
    date: "2025-07-27",
    link: "https://odimasharon.wordpress.com/2025/07/27/how-i-fell-in-love-with-coding/",
    featured_image: portraitImg,
    category: "Journey"
  },
  {
    id: 2,
    title: "Building My Instagram Clone Project",
    excerpt: "Lessons learned while building my Instagram clone project - the challenges, breakthroughs, and technical skills I developed along the way.",
    date: "2025-07-27",
    link: "https://odimasharon.wordpress.com/2025/07/27/building-my-instagram-clone-project-lessons-learned/",
    featured_image: project1Img,
    category: "Projects"
  },
  {
    id: 3,
    title: "My Experience at Bloom Institute of Technology",
    excerpt: "My journey through Bloom Institute of Technology and how the ISA payment plan helped me pursue my coding dreams.",
    date: "2025-07-27",
    link: "https://odimasharon.wordpress.com/2025/07/27/my-experience-at-bloom-institute-of-technology-and-how-the-isa-payment-plan-helped-me-pursue-coding/",
    featured_image: graduationImg,
    category: "Education"
  }
];

const ModernBlog = () => {
  // Initialize with fallback posts to prevent disappearing
  const [posts, setPosts] = useState(fallbackPosts);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Start with false since we have fallback posts
  const [error, setError] = useState(null);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);
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

  useEffect(() => {

    const fetchPosts = async () => {
      // Prevent multiple simultaneous fetches
      if (hasAttemptedFetch) return;
      
      try {
        setLoading(true);
        setHasAttemptedFetch(true);
        const response = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/odimasharon.wordpress.com/posts"
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        console.log("📝 WordPress API fetch result:", data);
        
        const posts = data.posts || data || [];
        console.log("📄 Posts to display:", posts.length);
        
        if (posts.length > 0) {
          // Map WordPress API posts to our expected format
          const mappedPosts = posts.slice(0, 6).map((post, index) => ({
            id: post.ID,
            title: post.title,
            excerpt: post.excerpt,
            date: new Date(post.date).toISOString().split('T')[0],
            link: post.URL, // WordPress API uses URL property
            featured_image: post.featured_image || fallbackPosts[index]?.featured_image,
            category: post.categories && Object.keys(post.categories).length > 0
              ? Object.values(post.categories)[0].name
              : fallbackPosts[index]?.category || 'Development'
          }));
          setPosts(mappedPosts);
        } else {
          console.log("🔄 No posts from API, keeping existing posts");
          // Don't set fallback posts again since we initialized with them
        }
      } catch (err) {
        console.error("❌ Error fetching WordPress posts:", err);
        console.log("🔄 Keeping existing posts due to API error");
        // Keep existing posts instead of replacing with fallback
      } finally {
        setLoading(false);
      }
    };

    // Debug: Let's log the API response to see what we get
    const debugFetch = async () => {
      try {
        const response = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/odimasharon.wordpress.com/posts"
        );
        const data = await response.json();
        console.log("WordPress.com API Response:", data);
        console.log("Data type:", typeof data, "Is array:", Array.isArray(data));
        console.log("Has posts property:", !!data.posts);
        
        const posts = data.posts || data;
        console.log("Final posts array:", posts);
        console.log("Posts length:", posts.length);
        
        if (posts && posts.length > 0) {
          console.log("First post structure:", JSON.stringify(posts[0], null, 2));
          console.log("Featured image:", posts[0].featured_image);
          console.log("Post thumbnail:", posts[0].post_thumbnail);
        } else {
          console.log("⚠️ No posts found in API response");
        }
      } catch (err) {
        console.log("Debug fetch failed:", err);
      }
    };

    fetchPosts();
    debugFetch();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  if (loading) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="responsive-heading font-bold text-gradient mb-6">
              Latest from My Blog
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="modern-card">
                <div className="animate-pulse">
                  <div className="skeleton h-48 w-full mb-6 rounded-lg"></div>
                  <div className="skeleton h-6 w-3/4 mb-4"></div>
                  <div className="skeleton h-4 w-full mb-2"></div>
                  <div className="skeleton h-4 w-2/3 mb-4"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container-modern">
          <div className="text-center">
            <div className="modern-card max-w-md mx-auto">
              <div className="text-red-400 text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 21.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Unable to Load Blog</h3>
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container-modern">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="responsive-heading font-bold text-gradient mb-6">
            Latest from My Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Thoughts, insights, and experiences from my journey in software development and technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
            {posts.map((post, index) => {
              // WordPress.com API has different structure - featured images are directly available
              const imageUrl = post.featured_image || post.post_thumbnail?.URL;
              
              console.log(`Post ${index} - ${post.title}:`);
              console.log('Featured image URL:', imageUrl);
              console.log('Post thumbnail:', post.post_thumbnail);
              console.log('Available post properties:', Object.keys(post));
              
              return (
                <article
                  key={post.id}
                  className={`group modern-card hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150 + 300}ms` 
                  }}
                >
                <div className="text-center">
                  {/* Featured Image */}
                  <div className="relative overflow-hidden rounded-t-xl mb-6">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={stripHtml(post.title)}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          console.log("Image failed to load:", imageUrl);
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="h-48 w-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        display: imageUrl ? 'none' : 'flex'
                      }}
                    >
                      <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300 line-clamp-2">
                        {stripHtml(post.title)}
                      </h3>
                      <p className="text-indigo-300 font-mono text-sm">
                        {formatDate(post.date)}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">
                        {truncateText(stripHtml(post.excerpt))}
                      </p>

                      {/* Categories/Tags */}
                      {post.categories && (
                        <div className="flex flex-wrap gap-2 justify-center">
                          <span className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-xs font-medium">
                            Article
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Read More Link */}
                    <div className="pt-4 border-t border-gray-700 flex justify-center">
                      <button
                        onClick={() => {
                          console.log('Clicking link:', post.link);
                          const url = post.link;
                          if (url && url.startsWith('http')) {
                            window.open(url, '_blank');
                          } else {
                            console.error('Invalid URL:', url);
                          }
                        }}
                        className="inline-flex items-center space-x-2 text-indigo-300 hover:text-indigo-200 transition-colors duration-200 font-medium cursor-pointer z-10 relative bg-transparent border-none"
                        style={{pointerEvents: 'auto'}}
                      >
                        <span className="text-sm">Read Full Article</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center">
            <div className="modern-card max-w-md mx-auto">
              <div className="text-gray-400 text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">No Posts Found</h3>
                <p>Check back soon for new content!</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {posts.length > 0 && (
          <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              {/* Decorative icon */}
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Want to read more?
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Visit my blog for more articles on web development, programming tutorials, and tech insights.
              </p>
              <a
                href="https://odimasharon.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Visit My Blog</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModernBlog;