'use client';

import styled from 'styled-components';

export const Scroll = styled.div`
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    background: #5252e0;
    padding: 0.5rem 0.7rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #eff0f7;
    z-index: 9;

    &:hover {
      background: rgb(80, 82, 224, 0.7);
    }
  }
`;
