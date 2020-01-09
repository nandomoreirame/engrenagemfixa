import React from 'react';
import { Link } from 'gatsby';
import { HeroStyle, HeroTitleStyle } from '@styles';

export default ({ title, description, image }) => {
  return (
    <HeroStyle
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-inner">
        <HeroTitleStyle>
          <Link to={`/`}>{title}</Link>{' '}
          {description && <small>{description}</small>}
        </HeroTitleStyle>
      </div>
    </HeroStyle>
  );
};
