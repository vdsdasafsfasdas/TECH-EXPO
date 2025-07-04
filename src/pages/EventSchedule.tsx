import React from 'react';
import { Clock, Coffee, Presentation, Users, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const EventSchedule: React.FC = () => {
  const schedule = [
    {
      time: '8:00 – 9:00 AM',
      title: 'Registration & Opening',
      description: 'Welcome drinks, networking, and opening ceremony',
      icon: Users,
      color: 'from-green-400 to-green-600',
    },
    {
      time: '9:00 – 11:30 AM',
      title: 'Workshop Part 1',
      description: 'Interactive learning sessions on emerging technologies',
      icon: Lightbulb,
      color: 'from-blue-400 to-blue-600',
    },
    {
      time: '11:30 AM – 12:15 PM',
      title: 'Lunch Break',
      description: 'Networking lunch and refreshments',
      icon: Coffee,
      color: 'from-orange-400 to-orange-600',
    },
    {
      time: '12:15 – 1:30 PM',
      title: 'Booth Exploration',
      description: 'Explore innovative tech demos and interactive exhibits',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
    },
    {
      time: '1:30 – 2:45 PM',
      title: 'Workshop Part 2 (Interactive)',
      description: 'Hands-on activities and collaborative projects',
      icon: Lightbulb,
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      time: '2:45 – 4:00 PM',
      title: 'Presentations & Closing',
      description: 'Student presentations and closing ceremony',
      icon: Presentation,
      color: 'from-red-400 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 heading-responsive">
              Event Schedule
            </h1>
            <p className="text-xl text-gray-300 text-responsive">
              A full day of innovation, learning, and inspiration
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {schedule.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 
              delay={400 + (index * 150)}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:shadow-tech-glow transition-all duration-500 hover-lift group transform opacity-0 animate-fade-in-up"
                   style={{ animationDelay: `${400 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce-slow`}
                       style={{ animationDelay: `${600 + (index * 150)}ms` }}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-accent-electric-cyan transition-colors duration-300 animate-slide-in-left"
                          style={{ animationDelay: `${500 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-accent-electric-cyan animate-slide-in-right"
                           style={{ animationDelay: `${550 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                        <Clock className="h-4 w-4 animate-pulse-slow" />
                        <span className="text-sm font-medium">{item.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 animate-fade-in"
                       style={{ animationDelay: `${600 + (index * 150)}ms`, animationFillMode: 'forwards' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={1200}>
          <div className="mt-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-tech-glow animate-fade-in-up"
               style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold text-white mb-2 animate-slide-in-left"
                style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}>Important Notes</h3>
            <ul className="text-gray-300 space-y-1">
              {[
                'Please arrive 15 minutes early for registration',
                'Bring your own device for interactive workshops',
                'Lunch will be provided for all registered participants',
                'Don\'t forget to visit all booth stations!'
              ].map((note, index) => (
                <li key={index} 
                    className="hover:text-white transition-colors duration-300 animate-slide-in-left opacity-0"
                    style={{ 
                      animationDelay: `${1400 + (index * 100)}ms`, 
                      animationFillMode: 'forwards',
                      transform: 'translateX(-20px)'
                    }}>
                  • {note}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default EventSchedule;