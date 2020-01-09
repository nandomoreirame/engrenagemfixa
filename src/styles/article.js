import styled from '@emotion/styled';

export const ArticleStyle = styled.article`
  padding: 2rem 0;
  margin: 2rem 0;

  .article-title {
    font-size: 1.4rem;
    margin: 0 0 2rem;

    @media (min-width: 420px) {
      font-size: 2rem;
    }
  }

  .article-title,
  .article-meta,
  .article-description,
  .article-image,
  .gatsby-image-wrapper {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .article-title,
  .article-meta,
  .article-description {
    max-width: 769px;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .article-image,
  .gatsby-image-wrapper {
    margin-bottom: 2rem;
    max-width: 1024px;
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  .article-meta {
    font-size: 80%;
    color: rgba(0, 0, 0, 0.75);
  }

  .article-description {
    color: #393939;
    line-height: 2.19;
    font-size: 16px;
    font-weight: 400;
  }
`;
