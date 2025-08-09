'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'button' | 'icon';
}

export function ThemeToggle({ 
  className = '', 
  size = 'md', 
  variant = 'button' 
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    rounded-lg transition-all duration-200
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    dark:focus:ring-offset-dark-800
  `;

  const variantClasses = {
    button: `
      bg-light-100 hover:bg-light-200 
      dark:bg-dark-800 dark:hover:bg-dark-700
      border border-light-300 dark:border-dark-600
      text-light-700 dark:text-dark-300
    `,
    icon: `
      bg-transparent hover:bg-light-100 
      dark:hover:bg-dark-800
      text-light-600 hover:text-light-900
      dark:text-dark-400 dark:hover:text-dark-100
    `
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="relative">
        {/* Sun icon for light mode */}
        <Sun 
          size={iconSizes[size]} 
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
            }
          `}
        />
        
        {/* Moon icon for dark mode */}
        <Moon 
          size={iconSizes[size]} 
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
            }
          `}
        />
      </div>
    </button>
  );
}

// Animated theme toggle with text
export function ThemeToggleWithText({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg
        bg-light-100 hover:bg-light-200 
        dark:bg-dark-800 dark:hover:bg-dark-700
        border border-light-300 dark:border-dark-600
        text-light-700 dark:text-dark-300
        transition-all duration-200 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-dark-800
        ${className}
      `}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          size={20} 
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
            }
          `}
        />
        <Moon 
          size={20} 
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
            }
          `}
        />
      </div>
      <span className="text-sm font-medium">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

// Minimal theme toggle for mobile
export function MobileThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full
        bg-transparent hover:bg-light-100 
        dark:hover:bg-dark-800
        text-light-600 hover:text-light-900
        dark:text-dark-400 dark:hover:text-dark-100
        transition-colors duration-200
        ${className}
      `}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}