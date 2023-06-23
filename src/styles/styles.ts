'use client';

import styled from 'styled-components';

export const Section = styled.section`
  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 5rem;
`;

export const Container = styled.section`
  padding-top: 2rem;

  padding-bottom: 2rem;

  display: inline-flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  width: 100%;
`;

export const Title = styled.h2`
  position: relative;

  font-size: 2.2rem;

  font-weight: 800;

  margin: 2rem 0;

  padding-top: 2.1rem;

  color: var(--first-color);

  z-index: 1;

  opacity: 1;

  @media (min-width: 994px) {
    font-size: 3.5rem;
  }

  span {
    z-index: -1;

    display: grid;

    grid-template-columns: 1fr 1fr;

    justify-content: center;

    align-items: center;

    position: absolute;

    top: 3px;

    left: 50%;

    right: 50%;

    color: var(--second-color);

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
`;

export const ButtonPrimary = styled.button`
  background-color: transparent;

  font-size: 1.1rem;

  font-weight: 600;

  color: var(--text-primary);

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

  border: 0.25em solid var(--first-color);

  padding: 1rem 2rem;

  color: var(--white);

  font-size: 1rem;

  font-weight: 700;

  background-color: transparent;

  border-radius: 1em;

  outline: none;

  box-shadow: 0 0 1em 0.25em var(--second-color),
    0 0 4em 1em var(--first-color) inset 0 0 0.75em 0.25em var(--second-color);

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

    background-color: var(--first-color);

    filter: blur(2em);

    opacity: 0.7;

    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    cursor: pointer;

    color: black;

    background-color: var(--white);

    box-shadow: 0 0 1em 0.25em var(--hover-color),
      0 0 4em 2em var(--hover-color), inset 0 0 0.75em 0.25em var(--white);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--hover-color),
      0 0 2.5em 2em var(--hover-color), inset 0 0 0.5em 0.25em var(--white);
  }

  [data-overlay-dark],
  [data-overlay-light] {
    position: relative;
  }

  [data-overlay-dark] .container,
  [data-overlay-light] .container {
    position: relative;

    z-index: 2;
  }

  [data-overlay-dark]:before,
  [data-overlay-light]:before {
    content: '';

    position: absolute;

    width: 100%;

    height: 100%;

    top: 0;

    left: 0;

    z-index: 1;
  }

  [data-overlay-dark]:before {
    background: #02050b;
  }

  [data-overlay-light]:before {
    background: #fff;
  }

  [data-overlay-dark] h1,
  [data-overlay-dark] h2,
  [data-overlay-dark] h3,
  [data-overlay-dark] h4,
  [data-overlay-dark] h5,
  [data-overlay-dark] h6,
  [data-overlay-dark] span,
  .bg-dark h1,
  .bg-dark h2,
  .bg-dark h3,
  .bg-dark h4,
  .bg-dark h5,
  .bg-dark h6,
  .bg-dark span,
  .bg-color h1,
  .bg-color h2,
  .bg-color h3,
  .bg-color h4,
  .bg-color h5,
  .bg-color h6,
  .bg-color span {
    color: #fff;
  }

  [data-overlay-dark] p,
  .bg-dark p,
  .bg-color p {
    color: #dad6d6;
  }

  [data-overlay-dark='0']:before,
  [data-overlay-light='0']:before {
    opacity: 0;
  }

  [data-overlay-dark='1']:before,
  [data-overlay-light='1']:before {
    opacity: 0.1;
  }

  [data-overlay-dark='2']:before,
  [data-overlay-light='2']:before {
    opacity: 0.2;
  }

  [data-overlay-dark='3']:before,
  [data-overlay-light='3']:before {
    opacity: 0.3;
  }

  [data-overlay-dark='4']:before,
  [data-overlay-light='4']:before {
    opacity: 0.4;
  }

  [data-overlay-dark='5']:before,
  [data-overlay-light='5']:before {
    opacity: 0.5;
  }

  [data-overlay-dark='6']:before,
  [data-overlay-light='6']:before {
    opacity: 0.6;
  }

  [data-overlay-dark='7']:before,
  [data-overlay-light='7']:before {
    opacity: 0.7;
  }

  [data-overlay-dark='8']:before,
  [data-overlay-light='8']:before {
    opacity: 0.8;
  }

  [data-overlay-dark='9']:before,
  [data-overlay-light='9']:before,
  [data-overlay-color='9']:before {
    opacity: 0.9;
  }

  [data-overlay-dark='10']:before,
  [data-overlay-light='10']:before {
    opacity: 1;
  }

  /* ====================== [ End Overlay ] ====================== */

  /* ====================== [ Start Heading ] ====================== */

  .sec-head {
    position: relative;

    margin: 0 auto 80px;
  }

  .sec-head h6 {
    color: #75dab4;

    font-weight: 300;

    font-size: 17px;

    text-transform: uppercase;

    letter-spacing: 14px;

    margin-bottom: 5px;
  }

  .sec-head h3 {
    font-size: 80px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 4px;

    text-shadow: 0 8px rgba(255, 255, 255, 0.05);
  }

  .sec-head .tbg {
    position: absolute;

    bottom: 0;

    left: 0;

    width: 100%;

    text-align: center;

    font-size: 10vw;

    font-weight: 700;

    color: transparent;

    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);

    opacity: 0.3;
  }

  .sec-head.tr-head {
    text-align: right;

    margin-bottom: 0;
  }

  .sec-head.tr-head .tbg {
    text-align: left;
  }

  .works-header {
    min-height: 100vh;
  }

  .works-header.hfixd {
    position: fixed;

    top: 0;

    left: 0;

    width: 100%;
  }

  .works-header .capt h4 {
    font-weight: 200;

    font-size: 24px;

    line-height: 1.8;
  }

  .works-header .capt h2 {
    font-size: 60px;

    letter-spacing: 2px;

    text-transform: uppercase;
  }

  .works-header .capt h2 span {
    display: block;

    font-size: 20px;

    font-weight: 300;

    text-transform: capitalize;

    color: #75dab4;
  }

  .works-header .capt .bactxt {
    font-size: 30vw;

    font-weight: bold;

    color: transparent;

    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);

    z-index: -1;

    position: absolute;

    width: 100%;

    height: 100%;

    left: 0;

    top: 0;

    text-align: center;
  }

  .static {
    position: static;
  }

  .main-content {
    background: #0c0f16;

    position: relative;

    z-index: 3;
  }
`;
