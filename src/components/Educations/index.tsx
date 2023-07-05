import Image from 'next/image';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import certificates from '@/data/certificates';
import educations from '@/data/educations';
import { GraduationCap } from 'phosphor-react';

import { Title } from '@/styles/styles';

import {
  ContainerEducation,
  EducationContent,
  EducationList,
  EducationImage,
  List,
  ListImage,
  ListContent
} from './styles';

export function Educations() {
  return (
    <ContainerEducation>
      <Title>
        Educação
        <span>
          <GraduationCap /> Education
        </span>
      </Title>
      <EducationContent>
        <EducationList>
          {educations &&
            educations.map(education => {
              return (
                <List key={education.id}>
                  <ListImage>
                    <Image
                      src={education.logo}
                      alt={education.subTitle}
                      width={500}
                      height={500}
                      property
                    />
                    <p>
                      Nível: <span>{education.level} </span>
                    </p>
                    <p>
                      Status: <span>{education.status}</span>
                    </p>
                  </ListImage>

                  <ListContent>
                    <h2>{education.title}</h2>
                    <h3>
                      <Link href={education.link} target='_blank'>
                        {education.subTitle}
                      </Link>
                    </h3>
                    <p>{education.description}</p>
                  </ListContent>
                </List>
              );
            })}
        </EducationList>

        <EducationImage>
          <Image
            className='education-logo'
            src='/education/education.svg'
            alt='menino no computador'
            width={500}
            height={500}
            property
          />

          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
          >
            {certificates &&
              certificates.map(certificate => {
                return (
                  <Image
                    width={500}
                    height={300}
                    property
                    className='carousel'
                    key={certificate.id}
                    src={certificate.image}
                    alt={certificate.name}
                  />
                );
              })}
          </Carousel>
        </EducationImage>
      </EducationContent>
    </ContainerEducation>
  );
}
