import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    const targetDate = new Date('2025-10-11T08:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        if (!isLoaded) setIsLoaded(true);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  const timeUnits = [
    { 
      label: 'Days', 
      value: timeLeft.days, 
      color: 'from-accent-electric-cyan to-accent-neon-blue',
      delay: '0s'
    },
    { 
      label: 'Hours', 
      value: timeLeft.hours, 
      color: 'from-accent-neon-blue to-accent-vibrant-purple',
      delay: '0.1s'
    },
    { 
      label: 'Minutes', 
      value: timeLeft.minutes, 
      color: 'from-accent-vibrant-purple to-gradient-purple-end',
      delay: '0.2s'
    },
    { 
      label: 'Seconds', 
      value: timeLeft.seconds, 
      color: 'from-gradient-purple-end to-accent-electric-cyan',
      delay: '0.3s'
    },
  ];

  if (!isLoaded) {
    return (
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton w-24 h-24 sm:w-32 sm:h-32 rounded-xl"></div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-4 sm:gap-8">
      {timeUnits.map((item, index) => (
        <div
          key={item.label}
          className={`
            bg-secondary-deep-slate/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center 
            min-w-[90px] sm:min-w-[110px] border border-white/10 
            hover:border-accent-electric-cyan/30 transition-all duration-500 
            hover:shadow-tech-glow transform hover:scale-105 hover-lift
            ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}
          `}
          style={{ 
            animationDelay: item.delay,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className={`
            text-2xl sm:text-4xl font-bold bg-gradient-to-r ${item.color} 
            bg-clip-text text-transparent mb-2 transition-all duration-300
          `}>
            {item.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm sm:text-base text-neutral-pale-gray font-medium">
            {item.label}
          </div>
          
          {/* Animated progress indicator for seconds */}
          {item.label === 'Seconds' && (
            <div className="mt-2 w-full bg-white/10 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-accent-electric-cyan to-accent-vibrant-purple h-1 rounded-full transition-all duration-1000"
                style={{ width: `${((60 - item.value) / 60) * 100}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;