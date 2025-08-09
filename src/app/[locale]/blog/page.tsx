'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  Tag
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { useFormValidation } from '@/hooks/useFormValidation';
import { newsletterSchema } from '@/utils/validation';

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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export default function BlogPage() {
  const t = useTranslations();
  const locale = useLocale();
  const styles = useThemeStyles();

  // Newsletter subscription form
  const {
    values: newsletterValues,
    errors: newsletterErrors,
    isSubmitting: isSubscribing,
    submitStatus: subscribeStatus,
    handleSubmit: handleNewsletterSubmit,
    getFieldProps: getNewsletterFieldProps
  } = useFormValidation({
    schema: newsletterSchema,
    initialValues: {
      email: ''
    },
    onSubmit: async (data) => {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to subscribe');
      }
    }
  });

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 'digital-transformation-2024',
      title: t('blog.posts.digitalTransformation.title'),
      excerpt: t('blog.posts.digitalTransformation.excerpt'),
      content: '',
      author: 'Alex Petrov',
      date: '2024-01-15',
      readTime: '8 min',
      category: t('blog.categories.strategy'),
      tags: ['Digital Transformation', 'Business Strategy', 'Technology'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20digital%20transformation%20concept%20with%20business%20growth%20charts%20and%20technology%20icons%20in%20professional%20blue%20gradient%20style&image_size=landscape_16_9',
      featured: true
    },
    {
      id: 'react-performance-optimization',
      title: t('blog.posts.reactOptimization.title'),
      excerpt: t('blog.posts.reactOptimization.excerpt'),
      content: '',
      author: 'Maria Kozlova',
      date: '2024-01-10',
      readTime: '12 min',
      category: t('blog.categories.development'),
      tags: ['React', 'Performance', 'Frontend'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=React%20development%20code%20optimization%20with%20performance%20metrics%20and%20modern%20UI%20components%20in%20tech%20style&image_size=landscape_16_9',
      featured: true
    },
    {
      id: 'seo-trends-2024',
      title: t('blog.posts.seoTrends.title'),
      excerpt: t('blog.posts.seoTrends.excerpt'),
      content: '',
      author: 'Dmitry Volkov',
      date: '2024-01-05',
      readTime: '6 min',
      category: t('blog.categories.marketing'),
      tags: ['SEO', 'Digital Marketing', 'Trends'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=SEO%20search%20engine%20optimization%20concept%20with%20ranking%20graphs%20and%20digital%20marketing%20elements%20in%20green%20gradient&image_size=landscape_16_9',
      featured: false
    },
    {
      id: 'ai-integration-business',
      title: t('blog.posts.aiIntegration.title'),
      excerpt: t('blog.posts.aiIntegration.excerpt'),
      content: '',
      author: 'Elena Smirnova',
      date: '2023-12-28',
      readTime: '10 min',
      category: t('blog.categories.technology'),
      tags: ['AI', 'Machine Learning', 'Business'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20integration%20in%20business%20with%20neural%20networks%20and%20data%20visualization%20in%20purple%20tech%20style&image_size=landscape_16_9',
      featured: false
    },
    {
      id: 'ux-design-principles',
      title: t('blog.posts.uxDesign.title'),
      excerpt: t('blog.posts.uxDesign.excerpt'),
      content: '',
      author: 'Anna Fedorova',
      date: '2023-12-20',
      readTime: '7 min',
      category: t('blog.categories.design'),
      tags: ['UX Design', 'User Experience', 'Design'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=UX%20design%20principles%20with%20user%20interface%20wireframes%20and%20design%20thinking%20process%20in%20modern%20style&image_size=landscape_16_9',
      featured: false
    },
    {
      id: 'cloud-infrastructure-guide',
      title: t('blog.posts.cloudInfrastructure.title'),
      excerpt: t('blog.posts.cloudInfrastructure.excerpt'),
      content: '',
      author: 'Pavel Ivanov',
      date: '2023-12-15',
      readTime: '15 min',
      category: t('blog.categories.development'),
      tags: ['Cloud', 'Infrastructure', 'DevOps'],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20infrastructure%20architecture%20with%20servers%20and%20network%20connections%20in%20blue%20tech%20gradient%20style&image_size=landscape_16_9',
      featured: false
    }
  ];

  const categories = [
    t('blog.categories.all'),
    t('blog.categories.strategy'),
    t('blog.categories.development'),
    t('blog.categories.marketing'),
    t('blog.categories.technology'),
    t('blog.categories.design')
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              {t('blog.hero.title')}
            </motion.h1>
            
            <motion.p 
              className={`text-xl lg:text-2xl ${styles.text.secondary} mb-12 leading-relaxed`}
              variants={fadeInUp}
            >
              {t('blog.hero.subtitle')}
            </motion.p>

            {/* Search and Filter */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  className={`
                    w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                    ${styles.background.primary} ${styles.text.primary}
                    focus:ring-2 focus:ring-primary-500 focus:border-transparent
                    transition-colors duration-200
                  `}
                />
              </div>
              <select
                className={`
                  px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                  ${styles.background.primary} ${styles.text.primary}
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  transition-colors duration-200
                `}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className={`py-16 ${styles.background.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className={`text-3xl font-bold ${styles.text.primary} mb-12 text-center`}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('blog.featured.title')}
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className={`group ${styles.card.default} rounded-2xl overflow-hidden hover:${styles.card.hover} transition-all duration-300`}
                  variants={fadeInUp}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold ${styles.text.primary} mb-3 group-hover:text-primary-600 transition-colors`}>
                      {post.title}
                    </h3>
                    
                    <p className={`${styles.text.secondary} mb-4 line-clamp-3`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/${locale}/blog/${post.id}`}
                        className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <span>{t('blog.readMore')}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-3xl font-bold ${styles.text.primary} mb-12 text-center`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('blog.latest.title')}
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                className={`group ${styles.card.default} rounded-2xl overflow-hidden hover:${styles.card.hover} transition-all duration-300`}
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-bold ${styles.text.primary} mb-3 group-hover:text-primary-600 transition-colors line-clamp-2`}>
                    {post.title}
                  </h3>
                  
                  <p className={`${styles.text.secondary} mb-4 line-clamp-3 text-sm`}>
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/${locale}/blog/${post.id}`}
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className={`py-20 ${styles.background.secondary}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`text-3xl font-bold ${styles.text.primary} mb-6`}
              variants={fadeInUp}
            >
              {t('blog.newsletter.title')}
            </motion.h2>
            
            <motion.p 
              className={`text-lg ${styles.text.secondary} mb-8`}
              variants={fadeInUp}
            >
              {t('blog.newsletter.subtitle')}
            </motion.p>
            
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              variants={fadeInUp}
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                {...getNewsletterFieldProps('email')}
                placeholder={t('blog.newsletter.placeholder')}
                className={`
                  flex-1 px-4 py-3 rounded-xl border
                  ${newsletterErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  ${styles.background.primary} ${styles.text.primary}
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  transition-colors duration-200
                `}
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubscribing ? t('blog.newsletter.subscribing') : t('blog.newsletter.subscribe')}
              </button>
            </motion.form>
            
            {newsletterErrors.email && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2"
              >
                {newsletterErrors.email}
              </motion.p>
            )}

            {subscribeStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-2"
              >
                {t('blog.newsletter.success')}
              </motion.p>
            )}
            
            {subscribeStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2"
              >
                {t('blog.newsletter.error')}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}