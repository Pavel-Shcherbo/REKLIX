'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, 
  Smartphone, 
  Server, 
  Cloud, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Monitor,
  Layers
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

export default function EngineeringPage() {
  const locale = useLocale();
  const styles = useThemeStyles();

  const services = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with the latest technologies',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      features: ['Responsive design', 'Performance optimization', 'SEO-friendly', 'Cross-browser compatibility']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable server-side solutions and robust API development',
      technologies: ['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB'],
      features: ['RESTful APIs', 'Database design', 'Authentication', 'Performance optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
      features: ['Native performance', 'Cross-platform', 'App store deployment', 'Push notifications']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Cloud infrastructure and deployment automation',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      features: ['Auto-scaling', 'Monitoring', 'Security', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing to ensure software reliability',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Postman', 'SonarQube'],
      features: ['Unit testing', 'Integration testing', 'E2E testing', 'Performance testing']
    },
    {
      icon: Layers,
      title: 'System Architecture',
      description: 'Scalable and maintainable software architecture design',
      technologies: ['Microservices', 'Event-driven', 'CQRS', 'DDD', 'Clean Architecture'],
      features: ['Scalability', 'Maintainability', 'Security', 'Performance']
    }
  ];

  const results = [
    { metric: '50+', label: 'Projects delivered' },
    { metric: '99.9%', label: 'Uptime guarantee' },
    { metric: '3x', label: 'Faster development' },
    { metric: '100%', label: 'Client satisfaction' }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Python', category: 'Backend' }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 mb-6"
              variants={fadeInUp}
            >
              <Rocket size={48} className="text-white" />
            </motion.div>
            
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              Software
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {' '}Engineering
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              Build scalable, high-performance applications with modern technologies and best practices
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
                <span>Start Your Project</span>
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
                <div className={`text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400 mb-2`}>
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
              Engineering Services
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              Comprehensive software development solutions for modern businesses
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
                  <div className="inline-flex p-4 rounded-xl bg-green-100 dark:bg-green-900 mb-6">
                    <IconComponent size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${styles.text.secondary} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold ${styles.text.primary} mb-3`}>Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
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

      {/* Technologies Section */}
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
              Our Technology Stack
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              We use cutting-edge technologies to build robust and scalable solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`
                  text-center p-6 rounded-xl
                  ${styles.card.default}
                  hover:shadow-lg transition-all duration-300
                  transform hover:-translate-y-1
                `}
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`
              text-center p-12 lg:p-16 rounded-3xl
              bg-gradient-to-r from-green-600 to-teal-600
              text-white
            `}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s turn your ideas into powerful software solutions that drive your business forward
            </p>
            
            <Link
              href={`/${locale}/contact`}
              className="
                inline-flex items-center space-x-2
                bg-white text-green-600 hover:bg-gray-100
                px-8 py-4 rounded-xl font-semibold text-lg
                transform hover:scale-105 transition-all duration-300
                shadow-xl hover:shadow-2xl
              "
            >
              <span>Start Development</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}