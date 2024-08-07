import React from 'react';
import { Link, HeadFC, graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

interface ArticleSource {
    id: string;
    name: string;
}

interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

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
            <ul style={{ listStyle: 'none' }}>
                {articles.map((article) => {
                    return (
                        <li key={article.url}>
                            <article itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h2>
                                        <Link to={article.url} itemProp="url">
                                            <span itemProp="headline">{article.title}</span>
                                        </Link>
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
