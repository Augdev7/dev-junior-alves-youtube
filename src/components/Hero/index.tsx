/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import {
  WhatsappLogo,
  PaintBrush,
  PenNibStraight,
  Gauge,
  Storefront
} from 'phosphor-react';

import Bg from '/public/mkt-digital.webp';

import {
  Container,
  Content,
  Text,
  HeroImg,
  BoxContainer,
  BoxItem
} from './styles';

export function Hero() {
  return (
    <Container>
      <Content>
        <Text>
          <h3>A Publicidade Que Gera Resultados.</h3>
          <h1>
            Up. Expert <span>Agência</span>
          </h1>
          <h2>
            Full service
            <span>
              <Typewriter
                words={[
                  ' PUBLICIDADE.',
                  ' MÍDIA CONTEÚDO.',
                  ' PERFORMANCE.',
                  ' DADOS'
                ]}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            Desenvolvemos um plano claro com datas definidas, com o objetivo de
            entregar resultados financeiros para o seu negócio nas primeiras
            semanas.
          </p>
          <Link href='https://api.whatsapp.com/send?phone=5561986692775'>
            <button className='button i-button'>Entrar em contato</button>
          </Link>
        </Text>
      </Content>
      <HeroImg>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={Bg}
            alt='Hero image'
            placeholder='blur'
            width={700}
            height={475}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </HeroImg>
      <BoxContainer>
        <BoxItem>
          <span className='icon'>
            <Storefront size={84} color='#fdc50f' weight='fill' />
          </span>
          <span className='career-desc'>
            <h2>PUBLICIDADE</h2>
            <p>Elabore e surpreenda com essa energia que move o mercado.</p>
          </span>
        </BoxItem>
        <BoxItem>
          <span className='icon'>
            <PenNibStraight size={84} color='#fdc50f' weight='fill' />
          </span>
          <span className='career-desc'>
            <h2>MÍDIA CONTEÚDO</h2>
            <p>Conheça a ferramenta que irá crescer a sua produtividade</p>
          </span>
        </BoxItem>
        <BoxItem>
          <span className='icon'>
            <Gauge size={84} color='#fdc50f' weight='fill' />
          </span>
          <span className='career-desc'>
            <h2>PERFORMANCE</h2>
            <p>
              Priorize o seu propósito! Mantenha o foco e encontre a solução
            </p>
          </span>
        </BoxItem>
      </BoxContainer>
    </Container>
  );
}
