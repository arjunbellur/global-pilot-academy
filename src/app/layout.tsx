import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Global Pilot Academy - FAA Part 141 & 61 Flight School in Tampa, FL',
    template: '%s | Global Pilot Academy'
  },
  description: 'Global Pilot Academy (KVDF) offers structured flight training from Private Pilot to Airline Track, with in-house DPE, international student support, and housing options.',
  keywords: [
    'flight school Tampa',
    'pilot training Florida',
    'KVDF airport',
    'FAA Part 141',
    'private pilot license',
    'commercial pilot training',
    'flight instructor certification',
    'aviation academy',
    'airline pilot program'
  ],
  authors: [{ name: 'Global Pilot Academy' }],
  creator: 'Global Pilot Academy',
  publisher: 'Global Pilot Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gpapilot.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gpapilot.com',
    siteName: 'Global Pilot Academy',
    title: 'Global Pilot Academy - FAA Part 141 & 61 Flight School in Tampa, FL',
    description: 'FAA Part 141 & 61 certified flight school at Tampa Executive Airport (KVDF). Professional pilot training programs.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Pilot Academy - Professional Flight Training at KVDF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Pilot Academy - FAA Part 141 & 61 Flight School in Tampa, FL',
    description: 'FAA Part 141 & 61 certified flight school at Tampa Executive Airport (KVDF). Professional pilot training programs.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
  category: 'Education',
  classification: 'Flight School',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1c3faa" />
      </head>
      <body className="antialiased">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
