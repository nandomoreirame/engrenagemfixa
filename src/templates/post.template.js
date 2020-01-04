import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);

  a {
    background: #e9e9e9;
    border: none 0;
    box-shadow: none;
    color: inherit;
    display: block;
    position: relative;
    text-decoration: none;
    transition: transform 0.2s linear;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.8rem;

    span {
      display: inline-block;
      position: absolute;
    }

    &.next {
      padding-left: 50px;
      padding-right: 15px;
      transform: translate3d(85%, 0, 0);
      span {
        left: 10px;
      }
    }

    &.prev {
      padding-right: 50px;
      padding-left: 10px;
      transform: translate3d(-85%, 0, 0);
      span {
        right: 10px;
      }
    }

    &:hover,
    &:focus {
      &.next {
        padding-right: 50px;
        padding-left: 10px;
        transform: translate3d(0, 0, 0);
        span {
          left: auto;
          right: 15px;
        }
      }

      &.prev {
        padding-left: 50px;
        padding-right: 10px;
        transform: translate3d(0, 0, 0);
        span {
          right: auto;
          left: 15px;
        }
      }
    }
  }
`;

const ContentStyle = styled.section`
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
`;

const HeaderStyle = styled.header`
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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const minutes = post.timeToRead.toFixed();
    const { words } = post.fields.readingTime;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <HeaderStyle>
            <div>
              <h1>{post.frontmatter.title}</h1>
              <em>
                Publicado {post.frontmatter.date} | Tempo de leitura:{' '}
                <strong role="timer">
                  {minutes} minuto
                  {`${minutes > 1 ? 's' : ''}`}
                </strong>{' '}
                - {words} palavras.
              </em>
            </div>
          </HeaderStyle>
          <ContentStyle
            dangerouslySetInnerHTML={{
              __html: `${post.html} <p>🚴</p><hr />`,
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <NavStyle>
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
        </NavStyle>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(locale: "pt-br", fromNow: true)
        description
      }
      fields {
        readingTime {
          words
        }
      }
    }
  }
`;
