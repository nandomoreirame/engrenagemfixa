/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { BioStyle } from '@styles';

export default () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
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
  const age = currentYear - 1989;

  return (
    <BioStyle>
      <div>
        <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
        <p>
          Por <strong>{author}</strong>, {age} anos, pai, minimalista,
          programador e ciclista nas horas vagas.{' '}
          <strong>Siga no twitter:</strong> {` `}
          <a
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{social.twitter}
          </a>
        </p>
      </div>
    </BioStyle>
  );
};
