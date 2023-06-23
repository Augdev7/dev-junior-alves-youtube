'use client';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const Content = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0px 8%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
export const Text = styled.div`
  position: relative;
  top: -60px;
  z-index: 1;

  h3 {
    font-size: 20px;
    color: var(--primary-clr);
    opacity: 0.9;
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  h1 {
    position: relative;
    font-size: 45px;
    font-weight: 900;
    color: var(--primary-clr);
    margin: 12px 0px 25px;

    &:after {
      content: '';
      position: absolute;
      height: 3px;
      width: 40px;
      background-color: var(--primary-clr);
      left: 0;
      top: 110%;
    }
  }

  h2 {
    font-size: 50px;
    font-weight: bold;
  }
  span {
    color: #6e45e2 !important;
    background: linear-gradient(145deg, #6e45e2, #38f9d7);
    background: -webkit-linear-gradient(145deg, #6e45e2, #38f9d7);
    background: -moz-linear-gradient(145deg, #6e45e2, #38f9d7);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    max-width: 500px;
    color: var(--links-clr);
    margin: 15px 10px 35px;
    line-height: 1.2;
    bottom: 1rem;
  }
`;

export const HeroImg = styled.div`
  position: absolute;
  width: 50%;
  height: 900px;
  right: 5%;
  border-bottom-left-radius: 250px;
  border-bottom-right-radius: 250px;
  overflow: hidden;
  z-index: 0;

  img {
    display: none;
    position: absolute;
    object-fit: cover;
    bottom: 0px;
    @media (min-width: 994px) {
      display: block;
      position: relative;
      width: 32rem;
      -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
      animation: icon-move-people 5s ease 2s infinite alternate;

      @keyframes icon-move-people {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(30px, 60px, 0);
          transform: translate3d(-30px, -50px, 0);
        }
      }
    }
  }
`;

export const RightImg = styled.div`
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
  height: 580px;
  width: 510px;
  margin-top: 20%;

  img {
    position: absolute;
    top: 0;
    right: 10%;
    width: 510px;
  }
`;
export const BoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: -220px;
  left: 0;
  padding: 0px 8% 10px;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 2%;
  @media only screen and (max-width: 1024px),
    only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;
  }
`;
export const BoxItem = styled.div`
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    transform var(--e-transform-transition-duration, 0.4s);
  border: 2px solid #01d293;
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 10px 0px 10px 10px;
  transition: transform 250ms;

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #01d293;
    right: 50%;
    top: -21px;
  }

  &:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid white;
    right: 50%;
    top: -18px;
  }

  &:hover {
    background: #01d293;
    cursor: pointer;

    transform: translateY(-10px);
  }

  icon {
    display: inline-block;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  icon i {
    font-size: 3rem;
    color: #171f38;
  }

  career-desc {
    display: inline-block;
    color: #171f38;
  }

  span,
  h2,
  span i {
    background: transparent !important;
  }

  span i {
    font-size: 3rem;
    color: #01d293;
  }

  h2 {
    font-size: 20px;
    line-height: 1.4;
    color: #01d293;
  }

  &:hover h2 {
    font-size: 20px;
    line-height: 1.4;
    color: #171f38;
  }

  p {
    font-size: 14px;
    color: #171f38;
  }
`;
