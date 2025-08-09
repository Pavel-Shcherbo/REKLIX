'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface AnalyticsProps {
  gaId?: string;
  yandexId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  yandexId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID
}) => {
  const pathname = usePathname();

  // Track page views
  useEffect(() => {
    type GAWindow = typeof window & { gtag?: (...args: unknown[]) => void };
    type YMWindow = typeof window & { ym?: (...args: unknown[]) => void };
    
    if (gaId && typeof window !== 'undefined' && (window as GAWindow).gtag) {
      (window as GAWindow).gtag!('config', gaId, {
        page_path: pathname,
      });
    }

    if (yandexId && typeof window !== 'undefined' && (window as YMWindow).ym) {
      (window as YMWindow).ym!(yandexId, 'hit', pathname);
    }
  }, [pathname, gaId, yandexId]);

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {/* Yandex Metrica */}
      {yandexId && (
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(${yandexId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              trackHash:true
            });
          `}
        </Script>
      )}

      {/* Yandex Metrica NoScript */}
      {yandexId && (
        <noscript>
          <div>
            <Image 
              src={`https://mc.yandex.ru/watch/${yandexId}`} 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
              width={1}
              height={1}
              unoptimized
            />
          </div>
        </noscript>
      )}
    </>
  );
};

export default Analytics;

// Analytics utility functions
export const analytics = {
  // Track events
  trackEvent: (eventName: string, parameters?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined') {
      type GAWindow = typeof window & { gtag?: (...args: unknown[]) => void };
      type YMWindow = typeof window & { ym?: (...args: unknown[]) => void };
      
      // Google Analytics
      if ((window as GAWindow).gtag) {
        (window as GAWindow).gtag!('event', eventName, parameters);
      }
      
      // Yandex Metrica
      if ((window as YMWindow).ym && process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) {
        (window as YMWindow).ym!(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'reachGoal', eventName, parameters);
      }
    }
  },

  // Track page views
  trackPageView: (url: string, title?: string) => {
    if (typeof window !== 'undefined') {
      type GAWindow = typeof window & { gtag?: (...args: unknown[]) => void };
      type YMWindow = typeof window & { ym?: (...args: unknown[]) => void };
      
      // Google Analytics
      if ((window as GAWindow).gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        (window as GAWindow).gtag!('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: url,
          page_title: title
        });
      }
      
      // Yandex Metrica
      if ((window as YMWindow).ym && process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) {
        (window as YMWindow).ym!(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'hit', url, {
          title: title
        });
      }
    }
  },

  // Track conversions
  trackConversion: (conversionName: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined') {
      type GAWindow = typeof window & { gtag?: (...args: unknown[]) => void };
      type YMWindow = typeof window & { ym?: (...args: unknown[]) => void };
      
      // Google Analytics
      if ((window as GAWindow).gtag) {
        (window as GAWindow).gtag!('event', 'conversion', {
          send_to: conversionName,
          value: value,
          currency: currency || 'USD'
        });
      }
      
      // Yandex Metrica
      if ((window as YMWindow).ym && process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) {
        (window as YMWindow).ym!(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'reachGoal', conversionName, {
          order_price: value,
          currency: currency || 'USD'
        });
      }
    }
  },

  // Track form submissions
  trackFormSubmission: (formName: string, formData?: Record<string, string | number | boolean>) => {
    analytics.trackEvent('form_submit', {
      form_name: formName,
      ...formData
    });
  },

  // Track button clicks
  trackButtonClick: (buttonName: string, location?: string) => {
    analytics.trackEvent('button_click', {
      button_name: buttonName,
      location: location || 'unknown'
    });
  },

  // Track file downloads
  trackDownload: (fileName: string, fileType?: string) => {
    analytics.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType || 'unknown'
    });
  },

  // Track external link clicks
  trackExternalLink: (url: string, linkText?: string) => {
    analytics.trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText || 'unknown'
    });
  },

  // Track scroll depth
  trackScrollDepth: (percentage: number) => {
    analytics.trackEvent('scroll_depth', {
      scroll_percentage: percentage
    });
  },

  // Track video interactions
  trackVideo: (action: 'play' | 'pause' | 'complete', videoTitle?: string) => {
    analytics.trackEvent('video_' + action, {
      video_title: videoTitle || 'unknown'
    });
  }
};