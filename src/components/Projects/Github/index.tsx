/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';
import { BsFolderSymlink } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

import { ButtonAlt } from '../../../styles/styles';
import { AllContainer, AllContent, Cubo } from './styles';

interface AllContent {
  title: string;
}

export function AllProjects({ title }: AllContent) {
  return (
    <>
      <AllContainer>
        <h4>{title}</h4>
        <AllContent>
          <Link href={'/projects'}>
            <ButtonAlt>
              Projetos <BsFolderSymlink size={20} />
            </ButtonAlt>
          </Link>

          <Cubo>
            <div className='stage-cube-cont'>
              <div className='cubespinner'>
                <div className='face1'>
                  <Image src='/skills/html.svg' alt='Html' />
                </div>
                <div className='face2'>
                  <Image src='/skills/react.svg' alt='React JS' />
                </div>
                <div className='face3'>
                  <Image src='/skills/javascript.svg' alt='JavaScript' />
                </div>
                <div className='face4'>
                  <Image src='/skills/typescript.svg' alt='TypeScript' />
                </div>
                <div className='face5'>
                  <Image src='/skills/css.svg' alt='Css' />
                </div>
                <div className='face6'>
                  <Image src='/skills/next-js.svg' alt='Next JS' />
                </div>
              </div>
            </div>
          </Cubo>
        </AllContent>
      </AllContainer>
    </>
  );
}
