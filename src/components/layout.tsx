import { graphql, useStaticQuery } from 'gatsby';
import { Footer } from './footer';
import { Header } from './header';
import React, { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
