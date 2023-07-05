import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

import projects from '../../data/projects';
import { Container, Title } from '../../styles/styles';
import { AllProjects } from './Github';
import { ProjectsContainer, ProjectsContent } from './styles';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export function Projects() {
  return (
    <Container id='projects'>
      <Title>
        Projetos
        <span>
          <HiOutlineDesktopComputer /> Projects
        </span>
        <Image className='vector' src='/vectors/code.svg' alt='' />
      </Title>
      <ProjectsContainer>
        {projects.slice(0, 9).map(project => {
          return (
            <Link href={`/project/${project.url}`} key={project.id}>
              <ProjectsContent>
                <Image
                  width={400}
                  height={210}
                  src={project.img}
                  alt={project.title}
                />
                <div className='title'>
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                  <div className='tags'>
                    {project.tags.map(tag => {
                      return (
                        <Image
                          width={32}
                          height={32}
                          key={tag.name}
                          src={tag.icon}
                          alt={tag.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </ProjectsContent>
            </Link>
          );
        })}
      </ProjectsContainer>

      <AllProjects title={'Todos os projetos'} />
    </Container>
  );
}
