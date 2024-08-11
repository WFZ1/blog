import React, { PropsWithChildren } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.png';

interface SeoProps extends PropsWithChildren {
    description?: string;
    title: string;
}

export const Seo = ({ description, title, children }: SeoProps) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        icon
                        social {
                            x
                        }
                    }
                }
            }
        `
    );

    const defaultTitle = site.siteMetadata.title;
    const metaTitle = defaultTitle ? `${title} | ${defaultTitle}` : title;
    const metaDescription = description || site.siteMetadata.description;

    return (
        <>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="icon" href={favicon} type="image/png" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={site.siteMetadata.social.x} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            {children}
        </>
    );
};
