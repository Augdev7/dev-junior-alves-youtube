/* eslint-disable @typescript-eslint/no-unused-vars */
import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import { siteConfig } from '@/config';
import Cursor from '@/ui/Cursor';

import { Layout } from '@/components/Layout';
import Navbar from '@/components/navbar/Navbar';

import GlobalStyle from '@/styles/GlobalStyle';

import Footer from '../ui/footer';
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
      <html suppressHydrationWarning lang="en">
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
            <Footer />
          </Layout>
        </body>
      </html>
    </>
  );
}
