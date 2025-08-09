'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useThemeStyles } from '@/hooks/useThemeStyles';

const navigation = [
  { name: 'home', href: '/' },
  { 
    name: 'services', 
    href: '/services',
    submenu: [
      { name: 'marketing', href: '/services/marketing' },
      { name: 'engineering', href: '/services/engineering' },
      { name: 'fullstack', href: '/services/full-stack' }
    ]
  },
  { name: 'cases', href: '/cases' },
  { name: 'pricing', href: '/pricing' },
  { name: 'blog', href: '/blog' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' }
];

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const styles = useThemeStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [locale]);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  const otherLocale = locale === 'ru' ? 'en' : 'ru';

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? `${styles.nav.background} backdrop-blur-md border-b ${styles.border.default} shadow-lg` 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg lg:text-xl">R</span>
            </div>
            <span className={`text-xl lg:text-2xl font-bold ${styles.text.primary} group-hover:text-primary-600 transition-colors duration-200`}>
              REKLIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`
                        flex items-center space-x-1 px-3 py-2 rounded-lg
                        ${styles.nav.link} hover:${styles.text.primary}
                        transition-colors duration-200
                      `}
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                    >
                      <span>{t(item.name)}</span>
                      <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    
                    {/* Desktop Submenu */}
                    <div 
                      className={`
                        absolute top-full left-0 mt-2 w-48 py-2 rounded-lg shadow-xl
                        ${styles.card.elevated} ${styles.border.default} border
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transform translate-y-2 group-hover:translate-y-0
                        transition-all duration-200
                      `}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={`/${locale}${subitem.href}`}
                          className={`
                            block px-4 py-2 text-sm
                            ${styles.text.secondary} hover:${styles.text.primary}
                            hover:${styles.background.muted}
                            transition-colors duration-200
                          `}
                        >
                          {t(subitem.name)}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={`/${locale}${item.href}`}
                    className={`
                      px-3 py-2 rounded-lg
                      ${styles.nav.link} hover:${styles.text.primary}
                      transition-colors duration-200
                    `}
                  >
                    {t(item.name)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}`}
              className={`
                flex items-center space-x-1 px-3 py-2 rounded-lg
                ${styles.button.ghost}
                transition-all duration-200
              `}
            >
              <Globe size={16} />
              <span className="text-sm font-medium uppercase">{otherLocale}</span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle size="md" variant="icon" />

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className={`
                px-6 py-2 rounded-lg font-medium
                ${styles.button.primary}
                transform hover:scale-105 transition-all duration-200
                shadow-lg hover:shadow-xl
              `}
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              lg:hidden p-2 rounded-lg
              ${styles.button.ghost}
              transition-colors duration-200
            `}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          lg:hidden absolute top-full left-0 right-0
          ${styles.nav.background} backdrop-blur-md
          border-b ${styles.border.default}
          transform transition-all duration-300 origin-top
          ${isMenuOpen 
            ? 'opacity-100 scale-y-100 visible' 
            : 'opacity-0 scale-y-0 invisible'
          }
        `}
      >
        <div className="px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`
                      flex items-center justify-between w-full px-3 py-2 rounded-lg
                      ${styles.nav.link} hover:${styles.background.muted}
                      transition-colors duration-200
                    `}
                  >
                    <span>{t(item.name)}</span>
                    <ChevronDown 
                      size={16} 
                      className={`
                        transform transition-transform duration-200
                        ${activeSubmenu === item.name ? 'rotate-180' : ''}
                      `} 
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <div 
                    className={`
                      ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-200
                      ${activeSubmenu === item.name 
                        ? 'max-h-40 opacity-100' 
                        : 'max-h-0 opacity-0'
                      }
                    `}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={`/${locale}${subitem.href}`}
                        className={`
                          block px-3 py-2 rounded-lg text-sm
                          ${styles.text.secondary} hover:${styles.text.primary}
                          hover:${styles.background.muted}
                          transition-colors duration-200
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(subitem.name)}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={`/${locale}${item.href}`}
                  className={`
                    block px-3 py-2 rounded-lg
                    ${styles.nav.link} hover:${styles.background.muted}
                    transition-colors duration-200
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.name)}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Actions */}
          <div className="pt-4 border-t border-light-200 dark:border-dark-700 space-y-4">
            <div className="flex items-center justify-between">
              <Link
                href={`/${otherLocale}`}
                className={`
                  flex items-center space-x-2 px-3 py-2 rounded-lg
                  ${styles.button.ghost}
                `}
              >
                <Globe size={16} />
                <span className="text-sm font-medium uppercase">{otherLocale}</span>
              </Link>
              
              <ThemeToggle size="sm" variant="icon" />
            </div>
            
            <Link
              href={`/${locale}/contact`}
              className={`
                block w-full text-center px-6 py-3 rounded-lg font-medium
                ${styles.button.primary}
                transition-all duration-200
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}