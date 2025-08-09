'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Calendar,
  Globe
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { useFormValidation } from '@/hooks/useFormValidation';
import { contactFormSchema, type ContactFormData } from '@/utils/validation';

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



export default function ContactPage() {
  const t = useTranslations();
  const styles = useThemeStyles();
  
  // Form validation and submission
  const {
    errors,
    isSubmitting,
    submitStatus,
    handleSubmit,
    getFieldProps
  } = useFormValidation<ContactFormData & { website?: string }>({
    schema: contactFormSchema,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      timeline: '',
      website: '' // Honeypot field
    },
    onSubmit: async (data) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to send message');
      }
    }
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: t('contact.info.email.title'),
      value: 'hello@reklix.com',
      description: t('contact.info.email.description')
    },
    {
      icon: <Phone size={24} />,
      title: t('contact.info.phone.title'),
      value: '+7 (999) 123-45-67',
      description: t('contact.info.phone.description')
    },
    {
      icon: <MessageSquare size={24} />,
      title: t('contact.info.telegram.title'),
      value: '@reklix_agency',
      description: t('contact.info.telegram.description')
    },
    {
      icon: <Clock size={24} />,
      title: t('contact.info.hours.title'),
      value: t('contact.info.hours.value'),
      description: t('contact.info.hours.description')
    }
  ];

  const services = [
    { value: 'marketing', label: t('contact.form.services.marketing') },
    { value: 'engineering', label: t('contact.form.services.engineering') },
    { value: 'fullstack', label: t('contact.form.services.fullstack') },
    { value: 'consultation', label: t('contact.form.services.consultation') },
    { value: 'other', label: t('contact.form.services.other') }
  ];

  const budgets = [
    { value: 'under-10k', label: t('contact.form.budgets.under10k') },
    { value: '10k-25k', label: t('contact.form.budgets.10k25k') },
    { value: '25k-50k', label: t('contact.form.budgets.25k50k') },
    { value: '50k-100k', label: t('contact.form.budgets.50k100k') },
    { value: 'over-100k', label: t('contact.form.budgets.over100k') },
    { value: 'discuss', label: t('contact.form.budgets.discuss') }
  ];

  const timelines = [
    { value: 'asap', label: t('contact.form.timelines.asap') },
    { value: '1-month', label: t('contact.form.timelines.1month') },
    { value: '2-3-months', label: t('contact.form.timelines.2to3months') },
    { value: '3-6-months', label: t('contact.form.timelines.3to6months') },
    { value: 'flexible', label: t('contact.form.timelines.flexible') }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 overflow-hidden">
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
              {t('contact.hero.title')}
            </motion.h1>
            
            <motion.p 
              className={`text-xl lg:text-2xl ${styles.text.secondary} mb-12 leading-relaxed`}
              variants={fadeInUp}
            >
              {t('contact.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`py-16 ${styles.background.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl ${styles.card.default} hover:${styles.card.hover} transition-all duration-300`}
                variants={fadeInUp}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2`}>
                  {info.title}
                </h3>
                <p className={`font-semibold ${styles.text.primary} mb-2`}>
                  {info.value}
                </p>
                <p className={`text-sm ${styles.text.secondary}`}>
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                {t('contact.form.title')}
              </h2>
              
              <p className={`text-lg ${styles.text.secondary} mb-8`}>
                {t('contact.form.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      {...getFieldProps('name')}
                      required
                      className={`
                        w-full px-4 py-3 rounded-xl border 
                        ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${styles.background.primary} ${styles.text.primary}
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-colors duration-200
                      `}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      {...getFieldProps('email')}
                      required
                      className={`
                        w-full px-4 py-3 rounded-xl border 
                        ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${styles.background.primary} ${styles.text.primary}
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-colors duration-200
                      `}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      {...getFieldProps('phone')}
                      className={`
                        w-full px-4 py-3 rounded-xl border 
                        ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${styles.background.primary} ${styles.text.primary}
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-colors duration-200
                      `}
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      {...getFieldProps('company')}
                      className={`
                        w-full px-4 py-3 rounded-xl border 
                        ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${styles.background.primary} ${styles.text.primary}
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-colors duration-200
                      `}
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                    {errors.company && (
                      <p id="company-error" className="mt-1 text-sm text-red-600">
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                    {t('contact.form.service')} *
                  </label>
                  <select
                    {...getFieldProps('service')}
                    required
                    className={`
                      w-full px-4 py-3 rounded-xl border 
                      ${errors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                      ${styles.background.primary} ${styles.text.primary}
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      transition-colors duration-200
                    `}
                  >
                    <option value="">{t('contact.form.selectService')}</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-sm text-red-600">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                      {t('contact.form.budget')}
                    </label>
                    <select
                      {...getFieldProps('budget')}
                      className={`
                        w-full px-4 py-3 rounded-xl border 
                        ${errors.budget ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${styles.background.primary} ${styles.text.primary}
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-colors duration-200
                      `}
                    >
                      <option value="">{t('contact.form.selectBudget')}</option>
                      {budgets.map((budget) => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p id="budget-error" className="mt-1 text-sm text-red-600">
                        {errors.budget}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                      {t('contact.form.timeline')}
                    </label>
                    <select
                      {...getFieldProps('timeline')}
                      className={`
                        w-full px-4 py-3 rounded-xl border 
                        ${errors.timeline ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${styles.background.primary} ${styles.text.primary}
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-colors duration-200
                      `}
                    >
                      <option value="">{t('contact.form.selectTimeline')}</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p id="timeline-error" className="mt-1 text-sm text-red-600">
                        {errors.timeline}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${styles.text.primary} mb-2`}>
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    {...getFieldProps('message')}
                    required
                    rows={6}
                    className={`
                      w-full px-4 py-3 rounded-xl border 
                      ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                      ${styles.background.primary} ${styles.text.primary}
                      focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      transition-colors duration-200 resize-vertical
                    `}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...getFieldProps('website')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full flex items-center justify-center space-x-2
                    bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700
                    text-white font-semibold py-4 px-8 rounded-xl
                    transform hover:scale-105 transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                    shadow-lg hover:shadow-xl
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl"
                  >
                    <CheckCircle size={20} />
                    <span>{t('contact.form.success')}</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl"
                  >
                    <AlertCircle size={20} />
                    <span>{t('contact.form.error')}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                {t('contact.info.title')}
              </h2>
              
              <div className={`p-8 rounded-2xl ${styles.card.default} mb-8`}>
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                  {t('contact.info.response.title')}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {t('contact.info.response.description')}
                </p>
                <ul className={`space-y-2 ${styles.text.secondary}`}>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{t('contact.info.response.step1')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{t('contact.info.response.step2')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{t('contact.info.response.step3')}</span>
                  </li>
                </ul>
              </div>

              <div className={`p-8 rounded-2xl ${styles.card.default} mb-8`}>
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                  {t('contact.info.meeting.title')}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {t('contact.info.meeting.description')}
                </p>
                <div className="flex items-center space-x-2 text-primary-600">
                  <Calendar size={20} />
                  <span className="font-semibold">{t('contact.info.meeting.cta')}</span>
                </div>
              </div>

              <div className={`p-8 rounded-2xl ${styles.card.default}`}>
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                  {t('contact.info.global.title')}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {t('contact.info.global.description')}
                </p>
                <div className="flex items-center space-x-2 text-primary-600">
                  <Globe size={20} />
                  <span className="font-semibold">{t('contact.info.global.coverage')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}