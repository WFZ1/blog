import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { Bio } from '../components/bio';

interface Post {
    excerpt: string;
    html: string;
    frontmatter: {
        date: string;
        title: string;
        description: string;
    };
}

interface DataProps {
    markdownRemark: Post;
}

const BlogPostTemplate = ({ data }: PageProps<DataProps>) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <article itemScope itemType="http://schema.org/Article">
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
                <hr className="m-8" />
                <footer>
                    <Bio />
                </footer>
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            excerpt(pruneLength: 160)
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
            }
        }
    }
`;

export default BlogPostTemplate;

export const Head = ({ data }: PageProps<DataProps>) => {
    const { markdownRemark: post } = data;

    return <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />;
};
