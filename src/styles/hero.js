import styled from '@emotion/styled';

export const HeroStyle = styled.section`
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  height: 60vh;
  padding: 1.2rem;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(2, 0, 36, 0.65);
    content: '';
    z-index: 1;
  }

  @media (min-width: 420px) {
    background-attachment: fixed;
    height: 75vh;
    padding: 2rem 1.2rem;
  }

  .hero-inner {
    margin: 0 auto;
    max-width: 769px;
    position: relative;
    z-index: 2;
  }
`;

export const HeroTitleStyle = styled.h1`
  font-size: 1.4rem;
  margin: 0 0 1.4rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;

  @media (min-width: 420px) {
    font-size: 2.4rem;
    margin: 0;
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  small {
    text-transform: lowercase;
    display: block;
    font-size: 60%;
    opacity: 0.75;
    font-weight: 300;
    margin-top: 1rem;
  }
`;
