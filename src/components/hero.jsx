import React from 'react';
import { Link } from 'gatsby';
import { HeroStyle, HeroTitleStyle } from '@styles';

export default ({ title, description, image, icon }) => {
  return (
    <HeroStyle
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-inner">
        <HeroTitleStyle>
          <Link to={`/`}>
            {icon && (
              <img src={icon} alt={`Ícone ${title}`} width={64} height={64} />
            )}{' '}
            {title}
          </Link>{' '}
          {description && <small>{description}</small>}
        </HeroTitleStyle>
      </div>
    </HeroStyle>
  );
};
