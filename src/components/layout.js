import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.1),
            borderBottom: `1px solid rgba(0, 0, 0, .1)`,
            marginBottom: rhythm(1.2),
            marginTop: 0,
            paddingBottom: rhythm(1.2),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            display: `flex`,
            marginTop: rhythm(1.2),
            paddingTop: rhythm(1.2),
            borderTop: `1px solid rgba(0, 0, 0, .1)`,
          }}
        >
          <p style={{ ...scale(-1 / 4), opacity: '0.65' }}>
            &copy;{new Date().getFullYear()}, by{' '}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              style={{ marginLeft: '5px' }}
            >
              nandomoreira.dev
            </a>
            , with{' '}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              style={{ marginLeft: '5px' }}
            >
              Gatsby
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Layout;
