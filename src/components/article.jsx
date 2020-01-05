import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const ArticleStyle = styled.article`
  padding: 1.2rem;
  margin: auto;
  max-width: 769px;
  text-align: center;

  h1 {
    font-size: 1.4rem;

    @media (min-width: 420px) {
      font-size: 2rem;
    }
  }

  h1,
  p {
    margin: 0;
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  em {
    font-size: 80%;
    color: rgba(0, 0, 0, 0.75);
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    margin: 2rem auto;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0.5;
  }
`;

export default ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  const minutes = post.timeToRead.toFixed();
  const { words } = post.fields.readingTime;

  return (
    <ArticleStyle key={post.fields.slug}>
      <header>
        <h1>
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            {title}
          </Link>
        </h1>
        <em>
          Publicado {post.frontmatter.date} | Tempo de leitura:{' '}
          <strong role="timer">
            {minutes} minuto
            {`${minutes > 1 ? 's' : ''}`}
          </strong>{' '}
          - {words} palavras.
        </em>
      </header>
      <p
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description || post.excerpt,
        }}
      />
    </ArticleStyle>
  );
};
