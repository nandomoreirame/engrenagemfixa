/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const BioStyle = styled.aside`
  margin: 0 auto ${rhythm(1.2)};
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} 0;

  > div {
    display: flex;
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <BioStyle>
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 60,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p
          style={{
            margin: 0,
          }}
        >
          Por <strong>{author}</strong>, {currentYear - 1989} anos, pai,
          minimalista, programador e ciclista nas horas vagas.{' '}
          <strong>Siga no twitter:</strong> {` `}
          <a href={`https://twitter.com/${social.twitter}`}>
            @{social.twitter}
          </a>
        </p>
      </div>
    </BioStyle>
  );
};
