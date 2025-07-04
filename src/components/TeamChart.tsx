import React from 'react';
import { Crown, Users, Megaphone, Settings, UserCheck, DollarSign } from 'lucide-react';

const TeamChart: React.FC = () => {
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

  const subordinates = teamMembers.slice(1);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Team Organization</h2>
        <p className="text-gray-300">Meet the dedicated team behind this amazing event</p>
      </div>

      {/* Responsive Organizational Chart */}
      <div className="mb-12 sm:mb-16">
        <div className="flex flex-col items-center">
          {/* Main Head - Always centered */}
          <div className="relative mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-yellow-400/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
                  <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Mahaveer</h3>
                  <p className="text-yellow-400 font-medium text-sm sm:text-base">Main Head</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines - Responsive */}
          <div className="relative mb-6 sm:mb-8">
            {/* Vertical line from main head */}
            <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-yellow-400/70 to-white/40 mx-auto"></div>
            
            {/* Horizontal distribution line */}
            <div className="relative">
              <div className="w-16 sm:w-24 md:w-32 lg:w-48 h-0.5 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
              
              {/* Connection points for subordinates */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-between w-16 sm:w-24 md:w-32 lg:w-48">
                {subordinates.map((_, index) => (
                  <div key={index} className="w-0.5 h-0.5 bg-white/60 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Subordinate Team Members - Responsive Grid */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {subordinates.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Connection line to each member */}
                  <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-white/60 to-white/20 mb-3 sm:mb-4"></div>
                  
                  {/* Member card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full max-w-xs">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-3 sm:p-4 rounded-lg bg-gradient-to-r ${member.color} mb-3 sm:mb-4 shadow-lg`}>
                        <member.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{member.name}</h4>
                      <p className="text-xs sm:text-sm text-cyan-400 font-medium leading-tight">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamChart;