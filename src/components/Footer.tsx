'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter,
  MessageCircle,
  ArrowUp
} from 'lucide-react';
import { useThemeStyles } from '@/hooks/useThemeStyles';

const footerLinks = {
  services: [
    { name: 'marketing', href: '/services/marketing' },
    { name: 'engineering', href: '/services/engineering' },
    { name: 'fullstack', href: '/services/full-stack' }
  ],
  company: [
    { name: 'about', href: '/about' },
    { name: 'cases', href: '/cases' },
    { name: 'blog', href: '/blog' },
    { name: 'careers', href: '/careers' }
  ],
  support: [
    { name: 'contact', href: '/contact' },
    { name: 'faq', href: '/faq' },
    { name: 'privacy', href: '/privacy' },
    { name: 'terms', href: '/terms' }
  ]
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/reklix' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/reklix' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/reklix' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/reklix' },
  { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/reklix_official' }
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const styles = useThemeStyles();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.background.primary} ${styles.border.default} border-t`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className={`text-2xl font-bold ${styles.text.primary} group-hover:text-primary-600 transition-colors duration-200`}>
                REKLIX
              </span>
            </Link>
            
            <p className={`${styles.text.secondary} mb-6 leading-relaxed`}>
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className={styles.text.muted} />
                <a 
                  href="mailto:hello@reklix.com" 
                  className={`${styles.text.secondary} hover:${styles.text.accent} transition-colors duration-200`}
                >
                  hello@reklix.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className={styles.text.muted} />
                <a 
                  href="tel:+79991234567" 
                  className={`${styles.text.secondary} hover:${styles.text.accent} transition-colors duration-200`}
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className={`${styles.text.muted} mt-0.5`} />
                <span className={styles.text.secondary}>
                  {t('footer.address')}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-6`}>
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`${styles.text.secondary} hover:${styles.text.accent} transition-colors duration-200`}
                  >
                    {t(`nav.${link.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-6`}>
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`${styles.text.secondary} hover:${styles.text.accent} transition-colors duration-200`}
                  >
                    {t(`nav.${link.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-6`}>
              {t('footer.support')}
            </h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`${styles.text.secondary} hover:${styles.text.accent} transition-colors duration-200`}
                  >
                    {t(`nav.${link.name}`)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h4 className={`text-base font-medium ${styles.text.primary} mb-3`}>
                {t('footer.newsletter')}
              </h4>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className={`
                    w-full px-4 py-2 rounded-lg border
                    ${styles.input.default}
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    dark:focus:ring-offset-dark-900
                    transition-all duration-200
                  `}
                />
                <button
                  type="submit"
                  className={`
                    w-full px-4 py-2 rounded-lg font-medium
                    ${styles.button.primary}
                    transform hover:scale-105 transition-all duration-200
                  `}
                >
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`${styles.background.secondary} ${styles.border.default} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`text-sm ${styles.text.muted}`}>
              © {new Date().getFullYear()} REKLIX. {t('footer.rights')}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-lg
                      ${styles.text.muted} hover:${styles.text.accent}
                      hover:${styles.background.muted}
                      transform hover:scale-110 transition-all duration-200
                    `}
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className={`
                p-2 rounded-lg
                ${styles.button.ghost}
                transform hover:scale-110 transition-all duration-200
              `}
              aria-label={t('footer.scrollToTop')}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}