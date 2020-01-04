import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const ArticleStyle = styled.article`
  padding: 0 ${rhythm(3 / 4)};
  margin: 0 auto;
  max-width: ${rhythm(24)};
  text-align: center;

  h1,
  p {
    margin: 0;
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  small {
    font-style: italic;
    opacity: 0.75;
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    margin: ${rhythm(2.5)} auto;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0.5;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todos os posts" />
        <Bio />
        <section>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <ArticleStyle key={node.fields.slug}>
                <header>
                  <h1 style={{ ...scale(1 / 1.6) }}>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h1>
                  <small>Publicado {node.frontmatter.date}</small>
                </header>
                <p
                  style={{ ...scale(-0.8 / 5) }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </ArticleStyle>
            );
          })}
        </section>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", fromNow: true)
            title
            description
          }
        }
      }
    }
  }
`;
