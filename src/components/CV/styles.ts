'use client';

import styled from 'styled-components';

export const CVContainer = styled.div`
  background: #080d1f;
  border: 1px solid #262338;
  border-radius: 10px;
  text-align: center;
`;

export const CVContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #030712;
  border-radius: 10px;
  padding: 1rem;

  @media (min-width: 468px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    padding: 2rem 4rem;
  }
`;

export const CVDescription = styled.div`
  background: #080d1f;
  border-radius: 5px;
  padding: 1rem;
  position: relative;

  @media (min-width: 994px) {
    margin-bottom: 3rem;
  }

  .aspas {
    position: absolute;
    font-size: 3.5rem;
    color: rgb(80, 82, 224, 0.7);
  }

  p {
    max-width: 20rem;
    font-size: 1.1rem;
    margin-top: 2.8rem;
    margin-bottom: 2.2rem;
    color: #b1bcdc;

    @media (min-width: 994px) {
      font-size: 1.3rem;
    }
  }

  .profile {
    display: flex;
    gap: 0.8rem;

    h3 {
      font-size: 1.4rem;
      color: #00d9ff;
    }

    span {
      font-size: 0.9rem;
      color: #5252e0;
    }

    img {
      width: 3.5rem;
      border-radius: 100%;
    }
  }
`;

export const Curriculum = styled.div`
  background: #080d1f;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

  img {
    @media (max-width: 380px) {
      display: none;
    }

    width: 5rem;

    @media (min-width: 768px) {
      width: 8rem;
    }

    @media (min-width: 994px) {
      width: 15rem;
    }
  }

  a {
    @media (min-width: 994px) {
      margin-top: 3rem;
    }
  }
`;
