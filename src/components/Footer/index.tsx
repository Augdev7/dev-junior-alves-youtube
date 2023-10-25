import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Evander Inácio</h4>
      <div className='links'>
        <Link
          href={'https://github.com/EvanderInacio'}
          target='_blank'
          aria-label='Link para o Github'
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/evander-inacio/'}
          target='_blank'
          aria-label='Link para o Linkedin'
        >
          <FiLinkedin />
        </Link>
        <Link
          href={'https://api.whatsapp.com/send?phone=5511995085916'}
          target='_blank'
          aria-label='Link para entrar em contato via whatsapp'
        >
          <FaWhatsapp />
        </Link>
      </div>
    </FooterContainer>
  );
}
