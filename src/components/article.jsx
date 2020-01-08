import React from 'react';
import { Link } from 'gatsby';
import { ArticleStyle } from '@styles';

export default ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  const minutes = post.timeToRead.toFixed();
  const { words } = post.fields.readingTime;

  return (
    <ArticleStyle key={post.frontmatter.slug}>
      <header>
        <h1>
          <Link style={{ boxShadow: `none` }} to={post.frontmatter.slug}>
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
