import styled from '@emotion/styled';

export const ShareStyles = styled.aside`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.2rem;
  text-align: center;

  > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  h3 {
    margin: 0 1.2rem 0 0;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 1rem;
  }

  button,
  svg {
    display: inline-block;
    line-height: 1;
    margin: 0;
  }

  button {
    appearance: none;
    width: 26px;
    height: 26px;
    transition: transform 0.12s ease-in-out;

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:hover,
    &:focus {
      transform: translate3d(0, -4px, 0) rotate(-7deg);
    }
  }
`;
