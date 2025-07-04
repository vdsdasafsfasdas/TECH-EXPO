import React from 'react';
import { Crown, Users, Megaphone, Settings, UserCheck, DollarSign } from 'lucide-react';
import TeamChart from '../components/TeamChart';
import AnimatedSection from '../components/AnimatedSection';

const MeetTheTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mahaveer',
      role: 'Main Head',
      description: 'The visionary leader orchestrating this amazing event',
      icon: Crown,
      color: 'from-yellow-400 to-yellow-600',
      isMainHead: true,
    },
    {
      name: 'Nikhel',
      role: 'Second Head',
      description: 'Right-hand support ensuring everything runs smoothly',
      icon: Users,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Le Anne',
      role: 'Marketing Head',
      description: 'Spreading the word and creating the buzz',
      icon: Megaphone,
      color: 'from-pink-400 to-pink-600',
    },
    {
      name: 'Dharshan',
      role: 'Operations and Support Head',
      description: 'Making sure everything works perfectly behind the scenes',
      icon: Settings,
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Rei Ni',
      role: 'Registration and Management Head',
      description: 'Welcoming everyone and keeping things organized',
      icon: UserCheck,
      color: 'from-purple-400 to-purple-600',
    },
    {
      name: 'Shalmali',
      role: 'Sponsorship and Finance Head',
      description: 'Securing resources and managing the budget',
      icon: DollarSign,
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 heading-responsive">
              Meet the Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 text-responsive">
              The amazing students making this event possible
            </p>
          </div>
        </AnimatedSection>

        {/* Team Organization Chart */}
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="mb-12 sm:mb-16 animate-fade-in-up opacity-0"
               style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <TeamChart />
          </div>
        </AnimatedSection>

        {/* Detailed Team Member Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 
              delay={600 + (index * 150)}
            >
              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl group animate-fade-in-up opacity-0 ${
                  member.isMainHead ? 'ring-2 ring-yellow-400/30 shadow-yellow-400/20' : ''
                }`}
                style={{ animationDelay: `${600 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                <div className={`p-3 sm:p-4 rounded-lg bg-gradient-to-r ${member.color} w-fit mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-bounce-slow`}
                     style={{ animationDelay: `${700 + (index * 150)}ms` }}>
                  <member.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-accent-electric-cyan transition-colors duration-300 animate-slide-in-left opacity-0"
                    style={{ animationDelay: `${650 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-3 text-sm sm:text-base animate-slide-in-left opacity-0"
                   style={{ animationDelay: `${700 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300 animate-fade-in opacity-0"
                   style={{ animationDelay: `${750 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                  {member.description}
                </p>
                {member.isMainHead && (
                  <div className="mt-4 flex items-center gap-2 animate-slide-in-right opacity-0"
                       style={{ animationDelay: `${800 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                    <Crown className="h-4 w-4 text-yellow-400 animate-pulse-slow" />
                    <span className="text-xs sm:text-sm text-yellow-400 font-medium">Team Leader</span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Student Leadership Section - Enhanced Responsive Design */}
        <AnimatedSection animation="fade-in" delay={1500}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-cyan-400/30 text-center shadow-lg hover:border-cyan-400/50 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
               style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 animate-slide-in-left opacity-0"
                style={{ animationDelay: '1600ms', animationFillMode: 'forwards' }}>Student-Led Innovation</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto animate-fade-in opacity-0"
               style={{ animationDelay: '1700ms', animationFillMode: 'forwards' }}>
              This entire event is organized by passionate students who believe in the power of 
              innovation and collaboration. Each team member brings their unique skills and 
              enthusiasm to create an unforgettable experience for all attendees.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { icon: Users, text: 'Student Organized' },
                { icon: Crown, text: 'Passionate Leadership' },
                { icon: Settings, text: 'Dedicated Planning' }
              ].map((item, index) => (
                <div key={index} 
                     className="flex items-center gap-2 text-cyan-400 animate-slide-in-left opacity-0 hover:text-accent-electric-cyan transition-colors duration-300"
                     style={{ 
                       animationDelay: `${1800 + (index * 100)}ms`, 
                       animationFillMode: 'forwards' 
                     }}>
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse-slow" />
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MeetTheTeam;