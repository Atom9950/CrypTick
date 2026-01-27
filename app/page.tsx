import DataTable from '@/components/DataTable'
import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb: '/logo.png',
      large: '/logo.png',
      data: {
        price: 88404.72,
        price_change_percentage_24h: {
          usd: 2.45,
        },
      },
    },
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      market_cap_rank: 2,
      thumb: '/logo.png',
      large: '/logo.png',
      data: {
        price: 3245.89,
        price_change_percentage_24h: {
          usd: -1.23,
        },
      },
    },
  },
  {
    item: {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      market_cap_rank: 5,
      thumb: '/logo.png',
      large: '/logo.png',
      data: {
        price: 187.45,
        price_change_percentage_24h: {
          usd: 5.67,
        },
      },
    },
  },
];

const columns : DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name', 
    cellClassName: 'name-cell', 
    cell: (coin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} height={36} width={36} />
          <p>{item.name}</p>
        </Link>
      )
    }
  },
  {
    header: '24h Price Change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

      return (
        <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          <p>
            {isTrendingUp ? (
              <TrendingUp width={16} height={16}/>
            ) : (
              <TrendingDown width={16} height={16}/>
            )}
            {Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%
          </p>
        </div>
      )
    }
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => 
      coin.item.data.price
  },
]

const page = () => {
  return <main className='main-container'>
    <section className='home-grid'>
      <div id='coin-overview'>
        <div className='header'>
          <Image src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt='Bitcoin' width={56} height={56}/>
          <div className='info'>
            <p>Bitcoin / BTC</p>
            <h1>$88,404.72</h1>
          </div>
        </div>
      </div>
      <p>Trending Coins</p>
       <DataTable data={dummyTrendingCoins} columns={columns} rowKey={(coin, index) => coin.item.id || index}/>
    </section>

    <section className='w-full mt-7 space-y-4'>
      <p>Categories</p>
    </section>
  </main>
}

export default page