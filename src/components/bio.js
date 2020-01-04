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

const BioStyle = styled.aside`
  margin: 2rem auto;
  max-width: 769px;
  padding: 1.2rem 0;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  > div {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    text-align: center;

    @media (min-width: 420px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
    }
  }

  p {
    margin: 0;
  }

  .gatsby-image-wrapper {
    margin-bottom: 0;
    min-width: 100px;
    border-radius: 100%;

    @media (min-width: 420px) {
      margin-right: 2rem;
    }

    img {
      border-radius: 50%;
    }
  }
`;

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
