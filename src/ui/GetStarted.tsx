import Image from 'next/image';

import arrowUp from '../../public/assets/arrowUp.svg';

const GetStarted = () => (
  <div className='h-[80px] w-[80px] animate-pulse cursor-pointer rounded-full border-2 border-gray-300 bg-transparent p-[2px] brightness-75 duration-300 hover:brightness-100 xl:h-[120px] xl:w-[120px]'>
    <div className=' h-full w-full flex-col items-center justify-center rounded-full bg-primary pt-3 text-center xl:pt-8'>
      <div className='flex items-center justify-center'>
        <p className=' mr-0 text-[14px] font-medium leading-[23px] md:mr-2 xl:text-[18px]'>
          <span className='text-gradient'>Get</span>
        </p>
        <div className='inline-flex'>
          <Image src={arrowUp} alt='ArrowUp' />
        </div>
      </div>
      <div>
        <p className='text-[14px] font-medium leading-[23px] xl:text-[18px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
