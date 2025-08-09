import { getTranslations } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations('about');
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('hero.subtitle')}
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Locale: {locale}
        </p>
      </div>
    </div>
  );
}