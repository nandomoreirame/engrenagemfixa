import React from 'react';
import { graphql } from 'gatsby';

import Bio from '@components/bio';
import Layout from '@components/layout';
import Article from '@components/article';
import SEO from '@components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const { title, description } = data.site.siteMetadata;

    return (
      <Layout title={title} description={description}>
        <SEO title={`${description}`} />
        <Bio />
        <section>
          {posts.map(({ node }) => (
            <Article key={node.fields.slug} post={node} />
          ))}
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
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
            readingTime {
              words
            }
          }
          frontmatter {
            slug
            date(locale: "pt-br", fromNow: true)
            title
            description
            cover {
              childImageSharp {
                sizes(maxWidth: 1024) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
