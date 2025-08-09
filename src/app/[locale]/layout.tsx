import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { generatePageMetadata, generateHomePageSchemas } from './metadata';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const locales = ['en', 'ru'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata({ params });
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();
  
  // Generate JSON-LD schemas
  const schemas = generateHomePageSchemas();

  return (
    <NextIntlClientProvider messages={messages}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemas.organization}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemas.website}
      />
      
      {children}
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}