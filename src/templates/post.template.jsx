import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostNav from '../components/post-nav';
import Share from '../components/share';

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
    const __html = `${post.html} <p>🚴</p>`;

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
          <Share
            url={`${this.props.data.site.siteMetadata.siteUrl}${post.fields.slug}`}
            title={`${post.frontmatter.title}`}
          />
          <ContentStyle dangerouslySetInnerHTML={{ __html }} />
          <Share
            url={`${this.props.data.site.siteMetadata.siteUrl}${post.fields.slug}`}
            title={`${post.frontmatter.title}`}
          />
          <footer>
            <Bio />
            {(previous || next) && <PostNav previous={previous} next={next} />}
          </footer>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
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
        slug
        readingTime {
          words
        }
      }
    }
  }
`;
