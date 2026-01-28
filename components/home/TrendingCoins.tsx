import { fetcher } from '@/lib/coingecko.actions';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import DataTable from '../DataTable';

const TrendingCoins = async () => {
      let trendingCoins;
      
      try {
        trendingCoins = await fetcher<{coins: TrendingCoin[]}>('/search/trending', undefined, 300);
      } catch (error) {
        console.error('Failed to fetch trending coins data:', error);
        // Could also report to telemetry here
        return (
          <div id='trending-coins'>
            <h4>Trending Coins</h4>
            <div className='text-center py-8'>
              <p className='text-gray-500'>Unable to load trending coins</p>
              <p className='text-sm text-gray-400'>Please try again later</p>
            </div>
          </div>
        );
      }

      if (!trendingCoins || !trendingCoins.coins) {
        return (
          <div id='trending-coins'>
            <h4>Trending Coins</h4>
            <div className='text-center py-8'>
              <p className='text-gray-500'>No trending coins available</p>
            </div>
          </div>
        );
      }

      
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
    header: '24h Change',
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
      formatCurrency(coin.item.data.price)
  },
]
  return (
    <div id='trending-coins'>
     <h4>Trending Coins</h4>
     <div id='trending-coins'>
       <DataTable 
            data={trendingCoins.coins.slice(0, 6) || []} 
            columns={columns} 
            rowKey={(coin) => coin.item.id}
            tableClassName='trending-coins-table'
            headerCellClassName='py-3!'
            bodyCellClassName='py-2!'
           
       />
     </div>
    </div>
  )
}

export default TrendingCoins
