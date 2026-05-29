import type { Metadata } from 'next'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import EmailPopup from '@/components/EmailPopup'
import CookieConsent from '@/components/CookieConsent'
import RevealInit from '@/components/RevealInit'
import ScrollProgress from '@/components/ScrollProgress'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forge X — Luxury Renovation & General Contracting',
  description:
    'Premium craftsmanship, timeless design. Forge X delivers luxury renovations and contracting services built with precision and designed to last generations.',
  keywords: 'luxury renovation, general contracting, kitchen remodeling, bathroom remodeling, Baltimore, Rosedale, White Marsh, Joppatowne',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Forge X — Luxury Renovation & General Contracting',
    description: 'Premium craftsmanship, timeless design. Luxury renovations built with precision across Baltimore, MD.',
    url: 'https://forgexgc.com',
    siteName: 'Forge X',
    images: [{ url: 'https://forgexgc.com/og.jpg', width: 1200, height: 630, alt: 'Forge X Luxury Renovation' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge X — Luxury Renovation & General Contracting',
    description: 'Premium craftsmanship, timeless design. Luxury renovations built with precision across Baltimore, MD.',
    images: ['https://forgexgc.com/og.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Forge X',
  url: 'https://forgexgc.com',
  telephone: '+14432721048',
  email: 'info@forgexgc.com',
  description: 'Luxury renovation and general contracting services in Baltimore, MD.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Baltimore',
    addressRegion: 'MD',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Baltimore' },
    { '@type': 'City', name: 'Rosedale' },
    { '@type': 'City', name: 'White Marsh' },
    { '@type': 'City', name: 'Joppatowne' },
  ],
  priceRange: '$$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Renovation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Remodeling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Remodeling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Additions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Flooring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Basement Finishing' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <RevealInit />
        {children}
        <EmailPopup />
        <CookieConsent />
      </body>
    </html>
  )
}
