import React from 'react';
import { Linkedin, Mail, Target, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';

const TeamSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our 
            <span className="bg-gradient-to-r from-[#27326e] to-[#4982c3] bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team is dedicated to revolutionizing privacy solutions across India with innovative design and operational excellence.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mockData.teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Profile */}
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#27326e] to-[#4982c3] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#4982c3] font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.experience}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Target className="w-5 h-5 text-[#27326e]" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Vision:</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{member.vision}"
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-[#27326e]" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                </div>
                <ul className="space-y-2">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-br from-[#27326e] to-[#4982c3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="p-3 rounded-xl bg-gradient-to-br from-[#27326e] to-[#4982c3] text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-gradient-to-br from-[#4982c3] to-[#27326e] text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Company Impact Stats */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Our Impact</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#27326e] to-[#4982c3] rounded-full mx-auto mb-8"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockData.companyStats.map((stat, index) => (
              <div key={index} className="text-center">
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

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {mockData.companyValues.map((value, index) => (
            <div 
              key={index}
              className="value-card group text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#27326e] dark:group-hover:text-[#4982c3] transition-colors duration-200">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;