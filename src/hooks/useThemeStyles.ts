'use client';

import { useTheme } from '@/contexts/ThemeContext';

// Common theme-aware style combinations
export function useThemeStyles() {
  const { theme } = useTheme();

  const styles = {
    // Background styles
    background: {
      primary: theme === 'dark' ? 'bg-dark-900' : 'bg-light-50',
      secondary: theme === 'dark' ? 'bg-dark-800' : 'bg-light-100',
      card: theme === 'dark' ? 'bg-dark-800' : 'bg-white',
      elevated: theme === 'dark' ? 'bg-dark-700' : 'bg-white',
      muted: theme === 'dark' ? 'bg-dark-800' : 'bg-light-100',
    },

    // Text styles
    text: {
      primary: theme === 'dark' ? 'text-dark-100' : 'text-light-900',
      secondary: theme === 'dark' ? 'text-dark-300' : 'text-light-700',
      muted: theme === 'dark' ? 'text-dark-400' : 'text-light-600',
      accent: theme === 'dark' ? 'text-primary-400' : 'text-primary-600',
      inverse: theme === 'dark' ? 'text-light-900' : 'text-dark-100',
    },

    // Border styles
    border: {
      default: theme === 'dark' ? 'border-dark-600' : 'border-light-300',
      muted: theme === 'dark' ? 'border-dark-700' : 'border-light-200',
      accent: theme === 'dark' ? 'border-primary-500' : 'border-primary-400',
    },

    // Button styles
    button: {
      primary: theme === 'dark' 
        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
        : 'bg-primary-600 hover:bg-primary-700 text-white',
      secondary: theme === 'dark'
        ? 'bg-dark-700 hover:bg-dark-600 text-dark-100 border border-dark-600'
        : 'bg-light-100 hover:bg-light-200 text-light-900 border border-light-300',
      ghost: theme === 'dark'
        ? 'hover:bg-dark-800 text-dark-300 hover:text-dark-100'
        : 'hover:bg-light-100 text-light-700 hover:text-light-900',
      outline: theme === 'dark'
        ? 'border border-dark-600 text-dark-300 hover:bg-dark-800 hover:text-dark-100'
        : 'border border-light-300 text-light-700 hover:bg-light-100 hover:text-light-900',
    },

    // Input styles
    input: {
      default: theme === 'dark'
        ? 'bg-dark-800 border-dark-600 text-dark-100 placeholder-dark-400 focus:border-primary-500'
        : 'bg-white border-light-300 text-light-900 placeholder-light-500 focus:border-primary-500',
      error: theme === 'dark'
        ? 'bg-dark-800 border-red-500 text-dark-100 placeholder-dark-400'
        : 'bg-white border-red-500 text-light-900 placeholder-light-500',
    },

    // Navigation styles
    nav: {
      background: theme === 'dark' ? 'bg-dark-900/95' : 'bg-white/95',
      link: theme === 'dark'
        ? 'text-dark-300 hover:text-dark-100'
        : 'text-light-700 hover:text-light-900',
      activeLink: theme === 'dark'
        ? 'text-primary-400'
        : 'text-primary-600',
    },

    // Card styles
    card: {
      default: theme === 'dark'
        ? 'bg-dark-800 border-dark-600'
        : 'bg-white border-light-200',
      elevated: theme === 'dark'
        ? 'bg-dark-800 shadow-xl shadow-black/20'
        : 'bg-white shadow-xl shadow-light-900/10',
      hover: theme === 'dark'
        ? 'hover:bg-dark-700 hover:border-dark-500'
        : 'hover:bg-light-50 hover:border-light-300',
    },

    // Modal/overlay styles
    overlay: {
      backdrop: theme === 'dark' ? 'bg-black/60' : 'bg-black/40',
      content: theme === 'dark' ? 'bg-dark-800' : 'bg-white',
    },

    // Status styles
    status: {
      success: theme === 'dark'
        ? 'bg-green-900/20 text-green-400 border-green-800'
        : 'bg-green-50 text-green-700 border-green-200',
      warning: theme === 'dark'
        ? 'bg-yellow-900/20 text-yellow-400 border-yellow-800'
        : 'bg-yellow-50 text-yellow-700 border-yellow-200',
      error: theme === 'dark'
        ? 'bg-red-900/20 text-red-400 border-red-800'
        : 'bg-red-50 text-red-700 border-red-200',
      info: theme === 'dark'
        ? 'bg-blue-900/20 text-blue-400 border-blue-800'
        : 'bg-blue-50 text-blue-700 border-blue-200',
    },
  };

  return styles;
}

// Hook for getting theme-aware classes
export function useThemeClass(lightClass: string, darkClass: string) {
  const { theme } = useTheme();
  return theme === 'dark' ? darkClass : lightClass;
}

// Hook for conditional theme classes
export function useConditionalThemeClass(condition: boolean, lightClass: string, darkClass: string) {
  const { theme } = useTheme();
  if (!condition) return '';
  return theme === 'dark' ? darkClass : lightClass;
}

// Hook for getting CSS variables based on theme
export function useThemeVariables() {
  const { theme } = useTheme();
  
  return {
    '--theme-bg-primary': theme === 'dark' ? '#0f172a' : '#f8fafc',
    '--theme-bg-secondary': theme === 'dark' ? '#1e293b' : '#f1f5f9',
    '--theme-text-primary': theme === 'dark' ? '#f1f5f9' : '#0f172a',
    '--theme-text-secondary': theme === 'dark' ? '#cbd5e1' : '#475569',
    '--theme-border': theme === 'dark' ? '#475569' : '#e2e8f0',
    '--theme-accent': theme === 'dark' ? '#3b82f6' : '#2563eb',
  };
}