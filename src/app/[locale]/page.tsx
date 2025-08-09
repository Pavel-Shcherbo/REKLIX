import React from 'react';
import HomePageClient from './HomePageClient';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  return <HomePageClient locale={locale} />;
}
