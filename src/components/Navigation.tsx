import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import LoadingSpinner from './LoadingSpinner';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingLink, setLoadingLink] = useState<string | null>(null);
  const location = useLocation();
  const { scrollY } = useScrollAnimation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About', path: '/about' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Booths', path: '/booths' },
    { name: 'Team', path: '/team' },
    { name: 'Register', path: '/register' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isScrolled = scrollY > 50;

  const handleNavClick = (path: string) => {
    if (path !== location.pathname) {
      setLoadingLink(path);
      // Simulate loading time
      setTimeout(() => {
        setLoadingLink(null);
      }, 800);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`
      sticky top-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-secondary-deep-slate/95 backdrop-blur-md shadow-tech-glow border-b border-accent-electric-cyan/30' 
        : 'bg-secondary-deep-slate/80 backdrop-blur-md border-b border-accent-electric-cyan/20'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group" onClick={() => handleNavClick('/')}>
              <div className="p-2 rounded-lg bg-logo-gradient shadow-cyan-glow group-hover:shadow-purple-glow transition-all duration-300 hover:scale-110 animate-float">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-accent-electric-cyan to-accent-vibrant-purple bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                TiS Expo 2025
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift relative inline-flex items-center gap-2
                    ${isActive(item.path)
                      ? 'bg-accent-gradient text-white shadow-tech-glow'
                      : 'text-neutral-pale-gray hover:bg-secondary-midnight-blue/50 hover:text-accent-electric-cyan hover:shadow-cyan-glow'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {loadingLink === item.path && (
                    <LoadingSpinner size="sm" />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-pale-gray hover:text-accent-electric-cyan hover:bg-secondary-midnight-blue/50 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div className={`
        md:hidden transition-all duration-300 overflow-hidden
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-deep-slate/95 backdrop-blur-md border-t border-accent-electric-cyan/20">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover-lift relative inline-flex items-center gap-2
                ${isActive(item.path)
                  ? 'bg-accent-gradient text-white shadow-tech-glow'
                  : 'text-neutral-pale-gray hover:bg-secondary-midnight-blue/50 hover:text-accent-electric-cyan'
                }
              `}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.3s ease ${index * 0.1}s`
              }}
              onClick={() => handleNavClick(item.path)}
            >
              {loadingLink === item.path && (
                <LoadingSpinner size="sm" />
              )}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;