'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, formatPercentage, cn, trendingClasses } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SimilarCoinsSectionProps {
  coins: CoinMarketData[];
}

export default function SimilarCoinsSection({ coins }: SimilarCoinsSectionProps) {
  return (
    <div id="similar-coins" className="bg-dark-500 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Similar Coins</h3>
        <button className="text-sm text-purple-100 hover:text-white transition-colors">
          Popular ↓
        </button>
      </div>

      <div className="space-y-3">
        {coins.slice(0, 5).map((coin) => {
          const isTrendingUp = coin.price_change_percentage_24h > 0;
          const { textClass } = trendingClasses(coin.price_change_percentage_24h);

          return (
            <Link
              key={coin.id}
              href={`/coins/${coin.id}`}
              className="flex items-center justify-between p-4 bg-dark-400 rounded-lg hover:bg-dark-400/80 transition-colors group"
            >
              <div className="flex items-center gap-3 flex-1">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-white">{coin.name}</h4>
                  <p className="text-xs text-purple-100 uppercase">{coin.symbol}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div className={cn('flex items-center gap-1', textClass)}>
                  {isTrendingUp ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">
                    {isTrendingUp ? '+' : ''}{formatPercentage(coin.price_change_percentage_24h)}
                  </span>
                </div>
                <p className="text-white font-medium min-w-fit">{formatCurrency(coin.current_price)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
