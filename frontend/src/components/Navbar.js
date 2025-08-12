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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#27326e] to-[#4982c3] flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
              Privoxx
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="nav-link text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="nav-link text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] transition-colors duration-200"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="btn-primary rounded-full px-6 py-2 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Demo
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg rounded-b-2xl">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => {scrollToSection('products'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] transition-colors duration-200"
              >
                Products
              </button>
              <button 
                onClick={() => {scrollToSection('reviews'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#27326e] dark:hover:text-[#4982c3] transition-colors duration-200"
              >
                Reviews
              </button>
              <button 
                onClick={() => {scrollToSection('demo'); setIsMobileMenuOpen(false);}}
                className="w-full btn-primary rounded-full px-6 py-3 bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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