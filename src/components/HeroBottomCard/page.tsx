'use client';
import { Typewriter } from 'react-simple-typewriter';
export function HeroBottomCard() {
  return (
    <>
      <div className='bg-neutral-900 p-4'>
        <span className='block text-center text-lg text-white'>
          Metodologia da agência de Marketing Digital{' '}
          <span className='bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500 bg-clip-text align-middle text-2xl font-black tracking-widest text-transparent'>
            <Typewriter
              words={[
                '  DIAGNÓSTICO,',
                ' PLANEJAMENTO,',
                ' PERSONA,',
                ' JORNADA DE COMPRA,',
                ' IMPLEMENTAÇÃO,',
                ' EXECUÇÃO,'
              ]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{' '}
          Teste nossos metodos.
        </span>
      </div>
    </>
  );
}
