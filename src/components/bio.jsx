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
          title
          siteUrl
          author {
            name
            bio
            social {
              strava
              twitter
            }
          }
        }
      }
    }
  `);

  const { author, title, siteUrl } = data.site.siteMetadata;

  return (
    <BioStyle>
      <div itemScope itemType="http://schema.org/Person">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={`Foto de ${author.name} autor do blog ${title}`}
        />
        <div>
          <h3 itemProp="name">{author.name}</h3>
          <p>
            {author.bio}
            <meta itemProp="jobTitle" content="Programador" />
            <meta itemProp="worksFor" content="Onedev.studio" />
            <a
              href={`https://nandomoreira.dev/sobre?ref=${siteUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
            >
              ...
            </a>
          </p>
          <p>
            <strong>Twitter:</strong> {` `}
            <a
              href={`https://twitter.com/${author.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter.com/{author.social.twitter}
            </a>
          </p>
          <p>
            <strong>Strava:</strong> {` `}
            <a
              href={`https://strava.com/athletes/${author.social.strava}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              strava.com/athletes/{author.social.strava}
            </a>
          </p>
        </div>
      </div>
    </BioStyle>
  );
};
