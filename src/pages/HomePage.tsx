import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveButton from '../components/InteractiveButton';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-electric-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-vibrant-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 heading-responsive">
                Innovation & Tech
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-electric-cyan via-accent-neon-blue to-accent-vibrant-purple">
                  Expo 2025
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-pale-gray mb-8 font-medium text-responsive animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                Explore. Innovate. Inspire.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-pale-gray mb-12">
                <div className="flex items-center gap-3 bg-secondary-deep-slate/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-electric-cyan/20 hover:border-accent-electric-cyan/40 transition-all duration-300 hover-lift">
                  <Calendar className="h-5 w-5 text-accent-electric-cyan animate-bounce-slow" />
                  <span>October 11, 2025</span>
                </div>
                <div className="flex items-center gap-3 bg-secondary-deep-slate/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-vibrant-purple/20 hover:border-accent-vibrant-purple/40 transition-all duration-300 hover-lift">
                  <MapPin className="h-5 w-5 text-accent-vibrant-purple animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
                  <span>Tanarata International School</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={600}>
            <div className="mb-12">
              <CountdownTimer />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => window.location.href = '/register'}
              >
                Register Now
              </InteractiveButton>
              <InteractiveButton
                variant="outline"
                size="lg"
                icon={Sparkles}
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </InteractiveButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Attend?</h2>
              <p className="text-lg text-neutral-pale-gray">Discover what makes this event special</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-in-left" delay={300}>
              <div className="bg-secondary-deep-slate/30 backdrop-blur-sm rounded-xl p-6 border border-accent-electric-cyan/20 hover:bg-secondary-deep-slate/50 hover:border-accent-electric-cyan/40 hover:shadow-cyan-glow transition-all duration-300 hover-lift group">
                <div className="text-accent-electric-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 animate-float" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Meet Innovators</h3>
                <p className="text-neutral-pale-gray">
                  Connect with fellow tech enthusiasts and innovators from around the region.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500}>
              <div className="bg-secondary-deep-slate/30 backdrop-blur-sm rounded-xl p-6 border border-accent-vibrant-purple/20 hover:bg-secondary-deep-slate/50 hover:border-accent-vibrant-purple/40 hover:shadow-purple-glow transition-all duration-300 hover-lift group">
                <div className="text-accent-vibrant-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-12 w-12 animate-float" style={{ animationDelay: '1s' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Workshops</h3>
                <p className="text-neutral-pale-gray">
                  Hands-on learning experiences with the latest technology and innovation trends.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={700}>
              <div className="bg-secondary-deep-slate/30 backdrop-blur-sm rounded-xl p-6 border border-accent-tech-green/20 hover:bg-secondary-deep-slate/50 hover:border-accent-tech-green/40 hover:shadow-tech-glow transition-all duration-300 hover-lift group">
                <div className="text-accent-tech-green mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-12 w-12 animate-float" style={{ animationDelay: '2s' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Explore Booths</h3>
                <p className="text-neutral-pale-gray">
                  Discover cutting-edge tech demos, AI showcases, and interactive exhibits.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-accent-electric-cyan/10 to-accent-vibrant-purple/10 backdrop-blur-sm rounded-2xl p-8 border border-accent-electric-cyan/20 hover:border-accent-electric-cyan/40 transition-all duration-300 hover:shadow-tech-glow">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Join the Future?</h3>
              <p className="text-lg text-neutral-pale-gray mb-6">
                Don't miss this opportunity to be part of something extraordinary. Register now and secure your spot!
              </p>
              <InteractiveButton
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => window.location.href = '/register'}
                className="animate-pulse-slow"
              >
                Get Your Free Ticket
              </InteractiveButton>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;