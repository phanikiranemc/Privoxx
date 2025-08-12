import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Privoxx solved our guest privacy concerns instantly. Easy installation and guests love the convenience. Our customer satisfaction scores have improved significantly.",
      name: "Rajesh Sharma",
      title: "Hotel Owner",
      company: "Hotel Blue Diamond",
      location: "Mumbai, Maharashtra",
      image: "https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/v9dbiei0_image.png"
    },
    {
      text: "Game-changer for our shared accommodation business. Privacy without compromising space. Our occupancy rates increased by 30% after installation.",
      name: "Priya Patel", 
      title: "PG Owner",
      company: "Star PG Accommodations",
      location: "Bangalore, Karnataka",
      image: "https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/eks4weeq_image.png"
    },
    {
      text: "Portable version is perfect for outdoor events. Clients appreciate the thoughtful privacy solution. It's become a standard part of our event setup.",
      name: "Amit Kumar",
      title: "Event Organizer", 
      company: "EventCraft Solutions",
      location: "Delhi, NCR",
      image: "https://customer-assets.emergentagent.com/job_8c174745-57ca-4436-a473-525bdcd2af33/artifacts/vy5ukxqc_image.png"
    }
  ];

  const stats = [
    { value: "4.8/5", label: "Average Rating" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "200+", label: "Happy Customers" },
    { value: "24/7", label: "Support Available" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our 
            <span className="bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from business owners and individuals who have transformed their spaces with Privoxx privacy solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote Icon */}
              <Quote className="absolute -top-2 -left-2 w-12 h-12 text-[#27326e]/20 dark:text-[#4982c3]/20" />
              
              {/* Testimonial Content */}
              <div className="testimonial-content pl-8">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#27326e] to-[#4982c3] p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#27326e]">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-[#4982c3] font-semibold">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#27326e] hover:text-white transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-[#27326e] to-[#4982c3] scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#27326e] hover:text-white transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
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