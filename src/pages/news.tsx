import React from 'react';
import { HeadFC, graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { Article } from '../types';

interface DataProps {
    allNewsArticle: {
        nodes: Article[];
    };
}

const NewsPage = ({ data }: PageProps<DataProps>) => {
    const articles = data.allNewsArticle.nodes;

    if (articles.length === 0) {
        return (
            <Layout>
                <p>No articles found</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <ul className="list-none">
                {articles.map((article) => {
                    return (
                        <li key={article.url} className="mb-10">
                            <article itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h2 className="text-sky-800 font-medium text-2xl">
                                        <a href={article.url}>{article.title}</a>
                                    </h2>
                                    <small>{article.publishedAt}</small>
                                </header>
                                <section>
                                    <p itemProp="description">{article.description || article.content}</p>
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
        allNewsArticle {
            nodes {
                author
                title
                description
                url
                publishedAt
                content
            }
        }
    }
`;

export default NewsPage;

export const Head: HeadFC = () => <Seo title="News" />;
