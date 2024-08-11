import { Footer } from './footer';
import { Header } from './header';
import React, { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="flex-auto max-w-2xl px-5 my-5">{children}</main>
            <Footer />
        </>
    );
};
