'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Shield,
  Target,
  Rocket,
  Globe
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import Link from 'next/link';

interface HomePageClientProps {
  locale: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePageClient({ locale }: HomePageClientProps) {
  const t = useTranslations();
  const styles = useThemeStyles();

  const services = [
    {
      icon: Target,
      title: t('home.services.marketing.title'),
      description: t('home.services.marketing.description'),
      href: '/services/marketing'
    },
    {
      icon: Rocket,
      title: t('home.services.engineering.title'),
      description: t('home.services.engineering.description'),
      href: '/services/engineering'
    },
    {
      icon: Globe,
      title: t('home.services.fullstack.title'),
      description: t('home.services.fullstack.description'),
      href: '/services/full-stack'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('home.benefits.growth.title'),
      description: t('home.benefits.growth.description')
    },
    {
      icon: Shield,
      title: t('home.benefits.quality.title'),
      description: t('home.benefits.quality.description')
    },
    {
      icon: Zap,
      title: t('home.benefits.speed.title'),
      description: t('home.benefits.speed.description')
    },
    {
      icon: Users,
      title: t('home.benefits.support.title'),
      description: t('home.benefits.support.description')
    }
  ];

  const stats = [
    { number: '100+', label: t('home.stats.projects') },
    { number: '50+', label: t('home.stats.clients') },
    { number: '5+', label: t('home.stats.years') },
    { number: '99%', label: t('home.stats.satisfaction') }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      company: 'TechStart',
      text: t('home.testimonials.first.text'),
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'GlobalCorp',
      text: t('home.testimonials.second.text'),
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      company: 'InnovateLab',
      text: t('home.testimonials.third.text'),
      rating: 5
    }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              {t('home.hero.title')}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {' '}{t('home.hero.titleAccent')}
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Link
                href={`/${locale}/contact`}
                className={`
                  group px-8 py-4 rounded-xl font-semibold text-lg
                  ${styles.button.primary}
                  transform hover:scale-105 transition-all duration-300
                  shadow-xl hover:shadow-2xl
                  flex items-center space-x-2
                `}
              >
                <span>{t('home.hero.cta')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href={`/${locale}/cases`}
                className={`
                  px-8 py-4 rounded-xl font-semibold text-lg
                  ${styles.button.outline}
                  transform hover:scale-105 transition-all duration-300
                `}
              >
                {t('home.hero.secondaryCta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-float" />
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-accent-200 dark:bg-accent-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-primary-300 dark:bg-primary-700 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className={`text-4xl lg:text-5xl font-bold ${styles.text.accent} mb-2`}>
                  {stat.number}
                </div>
                <div className={`text-sm lg:text-base ${styles.text.secondary} font-medium`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-5xl font-bold ${styles.text.primary} mb-6`}>
              {t('home.services.title')}
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('home.services.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`
                    group p-8 rounded-2xl border
                    ${styles.card.default} ${styles.card.hover}
                    transform hover:scale-105 transition-all duration-300
                    hover:shadow-xl
                  `}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                    {service.title}
                  </h3>
                  <p className={`${styles.text.secondary} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>
                  <Link
                    href={`/${locale}${service.href}`}
                    className={`
                      inline-flex items-center space-x-2 font-semibold
                      ${styles.text.accent} hover:${styles.text.primary}
                      transition-colors duration-200
                    `}
                  >
                    <span>{t('common.learnMore')}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 lg:py-32 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-5xl font-bold ${styles.text.primary} mb-6`}>
              {t('home.benefits.title')}
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('home.benefits.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                    {benefit.title}
                  </h3>
                  <p className={`${styles.text.secondary} leading-relaxed`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-5xl font-bold ${styles.text.primary} mb-6`}>
              {t('home.testimonials.title')}
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`
                  p-8 rounded-2xl border
                  ${styles.card.default}
                  transform hover:scale-105 transition-all duration-300
                  hover:shadow-xl
                `}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${styles.text.secondary} mb-6 leading-relaxed italic`}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <div className={`font-semibold ${styles.text.primary}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${styles.text.muted}`}>
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 lg:py-32 ${styles.background.secondary}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`text-3xl lg:text-5xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              {t('home.cta.title')}
            </motion.h2>
            <motion.p 
              className={`text-xl ${styles.text.secondary} mb-8`}
              variants={fadeInUp}
            >
              {t('home.cta.subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href={`/${locale}/contact`}
                className={`
                  group inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg
                  ${styles.button.primary}
                  transform hover:scale-105 transition-all duration-300
                  shadow-xl hover:shadow-2xl
                `}
              >
                <span>{t('home.cta.button')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}