const { resolve, join } = require(`path`);
const srcPath = resolve(__dirname, '..', '..', 'src');
const templatesPath = resolve(srcPath, 'templates');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = join(templatesPath, `post.template.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const slug = post.node.frontmatter.slug || post.node.fields.slug;

    createPage({
      path: slug,
      component: blogPost,
      context: { slug, previous, next },
    });
  });
};
