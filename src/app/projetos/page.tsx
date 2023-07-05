/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

import { siteConfig } from '@/config';
import projects from '@/data/projects';
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsItem
} from '@/style/projects';
import { Description, Section, Title } from '@/style/styles';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import { Footer } from '@/components/Footer';
import { Links } from '@/components/Links';
import { ScrollTop } from '@/components/ScrollTop';

import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'PROJETOS - UP.EXPERT'
});

export default function Projetos() {
  return (
    <>
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../projects</p>
          Projetos
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </Title>
        <Description>
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </Description>

        <ProjectsContainer>
          <div className='laptop'>
            <Image
              width={400}
              height={400}
              src='/vectors/laptop.svg'
              alt='laptop'
            />
          </div>
          <div className='pc'>
            <Image
              width={400}
              height={400}
              src='/vectors/pc.svg'
              alt='monitor'
            />
          </div>

          <ProjectsContent>
            {projects.map(project => {
              return (
                <>
                  <div className='border' key={project.id} />
                  <ProjectsItem>
                    <div className='banner'>
                      <Image
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className='title'>
                        <Image
                          width={20}
                          height={20}
                          src={'/icon.svg'}
                          alt={project.title}
                        />
                        <h2>{project.title}</h2>
                      </div>
                      <div className='description'>
                        <p>{project.description}</p>

                        <div className='tags'>
                          {project.tags.map(tag => {
                            return <span key={tag.name}>{tag.name}</span>;
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <button>
                            Ver projeto
                            <ArrowRight
                              style={{
                                marginBottom: '-0.1rem',
                                marginLeft: '0.5rem'
                              }}
                              weight='bold'
                              size={16}
                            />
                        </button>
                      </Link>
                    </div>
                  </ProjectsItem>
                </>
              );
            })}
          </ProjectsContent>
        </ProjectsContainer>
      </Section>
      <Footer />
    </>
  );
}
