/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Links } from '@/components/Links';
import { ScrollTop } from '@/components/ScrollTop';

export default function Contacts() {
  return (
    <>
      <Links />
      <ScrollTop />
      <Contact />
      <Footer />
    </>
  );
}
