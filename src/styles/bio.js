import styled from '@emotion/styled';

export const BioStyle = styled.aside`
  margin: 5rem /* 80/16 */ auto;
  max-width: 769px;
  /* padding: 1.2rem 0; */
  /* background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05); */

  > div {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    text-align: center;

    @media (min-width: 560px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
    }
  }

  h3,
  p {
    font-weight: 400;
    color: #393939;
    margin: 0 0 0.2rem;
  }

  h3 {
    line-height: 1.25;
    font-size: 1.75rem /* 28/16 */;
  }

  p {
    line-height: 1.75;
    font-size: 1rem;
  }

  .gatsby-image-wrapper {
    margin: 0 0 1.2rem;
    min-width: 260px;
    width: auto !important;

    @media (min-width: 560px) {
      margin: 0 5rem 0 0;
    }
  }
`;
