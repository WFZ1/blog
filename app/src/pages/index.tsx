import React from 'react';
import { graphql, type HeadFC, type PageProps, Link } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { Bio } from '../components/bio';

interface Post {
    id: string;
    excerpt: string;
    frontmatter: {
        date: string;
        path: string;
        title: string;
        description: string;
    };
}

interface DataProps {
    allMarkdownRemark: {
        nodes: Post[];
    };
}

const IndexPage = ({ data }: PageProps<DataProps>) => {
    const posts = data.allMarkdownRemark.nodes;

    if (posts.length === 0) {
        return (
            <Layout>
                <Bio />
                <p>No blog posts found</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <Bio />
            <ul className="mt-10 list-none">
                {posts.map((post) => {
                    return (
                        <li key={post.id} className="mb-10">
                            <article itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h2 className="text-sky-800 text-2xl">
                                        <Link to={post.frontmatter.path} itemProp="url">
                                            <span itemProp="headline">{post.frontmatter.title}</span>
                                        </Link>
                                    </h2>
                                    <small>{post.frontmatter.date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />
                                </section>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export const pageQuery = graphql`
    {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/src/blog-posts/" } }
            sort: { frontmatter: { date: DESC } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    path
                    title
                    description
                }
            }
        }
    }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo title="All posts" />;
