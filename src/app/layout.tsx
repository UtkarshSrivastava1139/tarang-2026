import type { Metadata, Viewport } from 'next';
import { LocaleProvider } from '@/context/LocaleContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileNavigation } from '@/components/layout/MobileNav';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#17264A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: 'TARANG 2.0 | Annual Function 2026 | एक भारत • अनेक रंग',
  description: 'Official cultural festival platform of Smt. Radhika Devi Intermediate College & Children Academy, Mathauli Bazar, Kushinagar.',
  metadataBase: new URL('https://tarang.srdintercollege.in'),
  keywords: ['Tarang 2.0', 'SRD Intermediate College', 'SRD Children Academy', 'Annual Function 2026', 'Ek Bharat Anek Rang', 'Cultural Festival'],
  openGraph: {
    title: 'TARANG 2.0 | Annual Function 2026 | एक भारत • अनेक रंग',
    description: 'The Rhythm of Togetherness — Official cultural festival platform of Smt. Radhika Devi Intermediate College & Children Academy.',
    url: 'https://tarang.srdintercollege.in',
    siteName: 'TARANG 2.0',
    locale: 'en_IN',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/branding/tarang_logo.png" />
        <link rel="apple-touch-icon" href="/branding/tarang_logo.png" />
        <meta name="application-name" content="TARANG 2.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TARANG 2.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Manrope:wght@300;400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-ivory text-navy selection:bg-gold/30 selection:text-navy">
        <LocaleProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="main-content flex-1">
              {children}
            </main>
            <Footer />
            <MobileNavigation />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
