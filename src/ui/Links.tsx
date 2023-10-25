'use client';

import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion';

interface LinkProps {
  path: string;
  name: string;
  last?: boolean;
}

export default function Links({ path, name, last }: LinkProps) {
  return (
    <Link
      href={path}
      className={`pseudo relative flex min-h-[100%] w-full cursor-pointer items-end justify-center pb-4 hover:text-pink-400 ${
        last ? ' before:hidden before:w-0' : ''
      }`}
    >
      <div className='last flex items-center gap-6 hover:last-of-type:-rotate-12'>
        <div className=''>{name}</div>
        <BsArrowUpRight className='' />
      </div>
    </Link>
  );
}
