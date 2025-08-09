'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2,
  BookOpen,
  Tag,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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
  likes: number;
  comments: number;
}

export default function BlogPostPage() {
  const t = useTranslations();
  const locale = useLocale();
  const styles = useThemeStyles();
  const params = useParams();
  const slug = params?.slug as string;

  // Sample blog post data - in real app, this would be fetched based on slug
  const getBlogPost = (slug: string): BlogPost | null => {
    const posts: Record<string, BlogPost> = {
      'digital-transformation-2024': {
        id: 'digital-transformation-2024',
        title: t('blog.posts.digitalTransformation.title'),
        excerpt: t('blog.posts.digitalTransformation.excerpt'),
        content: t('blog.posts.digitalTransformation.content'),
        author: 'Alex Petrov',
        date: '2024-01-15',
        readTime: '8 min',
        category: t('blog.categories.strategy'),
        tags: ['Digital Transformation', 'Business Strategy', 'Technology'],
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20digital%20transformation%20concept%20with%20business%20growth%20charts%20and%20technology%20icons%20in%20professional%20blue%20gradient%20style&image_size=landscape_16_9',
        likes: 42,
        comments: 8
      },
      'react-performance-optimization': {
        id: 'react-performance-optimization',
        title: t('blog.posts.reactOptimization.title'),
        excerpt: t('blog.posts.reactOptimization.excerpt'),
        content: t('blog.posts.reactOptimization.content'),
        author: 'Maria Kozlova',
        date: '2024-01-10',
        readTime: '12 min',
        category: t('blog.categories.development'),
        tags: ['React', 'Performance', 'Frontend'],
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=React%20development%20code%20optimization%20with%20performance%20metrics%20and%20modern%20UI%20components%20in%20tech%20style&image_size=landscape_16_9',
        likes: 67,
        comments: 15
      },
      'seo-trends-2024': {
        id: 'seo-trends-2024',
        title: t('blog.posts.seoTrends.title'),
        excerpt: t('blog.posts.seoTrends.excerpt'),
        content: t('blog.posts.seoTrends.content'),
        author: 'Dmitry Volkov',
        date: '2024-01-05',
        readTime: '6 min',
        category: t('blog.categories.marketing'),
        tags: ['SEO', 'Digital Marketing', 'Trends'],
        image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=SEO%20search%20engine%20optimization%20concept%20with%20ranking%20graphs%20and%20digital%20marketing%20elements%20in%20green%20gradient&image_size=landscape_16_9',
        likes: 34,
        comments: 6
      }
    };
    
    return posts[slug] || null;
  };

  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className={`min-h-screen ${styles.background.primary} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            {t('blog.notFound.title')}
          </h1>
          <p className={`text-lg ${styles.text.secondary} mb-8`}>
            {t('blog.notFound.description')}
          </p>
          <Link
            href={`/${locale}/blog`}
            className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('blog.notFound.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = [
    {
      id: 'ai-integration-business',
      title: t('blog.posts.aiIntegration.title'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20integration%20in%20business%20with%20neural%20networks%20and%20data%20visualization%20in%20purple%20tech%20style&image_size=landscape_4_3'
    },
    {
      id: 'ux-design-principles',
      title: t('blog.posts.uxDesign.title'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=UX%20design%20principles%20with%20user%20interface%20wireframes%20and%20design%20thinking%20process%20in%20modern%20style&image_size=landscape_4_3'
    },
    {
      id: 'cloud-infrastructure-guide',
      title: t('blog.posts.cloudInfrastructure.title'),
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20infrastructure%20architecture%20with%20servers%20and%20network%20connections%20in%20blue%20tech%20gradient%20style&image_size=landscape_4_3'
    }
  ];

  return (
    <div className={`min-h-screen ${styles.background.primary}`}>
      <Header />
      
      {/* Back to Blog */}
      <section className="pt-20 lg:pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/blog`}
            className={`inline-flex items-center space-x-2 ${styles.text.secondary} hover:text-primary-600 transition-colors`}
          >
            <ArrowLeft size={20} />
            <span>{t('blog.backToBlog')}</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </motion.div>
            
            <motion.h1 
              className={`text-3xl lg:text-5xl font-bold ${styles.text.primary} mb-6 leading-tight`}
              variants={fadeInUp}
            >
              {post.title}
            </motion.h1>
            
            <motion.p 
              className={`text-xl ${styles.text.secondary} mb-8 leading-relaxed`}
              variants={fadeInUp}
            >
              {post.excerpt}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={16} />
                <span>{t('blog.readTime', { time: post.readTime })}</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between mb-8"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <ThumbsUp size={20} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <MessageCircle size={20} />
                  <span>{post.comments}</span>
                </button>
              </div>
              
              <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
                <Share2 size={20} />
                <span>{t('blog.share')}</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`prose prose-lg max-w-none ${styles.text.primary}`}
          >
            <div className="whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-4 flex items-center space-x-2`}>
              <Tag size={20} />
              <span>{t('blog.tags')}</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className={`py-16 ${styles.background.secondary}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`${styles.card.default} rounded-2xl p-8`}
          >
            <div className="flex items-start space-x-4">
              <Image
                src={`https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20${post.author.replace(' ', '%20')}%20software%20developer%20in%20modern%20office%20setting&image_size=square`}
                alt={post.author}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-2`}>
                  {post.author}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {t('blog.authorBio', { author: post.author })}
                </p>
                <div className="flex space-x-4">
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    {t('blog.followAuthor')}
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    {t('blog.moreFromAuthor')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-3xl font-bold ${styles.text.primary} mb-12 text-center`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('blog.relatedPosts')}
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {relatedPosts.map((relatedPost) => (
              <motion.article
                key={relatedPost.id}
                className={`group ${styles.card.default} rounded-2xl overflow-hidden hover:${styles.card.hover} transition-all duration-300`}
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-lg font-bold ${styles.text.primary} mb-4 group-hover:text-primary-600 transition-colors line-clamp-2`}>
                    {relatedPost.title}
                  </h3>
                  
                  <Link
                    href={`/${locale}/blog/${relatedPost.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}