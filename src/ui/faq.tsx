'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/ui/accordion';

import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

const faqs = [
  {
    question: 'Quando contratar uma agência de publicidade?',
    answer:
      'Uma agência de publicidade irá te ajudar em momentos específicos da vida de sua empresa, e após atingir determinado patamar, será essencial para mantê-la relevante e no topo, possibilitando mostrar para a sociedade os verdadeiros princípios e visão daquilo que foi idealizado no início, além de atualizar esse elo social.'
  },
  {
    question: 'Deseja se posicionar dentro do mercado',
    answer: `Está cansado de não ser a preferência de pessoas que buscam soluções como a sua? Com o poder da internet você pode alcançar milhares de pessoas e marcar a vida delas para ser sempre lembrado quando esse público necessitar de serviços como os que você oferece.`
  },
  {
    question: 'Quer construir um negócio sólido',
    answer: `Chega do cliente contratar o serviço uma vez e nunca mais lhe procurar. Chega de gastar energia com a concorrência! Através de um trabalho estratégico e responsável feito por nossa equipe, você terá mais oportunidades geradas pela internet.`
  },
  {
    question: 'Quer tornar sua empresa, uma grande marca',
    answer: `Torna-se uma grande marca as empresas que tem muito bem definido sua missão, visão e valores, alinhados com um conceito e posicionamento de mercado muito claro e objetivo. Tudo isso compõe a alma, corpo e espírito do seu negócio.`
  }
];

export default function FAQ() {
  return (
    <div className='border-t border-gray-200 bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur'>
      <MaxWidthWrapper className=''>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <div className='p-3'>
            <h1 className='font-display mt-5 text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl sm:leading-[1.15]'>
              DÚVIDAS
              <br />
              <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent sm:text-5xl sm:leading-[1.15]'>
                FREQUENTES
              </span>
            </h1>
          </div>
          <Accordion
            type='single'
            collapsible
            className='col-span-2 px-3 sm:px-0'
          >
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={idx.toString()}>
                <AccordionTrigger className='py-2'>
                  <h2 className='text-left text-lg'>{faq.question}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='py-4'>{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
