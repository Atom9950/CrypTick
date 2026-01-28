import { fetcher } from '@/lib/coingecko.actions';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import CandlestickChart from '../CandlestickChart';

const CoinOverview = async () => {
    let coin;
    let coinOHLCData;
    
    try {

        const [coin, coinOHLCData] = await Promise.all([
             fetcher<CoinDetailsData>('/coins/bitcoin', {
            dex_pair_format: 'symbol',
            }),

             fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
                vs_currency: 'usd',
                days: 1,
                precision: 'full',
            })
        ]);

        return (
          <div id='coin-overview'>
            <CandlestickChart data={coinOHLCData} coinId="bitcoin">
                <div className='header'>
                    <Image src={coin.image.large} alt={coin.name} width={56} height={56}/>
                    <div className='info'>
                    <p>{coin.name}/{coin.symbol.toLocaleUpperCase()}</p>
                    <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                    </div>
                </div>
            </CandlestickChart>
        </div>
        );
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
    
}

export default CoinOverview
