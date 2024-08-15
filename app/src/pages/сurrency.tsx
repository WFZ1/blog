import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { HeadFC } from 'gatsby';

interface Coin {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    last_updated: string;
    price_change_percentage_24h: number;
}

interface CurrencyPageProps {
    serverData: {
        coins: Coin[];
        error: string | null;
    };
}

const CurrencyPage = ({ serverData }: CurrencyPageProps) => {
    const { coins, error } = serverData;

    if (error) {
        return (
            <Layout>
                <p>{error}</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <ul className="list-none">
                {coins.map((coin) => (
                    <li key={coin.id} className="mb-8">
                        <h4 className="text-sky-800 text-xl">{coin.name}</h4>
                        <p>
                            <strong className="mr-2">${coin.current_price.toFixed(2)}</strong>{' '}
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export const getServerData = async () => {
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        );

        if (!response.ok) {
            throw Error("You've exceeded the Rate Limit. Please update page after a minute");
        }

        const data = await response.json();

        return {
            props: {
                coins: data || [],
            },
        };
    } catch (error: unknown) {
        return {
            props: {
                coins: [],
                error: (error as { message: string }).message,
            },
        };
    }
};

export default CurrencyPage;

export const Head: HeadFC = () => <Seo title="Currency" />;
