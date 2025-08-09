import { Inter } from "next/font/google";
import { ThemeProvider } from '@/contexts/ThemeContext';
import CrispChat from '@/components/CrispChat';
import Analytics from '@/components/Analytics';
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

// This layout only provides the basic HTML structure
// Metadata is handled by the locale-specific layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <CrispChat />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
