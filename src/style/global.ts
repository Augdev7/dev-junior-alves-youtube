'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html.normal-scroll {
  scroll-behavior: auto;
}

body {
  background: #020617;
  color: #d6d6dc;
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar{
  width: 0.5rem;
  background-color: #1e1e25;
}
::-webkit-scrollbar-thumb{
  border-radius: 0.5rem;
  background-color: #5252e0;
}
::-webkit-scrollbar-thumb:hover{
  background-color: rgb(80, 82, 224, 0.7);
}
`;
