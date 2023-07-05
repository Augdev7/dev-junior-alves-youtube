import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BiUserPin } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { RiWhatsappFill } from 'react-icons/ri';

import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutContact,
  AboutDescription
} from '@/style/about';
import { ButtonAlt, Section, Title } from '@/style/styles';

import { Footer } from '@/components/Footer';
import { Links } from '@/components/Links';
import { ScrollTop } from '@/components/ScrollTop';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>About | Evander Inácio </title>
        <meta
          name='description'
          content='Meu nome é Evander Inácio, sou um desenvolvedor front-end React
            do Brasil.'
        />
      </Head>
      <Links />
      <ScrollTop />
      <Section>
        <AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <AboutContent>
            <AboutImage>
              <Image
                className='AboutImg'
                src='/Evander.webp'
                width={500}
                height={500}
                alt='Imagem de perfil Evander'
              />

              <div className='links'>
                <ul role='list'>
                  <Link
                    href={'https://github.com/EvanderInacio'}
                    target='_blank'
                    aria-label='Link para o Github'
                  >
                    <AiFillGithub size={25} /> @EvanderInacio
                  </Link>
                  <Link
                    href={'https://www.linkedin.com/in/evander-inacio/'}
                    target='_blank'
                    aria-label='Link para o Linkedin'
                  >
                    <BsLinkedin size={25} /> @evander-inacio
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=5511995085916'}
                    target='_blank'
                    aria-label='Link para o WhatsApp'
                  >
                    <RiWhatsappFill size={25} /> +55 (11) 99508-5916
                  </Link>
                  <Link
                    href={'https://www.discordapp.com/users/evander_inacio'}
                    className='dc'
                    target='_blank'
                    aria-label='Link para o Discord'
                  >
                    <FaDiscord size={25} /> @evander_inacio
                  </Link>
                  <Link
                    href={'mailto:evander.20112@hotmail.com'}
                    className='email'
                    target='_blank'
                    aria-label='Link para o email'
                  >
                    <GrMail size={25} /> @evander.20112@hotmail.com
                  </Link>
                </ul>
              </div>

              <AboutContact>
                <h3>
                  Vamos conversar, quem sabe criar um projeto incrível juntos?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href={'/contact'}>
                  <ButtonAlt>Contato</ButtonAlt>
                </Link>
              </AboutContact>
            </AboutImage>
            <AboutDescription>
              <p>
                Meu nome é Evander Inácio, sou um desenvolvedor front-end React
                do Brasil, apaixonado por projetar e codificar. Minha
                especialidade é a criação de interfaces e funcionalidades para
                aplicativos da web usando React.js e Next.js.
              </p>
              <p>
                Iniciei minha jornada na universidade com o objetivo inicial de
                cursar Análise e Desenvolvimento de Sistemas. Sempre tive
                interesse por computadores e uma curiosidade em relação à
                criação de páginas web. Então, decidi unir essas duas paixões e
                ingressei na faculdade, não com o plano de me tornar um
                desenvolvedor, mas para explorar as possibilidades da área de
                TI.
              </p>
              <p>
                Foi somente em 2021, no penúltimo semestre da faculdade, que
                comecei a levar a programação mais a sério. Iniciei minha
                primeira tentativa de aprender HTML e CSS, porém acabei dando
                uma pausa após alguns meses devido à falta de tempo livre.
              </p>
              <p>
                No ano seguinte, em 2022, percebi que precisava definir um
                objetivo claro. Foi então que direcionei meus esforços para
                aprimorar minhas habilidades em HTML, CSS e JavaScript, com o
                objetivo de construir aplicações web e aprofundar meu
                aprendizado. Esse foi o ponto de partida para me tornar um
                desenvolvedor web.
              </p>
              <p>
                Atualmente, trabalho como desenvolvedor front-end freelancer,
                utilizando ReactJS e Material UI, além de fazer integração com o
                back-end em NodeJS.
              </p>
              <p>
                Além do trabalho, continuo estudando e desenvolvendo projetos
                pessoais para expandir meus conhecimentos, focado no ecossistema
                Javascript para desenvolvimento Front-end utilizando ReactJS,
                Typescript, Next.js, entre outros.
              </p>
              <p>
                Estou sempre em busca de desafios e oportunidades para crescer
                profissionalmente, e estou animado para contribuir com projetos
                interessantes e inovadores no campo do desenvolvimento web.
              </p>
            </AboutDescription>
          </AboutContent>
        </AboutContainer>
      </Section>
      <Footer />
    </>
  );
}
