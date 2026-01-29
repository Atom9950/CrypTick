'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if(!BASE_URL) throw new Error("COINGECKO_BASE_URL is not defined in environment variables");
if(!API_KEY) throw new Error("COINGECKO_API_KEY is not defined in environment variables");

export async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate = 60,
) : Promise<T> {
    const url = qs.stringifyUrl({
        url: `${BASE_URL}/${endpoint}`,
        query: params,

    }, {skipEmptyString: true, skipNull: true});

    const response = await fetch(url,{
        headers: {
            "x-cg-demo-api-key": API_KEY,
            "Content-Type": "application/json",
        } as Record<string, string>,
        next: {revalidate},
    });

    if(!response.ok) {
        const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));
        throw new Error(`APIError ${response.status}: ${errorBody.error || response.statusText}`);
    }

    return response.json();
}

export async function searchCoins(query: string): Promise<SearchCoin[]> {
    // Fetch 1: Search for coins by query
    const searchResults = await fetcher<{
        coins: Array<{
            id: string;
            name: string;
            symbol: string;
            thumb: string;
        }>;
    }>('search', { query }, 60);

    if (!searchResults.coins || searchResults.coins.length === 0) {
        return [];
    }

    // Get top 10 coin IDs from search results
    const coinIds = searchResults.coins.slice(0, 10).map((coin) => coin.id);

    // Fetch 2: Get market data for these coins
    const marketData = await fetcher<SearchCoin[]>('coins/markets', {
        ids: coinIds.join(','),
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        sparkline: false,
    }, 60);

    // Merge search results with market data
    return searchResults.coins.map((searchCoin) => {
        const market = marketData.find((m) => m.id === searchCoin.id);
        return {
            id: searchCoin.id,
            name: searchCoin.name,
            symbol: searchCoin.symbol,
            market_cap_rank: market?.market_cap_rank ?? null,
            thumb: searchCoin.thumb,
            large: market?.large ?? searchCoin.thumb,
            data: {
                price: market?.data?.price,
                price_change_percentage_24h: market?.data?.price_change_percentage_24h ?? 0,
            },
        };
    });
}