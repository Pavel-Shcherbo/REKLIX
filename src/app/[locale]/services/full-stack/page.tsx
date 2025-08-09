'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Globe, 
  Lightbulb, 
  Rocket, 
  Settings, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Target
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

export default function FullStackPage() {
  const locale = useLocale();
  const styles = useThemeStyles();

  const services = [
    {
      icon: Lightbulb,
      title: 'Business Consultation',
      description: 'Strategic planning and business analysis to define your digital transformation roadmap',
      features: ['Market research', 'Competitor analysis', 'Business model design', 'ROI planning']
    },
    {
      icon: Settings,
      title: 'Technical Architecture',
      description: 'Scalable system design and technology stack selection for optimal performance',
      features: ['System architecture', 'Technology selection', 'Security planning', 'Scalability design']
    },
    {
      icon: Rocket,
      title: 'Full-Cycle Development',
      description: 'End-to-end development from concept to deployment with modern technologies',
      features: ['Frontend & Backend', 'Database design', 'API development', 'Quality assurance']
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategy to drive traffic and conversions',
      features: ['SEO optimization', 'PPC campaigns', 'Content marketing', 'Analytics setup']
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization for maximum efficiency and ROI',
      features: ['Performance monitoring', 'Conversion optimization', 'A/B testing', 'Analytics reporting']
    },
    {
      icon: Shield,
      title: 'Ongoing Support',
      description: '24/7 technical support and maintenance to ensure smooth operations',
      features: ['Technical support', 'Regular updates', 'Security monitoring', 'Backup management']
    }
  ];

  const process = [
    {
      phase: '01',
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      description: 'We analyze your business, define goals, and create a comprehensive project roadmap',
      deliverables: ['Business analysis', 'Technical requirements', 'Project timeline', 'Budget estimation']
    },
    {
      phase: '02',
      title: 'Design & Architecture',
      duration: '2-3 weeks',
      description: 'We design the user experience and technical architecture for your solution',
      deliverables: ['UI/UX design', 'System architecture', 'Database design', 'API specifications']
    },
    {
      phase: '03',
      title: 'Development & Testing',
      duration: '6-12 weeks',
      description: 'We build your solution using agile methodology with regular updates',
      deliverables: ['Frontend development', 'Backend development', 'Quality assurance', 'Performance testing']
    },
    {
      phase: '04',
      title: 'Launch & Marketing',
      duration: '2-4 weeks',
      description: 'We deploy your solution and launch marketing campaigns to drive traffic',
      deliverables: ['Production deployment', 'Marketing campaigns', 'Analytics setup', 'Performance monitoring']
    },
    {
      phase: '05',
      title: 'Growth & Optimization',
      duration: 'Ongoing',
      description: 'We continuously optimize and scale your solution based on data and feedback',
      deliverables: ['Performance optimization', 'Feature updates', 'Marketing optimization', 'Technical support']
    }
  ];

  const results = [
    { metric: '25+', label: 'Full-stack projects' },
    { metric: '4-6', label: 'Weeks to launch' },
    { metric: '300%', label: 'Average ROI increase' },
    { metric: '95%', label: 'Client retention rate' }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 mb-6"
              variants={fadeInUp}
            >
              <Globe size={48} className="text-white" />
            </motion.div>
            
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              Full-Stack
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              Complete digital business development from idea to profitable operation
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
                <span>Start Your Business</span>
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
                <div className={`text-4xl lg:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2`}>
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
              Complete Business Solutions
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              Everything you need to launch and grow a successful digital business
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
                  <div className="inline-flex p-4 rounded-xl bg-orange-100 dark:bg-orange-900 mb-6">
                    <IconComponent size={32} className="text-orange-600 dark:text-orange-400" />
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
              Our Development Process
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              A proven methodology that takes you from idea to profitable business
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {process.map((phase, index) => (
              <motion.div
                key={index}
                className={`
                  grid lg:grid-cols-3 gap-8 p-8 rounded-2xl
                  ${styles.card.default}
                  ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
                `}
                variants={fadeInUp}
              >
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold">
                      {phase.phase}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>
                        {phase.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={16} className="text-orange-500" />
                        <span className={`text-sm ${styles.text.secondary}`}>{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`${styles.text.secondary} leading-relaxed`}>
                    {phase.description}
                  </p>
                </div>
                
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h4 className={`text-lg font-semibold ${styles.text.primary} mb-4`}>Deliverables:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className={`${styles.text.secondary} text-sm`}>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
              bg-gradient-to-r from-orange-600 to-red-600
              text-white
            `}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Launch Your Digital Business?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s transform your idea into a profitable digital business with our full-stack approach
            </p>
            
            <Link
              href={`/${locale}/contact`}
              className="
                inline-flex items-center space-x-2
                bg-white text-orange-600 hover:bg-gray-100
                px-8 py-4 rounded-xl font-semibold text-lg
                transform hover:scale-105 transition-all duration-300
                shadow-xl hover:shadow-2xl
              "
            >
              <span>Start Your Journey</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}