import styled from '@emotion/styled';

export const ShareStyles = styled.aside`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.2rem;
  text-align: center;

  > div {
    @media (min-width: 790px) {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }

  h3 {
    margin: 0 0 1rem 0;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.8rem;

    @media (min-width: 790px) {
      margin: 0 1.2rem 0 0;
      font-size: 1rem;
    }
  }

  button,
  svg {
    display: inline-block;
    line-height: 1;
    margin: 0;
    width: 42px;
    height: 42px;

    @media (min-width: 790px) {
      width: 28px;
      height: 28px;
    }
  }

  button {
    appearance: none;

    &:not(:last-child) {
      margin-right: 5px;
    }

    @media (min-width: 790px) {
      transition: transform 0.12s ease-in-out;

      &:hover,
      &:focus {
        transform: translate3d(0, -4px, 0) scale(1.1);
      }
    }
  }
`;
