import styled from '@emotion/styled';

export const BioStyle = styled.aside`
  margin: 2rem auto;
  max-width: 769px;
  padding: 1.2rem 0;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  > div {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    text-align: center;

    @media (min-width: 420px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
    }
  }

  p {
    margin: 0;
  }

  .gatsby-image-wrapper {
    margin-bottom: 0;
    min-width: 100px;
    border-radius: 100%;

    @media (min-width: 420px) {
      margin-right: 2rem;
    }

    img {
      border-radius: 50%;
    }
  }
`;
