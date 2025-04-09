import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'López Ziga y Asociados - Expertos Legales en México',
  description: 'Bufete jurídico mexicano especializado en derecho penal, inmobiliario, familiar y divorcios no disputados. Protegiendo tus derechos desde 1995.',
  keywords: ['abogados México', 'derecho penal', 'derecho inmobiliario', 'divorcios', 'abogados familiares'],
  authors: [{ name: 'López Ziga y Asociados' }],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.lopezziga.com',
    siteName: 'López Ziga y Asociados',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'López Ziga y Asociados',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 overflow-y-scroll scrollbar-hide scroll-smooth`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}