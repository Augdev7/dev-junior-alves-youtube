/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import-helpers/order-imports */
'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player';

import { Footer } from '@/components/Footer';
import projects from '@/data/projects';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import {
  ProjectContainer,
  Banner,
  DescriptionProject,
  PrintContainer,
  Print,
  PrintContent,
  Gif,
  ContainerVideo,
  Video,
  Tags,
  TagsContent,
  TagsContainer
} from '@/style/project';
import { ButtonAlt, ButtonSecondary, Title, Description } from '@/style/styles';

import {
  ArrowLeft,
  ChatCenteredText,
  Image as IconImage,
  YoutubeLogo,
  Hash
} from 'phosphor-react';

import { FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

import { AllProjects } from '@/components/Projects/Github';

interface Tag {
  id: string;
  name: string;
  icon: string;
  color: string;
  rgb: string;
}

interface Print {
  id: string;
  img: string;
  name: string;
}

interface Project {
  icon: string;
  imgUrl: string;
  id: string;
  title: string;
  description: string;
  type: string;
  github: string;
  web: string;
  url: string;
  tags: Tag[];
  print: Print[];
  gif: string;
  year: string;
  status: string;
  video: string;
  backgroundImage: string;
}

interface ProjectProps {
  project: Project;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps = async (context: any) => {
  const { id } = context.params;

  const project = projects.map((project) => ({
    id: project.id,
    link: project.url,
    imgUrl: project.img,
    icon: project.icon,
    title: project.title,
    type: project.type,
    github: project.github,
    web: project.web,
    description: project.description,
    tags: project.tags,
    print: project.print,
    gif: project.gif,
    year: project.year,
    status: project.status,
    video: project.video,
    backgroundImage: project.backgroundImage
  }));

  const idProject = project.find((project) => project.link === id);

  return {
    props: {
      project: idProject || null
    }
  };
};

export default async function Projeto({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{project.title} | Evander Inácio </title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.imgUrl} />
        <meta property="og:image:secure_url" content={project.imgUrl} />
        <meta name="twitter:image" content={project.imgUrl} />
        <meta name="twitter:image:src" content={project.imgUrl} />
      </Head>

      <ProjectContainer>
        <Banner>
          <Image
            className="bannerUrl"
            src={project.imgUrl}
            alt={project.title}
          />
          <div className="bannerContainer">
            <div className="bannerContent">
              <Image src={project.icon} alt={project.title} />
              <div>
                <h1>{project.title}</h1>
                <p>{project.type}</p>
              </div>
            </div>

            <div className="link">
              <Link href={project.web} target="_blank">
                <ButtonAlt>
                  Projeto online <BsGlobe size={15} />
                </ButtonAlt>
              </Link>
              <Link href={project.github} target="_blank">
                <ButtonAlt>
                  Repositório <FaGithub size={17} />
                </ButtonAlt>
              </Link>
            </div>
          </div>
        </Banner>

        <DescriptionProject>
          <div className="description">
            <Title>
              Descrição
              <span>
                <ChatCenteredText /> Description
              </span>
            </Title>
            <p>{project.description}</p>
          </div>
        </DescriptionProject>

        <Tags>
          <Title>
            Tags
            <span>
              <Hash /> Skills
            </span>
          </Title>

          <Description>
            Tecnologias usadas no desenvolvimento do projeto.
          </Description>

          <TagsContainer>
            {project.tags &&
              project.tags.map((tag) => {
                return (
                  <TagsContent key={tag.id} color={tag.color}>
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${tag.rgb}, .1)`,
                        border: `1px solid ${tag.color}`
                      }}
                    >
                      <Image
                        src={tag.icon}
                        alt={tag.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3>{tag.name}</h3>
                  </TagsContent>
                );
              })}
          </TagsContainer>
        </Tags>

        <PrintContainer>
          <Title>
            Screenshot
            <span>
              <IconImage /> Screen
            </span>
          </Title>

          <PrintContent>
            <Gif>
              <h2>Detalhes</h2>
              <p>
                Nome: <span>{project.title}</span>
              </p>
              <p>
                Status: <span>{project.status}</span>
              </p>
              <p>
                Ano: <span>{project.year}</span>
              </p>
              <h5>Preview</h5>
              <Image
                width={500}
                height={300}
                src={project.gif}
                alt={project.title}
              />
            </Gif>

            <Print>
              {project.print &&
                project.print.map((print) => {
                  return (
                    <div className="print-list" key={print.id}>
                      <h3>{print.name}</h3>
                      <Image
                        width={800}
                        height={470}
                        src={print.img}
                        alt={print.name}
                      />
                    </div>
                  );
                })}
            </Print>
          </PrintContent>
        </PrintContainer>

        <ContainerVideo>
          <div className="imageVideo">
            <Image src={project.backgroundImage} alt={project.title} />
          </div>
          <Title className="title-video">
            Video
            <span>
              <YoutubeLogo /> Video
            </span>
            <Image className="vector" src="/vectors/youtube.svg" alt="" />
          </Title>
          <Video>
            <ReactPlayer
              url={project.video}
              width="100%"
              height="100%"
              controls={true}
              pip
              config={{ file: { forceHLS: true } }}
            />
          </Video>
        </ContainerVideo>

        <div className="allProjects">
          <AllProjects title={'Veja outros projetos'} />
        </div>
        <Link href={'/#projects'}>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: '-0.2rem' }}
                weight="bold"
                size={18}
              />{' '}
              Voltar
            </a>
          </ButtonSecondary>
        </Link>
      </ProjectContainer>

      <Footer />
    </>
  );
}
