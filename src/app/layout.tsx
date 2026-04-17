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
  title: 'Cosa Nostra Social Club | Smash Burgers & Pizzas',
  description: 'Adictos a las Smash Burgers - Villa Giardino, Córdoba',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-[#131313] text-[#e5e2e1] antialiased">
        {children}
      </body>
    </html>
  );
}