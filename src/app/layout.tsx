import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ScrollToTop } from './components/ScrollToTop'

export const metadata: Metadata = {
  // metadataBase: new URL('https://lopezzigayasociados.com'),
  title: {
    default: 'López Ziga y Asociados',
    template: '%s | López Ziga y Asociados'
  },
  description: 'Bufete jurídico mexicano especializado en derecho penal, inmobiliario, familiar y divorcios no disputados. Protegiendo tus derechos desde 1995.',
  keywords: ['abogados México', 'derecho familiar', 'derecho penal', 'derecho inmobiliario',],
  authors: [{ name: 'Emyux', url: "https://emyux.com" }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    // url: 'https://lopezzigayasociados.com',
    siteName: 'López Ziga y Asociados',
    title: 'López Ziga y Asociados',
    description:
      'Bufete jurídico mexicano especializado en derecho penal, inmobiliario, familiar y divorcios no disputados. Protegiendo tus derechos desde 1995.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'López Ziga y Asociados'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'López Ziga y Asociados',
    description:
      'Bufete jurídico mexicano especializado en derecho penal, inmobiliario, familiar y divorcios no disputados. Protegiendo tus derechos desde 1995.',
    images: ['/images/logo.png'],
    creator: '@emyux.com'
  },
  icons: {
    icon: '/favicon.ico',
  }
}

export const dynamicParams = true
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`flex flex-col min-h-screen bg-gray-50 overflow-y-scroll scrollbar-hide scroll-smooth`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}