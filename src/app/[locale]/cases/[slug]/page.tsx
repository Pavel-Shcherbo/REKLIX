'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  CheckCircle,
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

interface CaseStudyPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const locale = params?.locale as string;
  const styles = useThemeStyles();

  // Case study data - in a real app, this would come from a CMS or API
  const caseStudies = {
    'ecommerce-growth': {
      title: 'E-commerce Growth Platform',
      subtitle: 'Transforming a traditional retailer into a digital powerhouse',
      category: 'E-commerce',
      client: 'RetailMax Inc.',
      duration: '3 months',
      team: '6 specialists',
      year: '2024',
      heroImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20with%20analytics%20charts%20and%20product%20listings%20clean%20professional%20design&image_size=landscape_16_9',
      overview: 'RetailMax Inc. approached us with a challenge: their traditional brick-and-mortar business was struggling to compete in the digital marketplace. They needed a complete e-commerce transformation that would not only establish their online presence but also drive significant growth in sales and customer engagement.',
      challenge: {
        title: 'The Challenge',
        description: 'RetailMax faced multiple challenges in their digital transformation journey:',
        points: [
          'Outdated website with poor user experience and low conversion rates (1.2%)',
          'No mobile optimization resulting in 70% bounce rate on mobile devices',
          'Lack of inventory management integration causing stock discrepancies',
          'No analytics or customer insights to drive business decisions',
          'Limited marketing capabilities and no automation tools',
          'Poor search functionality making product discovery difficult'
        ]
      },
      solution: {
        title: 'Our Solution',
        description: 'We developed a comprehensive e-commerce platform with advanced features:',
        points: [
          'Modern, responsive design optimized for all devices and browsers',
          'Advanced product search and filtering with AI-powered recommendations',
          'Real-time inventory management with automated stock updates',
          'Integrated payment processing with multiple payment options',
          'Comprehensive analytics dashboard with business intelligence',
          'Marketing automation tools including email campaigns and retargeting'
        ]
      },
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Redis', category: 'Caching' },
        { name: 'Stripe', category: 'Payments' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Docker', category: 'DevOps' }
      ],
      results: {
        title: 'Outstanding Results',
        description: 'The new platform delivered exceptional results within the first 3 months:',
        metrics: [
          { label: 'Conversion Rate', before: '1.2%', after: '4.8%', improvement: '+300%' },
          { label: 'Monthly Revenue', before: '$50K', after: '$175K', improvement: '+250%' },
          { label: 'Organic Traffic', before: '12K', after: '60K', improvement: '+400%' },
          { label: 'Mobile Conversion', before: '0.8%', after: '4.2%', improvement: '+425%' },
          { label: 'Average Order Value', before: '$45', after: '$78', improvement: '+73%' },
          { label: 'Customer Retention', before: '34%', after: '85%', improvement: '+150%' }
        ]
      },
      features: [
        {
          title: 'Advanced Product Search',
          description: 'AI-powered search with filters, sorting, and personalized recommendations',
          image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20product%20search%20interface%20with%20filters%20and%20results%20modern%20clean%20design&image_size=landscape_4_3'
        },
        {
          title: 'Real-time Analytics',
          description: 'Comprehensive dashboard with sales metrics, customer insights, and performance tracking',
          image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=analytics%20dashboard%20with%20ecommerce%20metrics%20charts%20and%20graphs%20professional%20interface&image_size=landscape_4_3'
        },
        {
          title: 'Mobile-First Design',
          description: 'Responsive design optimized for mobile shopping with intuitive navigation',
          image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20ecommerce%20app%20interface%20product%20listing%20and%20checkout%20modern%20design&image_size=portrait_4_3'
        }
      ],
      testimonial: {
        text: 'REKLIX transformed our business completely. The new platform not only looks amazing but has tripled our online sales. The team understood our needs perfectly and delivered beyond our expectations.',
        author: 'Sarah Johnson',
        position: 'CEO, RetailMax Inc.',
        avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20woman%20CEO%20portrait%20confident%20smile%20corporate%20headshot&image_size=square'
      }
    },
    'fintech-startup': {
      title: 'FinTech Startup Platform',
      subtitle: 'Building a secure financial platform from the ground up',
      category: 'FinTech',
      client: 'PayFlow Technologies',
      duration: '6 months',
      team: '8 specialists',
      year: '2024',
      heroImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=fintech%20dashboard%20interface%20with%20financial%20charts%20transaction%20history%20modern%20banking%20app%20design&image_size=landscape_16_9',
      overview: 'PayFlow Technologies needed a complete financial platform that could handle high-volume transactions while maintaining the highest security standards and regulatory compliance.',
      challenge: {
        title: 'The Challenge',
        description: 'Building a secure, compliant financial platform presented unique challenges:',
        points: [
          'Strict regulatory compliance requirements (PCI DSS, SOX, GDPR)',
          'High-volume transaction processing with sub-second response times',
          'Multi-layered security architecture with fraud detection',
          'Real-time financial reporting and analytics',
          'Scalable infrastructure to handle growth',
          'User-friendly interface despite complex functionality'
        ]
      },
      solution: {
        title: 'Our Solution',
        description: 'We built a robust, secure platform with enterprise-grade features:',
        points: [
          'Microservices architecture for scalability and reliability',
          'Advanced encryption and multi-factor authentication',
          'Real-time transaction processing with fraud detection',
          'Comprehensive compliance and audit trail systems',
          'API-first design for third-party integrations',
          'Intuitive dashboard with advanced financial analytics'
        ]
      },
      technologies: [
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Python', category: 'Backend' },
        { name: 'FastAPI', category: 'Framework' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Redis', category: 'Caching' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'Kubernetes', category: 'Orchestration' },
        { name: 'AWS', category: 'Cloud' }
      ],
      results: {
        title: 'Impressive Achievements',
        description: 'The platform exceeded all performance and security benchmarks:',
        metrics: [
          { label: 'Active Users', before: '0', after: '10,000+', improvement: 'New Platform' },
          { label: 'Transaction Volume', before: '0', after: '$2M+', improvement: 'Monthly' },
          { label: 'System Uptime', before: 'N/A', after: '99.9%', improvement: 'Guaranteed' },
          { label: 'Security Score', before: 'N/A', after: 'A+', improvement: 'Certified' },
          { label: 'API Response Time', before: 'N/A', after: '<100ms', improvement: 'Average' },
          { label: 'Compliance Rating', before: 'N/A', after: '100%', improvement: 'Certified' }
        ]
      },
      features: [
        {
          title: 'Transaction Dashboard',
          description: 'Real-time transaction monitoring with advanced filtering and analytics',
          image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=fintech%20transaction%20dashboard%20real%20time%20monitoring%20financial%20interface&image_size=landscape_4_3'
        },
        {
          title: 'Security Center',
          description: 'Multi-layered security with fraud detection and compliance monitoring',
          image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=security%20dashboard%20interface%20fraud%20detection%20compliance%20monitoring%20fintech&image_size=landscape_4_3'
        },
        {
          title: 'API Management',
          description: 'Comprehensive API platform for third-party integrations and partnerships',
          image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=API%20management%20dashboard%20integration%20platform%20developer%20tools%20interface&image_size=landscape_4_3'
        }
      ],
      testimonial: {
        text: 'REKLIX delivered a world-class financial platform that exceeded our expectations. Their expertise in security and compliance was crucial to our success.',
        author: 'Michael Chen',
        position: 'CTO, PayFlow Technologies',
        avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20tech%20executive%20CTO%20portrait%20confident%20business%20headshot&image_size=square'
      }
    }
  };

  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Link
              href={`/${locale}/cases`}
              className={`inline-flex items-center space-x-2 ${styles.text.secondary} hover:${styles.text.primary} transition-colors duration-200`}
            >
              <ArrowLeft size={20} />
              <span>Back to Cases</span>
            </Link>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div>
              <motion.div className="mb-4" variants={fadeInUp}>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  {caseStudy.category}
                </span>
              </motion.div>
              
              <motion.h1 
                className={`text-4xl lg:text-6xl font-bold ${styles.text.primary} mb-4`}
                variants={fadeInUp}
              >
                {caseStudy.title}
              </motion.h1>
              
              <motion.p 
                className={`text-xl ${styles.text.secondary} mb-8 leading-relaxed`}
                variants={fadeInUp}
              >
                {caseStudy.subtitle}
              </motion.p>

              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={fadeInUp}
              >
                <div>
                  <div className={`text-sm ${styles.text.secondary} mb-1`}>Client</div>
                  <div className={`font-semibold ${styles.text.primary}`}>{caseStudy.client}</div>
                </div>
                <div>
                  <div className={`text-sm ${styles.text.secondary} mb-1`}>Duration</div>
                  <div className={`font-semibold ${styles.text.primary}`}>{caseStudy.duration}</div>
                </div>
                <div>
                  <div className={`text-sm ${styles.text.secondary} mb-1`}>Team Size</div>
                  <div className={`font-semibold ${styles.text.primary}`}>{caseStudy.team}</div>
                </div>
                <div>
                  <div className={`text-sm ${styles.text.secondary} mb-1`}>Year</div>
                  <div className={`font-semibold ${styles.text.primary}`}>{caseStudy.year}</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>Project Overview</h2>
            <p className={`text-lg ${styles.text.secondary} leading-relaxed`}>
              {caseStudy.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                {caseStudy.challenge.title}
              </h2>
              <p className={`text-lg ${styles.text.secondary} mb-6 leading-relaxed`}>
                {caseStudy.challenge.description}
              </p>
              <ul className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Target size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className={`${styles.text.secondary}`}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                {caseStudy.solution.title}
              </h2>
              <p className={`text-lg ${styles.text.secondary} mb-6 leading-relaxed`}>
                {caseStudy.solution.description}
              </p>
              <ul className="space-y-4">
                {caseStudy.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className={`${styles.text.secondary}`}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>Technology Stack</h2>
            <p className={`text-lg ${styles.text.secondary}`}>Modern technologies for optimal performance</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {caseStudy.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-xl ${styles.card.default}`}
                variants={fadeInUp}
              >
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2`}>
                  {tech.name}
                </h3>
                <p className={`text-sm ${styles.text.secondary}`}>
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>
              {caseStudy.results.title}
            </h2>
            <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto`}>
              {caseStudy.results.description}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {caseStudy.results.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${styles.card.default} text-center`}
                variants={fadeInUp}
              >
                <div className={`text-sm ${styles.text.secondary} mb-2`}>{metric.label}</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className={`text-2xl font-bold ${styles.text.primary}`}>{metric.after}</span>
                  <TrendingUp size={20} className="text-green-500" />
                </div>
                <div className="text-green-600 font-semibold">{metric.improvement}</div>
                {metric.before !== 'N/A' && metric.before !== '0' && (
                  <div className={`text-xs ${styles.text.secondary} mt-1`}>from {metric.before}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>Key Features</h2>
            <p className={`text-lg ${styles.text.secondary}`}>Innovative solutions that drive results</p>
          </motion.div>
          
          <motion.div 
            className="space-y-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {caseStudy.features.map((feature, index) => (
              <motion.div
                key={index}
                className={`
                  grid lg:grid-cols-2 gap-12 items-center
                  ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
                `}
                variants={fadeInUp}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg ${styles.text.secondary} leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`p-12 rounded-3xl ${styles.card.default} text-center`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-8">
              <Image
                src={caseStudy.testimonial.avatar}
                alt={caseStudy.testimonial.author}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto mb-6"
              />
            </div>
            
            <blockquote className={`text-xl ${styles.text.secondary} mb-8 leading-relaxed italic`}>
              &ldquo;{caseStudy.testimonial.text}&rdquo;
            </blockquote>
            
            <div>
              <div className={`font-bold ${styles.text.primary} text-lg`}>
                {caseStudy.testimonial.author}
              </div>
              <div className={`${styles.text.secondary}`}>
                {caseStudy.testimonial.position}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${styles.background.secondary}`}>
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
              Ready to Achieve Similar Results?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with our proven approach
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