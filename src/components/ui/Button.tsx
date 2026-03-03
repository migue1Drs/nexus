'use client';
import React, { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean; 
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading, className, ...props }, ref) => {
    
    
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

    // Diccionario de variantes
    const variants = {
      primary: 'bg-black text-white hover:bg-zinc-800 shadow-sm',
      secondary: 'bg-zinc-100 text-black hover:bg-zinc-200',
      outline: 'bg-transparent border border-zinc-300 text-black hover:bg-zinc-50',
      ghost: 'bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-black',
    };

    // Diccionario de tamaños
    const sizes = {
      sm: 'px-4 py-2 text-[10px]',
      md: 'px-8 py-3.5 text-[11px]',
      lg: 'px-10 py-4 text-[12px]',
      icon: 'p-2 w-10 h-10', 
    };

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Cargando...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';