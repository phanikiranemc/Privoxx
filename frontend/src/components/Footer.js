import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#27326e] to-gray-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="dots-pattern-footer"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4982c3] to-white flex items-center justify-center">
                <span className="text-[#27326e] font-bold text-xl">P</span>
              </div>
              <span className="text-3xl font-bold">Privoxx</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Revolutionizing privacy solutions across India with innovative, accessible, and culturally sensitive design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4982c3]" />
                <span className="text-gray-300">{mockData.contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4982c3]" />
                <span className="text-gray-300">{mockData.contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#4982c3]" />
                <span className="text-gray-300">{mockData.contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {mockData.footerLinks.products.map((product, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-[#4982c3] transition-colors duration-200 text-left">
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {mockData.footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-[#4982c3] transition-colors duration-200 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            {isSubscribed ? (
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 text-center">
                <p className="text-green-400 font-semibold">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Newsletter</label>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-l-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#4982c3] focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-[#4982c3] to-[#27326e] rounded-r-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              © 2024 Privoxx Privacy Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-[#4982c3] transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#4982c3] transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-[#4982c3] transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-[#27326e] to-[#4982c3] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50"
          aria-label="Back to top"
        >
          <ArrowRight className="w-6 h-6 transform -rotate-90" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;