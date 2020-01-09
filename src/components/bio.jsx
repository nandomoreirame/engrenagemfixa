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
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
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
        <div>
          <h3>{author}</h3>
          <p>
            {age} anos, pai, minimalista, programador não por formação mas por
            vocação, piadista e ciclista nas horas vagas
            <a
              href={`https://nandomoreira.dev/sobre`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ...
            </a>
          </p>
          <p>
            <strong>Twitter:</strong> {` `}
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{social.twitter}
            </a>
          </p>
          <p>
            <strong>Strava:</strong> {` `}
            <a
              href={`https://strava.com/athletes/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{social.twitter}
            </a>
          </p>
        </div>
      </div>
    </BioStyle>
  );
};
