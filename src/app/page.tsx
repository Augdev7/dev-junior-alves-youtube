/* eslint-disable @typescript-eslint/no-unused-vars */
import { siteConfig } from '@/config';

import { CardContact } from './../components/CardContact/index';
import { Hero } from './../components/Hero/index';
import { HeroBottomCard } from './../components/HeroBottomCard/page';
import { HomeHero } from './../components/HomeHero/index';
import Portifolio from './../components/Portifolio/Projects';
import { SectionSobre } from './../components/SectionSobre/index';
import FAQ from './../ui/faq';

const title = 'Home | Agência up.expert';
const description =
  'Agência de Marketing Digital em Brasília-DF e Goiânia, honesta e eficiente. Confie em quem mais entende de resultados no digital, fale com a UP.EXPERT.';

export const metadata = {
  title,
  description,
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}`,
    title,
    description,
    siteName: 'Agência full service',
    images: [
      {
        url: `/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <HeroBottomCard />
      <SectionSobre />
      <Portifolio />
      <FAQ />
      <CardContact />
    </>
  );
}
