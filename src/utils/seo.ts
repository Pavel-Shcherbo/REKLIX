import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
  alternateLocales?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const defaultConfig = {
  siteName: 'REKLIX',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://reklix.com',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@reklix_agency',
  defaultLocale: 'en',
  supportedLocales: ['en', 'ru']
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = defaultConfig.defaultImage,
    url,
    type = 'website',
    locale = defaultConfig.defaultLocale,
    alternateLocales = defaultConfig.supportedLocales,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = []
  } = config;

  const fullTitle = title.includes(defaultConfig.siteName) 
    ? title 
    : `${title} | ${defaultConfig.siteName}`;
  
  const fullUrl = url ? `${defaultConfig.siteUrl}${url}` : defaultConfig.siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${defaultConfig.siteUrl}${image}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: defaultConfig.siteName,
    publisher: defaultConfig.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultConfig.siteUrl),
    alternates: {
      canonical: fullUrl,
      languages: alternateLocales.reduce((acc, loc) => {
        acc[loc] = `${defaultConfig.siteUrl}/${loc}${url || ''}`;
        return acc;
      }, {} as Record<string, string>)
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale,
      type,
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags
      })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: defaultConfig.twitterHandle,
      site: defaultConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
  };

  return metadata;
}

// JSON-LD Schema generators
export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'REKLIX',
    description: 'Full-cycle agency for creating digital businesses from product to traffic',
    url: defaultConfig.siteUrl,
    logo: `${defaultConfig.siteUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: ['English', 'Russian']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/reklix_agency',
      'https://linkedin.com/company/reklix',
      'https://github.com/reklix'
    ],
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    industry: 'Digital Marketing',
    services: [
      'Web Development',
      'Digital Marketing',
      'SEO Optimization',
      'AI Integration',
      'Full-Stack Development'
    ]
  };
}

export function generateWebsiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'REKLIX',
    description: 'Full-cycle agency for creating digital businesses from product to traffic',
    url: defaultConfig.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${defaultConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'REKLIX',
      logo: `${defaultConfig.siteUrl}/images/logo.png`
    }
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  category: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${defaultConfig.siteUrl}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: 'REKLIX',
      url: defaultConfig.siteUrl
    },
    serviceType: service.category,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description
          },
          price: service.price || 'Contact for pricing',
          priceCurrency: 'USD'
        }
      ]
    }
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  section: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image.startsWith('http') ? article.image : `${defaultConfig.siteUrl}${article.image}`,
    url: `${defaultConfig.siteUrl}${article.url}`,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'REKLIX',
      logo: {
        '@type': 'ImageObject',
        url: `${defaultConfig.siteUrl}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${defaultConfig.siteUrl}${article.url}`
    },
    articleSection: article.section
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${defaultConfig.siteUrl}${crumb.url}`
    }))
  };
}

// Utility function to inject JSON-LD
export function generateJsonLd(schema: Record<string, unknown>) {
  return {
    __html: JSON.stringify(schema)
  };
}