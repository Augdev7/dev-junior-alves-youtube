/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import { motion, Variants } from 'framer-motion';

import Links from '../../ui/Links';

const NavLinks = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'PROJETOS',
    path: '/projetos'
  },
  {
    name: 'EXPERIENCIA',
    path: '/experiencia'
  },
  {
    name: 'SOBRE',
    path: '/sobre'
  },
  {
    name: 'CONTATO',
    path: '/contact',
    last: true
  }
];

interface Bol {
  drop: any;
  setDrop: any;
}

export default function DropMenu({ drop, setDrop }: Bol) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed left-5 right-5 top-5 z-50 rounded-3xl bg-white shadow-2xl shadow-slate-600 '
      onClick={() => setDrop(false)}
    >
      <nav className='flex flex-col'>
        <ul className='flex h-[100%] min-h-[40rem] flex-wrap rounded-3xl text-center text-[1.7rem] uppercase lg:min-h-[30rem] lg:flex-nowrap'>
          {NavLinks.map(item => (
            <Links name={item.name} path={item.path} last={item.last} />
          ))}
          {/* <Links
                    navName="Home"
                    path="/"
                    />
                    <Links
                    navName="services"
                    path="/services"
                    />
                    <Links
                    navName="works"
                    path="/works"
                    />
                    <Links
                    navName="About"
                    path="/about"
                    />
                    <Links
                    navName="Contact"
                    path="/contact"
                    last
                    /> */}
        </ul>
      </nav>
    </motion.div>
  );
}
