import React from 'react';
import Footer from './footer';
import Header from './header';
import Blank from './blank';

export default ({ title, children }) => (
  <Blank>
    <Header title={title} />
    <main>{children}</main>
    <Footer title={title} />
  </Blank>
);
