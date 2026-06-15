import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import '../styles/globals.css'
import '../styles/animations.css'
import Preloader from '@/components/ui/Preloader'
import RippleInit from '@/components/ui/RippleInit'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Global Pilot Academy',
  description: 'FAA Part 141 & 61 flight school at Tampa Executive Airport (KVDF). Programs from Private Pilot to Airline Track.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
      </head>
      <body className={figtree.className} style={{ backgroundColor: '#fff' }}>
        <Preloader />
        <RippleInit />
        {children}
      </body>
    </html>
  )
}
