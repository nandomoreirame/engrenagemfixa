import { css } from '@emotion/core';
import externalLink from '@assets/external-link.svg';

export const GlobalStyles = css`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #f6f5f1;
  }

  a[target='_blank'] {
    &::after {
      background-size: 0.8rem;
      background: url("${externalLink}") no-repeat 50% 50%;
      content: '';
      display: inline-block;
      height: 0.8rem;
      margin-left: .3rem;
      opacity: .75;
      width: 0.8rem;
    }
  }
`;
