import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { ArticleStyle } from '@styles';

export default ({ post }) => {
  const { title, slug, description, date, cover } = post.frontmatter;
  const minutes = post.timeToRead.toFixed();
  const { words } = post.fields.readingTime;

  return (
    <ArticleStyle key={slug}>
      <h1 className="article-title">
        <Link to={`/${slug}`} title={title}>
          {title || post.fields.slug}
        </Link>
      </h1>
      {!!cover ? (
        <Link className="article-image" to={`/${slug}`} title={title}>
          <Img
            sizes={cover.childImageSharp.sizes}
            alt={title || post.fields.slug}
          />
        </Link>
      ) : null}
      <em className="article-meta">
        Publicado {date} | {minutes} minuto
        {`${minutes > 1 ? 's' : ''}`} de leitura - {words} palavras.
      </em>
      <p
        className="article-description"
        dangerouslySetInnerHTML={{
          __html: description || post.excerpt,
        }}
      />
    </ArticleStyle>
  );
};
