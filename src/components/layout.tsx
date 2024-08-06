import { graphql, useStaticQuery } from 'gatsby';
import { Footer } from './footer';
import { Header } from './header';
import React, { ReactNode } from 'react';

interface LayoutProps {
    pageTitle: string;
    children: ReactNode;
}

export const Layout = ({ pageTitle, children }: LayoutProps) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    const { title } = site.siteMetadata;

    return (
        <>
            <title>{`${title} | ${pageTitle}`}</title>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
