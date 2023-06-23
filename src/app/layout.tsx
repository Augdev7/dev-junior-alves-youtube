import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import { siteConfig } from '@/config';
import Cursor from '@/ui/Cursor';

import { Layout } from '@/components/Layout';
import Navbar from '@/components/navbar/Navbar';

import GlobalStyle from '@/styles/GlobalStyle';

import Footer from '../ui/footer';
import { DefaultTags } from './../ui/DefaultTags';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: {
    template: '%s | AGÊNCIA UP.EXPERT',
    default: 'Agência full service'
  },
  description: 'MARKETIGN DIGITAL EM BRASILIA | (61) 9 8669-2775',
  verification: {
    google: 'google-site-verification=123123123'
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
      <Script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />

      <html suppressHydrationWarning lang="pt-BR">
        <DefaultTags />
        <body className={`${inter.className} w-full bg-primary`}>
          <Layout>
            <Suspense fallback="...">
              <Navbar />
              <Cursor />
            </Suspense>
            <StyledComponentsRegistry>
              <>{children}</>
            </StyledComponentsRegistry>
            <GlobalStyle />
          </Layout>

          <Footer />
        </body>
      </html>
    </>
  );
}
