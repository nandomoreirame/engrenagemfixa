import React from 'react';
import { graphql } from 'gatsby';

import Bio from '@components/bio';
import Layout from '@components/layout';
import SEO from '@components/seo';
import PostNav from '@components/post-nav';
import Share from '@components/share';
import Disqus from '@components/comments';
import { PostHeaderStyle, PostContentStyle } from '@styles';

class BlogPostTemplate extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { siteMetadata } = this.props.data.site;
    const { previous, next } = this.props.pageContext;
    const {
      title,
      slug,
      description,
      date,
      comments,
    } = markdownRemark.frontmatter;
    const minutes = markdownRemark.timeToRead.toFixed();
    const { words } = markdownRemark.fields.readingTime;
    const __html = markdownRemark.html;

    return (
      <Layout location={this.props.location} title={siteMetadata.title}>
        <SEO
          title={title}
          description={description || markdownRemark.excerpt}
        />
        <article>
          <PostHeaderStyle>
            <div>
              <h1>{title}</h1>
              <em>
                Publicado {date} | Tempo de leitura:{' '}
                <strong role="timer">
                  {minutes} minuto
                  {`${minutes > 1 ? 's' : ''}`}
                </strong>{' '}
                - {words} palavras.
              </em>
            </div>
          </PostHeaderStyle>
          <Share url={`${siteMetadata.siteUrl}/${slug}`} title={title} />
          <PostContentStyle dangerouslySetInnerHTML={{ __html }} />
          <Share url={`${siteMetadata.siteUrl}/${slug}`} title={title} />
          <footer>
            <Bio />
            {(previous || next) && <PostNav previous={previous} next={next} />}
            {comments && (
              <Disqus
                url={`${siteMetadata.siteUrl}/${slug}`}
                identifier={slug}
                title={title}
              />
            )}
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
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        slug
        title
        date(locale: "pt-br", fromNow: true)
        description
        comments
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
