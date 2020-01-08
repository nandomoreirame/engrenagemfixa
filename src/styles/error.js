import styled from '@emotion/styled';

export const ErrorStyle = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  h1 {
    margin: 0;
    font-size: 3rem;

    @media (min-width: 420px) {
      font-size: 6.3rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 300;

    @media (min-width: 420px) {
      font-size: 1.2rem;
    }
  }
`;
