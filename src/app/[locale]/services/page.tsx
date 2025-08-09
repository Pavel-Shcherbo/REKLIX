import { getTranslations } from 'next-intl/server';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {t('services.hero.title') || 'Our Services'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('services.hero.subtitle') || 'We provide comprehensive digital solutions for your business.'}
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Current locale: {locale}
        </p>
      </div>
    </div>
  );
}