import React from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-gold text-white hover:bg-gold/90 shadow-md',
    secondary: 'bg-pink-soft text-ink hover:bg-pink-soft/80',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
    ghost: 'text-ink hover:bg-black/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-medium tracking-wide uppercase',
  };

  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
