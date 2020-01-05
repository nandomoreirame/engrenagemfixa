import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Article from '../components/article';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout title={data.site.siteMetadata.title}>
        <SEO title="Todos os posts" />
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
            date(locale: "pt-br", fromNow: true)
            title
            description
          }
        }
      }
    }
  }
`;
