import React from 'react';
import Footer from './footer';
import Hero from './hero';
import Blank from './blank';
import defaultHero from '../../content/assets/default-hero.png';
import icon from '../../content/assets/icon.svg';

export default ({ title, description, image, children }) => {
  return (
    <Blank>
      <Hero
        title={title}
        description={description}
        image={image || defaultHero}
        icon={icon}
      />
      <main>{children}</main>
      <Footer title={title} />
    </Blank>
  );
};
