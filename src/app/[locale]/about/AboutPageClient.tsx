'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield, 
  Zap,
  Globe,
  TrendingUp,
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

interface AboutPageClientProps {
  locale: string;
}

export default function AboutPageClient({ locale }: AboutPageClientProps) {
  const t = useTranslations();
  const styles = useThemeStyles();

  const stats = [
    { number: '50+', label: t('about.stats.projects') },
    { number: '3+', label: t('about.stats.years') },
    { number: '25+', label: t('about.stats.clients') },
    { number: '99%', label: t('about.stats.satisfaction') }
  ];

  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: <Shield size={32} />,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: <Heart size={32} />,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description')
    },
    {
      icon: <Zap size={32} />,
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.description')
    }
  ];

  const team = [
    {
      name: 'Alex Petrov',
      position: t('about.team.ceo.position'),
      bio: t('about.team.ceo.bio'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20CEO%20portrait%20confident%20business%20leader%20modern%20corporate%20headshot&image_size=square',
      expertise: ['Strategy', 'Leadership', 'Business Development']
    },
    {
      name: 'Maria Kozlova',
      position: t('about.team.cto.position'),
      bio: t('about.team.cto.bio'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20CTO%20portrait%20tech%20leader%20confident%20business%20headshot&image_size=square',
      expertise: ['Architecture', 'Full-Stack', 'DevOps']
    },
    {
      name: 'Dmitry Volkov',
      position: t('about.team.lead.position'),
      bio: t('about.team.lead.bio'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20lead%20developer%20portrait%20tech%20expert%20modern%20headshot&image_size=square',
      expertise: ['React', 'Node.js', 'Cloud']
    },
    {
      name: 'Anna Smirnova',
      position: t('about.team.designer.position'),
      bio: t('about.team.designer.bio'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20designer%20portrait%20creative%20professional%20modern%20headshot&image_size=square',
      expertise: ['UI/UX', 'Branding', 'User Research']
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: t('about.timeline.founded.title'),
      description: t('about.timeline.founded.description')
    },
    {
      year: '2022',
      title: t('about.timeline.growth.title'),
      description: t('about.timeline.growth.description')
    },
    {
      year: '2023',
      title: t('about.timeline.expansion.title'),
      description: t('about.timeline.expansion.description')
    },
    {
      year: '2024',
      title: t('about.timeline.innovation.title'),
      description: t('about.timeline.innovation.description')
    }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className={`text-4xl lg:text-6xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              {t('about.hero.title')}
            </motion.h1>
            
            <motion.p 
              className={`text-xl lg:text-2xl ${styles.text.secondary} mb-12 leading-relaxed`}
              variants={fadeInUp}
            >
              {t('about.hero.subtitle')}
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-2`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm lg:text-base ${styles.text.secondary}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-6`}>
                {t('about.story.title')}
              </h2>
              
              <div className={`text-lg ${styles.text.secondary} space-y-4 leading-relaxed`}>
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <Image
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20tech%20office%20team%20collaboration%20developers%20working%20together%20professional%20workspace&image_size=landscape_4_3"
                alt="REKLIX Team"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4`}>
              {t('about.values.title')}
            </h2>
            <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('about.values.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`text-center p-8 rounded-2xl ${styles.card.default} hover:${styles.card.hover} transition-all duration-300`}
                variants={fadeInUp}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                  {value.title}
                </h3>
                <p className={`${styles.text.secondary} leading-relaxed`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4`}>
              {t('about.timeline.title')}
            </h2>
            <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('about.timeline.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 dark:bg-primary-800 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`
                    flex items-center
                    ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  `}
                  variants={fadeInUp}
                >
                  <div className={`
                    flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}
                    ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}
                  `}>
                    <div className={`p-6 rounded-2xl ${styles.card.default}`}>
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-bold ${styles.text.primary} mb-3`}>
                        {milestone.title}
                      </h3>
                      <p className={`${styles.text.secondary} leading-relaxed`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4`}>
              {t('about.team.title')}
            </h2>
            <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto`}>
              {t('about.team.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl ${styles.card.default} hover:${styles.card.hover} transition-all duration-300`}
                variants={fadeInUp}
              >
                <div className="mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                </div>
                
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-2`}>
                  {member.name}
                </h3>
                
                <p className={`text-primary-600 font-semibold mb-4`}>
                  {member.position}
                </p>
                
                <p className={`${styles.text.secondary} text-sm mb-4 leading-relaxed`}>
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-6`}>
              {t('about.mission.title')}
            </h2>
            
            <p className={`text-xl ${styles.text.secondary} mb-8 leading-relaxed`}>
              {t('about.mission.description')}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Globe size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2`}>
                  {t('about.mission.global.title')}
                </h3>
                <p className={`${styles.text.secondary} text-sm`}>
                  {t('about.mission.global.description')}
                </p>
              </div>
              
              <div className="text-center">
                <TrendingUp size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2`}>
                  {t('about.mission.growth.title')}
                </h3>
                <p className={`${styles.text.secondary} text-sm`}>
                  {t('about.mission.growth.description')}
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2`}>
                  {t('about.mission.excellence.title')}
                </h3>
                <p className={`${styles.text.secondary} text-sm`}>
                  {t('about.mission.excellence.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}