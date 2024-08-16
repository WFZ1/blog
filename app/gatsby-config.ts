import 'dotenv/config';
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Blog`,
        description: `Blog about software engineering`,
        author: {
            name: `Pavlo Skumenko`,
            summary: `who lives and works in Ukraine building useful things.`,
        },
        social: {
            x: 'Pa7sha',
            github: 'WFZ1',
            linkedin: 'pavlo-skumenko',
        },
        icon: 'favicon.png',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blog-posts',
                path: `${__dirname}/src/blog-posts/`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 700,
                        },
                    },
                    `gatsby-remark-prismjs`,
                ],
            },
        },
    ],
};

export default config;
