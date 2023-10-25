import Image from 'next/image';
import { BsFileText } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';

import Perfil from '../../../public/mkt-digital.webp';
import { ButtonSecondAlt, Container, Title } from '../../styles/styles';
import { CVContainer, CVContent, CVDescription, Curriculum } from './styles';

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title>
          Currículo
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className='aspas'>&ldquo;</div>
            <p>
              Aqui você pode baixar meu currículo clicando no botão de download.
            </p>
            <div className='profile'>
              <Image
                src={Perfil}
                alt='Imagem de perfil'
                width={500}
                height={500}
              />
              <div>
                <h3>Evander Inacio</h3>
                <span>Desenvolvedor Front end</span>
              </div>
            </div>
          </CVDescription>

          <Curriculum>
            <Image
              src='/cv.png'
              alt='Homem mostrando um botão de download de currículo'
              width={500}
              height={500}
            />
            <a href='/pdf/Evander-CV.pdf' download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  );
}
