import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const heroElement = document.getElementById('hero');
    if (heroElement) observer.observe(heroElement);

    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const AnimatedCounter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsAnimated) return;
      
      let start = 0;
      const increment = end / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 25);

      return () => clearInterval(timer);
    }, [statsAnimated, end]);

    return <span>{count}{suffix}</span>;
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#27326e]/30 to-[#4982c3]/30 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="floating-element absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-[#4982c3]/30 to-[#27326e]/30 rounded-full blur-2xl animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="floating-element absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-[#27326e]/30 to-[#4982c3]/30 rounded-full blur-2xl animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="hero-content opacity-0 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-[#27326e] via-[#4982c3] to-[#27326e] bg-clip-text text-transparent dark:text-white dark:bg-none animate-gradient bg-[length:200%_auto]">
                Instant Privacy.
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-[#4982c3] via-[#27326e] to-[#4982c3] bg-clip-text text-transparent dark:text-white dark:bg-none animate-gradient bg-[length:200%_auto] animation-delay-500">
                Anytime. Anywhere.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-medium">
              Revolutionary foldable changing solutions for modern India - From homes to hostels, events to outdoor spaces
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
              <button 
                onClick={scrollToDemo}
                className="btn-primary-enhanced group relative overflow-hidden rounded-2xl px-10 py-5 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Demo Today
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4982c3] to-[#27326e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
              
              <button className="group flex items-center text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] transition-all duration-300">
                <div className="mr-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group-hover:bg-[#27326e] group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:scale-110">
                  <Play className="w-7 h-7 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="group-hover:underline decoration-2 underline-offset-4">Watch Product Demo</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="stats-card-enhanced group bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 border border-white/20 dark:border-gray-700/20 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm group-hover:text-[#27326e] dark:group-hover:text-[#4982c3] transition-colors duration-300">
                  Installations
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-[#27326e] to-[#4982c3] rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="stats-card-enhanced group bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 border border-white/20 dark:border-gray-700/20 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm group-hover:text-[#27326e] dark:group-hover:text-[#4982c3] transition-colors duration-300">
                  Happy Customers
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-[#27326e] to-[#4982c3] rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="stats-card-enhanced group bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 border border-white/20 dark:border-gray-700/20 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm group-hover:text-[#27326e] dark:group-hover:text-[#4982c3] transition-colors duration-300">
                  Cities
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-[#27326e] to-[#4982c3] rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Showcase */}
          <div className="hero-product opacity-0 animate-fadeInRight animation-delay-500">
            <div className="relative">
              {/* Main Product Image with Enhanced Effects */}
              <div className="product-showcase group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#27326e]/20 to-[#4982c3]/20 rounded-3xl blur-2xl transform group-hover:scale-110 transition-all duration-500"></div>
                <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-gray-700/20 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_instant-privacy/artifacts/slu509eq_hero-products.jpg"
                    alt="Privoxx Privacy Solutions - Wall-Mounted and Portable Privacy Booths"
                    className="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Feature Tags */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white px-4 py-2 rounded-2xl shadow-xl transform rotate-[-12deg] group-hover:rotate-[-8deg] group-hover:scale-110 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span className="font-semibold text-sm">100% Privacy</span>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#4982c3] to-[#27326e] text-white px-4 py-2 rounded-2xl shadow-xl transform rotate-[12deg] group-hover:rotate-[8deg] group-hover:scale-110 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <span className="font-semibold text-sm">5min Setup</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white px-6 py-3 rounded-2xl shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                    <div className="text-center">
                      <div className="font-bold text-lg bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
                        Wall-Mounted & Portable
                      </div>
                      <div className="text-sm opacity-80">Privacy Solutions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Background Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#4982c3]/30 to-[#27326e]/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#27326e]/30 to-[#4982c3]/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#27326e] dark:border-[#4982c3] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#27326e] dark:bg-[#4982c3] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;