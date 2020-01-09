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
      cover,
    } = markdownRemark.frontmatter;
    const minutes = markdownRemark.timeToRead.toFixed();
    const { words } = markdownRemark.fields.readingTime;
    const __html = markdownRemark.html;
    const __excerpt = markdownRemark.excerpt;
    return (
      <Layout
        title={siteMetadata.title}
        description={siteMetadata.description}
        image={cover.childImageSharp.sizes.src}
      >
        <SEO title={title} description={description || __excerpt} />
        <article>
          <PostHeaderStyle>
            <div>
              <h1>{title}</h1>
              <em>
                Publicado {date} | {minutes} minuto
                {`${minutes > 1 ? 's' : ''}`} de leitura - {words} palavras.
              </em>
            </div>
          </PostHeaderStyle>
          <Share url={`${siteMetadata.siteUrl}/${slug}`} title={title} />
          <PostContentStyle dangerouslySetInnerHTML={{ __html }} />
          <Share url={`${siteMetadata.siteUrl}/${slug}`} title={title} />
          <footer>
            <Bio />
            {(previous || next) && <PostNav previous={previous} next={next} />}
            {!!comments && (
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
        description
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
        cover {
          childImageSharp {
            sizes(maxWidth: 1024) {
              ...GatsbyImageSharpSizes
            }
          }
        }
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
