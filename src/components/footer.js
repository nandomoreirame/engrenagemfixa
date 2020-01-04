import React from 'react';
import styled from '@emotion/styled';
import { rhythm, scale } from '../utils/typography';

const FooterStyle = styled.footer`
  padding: ${rhythm(1.2)} 0;

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: ${rhythm(24)};
    margin: 0 auto;
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};
  }

  p {
    opacity: 0.6;
    margin: 0;
  }

  a {
    margin-left: 5px;
  }
`;

export default () => (
  <FooterStyle>
    <div>
      <p style={{ ...scale(-1 / 3) }}>
        &copy;{new Date().getFullYear()}, by{' '}
        <a
          href="https://nandomoreira.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          nandomoreira.dev
        </a>
        .
      </p>
      <p style={{ ...scale(-1 / 3) }}>
        Made with ❤ and{' '}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </p>
    </div>
  </FooterStyle>
);
