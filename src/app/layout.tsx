import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cosa-nostra-social-club-frontend.vercel.app'),

  title: {
    default: 'Cosa Nostra Social Club | Smash Burgers en Villa Giardino',
    template: '%s | Cosa Nostra Social Club',
  },

  description:
    'Smash burgers artesanales en Villa Giardino, Córdoba. Pedí delivery o takeaway en Cosa Nostra Social Club. Calidad premium, ingredientes locales y sabor único.',

  keywords: [
    'smash burgers',
    'hamburguesas Villa Giardino',
    'delivery hamburguesas Córdoba',
    'pizza Villa Giardino',
    'takeaway Córdoba',
    'Cosa Nostra Social Club',
  ],

  authors: [{ name: 'Cosa Nostra Social Club' }],

  openGraph: {
    title: 'Cosa Nostra Social Club',
    description:
      'Smash burgers premium en Villa Giardino. Delivery & Takeaway.',
    url: 'https://cosa-nostra-social-club-frontend.vercel.app',
    siteName: 'Cosa Nostra Social Club',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // ⚠️ you must add this
        width: 1200,
        height: 630,
        alt: 'Cosa Nostra Smash Burgers',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cosa Nostra Social Club',
    description:
      'Smash burgers premium en Villa Giardino. Pedí ahora.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen">
        
        {/* ✅ Structured Data (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Cosa Nostra Social Club',
              image:
                'https://cosa-nostra-social-club-frontend.vercel.app/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Tomillo 172',
                addressLocality: 'Villa Giardino',
                addressRegion: 'Córdoba',
                postalCode: '5176',
                addressCountry: 'AR',
              },
              telephone: '+5493548638444',
              servesCuisine: ['Burgers', 'Pizza'],
              url: 'https://cosa-nostra-social-club-frontend.vercel.app',
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}