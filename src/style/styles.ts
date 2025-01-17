'use client';

import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Container = styled.section`
  padding-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 2rem 0;
  padding-top: 2.1rem;
  color: #00d9ff;
  z-index: 1;
  opacity: 1;

  @media (min-width: 994px) {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.5rem;
    position: absolute;
    text-align: center;
    top: -2rem;
    color: #5252e0;
  }

  span {
    z-index: -1;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 50%;
    right: 50%;
    color: #5252e0;
    opacity: 0.2;
    font-weight: 800;
    font-size: 2.6rem;

    @media (min-width: 370px) {
      top: -0.8rem;
      font-size: 3rem;
    }

    @media (min-width: 994px) {
      top: -0.8rem;
      font-size: 4.5rem;
    }
  }

  .vector {
    position: absolute;
    width: 2rem;
    bottom: 5rem;
    z-index: -10;

    animation: bounce 1s infinite;

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    @media (min-width: 468px) {
      bottom: 7rem;
      width: 3rem;
    }

    @media (min-width: 944px) {
      width: 5rem;
    }

    @media (min-width: 1300px) {
      width: 8rem;
      bottom: 7.5rem;
    }
  }
`;

export const Description = styled.h4`
  margin-top: -5rem;
  margin-bottom: 3rem;
  max-width: 35rem;
  text-align: start;
  padding: 0 1rem;
  color: #b1bcdc;
`;

export const Button = styled.button`
  background: #5252e0;
  color: #eff0f7;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  gap: 0.4rem;

  &:hover {
    background: rgb(80, 82, 224, 0.7);
  }
`;

export const ButtonPrimary = styled.button`
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 600;
  color: #d6d6dc;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 2rem;
  border: 2px solid;
  border-radius: 5px;
  border-image: linear-gradient(225deg, #00d9ff 0%, #c001fa 100%) 1;
  display: block;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scale(0);
  }

  &:hover {
    color: rgb(15, 10, 10);
    &:before {
      transform: scale(1);
      background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    }
  }

  .btn {
    &::before {
      transform: scaleX(0);
    }

    &:hover {
      color: black;
      &:before {
        transform: scaleX(1);
        background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
      }
    }
  }
`;

export const ButtonSecondary = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin: 50px auto;
  border: 0.25em solid #00d9ff;
  padding: 1rem 2rem;
  color: #eff0f7;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em #5252e0,
    0 0 4em 1em #00d9ff inset 0 0 0.75em 0.25em #5252e0;
  position: relative;
  transition: all 0.3s;

  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00d9ff;
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #f6f2f2;
    box-shadow: 0 0 1em 0.25em rgb(0, 217, 255, 0.7),
      0 0 4em 2em rgb(0, 217, 255, 0.7), inset 0 0 0.75em 0.25em #f6f2f2;
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em rgb(0, 217, 255, 0.7),
      0 0 2.5em 2em rgb(0, 217, 255, 0.7), inset 0 0 0.5em 0.25em #f6f2f2;
  }
`;

export const ButtonAlt = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 7px;
  cursor: pointer;
  border: 0.25em solid #5252e0;
  padding: 1rem 2rem;
  color: #eff0f7;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border-radius: 1em;
  outline: none;
  position: relative;
  transition: all 0.3s;

  &:hover {
    color: black;
    background-color: #f6f2f2;
    box-shadow: 0 0 1em 0.25em rgb(80, 82, 224, 0.7),
      0 0 4em 2em rgb(80, 82, 224, 0.7), inset 0 0 0.75em 0.25em #f6f2f2;
  }
`;

export const ButtonSecondAlt = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  gap: 5px;
  background: transparent;
  border: 0.25em solid #00d9ff;
  border-radius: 10px;
  color: #f6f2f2;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #00d9ff;
  }
`;

export const ButtonAlternatives = styled.button`
  border: none;
  background: transparent;
  color: #b1bcdc;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: #00d9ff;
  }
`;
