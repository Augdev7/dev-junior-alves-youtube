/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

import { Envelope, TelegramLogo } from 'phosphor-react';

import { Container, Description, Section, Title } from '../../style/styles';
import { Form } from './Form';
import { ContainerContact, ContactContent } from './styles';

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contato
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        Estou sempre aberto a novas oportunidades de trabalho ou colaborando em
        alguns novos projetos incríveis. Basta preencher o formulário que
        retornarei 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className='contact-content'>
            <h4>
              <BsWhatsapp size={22} color='#00fffb' /> WhatsApp{' '}
            </h4>
            <Link
              href='https://api.whatsapp.com/send?phone=5561986692775'
              target='_blank'
            >
              <span>+55 11 99508-5916</span>
            </Link>
          </div>

          <div className='contact-content'>
            <h4>
              {' '}
              <TelegramLogo size={22} color='#00fffb' /> Email{' '}
            </h4>
            <Link href='mailto:contato@upexpert.com.br' target='_blank'>
              <span>contato@upexpert.com.br</span>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  );
}
