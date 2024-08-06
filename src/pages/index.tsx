import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
    return <Layout>1111</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="All posts" />;
