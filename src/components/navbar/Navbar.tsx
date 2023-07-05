/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

import clsx from 'clsx';
import { motion, useCycle } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import Button from '../../components/buttons/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NextLogo } from '../../ui/next-logo';
import DropMenu from './DropMenu';

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [drop, setDrop] = useState(false);
  const containerRef = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const router = useRouter();

  return (
    <header
      className={`sticky top-0 z-50 px-10 transition-shadow ${
        scrollPosition > 0
          ? 'bg-[#020617] bg-opacity-95 shadow-lg shadow-indigo-500/40 backdrop-filter'
          : 'shadow-none'
      }`}
    >
      <motion.div
        className='brand'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
      >
        <div className='flex cursor-default items-center justify-between py-4'>
          <div className='flex h-14 items-center px-2 py-4 lg:h-auto'>
            <Link
              href='/'
              className='group flex w-full items-center gap-x-2.5'
              aria-label='Read more about Seminole tax hike'
            >
              <div className='w-58 h-10 rounded-full border border-white/30 group-hover:border-white/50'>
                <NextLogo />
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            {/* 
                <div className="flex justify-between px-2 items-center gap-4 py-1 bg-gray-200 rounded-full">
                    <Button
                    btnName="Contact"
                    />
                    <BsFillArrowRightCircleFill className="text-[2rem]"/>
                </div> */}

            <Button
              icon={BsFillArrowRightCircleFill}
              label='Contato'
              onClick={() => router.push('/contact')}
            />

            {/* <button className="flex justify-between px-2 items-center gap-4 py-2 bg-violet-800 rounded-full">
                    <span className="pl-2">Contact</span>
                </button> */}

            <div className='z-[999999] rounded-full bg-violet-800 p-2'>
              {drop ? (
                <GrFormClose
                  className='cursor-pointer text-[1.5rem]'
                  onClick={() => setDrop(!drop)}
                />
              ) : (
                <RxHamburgerMenu
                  className='cursor-pointer text-[1.5rem]'
                  onClick={() => setDrop(!drop)}
                />
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {drop && <DropMenu drop={drop} setDrop={setDrop} />}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
