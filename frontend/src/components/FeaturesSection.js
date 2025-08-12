import React, { useState } from 'react';
import { Shield, Zap, Clock, Leaf } from 'lucide-react';

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      percentage: "100%",
      title: "Privacy Guaranteed",
      subtitle: "Instant Privacy", 
      description: "No more searching for changing rooms or compromising on privacy",
      icon: Shield,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      color: "text-green-600 dark:text-green-400"
    },
    {
      percentage: "75%", 
      title: "Space Saved",
      subtitle: "Space Efficient",
      description: "Minimal footprint, maximum utility with smart design",
      icon: Zap,
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Shield,
      badge: "24/7",
      title: "Security Assurance", 
      subtitle: "Complete Protection",
      description: "Round-the-clock privacy protection with advanced security features and tamper-proof design for ultimate peace of mind.",
      gradient: "from-purple-400 via-pink-500 to-rose-600",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Clock,
      badge: "5min",
      title: "Setup Time",
      subtitle: "Lightning Fast", 
      description: "Ultra-quick installation process that transforms any space into a private sanctuary in just minutes without any tools required.",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  const differences = [
    {
      title: "Cultural Sensitivity",
      description: "Designed specifically for Indian living conditions and cultural needs",
      icon: "🇮🇳"
    },
    {
      title: "No Permanent Changes", 
      description: "Easy installation without permanent modifications to spaces",
      icon: "🔧"
    },
    {
      title: "Affordable Solutions",
      description: "Cost-effective privacy solutions for homes, businesses, and public spaces",
      icon: "💰"
    },
    {
      title: "Eco-Friendly",
      description: "Environmentally conscious with sustainable materials and manufacturing",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Privacy Matters in 
            <span className="block bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent animate-gradient">
              Modern India
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Addressing the gap in privacy infrastructure across diverse spaces with innovative, culturally sensitive solutions.
          </p>
        </div>

        {/* Features Grid with Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card-3d group perspective-1000 h-64"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`feature-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  hoveredCard === index ? 'rotate-y-180' : ''
                }`}>
                  {/* Front Side */}
                  <div className="feature-card-front absolute inset-0 w-full h-full backface-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-gray-700/20 shadow-2xl">
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      {feature.percentage ? (
                        <div className={`text-5xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4 animate-pulse`}>
                          {feature.percentage}
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg transform rotate-12`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div className={`text-3xl font-bold ${feature.color}`}>
                            {feature.badge}
                          </div>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <h4 className="text-[#4982c3] font-semibold">
                        {feature.subtitle}
                      </h4>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="feature-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-3xl p-6 border border-white/20 shadow-2xl text-white">
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <div className="mb-4">
                        {feature.percentage && <Shield className="w-12 h-12 mx-auto mb-2 opacity-80" />}
                        {feature.icon && !feature.percentage && <IconComponent className="w-12 h-12 mx-auto mb-2 opacity-80" />}
                      </div>
                      <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Privoxx Difference */}
        <div className="glass-container bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
            The Privoxx Difference:
          </h3>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#27326e] to-[#4982c3] rounded-full mx-auto mb-12 animate-pulse"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differences.map((diff, index) => (
              <div 
                key={index}
                className="difference-item group flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className="flex-shrink-0 text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {diff.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#27326e] dark:group-hover:text-[#4982c3] transition-colors duration-300">
                    {diff.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;