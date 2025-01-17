'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import works from '@/data/work';
import { TabButton, TabContent, TabsContainer } from '@/style/experience';
import { Section, Title, Description } from '@/style/styles';
import { Briefcase } from 'phosphor-react';

import { CV } from '@/components/CV';
import { Educations } from '@/components/Educations';
import { Footer } from '@/components/Footer';
import { Links } from '@/components/Links';
import { ScrollTop } from '@/components/ScrollTop';

export default function Experiencia() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;

  return (
    <>
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../experience</p>
          Experiência
          <span>
            <Briefcase /> Experience
          </span>
        </Title>

        <Description>
          Sou apaixonado por criar interfaces interativas e funcionais, buscando
          sempre aprimorar minhas habilidades e aprender novas tecnologias.
          Estou sempre aberto a novos desafios e projetos desfiadores.
        </Description>

        <TabsContainer>
          <Image
            className='vector-circle'
            src='/vectors/circle-spin.svg'
            alt='circulo animado'
            width={666}
            height={670}
          />

          <Tabs
            className='tabs'
            selectedIndex={tabIndex}
            onSelect={index => setTabIndex(index)}
            selectedTabClassName={'is-active'}
            selectedTabPanelClassName={'is-active'}
          >
            <TabButton>
              <TabList className='tab__list'>
                {works.map(work => {
                  if (work.id) {
                    numbering += 1;
                    return (
                      <>
                        <h2 key={work.id}>
                          {numbering >= 0 && numbering <= 10
                            ? `0${numbering - 1}`
                            : `${numbering - 1}`}
                        </h2>
                        <Tab className='tab'>
                          <button>{work.title}</button>
                        </Tab>
                      </>
                    );
                  }
                })}
              </TabList>
            </TabButton>

            <TabContent>
              {works.map(work => {
                return (
                  <TabPanel className='tab__panel' key={work.id}>
                    <div className='title-container'>
                      <div className='title-content'>
                        <div>
                          <Image
                            src={work.img}
                            alt={work.title}
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className='title'>
                          <h1>{work.title}</h1>
                          <div className='sub'></div>
                          <h2>{work.subTitle}</h2>
                        </div>
                      </div>
                      <div className='office'>
                        <h3>{work.office}</h3>
                        <h4>{work.date}</h4>
                      </div>
                    </div>
                    <p>{work.description}</p>
                    <div className='techs'>
                      <h3>Techs:</h3>
                      <ul>
                        {work.tags.map(tag => (
                          <div className='tags' key={tag.name}>
                            <Image
                              src={tag.icon}
                              alt={tag.name}
                              width={300}
                              height={300}
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                );
              })}
            </TabContent>
          </Tabs>
        </TabsContainer>

        <Educations />
        <CV />
      </Section>
      <Footer />
    </>
  );
}
