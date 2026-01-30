'use server';

import { fetcher } from '@/lib/coingecko.actions';
import CoinDetailsHeader from '@/components/coins/CoinDetailsHeader';
import CoinDetailsConverter from '@/components/coins/CoinDetailsConverter';
import TrendOverviewSection from '@/components/coins/TrendOverviewSection';
import MarketDataCards from '@/components/coins/MarketDataCards';
import SimilarCoinsSection from '@/components/coins/SimilarCoinsSection';
import RecentTradesSection from '@/components/coins/RecentTradesSection';
import OrderBookSection from '@/components/coins/OrderBookSection';

export async function generateMetadata({ params }: NextPageProps) {
  const { id } = await params;
  try {
    const coin = await fetcher<CoinDetailsData>(`/coins/${id}`, {
      localization: false,
      tickers: true,
      market_data: true,
      community_data: false,
      developer_data: false,
    });
    return {
      title: `${coin.name} (${coin.symbol.toUpperCase()}) - CrypTick`,
      description: coin.description.en || `${coin.name} cryptocurrency price and market data`,
    };
  } catch {
    return {
      title: 'Coin Details - CrypTick',
    };
  }
}

export default async function CoinDetailsPage({ params }: NextPageProps) {
  const { id } = await params;

  try {
    // Fetch coin details
    const coinData = await fetcher<CoinDetailsData>(`/coins/${id}`, {
      localization: false,
      tickers: true,
      market_data: true,
      community_data: false,
      developer_data: false,
    });

    // Fetch historical price data for chart (initial - 1 day)
    const ohlcData = await fetcher<OHLCData[]>(`/coins/${id}/ohlc`, {
      vs_currency: 'usd',
      days: 1,
      precision: 'full',
    });

    // Fetch similar coins for recommendation section
    const similarCoins = await fetcher<CoinMarketData[]>(`/coins/markets`, {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      sparkline: false,
      price_change_percentage: '24h',
    }).then(coins => coins.filter(coin => coin.id !== id).slice(0, 5));

    return (
      <main className="main-container flex flex-col gap-4 lg:gap-6">
        {/* Top section: Header + Converter (Left) and Chart (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Left Column: Header and Converter */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            <CoinDetailsHeader
              name={coinData.name}
              symbol={coinData.symbol.toUpperCase()}
              image={coinData.image.large}
              currentPrice={coinData.market_data.current_price.usd}
              priceChange24h={coinData.market_data.price_change_percentage_24h_in_currency.usd}
              marketCapRank={coinData.market_cap_rank}
            />

            <CoinDetailsConverter
              symbol={coinData.symbol.toUpperCase()}
              icon={coinData.image.large}
              priceList={coinData.market_data.current_price}
            />
          </div>

          {/* Right Column: Chart */}
          <div className="lg:col-span-2">
            <TrendOverviewSection
              coinId={id}
              coinData={coinData}
              initialOHLCData={ohlcData}
            />
          </div>
        </div>

        {/* Similar Coins: Full Width */}
        <SimilarCoinsSection coins={similarCoins} />

        {/* Market Data Cards: Full Width */}
        <MarketDataCards
          marketCap={coinData.market_data.market_cap.usd}
          volume24h={coinData.market_data.total_volume.usd}
          marketCapRank={coinData.market_cap_rank}
          website={coinData.links.homepage[0]}
          explorer={coinData.links.blockchain_site[0]}
          community={coinData.links.subreddit_url}
        />

        {/* Trades and Order Book: Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <RecentTradesSection tickers={coinData.tickers} />
          <OrderBookSection tickers={coinData.tickers} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch coin details:', error);
    return (
      <main className="main-container">
        <div className="text-center py-12">
          <h1 className="text-2xl font-semibold mb-4">Coin Not Found</h1>
          <p className="text-purple-100/70">Could not load details for this coin. Please try again.</p>
        </div>
      </main>
    );
  }
}
