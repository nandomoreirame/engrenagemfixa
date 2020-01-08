import styled from '@emotion/styled';

export const ArticleStyle = styled.article`
  padding: 1.2rem;
  margin: auto;
  max-width: 769px;
  text-align: center;

  h1 {
    font-size: 1.4rem;

    @media (min-width: 420px) {
      font-size: 2rem;
    }
  }

  h1,
  p {
    margin: 0;
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  em {
    font-size: 80%;
    color: rgba(0, 0, 0, 0.75);
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    margin: 2rem auto;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0.5;
  }
`;
