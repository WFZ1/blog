import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author {
                            name
                        }
                        social {
                            github
                        }
                    }
                }
            }
        `
    );
    const { author, social } = site.siteMetadata;

    return (
        <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href={`https://github.com/${social.github}`}>{author.name}</a>, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    );
};
