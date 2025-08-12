import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'w-[95%] max-w-6xl' 
        : 'w-[90%] max-w-5xl'
    }`}>
      <div className="glassmorphic-navbar bg-white/20 dark:bg-gray-900/30 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#27326e] to-[#4982c3] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
              Privoxx
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('products')}
              className="nav-link-enhanced px-6 py-2.5 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="nav-link-enhanced px-6 py-2.5 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              Reviews
            </button>
            
            {/* Book Demo Button */}
            <button 
              onClick={() => scrollToSection('demo')}
              className="btn-primary-enhanced group relative overflow-hidden rounded-2xl px-8 py-3 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ml-4"
            >
              <span className="relative z-10 flex items-center">
                Book Demo
                <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4982c3] to-[#27326e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle p-3 rounded-2xl bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 ml-2 backdrop-blur-sm group"
            >
              <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {isDarkMode ? 
                  <Sun className="w-5 h-5 text-yellow-500" /> : 
                  <Moon className="w-5 h-5 text-[#27326e]" />
                }
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle p-3 rounded-2xl bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {isDarkMode ? 
                  <Sun className="w-5 h-5 text-yellow-500" /> : 
                  <Moon className="w-5 h-5 text-[#27326e]" />
                }
              </div>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-2xl bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="transform transition-all duration-300">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-white/20 dark:border-gray-700/20 animate-fadeInUp">
            <div className="space-y-3">
              <button 
                onClick={() => {scrollToSection('products'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => {scrollToSection('reviews'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => {scrollToSection('demo'); setIsMobileMenuOpen(false);}}
                className="w-full btn-primary-enhanced rounded-2xl px-6 py-3 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-4"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;