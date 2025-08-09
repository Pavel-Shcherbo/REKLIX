import { Metadata } from 'next';
import { generateMetadata, generateOrganizationSchema, generateWebsiteSchema, generateJsonLd } from '@/utils/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generatePageMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const isRussian = locale === 'ru';
  
  const seoConfig = {
    title: isRussian 
      ? 'REKLIX - Цифровое агентство полного цикла | Разработка и маркетинг'
      : 'REKLIX - Full-Cycle Digital Agency | Development & Marketing',
    description: isRussian
      ? 'Агентство полного цикла для создания цифрового бизнеса от продукта до трафика. Веб-разработка, маркетинг, SEO, ИИ-интеграция. Более 100 успешных проектов.'
      : 'Full-cycle agency for creating digital businesses from product to traffic. Web development, marketing, SEO, AI integration. Over 100 successful projects.',
    keywords: isRussian 
      ? [
          'цифровое агентство',
          'веб-разработка',
          'интернет-маркетинг',
          'SEO продвижение',
          'создание сайтов',
          'разработка приложений',
          'ИИ интеграция',
          'полный цикл разработки',
          'цифровая трансформация',
          'REKLIX'
        ]
      : [
          'digital agency',
          'web development',
          'digital marketing',
          'SEO optimization',
          'website creation',
          'app development',
          'AI integration',
          'full-cycle development',
          'digital transformation',
          'REKLIX'
        ],
    image: '/images/og-homepage.jpg',
    url: `/${locale}`,
    type: 'website' as const,
    locale,
    alternateLocales: ['en', 'ru']
  };

  return generateMetadata(seoConfig);
}

export function generateHomePageSchemas() {
  return {
    organization: generateJsonLd(generateOrganizationSchema()),
    website: generateJsonLd(generateWebsiteSchema())
  };
}