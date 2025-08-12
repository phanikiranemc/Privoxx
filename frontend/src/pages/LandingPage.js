import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DemoSection from '../components/DemoSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      <div className="dots-pattern">
        <Navbar />
        <HeroSection />
        <ProductSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DemoSection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;