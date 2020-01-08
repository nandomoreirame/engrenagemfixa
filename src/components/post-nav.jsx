import React from 'react';
import { Link } from 'gatsby';
import { PostNavStyle } from '@styles';

export default ({ previous, next }) => {
  return (
    <PostNavStyle>
      {previous && (
        <Link to={previous.frontmatter.slug} className="prev" rel="prev">
          <span>←</span> {previous.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.frontmatter.slug} className="next" rel="next">
          {next.frontmatter.title} <span>→</span>
        </Link>
      )}
    </PostNavStyle>
  );
};
