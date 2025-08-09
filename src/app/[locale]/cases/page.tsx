'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight
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

export default function CasesPage() {
  const locale = useLocale();
  const styles = useThemeStyles();

  const cases = [
    {
      id: 'ecommerce-growth',
      title: 'E-commerce Growth Platform',
      category: 'E-commerce',
      description: 'Complete e-commerce solution with advanced analytics and marketing automation',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20with%20analytics%20charts%20and%20product%20listings%20clean%20professional%20design&image_size=landscape_16_9',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: {
        conversion: '+300%',
        revenue: '+250%',
        traffic: '+400%',
        timeline: '3 months'
      },
      metrics: [
        { label: 'Conversion Rate', value: '8.5%', change: '+300%' },
        { label: 'Monthly Revenue', value: '$125K', change: '+250%' },
        { label: 'Organic Traffic', value: '50K', change: '+400%' },
        { label: 'Customer Retention', value: '85%', change: '+150%' }
      ],
      challenge: 'The client needed a complete e-commerce overhaul to compete in the digital marketplace with better user experience and conversion optimization.',
      solution: 'We built a modern, fast-loading e-commerce platform with advanced analytics, personalized recommendations, and integrated marketing tools.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      features: [
        'Advanced product filtering and search',
        'Personalized product recommendations',
        'Real-time inventory management',
        'Integrated payment processing',
        'Marketing automation tools',
        'Advanced analytics dashboard'
      ]
    },
    {
      id: 'fintech-startup',
      title: 'FinTech Startup Platform',
      category: 'FinTech',
      description: 'Secure financial platform with real-time transactions and compliance features',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=fintech%20dashboard%20interface%20with%20financial%20charts%20transaction%20history%20modern%20banking%20app%20design&image_size=landscape_16_9',
      tags: ['Vue.js', 'Python', 'MongoDB', 'Blockchain'],
      results: {
        users: '10K+',
        transactions: '$2M+',
        uptime: '99.9%',
        timeline: '6 months'
      },
      metrics: [
        { label: 'Active Users', value: '10,000+', change: 'New' },
        { label: 'Transaction Volume', value: '$2M+', change: 'Monthly' },
        { label: 'System Uptime', value: '99.9%', change: 'Guaranteed' },
        { label: 'Security Score', value: 'A+', change: 'Certified' }
      ],
      challenge: 'Building a secure, compliant financial platform that could handle high-volume transactions while maintaining user-friendly experience.',
      solution: 'We developed a robust FinTech platform with advanced security, real-time processing, and comprehensive compliance features.',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      features: [
        'Real-time transaction processing',
        'Multi-factor authentication',
        'Compliance reporting tools',
        'Advanced fraud detection',
        'API integration platform',
        'Mobile-first design'
      ]
    },
    {
      id: 'saas-analytics',
      title: 'SaaS Analytics Platform',
      category: 'SaaS',
      description: 'Comprehensive analytics platform for business intelligence and data visualization',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=analytics%20dashboard%20with%20charts%20graphs%20data%20visualization%20business%20intelligence%20modern%20interface&image_size=landscape_16_9',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'D3.js'],
      results: {
        clients: '500+',
        dataPoints: '1B+',
        performance: '2x faster',
        timeline: '4 months'
      },
      metrics: [
        { label: 'Enterprise Clients', value: '500+', change: 'Growing' },
        { label: 'Data Points Processed', value: '1B+', change: 'Daily' },
        { label: 'Query Performance', value: '2x', change: 'Faster' },
        { label: 'User Satisfaction', value: '95%', change: '+25%' }
      ],
      challenge: 'Creating a scalable analytics platform that could process massive datasets while providing real-time insights and intuitive visualizations.',
      solution: 'We built a high-performance analytics platform with advanced data processing, interactive visualizations, and real-time reporting capabilities.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'D3.js', 'WebSockets', 'AWS'],
      features: [
        'Real-time data processing',
        'Interactive data visualizations',
        'Custom dashboard builder',
        'Advanced filtering and segmentation',
        'Automated reporting',
        'API integration platform'
      ]
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Projects' },
    { number: '300%', label: 'Average ROI Increase' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
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
              Our
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {' '}Success Stories
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              Real results from real projects. See how we&apos;ve helped businesses transform and grow.
            </motion.p>
          </motion.div>
        </div>
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

      {/* Cases Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className={`
                  grid lg:grid-cols-2 gap-12 items-center
                  ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
                `}
                variants={fadeInUp}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={600}
                      height={400}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                  
                  <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4`}>
                    {caseStudy.title}
                  </h2>
                  
                  <p className={`text-lg ${styles.text.secondary} mb-6 leading-relaxed`}>
                    {caseStudy.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(caseStudy.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className={`p-4 rounded-xl ${styles.card.default}`}>
                        <div className={`text-2xl font-bold ${styles.text.accent} mb-1`}>
                          {value}
                        </div>
                        <div className={`text-sm ${styles.text.secondary} capitalize`}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}/cases/${caseStudy.id}`}
                    className={`
                      group inline-flex items-center space-x-2
                      ${styles.button.primary}
                      px-6 py-3 rounded-xl font-semibold
                      transform hover:scale-105 transition-all duration-300
                    `}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 lg:py-32 ${styles.background.secondary}`}>
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
              Ready to Create Your Success Story?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business
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
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}