'use client';

import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #080d1f;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  .AboutImg {
    width: 10rem;
    display: flex;
    justify-self: center;
    align-self: center;
    border-radius: 5px;
    margin-bottom: 2rem;
  }

  .aboutContent {
    padding: 0 1rem;
    text-align: start;
    max-width: 31rem;

    h2 {
      color: #06b6d4;
    }

    p {
      color: #d6d6dc;
    }

    strong {
      color: #7b89a8;

      a {
        color: #b1bcdc;
        border-bottom: 1px solid #b1bcdc;

        &:hover {
          color: #22d3ee;
          border-bottom: 1px solid #22d3ee;
        }
      }
    }

    .aboutButton {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1.5rem;

      @media (max-width: 468px) {
        flex-direction: column;
      }
    }
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .AboutImg {
      width: 320px;
    }

    .aboutContent {
      width: 40rem;
      margin-bottom: 3rem;
      font-weight: 500;
      align-items: center;
    }
  }
`;
