'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target, 
  Search, 
  MousePointer, 
  Share2, 
  FileText, 
  BarChart3, 
  ArrowRight, 
  CheckCircle
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

export default function MarketingPage() {
  const locale = useLocale();
  const styles = useThemeStyles();

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Complete search engine optimization to improve your website visibility and organic traffic',
      features: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Link building']
    },
    {
      icon: MousePointer,
      title: 'PPC Advertising',
      description: 'Targeted pay-per-click campaigns on Google Ads and Yandex.Direct for immediate results',
      features: ['Campaign setup', 'Keyword bidding', 'Ad copywriting', 'Performance optimization']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media presence to engage your audience and build brand awareness',
      features: ['Content strategy', 'Community management', 'Paid social ads', 'Influencer partnerships']
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'High-quality content creation that attracts, engages, and converts your target audience',
      features: ['Blog writing', 'Video content', 'Infographics', 'Email campaigns']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Optimization',
      description: 'Data-driven insights and continuous optimization to maximize your marketing ROI',
      features: ['Performance tracking', 'Conversion optimization', 'A/B testing', 'Reporting']
    }
  ];

  const results = [
    { metric: '300%', label: 'Average traffic increase' },
    { metric: '150%', label: 'Conversion rate improvement' },
    { metric: '200%', label: 'ROI increase' },
    { metric: '90%', label: 'Client retention rate' }
  ];

  const process = [
    {
      step: '01',
      title: 'Analysis',
      description: 'We analyze your current marketing performance and identify opportunities'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive marketing strategy tailored to your business goals'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy across all relevant marketing channels'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize campaigns for maximum performance'
    }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6"
              variants={fadeInUp}
            >
              <Target size={48} className="text-white" />
            </motion.div>
            
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              Digital Marketing
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              Drive growth with data-driven marketing strategies that deliver measurable results
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
                <span>Start Your Campaign</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className={`py-16 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {results.map((result, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className={`text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2`}>
                  {result.metric}
                </div>
                <div className={`text-sm lg:text-base ${styles.text.secondary} font-medium`}>
                  {result.label}
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
              Our Marketing Services
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              Comprehensive digital marketing solutions to grow your business
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <div className="inline-flex p-4 rounded-xl bg-blue-100 dark:bg-blue-900 mb-6">
                    <IconComponent size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${styles.text.secondary} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className={`${styles.text.secondary} text-sm`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              A proven methodology that delivers consistent results
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-xl ${styles.card.default}`}
                variants={fadeInUp}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl mb-4">
                  {step.step}
                </div>
                
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-3`}>
                  {step.title}
                </h3>
                
                <p className={`${styles.text.secondary} text-sm leading-relaxed`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`
              text-center p-12 lg:p-16 rounded-3xl
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white
            `}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s create a marketing strategy that drives real results for your business
            </p>
            
            <Link
              href={`/${locale}/contact`}
              className="
                inline-flex items-center space-x-2
                bg-white text-blue-600 hover:bg-gray-100
                px-8 py-4 rounded-xl font-semibold text-lg
                transform hover:scale-105 transition-all duration-300
                shadow-xl hover:shadow-2xl
              "
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}