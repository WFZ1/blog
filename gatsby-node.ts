/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "src/blog-posts" instead of returning an error
    createTypes(`
      type SiteSiteMetadata {
        title: String
        description: String
        author: Author
        social: Social
        icon: String
      }

      type Author {
        name: String
        summary: String
      }

      type Social {
        x: String
        github: String
        linkedin: String
      }

      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fileAbsolutePath: String
      }

      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
        path: String
      }   
  `);
};
