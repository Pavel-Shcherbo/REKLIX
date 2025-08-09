import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reklix.com';

// Static pages configuration
const staticPages = [
  {
    url: '',
    priority: 1.0,
    changeFrequency: 'daily' as const
  },
  {
    url: '/services',
    priority: 0.9,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/services/marketing',
    priority: 0.8,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/services/engineering',
    priority: 0.8,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/services/fullstack',
    priority: 0.8,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/services/ai',
    priority: 0.8,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/cases',
    priority: 0.8,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/about',
    priority: 0.7,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/contact',
    priority: 0.7,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/blog',
    priority: 0.8,
    changeFrequency: 'daily' as const
  }
];

// Sample case studies (in production, this would come from CMS or database)
const caseStudies = [
  'ecommerce-platform',
  'saas-dashboard',
  'mobile-app',
  'ai-chatbot',
  'marketplace'
];

// Sample blog posts (in production, this would come from CMS or database)
const blogPosts = [
  {
    slug: 'digital-transformation-2024',
    lastModified: '2024-01-15'
  },
  {
    slug: 'react-performance-optimization',
    lastModified: '2024-01-10'
  },
  {
    slug: 'seo-trends-2024',
    lastModified: '2024-01-05'
  },
  {
    slug: 'ai-integration-guide',
    lastModified: '2024-01-01'
  },
  {
    slug: 'ux-design-principles',
    lastModified: '2023-12-28'
  },
  {
    slug: 'cloud-infrastructure-best-practices',
    lastModified: '2023-12-25'
  }
];

const locales = ['en', 'ru'];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each locale
  locales.forEach(locale => {
    // Static pages
    staticPages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.url}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${page.url}`;
            return acc;
          }, {} as Record<string, string>)
        }
      });
    });

    // Case studies
    caseStudies.forEach(caseSlug => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/cases/${caseSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}/cases/${caseSlug}`;
            return acc;
          }, {} as Record<string, string>)
        }
      });
    });

    // Blog posts
    blogPosts.forEach(post => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}/blog/${post.slug}`;
            return acc;
          }, {} as Record<string, string>)
        }
      });
    });
  });

  // Add root redirect
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0
  });

  return sitemapEntries;
}