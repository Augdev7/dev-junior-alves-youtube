import FAQ from '@/ui/faq';
import Logos from '@/ui/logos';
import Pricing from '@/ui/pricing';

import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Plano - UP.EXPERT'
});

export default function PlanosPage() {
  return (
    <>
      <Pricing />
      <Logos copy="Trusted & loved by marketing teams at world-class companies" />
      <FAQ />
    </>
  );
}
