import 'dotenv/config';
import { Article } from './src/types';

const getFormattedDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');

    return `${year}-${month}-00`;
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=frontend AND react&from=${getFormattedDate()}&sortBy=popularity&apiKey=${
                process.env.NEWS_API_KEY
            }&pageSize=10`
        );
        const { articles } = await response.json();

        articles.forEach((article: Article) => {
            const nodeData = {
                ...article,
                id: createNodeId(`news-article-${article.url}`),
                internal: {
                    type: 'NewsArticle',
                    contentDigest: createContentDigest(article),
                },
            };

            createNode(nodeData);
        });
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
};

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
