import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ScrollToTop } from './components/ScrollToTop';
// import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://lopezzigayasociados.com.mx/'),
  title: {
    default: 'López Ziga y Asociados',
    template: '%s | López Ziga y Asociados'
  },
  description: 'Con más de 20 años de experiencia y siete años en nuestro actual Despacho Jurídico, nos especializamos en Derecho Penal, Familiar e Inmobiliario. Nuestro equipo de abogados garantiza transparencia y acceso constante a los expedientes digitales de nuestros clientes empresariales, proporcionando un asesoramiento continuo y personalizado.',
  keywords: ['abogados México', 'derecho familiar', 'derecho penal', 'derecho inmobiliario',],
  authors: [{ name: 'Emyux', url: "https://emyux.com" }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'López Ziga y Asociados',
    title: 'López Ziga y Asociados',
    url: 'https://lopezzigayasociados.com.mx/',
    description:
      'Con más de 20 años de experiencia y siete años en nuestro actual Despacho Jurídico, nos especializamos en Derecho Penal, Familiar e Inmobiliario. Nuestro equipo de abogados garantiza transparencia y acceso constante a los expedientes digitales de nuestros clientes empresariales, proporcionando un asesoramiento continuo y personalizado.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo de López Ziga y Asociados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscar Edwin Lopez – Socio en López Ziga & Asociados',
    description:
      'Abogado Postulante, Socio en López Ziga & Asociados, habitante de Naucalpan, Edo. Mex.; orgulloso de origen zapoteca, paisano de corazón.',
    images: ['https://x.com/oscaredwinlopez/photo'],
    creator: 'https://emyux.com',
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
    <html lang="es" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen bg-gray-50 overflow-y-scroll scrollbar-hide scroll-smooth`}>
        {children}
        <ScrollToTop />
        {/* <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                
                fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                fbq('track', 'PageView');
            `,
          }}
        /> */}
      </body>
    </html>
  )
}