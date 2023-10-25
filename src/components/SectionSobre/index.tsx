/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import Bg from '/public/banner1.webp';

import { AnimatedText } from './../AnimatedText/index';
import { Container } from './styles';

export function SectionSobre() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const variant: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgb(244, 244, 244)',
      mixBlendMode: 'difference'
    },
    textwhite: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference'
    }
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <Container>
      <section
        id='about'
        className="dark:text-light text-dark flex min-h-screen items-center bg-[url('/bg-sobre.svg')] sm:items-start"
      >
        <div className='max-w-8xl grid w-full items-center gap-4 md:grid-cols-2 md:gap-8'>
          <div className='w-full'>
            <Image
              src={Bg}
              alt='codeBucka'
              className='h-auto'
              placeholder='blur'
              width={700}
              height={475}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div className='mx-auto max-w-[38rem] text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
            <div className='grid gap-6'>
              <AnimatedText text='SOBRE NÓS' />
              <div className='text-center'>
                <p className='mt-6 px-4 text-lg leading-8 text-gray-600'>
                  Somos uma Agência de Marketing Digital Full Service com uma
                  combinação única de talentos criados para a era digital.
                  Geramos ideias e estratégias impulsionadas pela percepção do
                  consumidor e ampliadas por um domínio sem precedentes da
                  tecnologia.
                </p>
              </div>
              <div className='mt-4 flex items-center justify-center gap-x-6 sm:py-8'>
                <div className='relative rounded-full px-8 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  Qual seu sonho e objetivo?{' '}
                  <Link href='https://api.whatsapp.com/send?phone=5561986692775'>
                    <button className='button i-button'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      CONTA PRA GENTE <span aria-hidden='true'>&rarr;</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
