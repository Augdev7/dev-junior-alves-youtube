'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

import CustomButton from './CustomButton';

const ProjectsCard = ({ title, des, src }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className='shadow-shadowOne group flex h-auto w-full cursor-pointer flex-col rounded-lg bg-gradient-to-r from-bodyColor to-[#202327] p-4 transition-transform duration-200 ease-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900 xl:px-12 xl:py-10'>
      <div className='h-[80%] w-full overflow-hidden rounded-lg shadow-2xl'>
        <Image
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          }}`}
          onLoadingComplete={() => setLoading(false)}
          src={src}
          alt='src'
        />
      </div>

      <div className='mt-5 flex w-full flex-col  gap-6'>
        <div>
          <div className='flex items-center justify-between'>
            <h3 className='text-designColor text-base font-bold uppercase'>
              {title}
            </h3>

            <div className='flex gap-2'>
              <span className='hover:text-designColor inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-gray-400 duration-300'>
                <BsGithub />
              </span>

              <span className='hover:text-designColor inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-gray-400 duration-300'>
                <FaGlobe />
              </span>
            </div>
          </div>

          <p className='mt-3 text-sm tracking-wide duration-300 hover:text-gray-700'>
            {des}
          </p>
          <div className='mt-3 flex items-center justify-between'>
            <CustomButton
              onClick={() => alert('Button clicked!')}
              id='btn'
              className='shadow'
            >
              Saiba mais
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
