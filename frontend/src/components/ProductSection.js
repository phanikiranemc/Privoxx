import React from 'react';
import { CheckCircle, ArrowRight, Crown } from 'lucide-react';

const ProductSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#27326e]/10 to-[#4982c3]/10 p-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/v2n7evnn_image.png"
                alt="Wall-Mounted Prive Box"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#4982c3]/20 to-[#27326e]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#27326e]/20 to-[#4982c3]/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Privacy Solutions for 
                <span className="block bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
                  Every Need
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience our innovative privacy solution designed for maximum convenience and privacy.
              </p>
            </div>

            {/* Product Card */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-6">
                <div className="bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Crown className="w-4 h-4 mr-1" />
                  Most Popular - Flagship Solution
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Wall-Mounted Prive Box
                </h3>
                <p className="text-[#4982c3] font-semibold mb-4">Flagship Solution</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Transform any wall into instant privacy space with our revolutionary pull-down mechanism
                </p>

                {/* Key Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h4>
                  {[
                    'Pull-down mechanism',
                    'Minimal space required', 
                    'No renovation needed',
                    'Premium materials'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#27326e]" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full mb-6">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">Coming Soon</span>
                </div>

                {/* CTA Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Ready to Transform Your Space?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Experience the Wall-Mounted Prive Box with a personalized demonstration.
                  </p>
                  <button 
                    onClick={scrollToDemo}
                    className="btn-primary group flex items-center bg-gradient-to-r from-[#27326e] to-[#4982c3] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Book Your Demo Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;