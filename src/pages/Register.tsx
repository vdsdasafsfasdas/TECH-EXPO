import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Clock, Users, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveButton from '../components/InteractiveButton';

const Register: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegistration = async () => {
    setIsRegistering(true);
    // Simulate registration process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRegistering(false);
    // In a real app, this would redirect to the actual form
    window.open('#', '_blank');
  };

  const eventDetails = [
    { icon: Calendar, label: 'Date:', value: 'October 11, 2025', color: 'accent-electric-cyan' },
    { icon: Clock, label: 'Time:', value: '8:00 AM - 4:00 PM', color: 'accent-vibrant-purple' },
    { icon: MapPin, label: 'Location:', value: 'Tanarata International School', color: 'accent-tech-green' },
    { icon: Users, label: 'Capacity:', value: 'Limited Seats Available', color: 'accent-gold' }
  ];

  const includedItems = [
    'Access to all workshops and booths',
    'Lunch and refreshments',
    'Welcome kit with tech goodies',
    'Certificate of participation',
    'Networking opportunities',
    'Prize opportunities'
  ];

  const pricingOptions = [
    { label: 'Regular Fee:', price: 'RM 80 per student', type: 'regular' },
    { label: 'Early Bird Special:', price: 'RM 75 per student', type: 'early-bird' },
    { label: 'Family Combo Package:', price: 'RM 65 per person', type: 'family' }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 heading-responsive">
              Register Now
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-responsive">
              Secure your spot at the Innovation & Tech Expo 2025
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details */}
          <AnimatedSection animation="slide-in-left" delay={400}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
                 style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl font-bold text-white mb-6 animate-slide-in-left opacity-0"
                  style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>Event Details</h2>
              <div className="space-y-4">
                {eventDetails.map((detail, index) => (
                  <div key={index} 
                       className="flex items-center gap-3 p-3 rounded-lg bg-secondary-deep-slate/30 hover:bg-secondary-deep-slate/50 transition-all duration-300 animate-slide-in-left opacity-0"
                       style={{ animationDelay: `${600 + (index * 100)}ms`, animationFillMode: 'forwards' }}>
                    <detail.icon className={`h-5 w-5 text-${detail.color} animate-pulse-slow`} />
                    <div>
                      <span className="text-white font-medium">{detail.label}</span>
                      <span className="text-gray-300 ml-2">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 animate-fade-in-up opacity-0"
                   style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 animate-slide-in-left opacity-0"
                    style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}>
                  <CheckCircle className="h-5 w-5 text-accent-tech-green animate-bounce-slow" />
                  What's Included:
                </h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {includedItems.map((item, index) => (
                    <li key={index} 
                        className="hover:text-white transition-colors duration-300 animate-slide-in-left opacity-0"
                        style={{ 
                          animationDelay: `${1200 + (index * 100)}ms`, 
                          animationFillMode: 'forwards' 
                        }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Registration Form */}
          <AnimatedSection animation="slide-in-right" delay={600}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
                 style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl font-bold text-white mb-6 animate-slide-in-right opacity-0"
                  style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>Registration</h2>
              <p className="text-gray-300 mb-6 animate-fade-in opacity-0"
                 style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                Click the button below to access our registration form. Fill out all required 
                information to secure your spot at this exciting event!
              </p>
              
              <div className="space-y-4">
                {/* Pricing Information */}
                <div className="bg-gradient-to-r from-accent-electric-cyan/10 to-accent-vibrant-purple/10 rounded-lg p-4 border border-accent-electric-cyan/30 hover:border-accent-electric-cyan/50 transition-all duration-300 hover-lift animate-fade-in-up opacity-0"
                     style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 animate-slide-in-left opacity-0"
                      style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
                    <DollarSign className="h-5 w-5 text-accent-electric-cyan animate-bounce-slow" />
                    Registration Fees
                  </h3>
                  <div className="space-y-2 text-sm">
                    {pricingOptions.map((option, index) => (
                      <div key={index} 
                           className={`flex justify-between items-center p-2 rounded transition-all duration-300 animate-slide-in-left opacity-0 ${
                             option.type === 'regular' ? 'bg-secondary-deep-slate/30' :
                             option.type === 'early-bird' ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30' :
                             'bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30'
                           }`}
                           style={{ animationDelay: `${1100 + (index * 100)}ms`, animationFillMode: 'forwards' }}>
                        <span className={option.type === 'early-bird' ? 'text-orange-300' : option.type === 'family' ? 'text-green-300' : 'text-gray-300'}>
                          {option.label}
                        </span>
                        <span className={`font-medium ${option.type === 'early-bird' ? 'text-orange-200' : option.type === 'family' ? 'text-green-200' : 'text-white'}`}>
                          {option.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs mt-2 animate-fade-in opacity-0"
                     style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}>
                    Family package applies when students participate with their parents
                  </p>
                </div>

                <div className="animate-fade-in-up opacity-0"
                     style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
                  <InteractiveButton
                    variant="primary"
                    size="lg"
                    icon={ExternalLink}
                    onClick={handleRegistration}
                    loading={isRegistering}
                    className="w-full"
                  >
                    {isRegistering ? 'Opening Registration...' : 'Open Registration Form'}
                  </InteractiveButton>
                </div>

                <p className="text-gray-400 text-sm text-center animate-fade-in opacity-0"
                   style={{ animationDelay: '1600ms', animationFillMode: 'forwards' }}>
                  You'll be redirected to our secure Google Form
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in" delay={1700}>
          <div className="mt-12 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 text-center hover:border-red-400/50 transition-all duration-300 hover:shadow-tech-glow animate-fade-in-up opacity-0"
               style={{ animationDelay: '1700ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2 animate-slide-in-left opacity-0"
                style={{ animationDelay: '1800ms', animationFillMode: 'forwards' }}>
              <AlertCircle className="h-6 w-6 text-red-400 animate-pulse-slow" />
              Limited Spots Available!
            </h3>
            <p className="text-red-300 animate-fade-in opacity-0"
               style={{ animationDelay: '1900ms', animationFillMode: 'forwards' }}>
              Don't miss out on this incredible opportunity. Register today to guarantee your spot 
              at the Innovation & Tech Expo 2025!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={2000}>
          <div className="mt-8 text-center animate-fade-in opacity-0"
               style={{ animationDelay: '2000ms', animationFillMode: 'forwards' }}>
            <p className="text-gray-300 text-sm">
              For additional information and inquiries, please contact us at{' '}
              <span className="text-accent-electric-cyan hover:text-accent-neon-blue transition-colors duration-300 cursor-pointer">
                events@tanarata.net
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Register;