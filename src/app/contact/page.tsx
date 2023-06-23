/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { FaMap, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    if (username === '') {
      setErrMsg('Enter your Name');
    } else if (email === '') {
      setErrMsg('Enter your Email');
    } else if (message === '') {
      setErrMsg('Enter your Messages');
    } else {
      setSuccessMsg(
        `Hell dear ${username}, Thank you for your Messages. Additional Information will send to you shortly via your email at ${email}`
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-contact-image relative h-[800px] w-full bg-cover bg-fixed bg-no-repeat px-4 text-white"
    >
      <div className="h-full w-full bg-black bg-opacity-80 py-20">
        <div className="mx-auto flex h-full max-w-6xl flex-col gap-6 md:gap-12">
          <h1 className="text-center text-3xl font-thin uppercase tracking-widest">
            Olá seja bem vindo!
          </h1>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-designColor text-4xl" />
              <p className="text-sm tracking-wide">Brasília/DF</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-designColor text-4xl" />
              <p className="text-sm tracking-wide">((61) 98669-2775)</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-designColor text-4xl" />
              <p className="text-sm tracking-wide">contato@upexpert.com.br</p>
            </div>
          </div>

          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: 'easeIn' }}
              className="mx-auto flex h-full max-w-[600px] items-center justify-center px-4 text-lg font-semibold"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="flex w-full flex-col items-center gap-4 md:gap-10">
              <div className="flex w-full flex-col items-center gap-4 md:flex-row md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="focus-within:border-designColor w-full border-2 border-transparent px-4 py-2 text-base font-bold text-black outline-none duration-200 placeholder:font-normal placeholder:text-gray-600 md:w-1/2"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus-within:border-designColor w-full border-2 border-transparent px-4 py-2 text-base font-bold text-black outline-none duration-200 placeholder:font-normal placeholder:text-gray-600 md:w-1/2"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sua mensagem"
                className="focus-within:border-designColor h-36 w-full resize-none border-2 border-transparent p-4 text-base font-bold text-black outline-none duration-200 placeholder:font-normal placeholder:text-gray-600"
              ></textarea>
              {errMsg && (
                <p className="w-full bg-red-500 py-1 text-center text-base font-semibold tracking-wider">
                  {errMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="bg-designColor hover:border-designColor h-12 w-44 border-2 border-transparent text-base font-bold uppercase tracking-wide duration-300 hover:bg-black"
              >
                Envie agora
              </button>
            </form>
          )}
          <div className="flex w-full flex-col justify-between bg-black px-4 py-10 md:flex-row md:items-center">
            <div className="text-lg font-thin">
              <p>Para consultas de projetos</p>
              <p>
                ou diga olá' -{' '}
                <span className="text-designColor font-semibold">
                  contato@upexpert.com.br
                </span>
              </p>
            </div>
            <a href="https://upexpert.com.br/" target="_blank" rel="noreferrer">
              <p>© 2023 UP.EXPERT Todos Direitos Reservados.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
