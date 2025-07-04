import React from 'react';
import { Code, Cpu, Smartphone, Zap, Brain, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Workshops: React.FC = () => {
  const workshops = [
    {
      icon: Code,
      title: 'Web Development Fundamentals',
      description: 'Learn to build responsive websites using modern HTML, CSS, and JavaScript',
      level: 'Beginner',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Basics',
      description: 'Explore the fascinating world of artificial intelligence and create your first ML model',
      level: 'Intermediate',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Design and prototype your own mobile app using no-code/low-code platforms',
      level: 'Beginner',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Cpu,
      title: 'Robotics & IoT',
      description: 'Build and program simple robots and IoT devices with Arduino and sensors',
      level: 'Intermediate',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Digital Marketing & Social Media',
      description: 'Master the art of online presence and digital marketing strategies',
      level: 'Beginner',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Innovation & Entrepreneurship',
      description: 'Learn to turn your ideas into viable business concepts and pitch like a pro',
      level: 'All Levels',
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  const features = [
    'Interactive, hands-on learning sessions',
    'Real-world projects and applications',
    'Expert mentors and industry professionals',
    'Collaborative team activities',
    'Take-home resources and project templates'
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 heading-responsive">
              Interactive Workshops
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-responsive">
              Hands-on learning experiences designed to inspire and educate
            </p>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-tech-glow animate-fade-in-up opacity-0"
                 style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <h3 className="text-lg font-semibold text-white mb-2 animate-slide-in-left opacity-0"
                  style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>What You'll Experience</h3>
              <ul className="text-gray-300 space-y-1 text-left max-w-2xl mx-auto">
                {features.map((feature, index) => (
                  <li key={index} 
                      className="animate-slide-in-left opacity-0 hover:text-white transition-colors duration-300"
                      style={{ 
                        animationDelay: `${600 + (index * 100)}ms`, 
                        animationFillMode: 'forwards' 
                      }}>
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 
              delay={600 + (index * 150)}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:shadow-tech-glow transition-all duration-500 transform hover:scale-105 group animate-fade-in-up opacity-0"
                   style={{ animationDelay: `${600 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                <div className={`p-4 rounded-lg bg-gradient-to-r ${workshop.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce-slow`}
                     style={{ animationDelay: `${700 + (index * 150)}ms` }}>
                  <workshop.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-electric-cyan transition-colors duration-300 animate-slide-in-left opacity-0"
                    style={{ animationDelay: `${650 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                  {workshop.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300 animate-fade-in opacity-0"
                   style={{ animationDelay: `${700 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                  {workshop.description}
                </p>
                <div className="flex items-center justify-between animate-slide-in-right opacity-0"
                     style={{ animationDelay: `${750 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${workshop.color} text-white shadow-lg`}>
                    {workshop.level}
                  </span>
                  <span className="text-sm text-cyan-400 font-medium animate-pulse-slow">Interactive</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={1200}>
          <div className="mt-12 text-center animate-fade-in-up opacity-0"
               style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4 animate-slide-in-left opacity-0"
                  style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}>Ready to Get Your Hands Dirty?</h3>
              <p className="text-gray-300 mb-6 animate-fade-in opacity-0"
                 style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}>
                All workshops are designed to be interactive and engaging. No prior experience needed - 
                just bring your curiosity and enthusiasm!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {[
                  { icon: Zap, text: 'Hands-on Activities' },
                  { icon: Brain, text: 'Expert Mentors' },
                  { icon: Globe, text: 'Real-world Applications' }
                ].map((item, index) => (
                  <div key={index} 
                       className="flex items-center gap-2 text-cyan-400 animate-slide-in-left opacity-0 hover:text-accent-electric-cyan transition-colors duration-300"
                       style={{ 
                         animationDelay: `${1500 + (index * 100)}ms`, 
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
      </div>
    </div>
  );
};

export default Workshops;