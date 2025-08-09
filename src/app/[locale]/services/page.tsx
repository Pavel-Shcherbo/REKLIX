'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target, 
  Rocket, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Users
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useThemeStyles } from '@/hooks/useThemeStyles';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const styles = useThemeStyles();

  const services = [
    {
      icon: Target,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      features: [
        t('services.marketing.features.seo'),
        t('services.marketing.features.ppc'),
        t('services.marketing.features.social'),
        t('services.marketing.features.content'),
        t('services.marketing.features.analytics')
      ],
      href: '/services/marketing',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: t('services.engineering.title'),
      description: t('services.engineering.description'),
      features: [
        t('services.engineering.features.frontend'),
        t('services.engineering.features.backend'),
        t('services.engineering.features.mobile'),
        t('services.engineering.features.devops'),
        t('services.engineering.features.testing')
      ],
      href: '/services/engineering',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      title: t('services.fullstack.title'),
      description: t('services.fullstack.description'),
      features: [
        t('services.fullstack.features.consultation'),
        t('services.fullstack.features.architecture'),
        t('services.fullstack.features.development'),
        t('services.fullstack.features.optimization'),
        t('services.fullstack.features.support')
      ],
      href: '/services/full-stack',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('services.benefits.growth.title'),
      description: t('services.benefits.growth.description')
    },
    {
      icon: Shield,
      title: t('services.benefits.quality.title'),
      description: t('services.benefits.quality.description')
    },
    {
      icon: Zap,
      title: t('services.benefits.speed.title'),
      description: t('services.benefits.speed.description')
    },
    {
      icon: Users,
      title: t('services.benefits.support.title'),
      description: t('services.benefits.support.description')
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
              {t('services.hero.title')}
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              {t('services.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className={`
                    group relative p-8 rounded-2xl
                    ${styles.card.default}
                    hover:shadow-2xl transition-all duration-300
                    transform hover:-translate-y-2
                  `}
                  variants={fadeInUp}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${styles.text.secondary} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                        <span className={`${styles.text.secondary} text-sm`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/${locale}${service.href}`}
                    className={`
                      group/link inline-flex items-center space-x-2
                      ${styles.button.primary}
                      px-6 py-3 rounded-xl font-semibold
                      transform hover:scale-105 transition-all duration-300
                    `}
                  >
                    <span>{t('services.learnMore')}</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
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
              {t('services.benefits.title')}
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('services.benefits.subtitle')}
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
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className={`text-center p-6 rounded-xl ${styles.card.default}`}
                  variants={fadeInUp}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
                    <IconComponent size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  <h3 className={`text-xl font-bold ${styles.text.primary} mb-3`}>
                    {benefit.title}
                  </h3>
                  
                  <p className={`${styles.text.secondary} text-sm leading-relaxed`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`
              text-center p-12 lg:p-16 rounded-3xl
              bg-gradient-to-r from-primary-600 to-accent-600
              text-white
            `}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t('services.cta.title')}
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            
            <Link
              href={`/${locale}/contact`}
              className="
                inline-flex items-center space-x-2
                bg-white text-primary-600 hover:bg-gray-100
                px-8 py-4 rounded-xl font-semibold text-lg
                transform hover:scale-105 transition-all duration-300
                shadow-xl hover:shadow-2xl
              "
            >
              <span>{t('services.cta.button')}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}