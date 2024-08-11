import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const Bio = () => {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        linkedin
                    }
                }
            }
        }
    `);
    const { author, social } = site.siteMetadata;

    return (
        <div className="flex align-top items-start">
            <StaticImage
                formats={['auto', 'webp', 'avif']}
                src="../images/profile-pic.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
                className="rounded-full shrink-0 mr-2"
            />
            {author.name && (
                <p>
                    Written by <strong>{author.name}</strong> {author.summary}
                    {` `}
                    <a href={`https://www.linkedin.com/in/${social.linkedin}`}>You should follow them on LinkedIn</a>
                </p>
            )}
        </div>
    );
};
