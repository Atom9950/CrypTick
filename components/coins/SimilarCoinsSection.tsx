'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, formatPercentage, cn, trendingClasses } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import DataTable from '../DataTable';

interface SimilarCoinsSectionProps {
  coins: CoinMarketData[];
}

export default function SimilarCoinsSection({ coins }: SimilarCoinsSectionProps) {
  const columns: DataTableColumn<CoinMarketData>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: (coin) => (
        <Link href={`/coins/${coin.id}`}>
          <Image src={coin.image} alt={coin.name} height={40} width={40} />
          <p>{coin.name}</p>
        </Link>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'name-cell',
      cell: (coin) => {
        const isTrendingUp = coin.price_change_percentage_24h > 0;

        return (
          <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
            <p>
              {isTrendingUp ? (
                <TrendingUp width={16} height={16} />
              ) : (
                <TrendingDown width={16} height={16} />
              )}
              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </p>
          </div>
        );
      },
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: (coin) => formatCurrency(coin.current_price),
    },
  ];

  return (
    <div id="similar-coins" className="bg-dark-500 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-6 border-b border-purple-100/10">
        <h3 className="text-xl font-semibold text-white">Similar Coins</h3>
        <button className="text-sm text-purple-100 hover:text-white transition-colors">
          Popular ↓
        </button>
      </div>

      <DataTable
        data={coins.slice(0, 5) || []}
        columns={columns}
        rowKey={(coin) => coin.id}
        tableClassName="similar-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
}
