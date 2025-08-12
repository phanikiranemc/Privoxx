import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsAnimated) return;
      
      let start = 0;
      const increment = end / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [statsAnimated, end]);

    return <span>{count}{suffix}</span>;
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#27326e]/20 to-[#4982c3]/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#4982c3]/20 to-[#27326e]/20 rounded-full blur-xl animation-delay-2000"></div>
        <div className="floating-element absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-[#27326e]/20 to-[#4982c3]/20 rounded-full blur-xl animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading with Animation */}
        <div className="hero-content opacity-0 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent animate-gradient">
              Instant Privacy.
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-[#4982c3] to-[#27326e] bg-clip-text text-transparent animate-gradient animation-delay-500">
              Anytime. Anywhere.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary foldable changing solutions for modern India - From homes to hostels, events to outdoor spaces
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={scrollToDemo}
              className="btn-primary group relative overflow-hidden rounded-full px-8 py-4 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Book Your Demo Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4982c3] to-[#27326e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group flex items-center text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] transition-colors duration-200">
              <div className="mr-3 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group-hover:bg-[#27326e] group-hover:text-white transition-all duration-300">
                <Play className="w-6 h-6" />
              </div>
              Watch Product Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="stats-card bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Installations</div>
            </div>
            
            <div className="stats-card bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Customers</div>
            </div>
            
            <div className="stats-card bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;