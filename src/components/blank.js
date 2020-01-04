import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = css`
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
`;

export default ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    {children}
  </>
);
