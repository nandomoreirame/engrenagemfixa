import React from 'react';
import { Link } from 'gatsby';
import { PostNavStyle } from '@styles';

export default ({ previous, next }) => {
  return (
    <PostNavStyle>
      {previous && (
        <Link to={previous.fields.slug} className="prev" rel="prev">
          <span>←</span> {previous.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} className="next" rel="next">
          {next.frontmatter.title} <span>→</span>
        </Link>
      )}
    </PostNavStyle>
  );
};
