import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const DemoSection = () => {
  const [formData, setFormData] = useState({
    productType: '',
    fullName: '',
    phone: '',
    email: '',
    organizationType: '',
    location: '',
    quantity: '',
    additionalRequirements: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real app this would call API
    console.log('Demo booking submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    'Personalized product demonstration',
    'Installation guidance and requirements', 
    'Custom pricing based on your needs',
    'Technical specifications and warranty'
  ];

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform 
            <span className="block bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
              Your Space?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Book a personalized demo and experience our Wall-Mounted Prive Box solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Form */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Book Your Demo</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Demo Booked Successfully!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll contact you within 24 hours to schedule your personalized demonstration.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Product Type *
                  </label>
                  <div className="relative">
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent appearance-none"
                    >
                      <option value="">Choose your preferred product</option>
                      {mockData.productTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Organization & Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Organization/Business Type
                    </label>
                    <input
                      type="text"
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleInputChange}
                      placeholder="Hotel, PG, Individual, etc."
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Location (City/State)
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Mumbai, Maharashtra"
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Number of units needed"
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent"
                  />
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific needs, space constraints, or special requirements..."
                    rows="4"
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#27326e] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Book Demo Now
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <p className="text-[#4982c3]">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-[#4982c3]">info@privoxx.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Response Time</p>
                    <p className="text-[#4982c3]">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#27326e] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;