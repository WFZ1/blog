import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `
    );
    const { author } = site.siteMetadata;

    return (
        <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href={`https://github.com/${author}`}>{author}</a>, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    );
};
