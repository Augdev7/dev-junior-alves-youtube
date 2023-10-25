import React from 'react';

import { AnimatedText } from './AnimatedText/index';
import { projectOne, projectTwo, projectThree } from './index';
import ProjectsCard from './ProjectsCard';

const Portifolio = () => {
  return (
    <section
      id='projects'
      className='w-full border-b-[1px] border-b-black bg-slate-100 py-20'
    >
      <div className='mx-auto mt-24 min-h-screen max-w-7xl px-8 xl:px-0'>
        <div className='lg:pr-4'>
          <div className='lg:max-w-lg'>
            <p className='text-base font-semibold leading-7 text-indigo-600'>
              O que fazemos
            </p>
            <AnimatedText text='NOSSOS SERVIÇOS' />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 py-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-14'>
          <ProjectsCard
            title='CRIAÇÃO DE CONTEÚDO'
            des=' Seja para campanhas on ou off, mantemos o nivel de qualidade e criatividade que sua empresa deseja.'
            src={projectOne}
          />

          <ProjectsCard
            title='DESIGN GRÁFICO'
            des=' Vamos do branding à criação de sites e plataformas para estabelecer o visual de sua marca!'
            src={projectTwo}
          />

          <ProjectsCard
            title='PLANEJAMENTO'
            des=' Definimos estratégias de cruto, médio e longo prazo para você nunca perder seu negócio de vista!'
            src={projectThree}
          />

          <ProjectsCard
            title='SOCIAL MEDIA CLONE'
            des=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
            src={projectThree}
          />

          <ProjectsCard
            title='E-commerce Website'
            des=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
            src={projectOne}
          />

          <ProjectsCard
            title='Chatting App'
            des=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
            src={projectTwo}
          />
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
