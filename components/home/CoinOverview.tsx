import { fetcher } from '@/lib/coingecko.actions';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

const CoinOverview = async () => {
    let coin;
    
    try {
      coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
        dex_pair_format: 'symbol',
      });
    } catch (error) {
      console.error('Failed to fetch Bitcoin overview data:', error);
      // Could also report to telemetry here
      return (
        <div id='coin-overview'>
          <div className='header'>
            <div className='info'>
              <p>Unable to load coin data</p>
              <p className='text-sm text-gray-500'>Please try again later</p>
            </div>
          </div>
        </div>
      );
    }

    if (!coin) {
      return (
        <div id='coin-overview'>
          <div className='header'>
            <div className='info'>
              <p>No coin data available</p>
            </div>
          </div>
        </div>
      );
    }
    
  return (
    <div id='coin-overview'>
        <div className='header'>
          <Image src={coin.image.large} alt={coin.name} width={56} height={56}/>
          <div className='info'>
             <p>{coin.name}/{coin.symbol.toLocaleUpperCase()}</p>
             <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
           </div>
        </div>
      </div>
  )
}

export default CoinOverview
