import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { rhythm, scale } from '../utils/typography';

const HeaderStyle = styled.header`
  padding: ${rhythm(1.5)} 0;

  h1 {
    margin: 0 auto;
    max-width: ${rhythm(24)};
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }
`;

export default ({ title }) => (
  <HeaderStyle>
    <h1 style={{ ...scale(1.1) }}>
      <Link to={`/`}>{title}</Link>
    </h1>
  </HeaderStyle>
);
