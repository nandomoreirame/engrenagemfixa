import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';
import { CommentsStyle } from '@styles';

export default ({ identifier, title, url }) => {
  const disqusConfig = { url, identifier, title };

  return (
    <CommentsStyle>
      <div>
        <h3>Gostou? Comente!</h3>
        <Disqus config={disqusConfig} />
      </div>
    </CommentsStyle>
  );
};
