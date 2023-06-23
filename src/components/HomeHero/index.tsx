/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, Fragment } from 'react';
import { HiOutlineCheck, HiChevronUpDown } from 'react-icons/hi2';

import { Listbox, Combobox, Transition } from '@headlessui/react';
import { Switch } from '@headlessui/react';

import profilePic from '/public/Home.jpg';

import { styles } from './styles';

const people = [
  { name: 'Marketing digital' },
  { name: 'Manuteção de site' },
  { name: 'Desenvolvimento de site' },
  { name: 'Produzir conteúdo' },
  { name: 'Lading Page' },
  { name: 'Criar logomarca' }
];

import { HiPencilAlt } from 'react-icons/hi';
import { HiCalendarDays } from 'react-icons/hi2';

import Typewriter from 'typewriter-effect';
import { useScroll, useTransform, motion } from 'framer-motion';

import ImgHome from '/public/individuo-feliz.webp';

import { HeroBottomCard } from '../HeroBottomCard/page';

import { useRouter } from 'next/navigation';
import { Slide } from './../Slide/index';

export function HomeHero() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(people[0]);
  const [enabled, setEnabled] = useState(false);

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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-4">
        <Image
          src={profilePic}
          alt="Image home"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
          quality={100}
          sizes="100vw"
          className={`object-cover duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div
              className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
            >
              <div className="mt-5 flex flex-col items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
                <div className="violet-gradient h-40 w-1 sm:h-80" />
              </div>

              <div>
                <motion.h1
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className={`${styles.heroHeadText} text-white`}
                >
                  INOVAR É <span className="text-[#915EFF]">CRIAR</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`${styles.heroSubText} md:max-w[650px] text-base font-medium text-textDark`}
                >
                  <span className="text-[#915EFF] sm:block" />
                  CONECTAMOS PESSOAS
                </motion.p>
              </div>
            </div>
            <div className="py-24">
              <Image
                src={ImgHome}
                alt="Image home"
                width={400}
                height={1000}
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                  loading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                }}`}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
            <div
              data-aos="fade-right"
              className="gap grid grid-flow-col sm:grid-cols-1 lg:pt-2"
            >
              <Slide />
            </div>
          </div>
        </div>
        <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
          <button
            id="al"
            aria-label="Name"
            type="button"
            onClick={() => router.push('#about')}
          >
            <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="mb-1 h-3 w-3 rounded-full bg-secondary"
              />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
