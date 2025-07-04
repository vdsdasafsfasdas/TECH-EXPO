import React from 'react';
import { Bot, Brain, Gamepad2, Cpu, Smartphone, Zap, Eye, Music } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Booths: React.FC = () => {
  const booths = [
    {
      icon: Bot,
      title: 'Robotics Playground',
      description: 'Interactive robot demonstrations and programming challenges',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Brain,
      title: 'AI Magic Corner',
      description: 'Experience the power of artificial intelligence through fun demos',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Gamepad2,
      title: 'Gaming & VR Zone',
      description: 'Immerse yourself in virtual worlds and interactive gaming',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Cpu,
      title: 'Tech Puzzle Challenge',
      description: 'Solve technology-themed puzzles and brain teasers',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Innovation Lab',
      description: 'Discover the latest in mobile technology and app development',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Energy & Sustainability',
      description: 'Explore renewable energy and sustainable technology solutions',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Eye,
      title: 'Computer Vision Studio',
      description: 'See how computers can "see" and understand the world',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: Music,
      title: 'Digital Music & Audio',
      description: 'Create and manipulate sounds using cutting-edge technology',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  const experienceFeatures = [
    'Interactive demonstrations',
    'Hands-on activities',
    'Expert guides at each booth',
    'Take-home materials'
  ];

  const proTips = [
    'Visit all booths for stamps',
    'Ask questions and engage',
    'Take photos and videos',
    'Share your experience'
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 heading-responsive">
              Interactive Booths
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-responsive">
              Explore, experiment, and experience the future of technology
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booths.map((booth, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 
              delay={400 + (index * 100)}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:shadow-tech-glow transition-all duration-500 transform hover:scale-105 group animate-fade-in-up opacity-0"
                   style={{ animationDelay: `${400 + (index * 100)}ms`, animationFillMode: 'forwards' }}>
                <div className={`p-4 rounded-lg bg-gradient-to-r ${booth.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce-slow`}
                     style={{ animationDelay: `${500 + (index * 100)}ms` }}>
                  <booth.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-electric-cyan transition-colors duration-300 animate-slide-in-left opacity-0"
                    style={{ animationDelay: `${450 + (index * 100)}ms`, animationFillMode: 'forwards' }}>
                  {booth.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300 animate-fade-in opacity-0"
                   style={{ animationDelay: `${500 + (index * 100)}ms`, animationFillMode: 'forwards' }}>
                  {booth.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <AnimatedSection animation="slide-in-left" delay={1200}>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
                 style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold text-white mb-4 animate-slide-in-left opacity-0"
                  style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}>What to Expect</h3>
              <p className="text-gray-300 mb-4 leading-relaxed animate-fade-in opacity-0"
                 style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}>
                Activities include team building exercises, outdoor adventures, creative workshops, and interactive learning sessions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-cyan-400 mb-2 animate-slide-in-left opacity-0"
                      style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>Experience Features:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    {experienceFeatures.map((feature, index) => (
                      <li key={index} 
                          className="animate-slide-in-left opacity-0 hover:text-white transition-colors duration-300"
                          style={{ 
                            animationDelay: `${1600 + (index * 100)}ms`, 
                            animationFillMode: 'forwards' 
                          }}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-400 mb-2 animate-slide-in-right opacity-0"
                      style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>Pro Tips:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    {proTips.map((tip, index) => (
                      <li key={index} 
                          className="animate-slide-in-right opacity-0 hover:text-white transition-colors duration-300"
                          style={{ 
                            animationDelay: `${1600 + (index * 100)}ms`, 
                            animationFillMode: 'forwards' 
                          }}>
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={1800}>
            <div className="text-center animate-fade-in-up opacity-0"
                 style={{ animationDelay: '1800ms', animationFillMode: 'forwards' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 animate-slide-in-left opacity-0"
                    style={{ animationDelay: '1900ms', animationFillMode: 'forwards' }}>Booth Challenge</h3>
                <p className="text-gray-300 mb-6 animate-fade-in opacity-0"
                   style={{ animationDelay: '2000ms', animationFillMode: 'forwards' }}>
                  Visit all 8 booths to complete your Tech Explorer passport and win exclusive prizes!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: Zap, text: 'Interactive Challenges' },
                    { icon: Bot, text: 'Hands-on Demos' },
                    { icon: Brain, text: 'Expert Guidance' }
                  ].map((item, index) => (
                    <div key={index} 
                         className="flex items-center gap-2 text-cyan-400 animate-slide-in-left opacity-0 hover:text-accent-electric-cyan transition-colors duration-300"
                         style={{ 
                           animationDelay: `${2100 + (index * 100)}ms`, 
                           animationFillMode: 'forwards' 
                         }}>
                      <item.icon className="h-5 w-5 animate-pulse-slow" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={2200}>
            <div className="mt-8 text-center animate-fade-in opacity-0"
                 style={{ animationDelay: '2200ms', animationFillMode: 'forwards' }}>
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
    </div>
  );
};

export default Booths;