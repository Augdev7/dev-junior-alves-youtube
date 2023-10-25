import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { siteConfig } from '@/config';

import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | AGÊNCIA UP.EXPERT',
    default:
      'Agência full service, Gestão de Redes Sociais, SEO (Search Engine Optimization), Publicidade Online.'
  },
  description:
    'AGÊNCIA DE MARKETIGN DIGITAL EM BRASILIA | é uma empresa especializada em promover produtos, serviços e marcas na era digital. Seu principal objetivo é utilizar estratégias online para aumentar a visibilidade, o alcance e o engajamento de seus clientes, proporcionando resultados mensuráveis.',
  verification: {
    google:
      'google-site-verification=8v6zEqQQOckBK2wYrk8fyfM9Fy848TFIm9Bcd_ntqtk'
  },
  manifest: '/manifest.json',
  authors: [{ name: 'AGÊNCIA UP.EXPERT' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'UP.EXPERT',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html suppressHydrationWarning lang="en">
        <body className={`${inter.className} w-full bg-primary`}>
          <Layout>
            <main className="pt-28">{children}</main>
          </Layout>
        </body>
      </html>
    </>
  );
}
