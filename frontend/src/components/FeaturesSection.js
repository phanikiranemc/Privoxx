import React from 'react';
import { Shield, Zap, Clock, Leaf } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      percentage: "100%",
      title: "Privacy Guaranteed",
      subtitle: "Instant Privacy", 
      description: "No more searching for changing rooms or compromising on privacy",
      icon: Shield,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      percentage: "75%", 
      title: "Space Saved",
      subtitle: "Space Efficient",
      description: "Minimal footprint, maximum utility with smart design",
      icon: Zap,
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Shield,
      badge: "24/7",
      title: "Security Assurance", 
      subtitle: "Complete Protection",
      description: "Round-the-clock privacy protection with advanced security features and tamper-proof design for ultimate peace of mind.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Clock,
      badge: "5min",
      title: "Setup Time",
      subtitle: "Lightning Fast", 
      description: "Ultra-quick installation process that transforms any space into a private sanctuary in just minutes without any tools required.",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  const differences = [
    {
      title: "Cultural Sensitivity",
      description: "Designed specifically for Indian living conditions and cultural needs"
    },
    {
      title: "No Permanent Changes", 
      description: "Easy installation without permanent modifications to spaces"
    },
    {
      title: "Affordable Solutions",
      description: "Cost-effective privacy solutions for homes, businesses, and public spaces"
    },
    {
      title: "Eco-Friendly",
      description: "Environmentally conscious with sustainable materials and manufacturing"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Privacy Matters in 
            <span className="block bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
              Modern India
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Addressing the gap in privacy infrastructure across diverse spaces with innovative, culturally sensitive solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Icon/Badge */}
                <div className="mb-6">
                  {feature.percentage ? (
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
                      {feature.percentage}
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
                        {feature.badge}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <h4 className="text-[#4982c3] font-semibold mb-3">
                    {feature.subtitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#27326e]/5 to-[#4982c3]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* The Privoxx Difference */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
            The Privoxx Difference:
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#27326e] to-[#4982c3] rounded-full mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differences.map((diff, index) => (
              <div 
                key={index}
                className="difference-item group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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