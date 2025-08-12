import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      text: "Privoxx solved our guest privacy concerns instantly. Easy installation and guests love the convenience. Our customer satisfaction scores have improved significantly.",
      name: "Rajesh Sharma",
      title: "Hotel Owner",
      company: "Hotel Blue Diamond",
      location: "Mumbai, Maharashtra",
      rating: 5,
      image: "https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/v9dbiei0_image.png"
    },
    {
      text: "Game-changer for our shared accommodation business. Privacy without compromising space. Our occupancy rates increased by 30% after installation.",
      name: "Priya Patel", 
      title: "PG Owner",
      company: "Star PG Accommodations",
      location: "Bangalore, Karnataka",
      rating: 5,
      image: "https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/eks4weeq_image.png"
    },
    {
      text: "Portable version is perfect for outdoor events. Clients appreciate the thoughtful privacy solution. It's become a standard part of our event setup.",
      name: "Amit Kumar",
      title: "Event Organizer", 
      company: "EventCraft Solutions",
      location: "Delhi, NCR",
      rating: 5,
      image: "https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/vy5ukxqc_image.png"
    }
  ];

  const stats = [
    { value: "4.8/5", label: "Average Rating", icon: "⭐" },
    { value: "98%", label: "Customer Satisfaction", icon: "😊" },
    { value: "200+", label: "Happy Customers", icon: "👥" },
    { value: "24/7", label: "Support Available", icon: "🚀" }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#27326e]/20 to-[#4982c3]/20 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-[#4982c3]/20 to-[#27326e]/20 rounded-full blur-3xl animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our 
            <span className="bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent animate-gradient">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from business owners and individuals who have transformed their spaces with Privoxx privacy solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="testimonial-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500">
            <div className="relative">
              {/* Animated Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              {/* Testimonial Content */}
              <div className={`testimonial-content pl-12 transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-medium">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#27326e] to-[#4982c3] p-1 shadow-xl">
                      <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#27326e]">
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-[#4982c3] font-semibold text-lg">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      📍 {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <button 
                onClick={prevTestimonial}
                className="nav-button p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-[#27326e] hover:to-[#4982c3] hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
              </button>
              
              {/* Animated Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !isAnimating && setCurrentTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTestimonial 
                        ? 'w-12 h-4 bg-gradient-to-r from-[#27326e] to-[#4982c3] shadow-lg' 
                        : 'w-4 h-4 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-125'
                    }`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="nav-button p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-[#27326e] hover:to-[#4982c3] hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
                disabled={isAnimating}
              >
                <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stats-card-enhanced group text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-500 border border-white/20 dark:border-gray-700/20 cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-[#27326e] dark:group-hover:text-[#4982c3] transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;