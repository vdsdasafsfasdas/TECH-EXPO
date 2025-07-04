import React, { useState } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  className = ''
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = async () => {
    if (disabled || isLoading || !onClick) return;

    setIsClicked(true);
    setIsLoading(true);

    try {
      await onClick();
    } finally {
      setTimeout(() => {
        setIsClicked(false);
        setIsLoading(false);
      }, 300);
    }
  };

  const baseClasses = 'btn-primary relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform focus-visible:focus-visible disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-accent-gradient text-white hover:shadow-tech-glow hover:scale-105',
    secondary: 'bg-secondary-deep-slate/50 text-white border border-accent-electric-cyan/30 hover:bg-secondary-deep-slate/70 hover:border-accent-electric-cyan/50 hover:shadow-cyan-glow',
    outline: 'border-2 border-accent-electric-cyan/50 text-accent-electric-cyan hover:bg-accent-electric-cyan/10 hover:border-accent-electric-cyan hover:shadow-cyan-glow'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3'
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${isClicked ? 'scale-95' : ''}
        ${className}
      `}
    >
      {isLoading ? (
        <LoadingSpinner size={size === 'lg' ? 'md' : 'sm'} />
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={iconSizeClasses[size]} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={iconSizeClasses[size]} />
          )}
        </>
      )}
    </button>
  );
};

export default InteractiveButton;