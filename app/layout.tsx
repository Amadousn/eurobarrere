import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eurobarrere Fondations | Spécialiste Fondations Spéciales Île-de-France',
  description: 'Expert en fondations spéciales, reprise en sous-œuvre et confortement de carrières en Île-de-France. Plus de 30 ans d\'expérience. Devis gratuit sous 48h.',
  openGraph: {
    title: 'Eurobarrere Fondations | Spécialiste Fondations Spéciales Île-de-France',
    description: 'Expert en fondations spéciales, reprise en sous-œuvre et confortement de carrières en Île-de-France. Plus de 30 ans d\'expérience.',
    url: 'https://www.eurobarrerefondations.com',
    siteName: 'Eurobarrere Fondations',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eurobarrere Fondations',
  description: 'Spécialiste fondations spéciales, reprise en sous-œuvre et confortement de carrières',
  url: 'https://www.eurobarrerefondations.com',
  telephone: '+33680584952',
  email: 'eurofondations@outlook.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'State', name: 'Île-de-France' },
  ],
  geo: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522,
    },
    geoRadius: '100000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
