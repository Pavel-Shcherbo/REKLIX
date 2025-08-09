import { getTranslations } from 'next-intl/server';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {t('blog.hero.title') || 'Blog'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('blog.hero.subtitle') || 'Latest insights and updates from our team.'}
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Current locale: {locale}
        </p>
      </div>
    </div>
  );
}