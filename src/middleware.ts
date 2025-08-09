import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = ['/en', '/ru'].every(
    (locale) => !pathname.startsWith(`${locale}/`) && pathname !== locale
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'ru'; // default locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};