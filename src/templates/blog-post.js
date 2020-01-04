import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

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
    max-width: ${rhythm(24)};
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};
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
    margin: ${rhythm(2.5)} auto 0;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0.5;
  }
`;

const HeaderStyle = styled.header`
  margin-bottom: ${rhythm(1.2)};

  h1 {
    margin: 0;
  }

  > div {
    margin: ${rhythm(1.2)} auto;
    max-width: ${rhythm(24)};
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};

    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 5px;
      margin: ${rhythm(2.5)} auto 0;
      background: rgba(0, 0, 0, 0.15);
      opacity: 0.5;
    }
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

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
              <em
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  margin: 0,
                }}
              >
                Publicado {post.frontmatter.date}
              </em>
            </div>
          </HeaderStyle>
          <ContentStyle
            dangerouslySetInnerHTML={{ __html: `${post.html} <p>🚴🏼‍♀️</p><hr />` }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
      frontmatter {
        title
        date(locale: "pt-br", fromNow: true)
        description
      }
    }
  }
`;
