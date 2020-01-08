import React from 'react';
import { graphql } from 'gatsby';

import Bio from '@components/bio';
import Layout from '@components/layout';
import SEO from '@components/seo';
import PostNav from '@components/post-nav';
import Share from '@components/share';
import { PostHeaderStyle, PostContentStyle } from '@styles';

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
          <PostHeaderStyle>
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
          </PostHeaderStyle>
          <Share
            url={`${this.props.data.site.siteMetadata.siteUrl}${post.fields.slug}`}
            title={`${post.frontmatter.title}`}
          />
          <PostContentStyle dangerouslySetInnerHTML={{ __html }} />
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
