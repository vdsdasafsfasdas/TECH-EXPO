import React from 'react';
import { Target, Star, Users, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AboutEvent: React.FC = () => {
  const goals = [
    {
      title: 'Foster Innovation',
      description: 'Encourage creative thinking and innovative problem-solving among students.',
      icon: Star
    },
    {
      title: 'Build Connections',
      description: 'Create networking opportunities between students, mentors, and industry professionals.',
      icon: Star
    },
    {
      title: 'Hands-on Learning',
      description: 'Provide interactive workshops and real-world technology experiences.',
      icon: Star
    },
    {
      title: 'Inspire Future Leaders',
      description: 'Motivate the next generation of tech innovators and entrepreneurs.',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 heading-responsive">
              About the Event
            </h1>
            <p className="text-xl text-gray-300 text-responsive">
              Where innovation meets inspiration
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* What is the Innovation & Tech Expo */}
          <AnimatedSection animation="slide-in-left" delay={400}>
            <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
                     style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-6 animate-slide-in-left opacity-0"
                   style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                <Lightbulb className="h-8 w-8 text-cyan-400 animate-bounce-slow" />
                <h2 className="text-2xl font-bold text-white">What is the Innovation & Tech Expo?</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed animate-fade-in opacity-0"
                 style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                The Innovation & Tech Expo 2025 is an exciting one-day event designed to bring together 
                young innovators, tech enthusiasts, and creative minds. It's a platform where students 
                can explore the latest technological advancements, participate in hands-on workshops, 
                and connect with like-minded peers who share a passion for innovation and technology.
              </p>
            </section>
          </AnimatedSection>

          {/* Goals of the Event */}
          <AnimatedSection animation="slide-in-right" delay={700}>
            <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
                     style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-6 animate-slide-in-right opacity-0"
                   style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                <Target className="h-8 w-8 text-cyan-400 animate-bounce-slow" />
                <h2 className="text-2xl font-bold text-white">Goals of the Event</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-start gap-3 animate-slide-in-left opacity-0"
                         style={{ 
                           animationDelay: `${900 + (index * 150)}ms`, 
                           animationFillMode: 'forwards' 
                         }}>
                      <Star className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0 animate-pulse-slow" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">{goal.title}</h3>
                        <p className="text-gray-300 text-sm">{goal.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Student Leadership */}
          <AnimatedSection animation="slide-in-left" delay={1000}>
            <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 hover:shadow-tech-glow transition-all duration-500 animate-fade-in-up opacity-0"
                     style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-6 animate-slide-in-left opacity-0"
                   style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}>
                <Users className="h-8 w-8 text-cyan-400 animate-bounce-slow" />
                <h2 className="text-2xl font-bold text-white">Student Leadership</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed animate-fade-in opacity-0"
                 style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
                This event is proudly organized by students, for students! Our dedicated team of 
                student leaders has worked tirelessly to create an engaging and memorable experience. 
                From planning workshops to coordinating with vendors, every aspect of this expo 
                showcases the incredible potential of young leadership. We believe that students 
                have the power to drive innovation and create positive change in their communities, 
                and this event is a testament to that belief.
              </p>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;