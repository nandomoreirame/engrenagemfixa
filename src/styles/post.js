import styled from '@emotion/styled';

export const PostHeaderStyle = styled.header`
  background-color: #fff;
  padding: 1.2rem;
  margin-bottom: 2rem;

  h1 {
    margin: 0;
    font-size: 1.6rem;

    @media (min-width: 420px) {
      font-size: 2.4rem;
    }
  }

  em {
    font-size: 80%;
    color: rgba(0, 0, 0, 0.75);
  }

  > div {
    margin: 2rem auto;
    max-width: 769px;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
`;

export const PostContentStyle = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  table,
  header,
  footer {
    margin-left: auto;
    margin-right: auto;
    max-width: 769px;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  a.anchor.before {
    box-shadow: none;
    padding-right: 0;
  }

  .emoji-icon {
    display: inline;
    margin: 0;
    position: relative;
    top: 5px;
    width: 25px;
  }

  .gatsby-resp-image-figure {
    background-color: rgba(0, 0, 0, 0.05);
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    text-align: center;
  }

  .gatsby-resp-image-figcaption {
    display: block;
    padding: 5px 15px;
    font-style: italic;
    opacity: 0.75;
    font-size: 80%;
  }

  hr {
    border: none;
    display: block;
    width: 100px;
    height: 5px;
    margin: 2rem auto 0;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0.5;
  }

  ul,
  ol {
    padding-left: 2.4rem;
  }

  ul {
    list-style: none;

    li {
      &::before {
        content: '⏤ ';
      }
    }
  }
`;
