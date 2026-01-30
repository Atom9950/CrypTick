'use client';

import Image from 'next/image';
import { formatCurrency, formatPercentage, cn, trendingClasses } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CoinDetailsHeaderProps {
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  priceChange24h: number;
  marketCapRank: number;
}

export default function CoinDetailsHeader({
  name,
  symbol,
  image,
  currentPrice,
  priceChange24h,
  marketCapRank,
}: CoinDetailsHeaderProps) {
  const { textClass, bgClass } = trendingClasses(priceChange24h);
  const isPositive = priceChange24h > 0;

  return (
    <div id="coin-header" className="space-y-4">
      <div className="info">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-sm text-purple-100/70 uppercase">{symbol}</p>
        </div>
      </div>

      <div className="price-row gap-4 items-start">
        <div>
          <h1 className="text-5xl font-semibold">{formatCurrency(currentPrice)}</h1>
          <div className={cn('badge mt-2 py-1 px-2 rounded text-sm font-medium w-fit', bgClass)}>
            {isPositive ? <TrendingUp className={cn("w-4 h-4", textClass)} /> : <TrendingDown className={cn("w-4 h-4", textClass)} />}
            <span className={textClass}>{isPositive ? '+' : ''}{formatPercentage(priceChange24h)}</span>
          </div>
        </div>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Today</span>
          <div className={cn('value', textClass)}>{isPositive ? '+' : ''}{formatPercentage(priceChange24h)}</div>
        </li>
        <li>
          <span className="label">30 Days</span>
          <div className="value text-purple-100">-11.8%</div>
        </li>
        <li>
          <span className="label">Market Cap Rank</span>
          <div className="value text-white">#{marketCapRank}</div>
        </li>
      </ul>
    </div>
  );
}
