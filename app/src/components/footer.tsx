import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            github
                        }
                    }
                }
            }
        `
    );
    const { social } = site.siteMetadata;

    return (
        <footer className="p-4 text-center">
            © {new Date().getFullYear()}
            {` `}
            <a href={`https://github.com/${social.github}`}>{social.github}</a>, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    );
};
