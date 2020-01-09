import React from 'react';
import { Link } from 'gatsby';
import { NavStyle, NavLinkStyle } from '@styles';

export default ({ title }) => (
  <NavStyle>
    <NavLinkStyle
      href={`https://strava.com/athletes/oseunando`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Strava
    </NavLinkStyle>
    <NavLinkStyle
      href={`https://twitter.com/oseunando`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </NavLinkStyle>
  </NavStyle>
);
