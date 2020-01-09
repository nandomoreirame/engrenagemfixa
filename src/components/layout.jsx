import React from 'react';
import Footer from './footer';
import Hero from './hero';
import Blank from './blank';
import defaultHero from '../../content/assets/default-hero.png';

export default ({ title, description, image, children }) => {
  return (
    <Blank>
      <Hero
        title={title}
        description={description}
        image={image || defaultHero}
      />
      <main>{children}</main>
      <Footer title={title} />
    </Blank>
  );
};
