import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  margin: 0 auto;
  max-width: 769px;
  padding: 2rem 1.2rem;
  text-align: center;

  @media (min-width: 420px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }

  h1 {
    font-size: 1.4rem;
    margin: 0 0 1.4rem;

    @media (min-width: 420px) {
      font-size: 1.8rem;
      margin: 0;
    }

    a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`;

const NavStyle = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    font-size: 1rem;
    margin: 0 5px;
    padding: 0 4px;
  }
`;

export default ({ title }) => (
  <HeaderStyle>
    <h1>
      <Link to={`/`}>{title}</Link>
    </h1>
    <NavStyle>
      <a
        href={`https://strava.com/athletes/oseunando`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Strava
      </a>
      <a
        href={`https://twitter.com/oseunando`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </NavStyle>
  </HeaderStyle>
);
