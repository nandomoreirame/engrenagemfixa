import React from 'react';
import { Global } from '@emotion/core';
import { GlobalStyles } from '@styles';

export default ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    {children}
  </>
);
