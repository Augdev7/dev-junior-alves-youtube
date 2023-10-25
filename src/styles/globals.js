'use client';

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 25%;
    scroll-behavior: smooth;

  }
  body {
    font-family: "montserrat";
    font-size: 1.6rem;
    background: ##0F1624;
    color: hsl(204,23.8%,95.9%);
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: 'Montserrat, sans-serif';
  }
  a {
    text-decoration: none;
    color: #662d91;
  }
  li{
    list-style: none;
  }
  button {
  background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
  box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
  border-radius: 34px;
  border: none;
  color: var(--dark-navy);
  font-size: 16px;
  padding: 11px 26px 11px 26px;
  &:hover {
  background: white;
  cursor: pointer;
  border: 1px solid var(--orange);
  color: var(--dark-navy);
}
}

`;

export default GlobalStyles;
