'use client';

import { formatCurrency, cn } from '@/lib/utils';
import { useMemo } from 'react';

interface OrderBookSectionProps {
  tickers: Ticker[];
}

interface Order {
  id: number;
  priceBTC: number;
  amountBTC: number;
  amountETH: number;
  type: 'bid' | 'ask';
}

export default function OrderBookSection({ tickers }: OrderBookSectionProps) {
  const orderBook = useMemo(() => {
    return (tickers || []).slice(0, 5).map((ticker, index) => ({
      id: index,
      priceBTC: ticker.converted_last?.usd || 0,
      amountBTC: Math.random() * 100,
      amountETH: ticker.converted_last?.usd || 0,
      type: (index % 2 === 0 ? 'bid' : 'ask') as 'bid' | 'ask',
    }));
  }, [tickers]);

  return (
    <div id="order-book" className="bg-dark-500 rounded-xl overflow-hidden">
      <div className="px-6 py-6 border-b border-purple-100/10">
        <h3 className="text-xl font-semibold text-white">Order Book</h3>
      </div>

      {orderBook.length > 0 ? (
        <div>
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-4 py-4 bg-dark-400 border-b border-purple-100/10">
            <div className="text-sm font-semibold text-purple-100">Price (BTC)</div>
            <div className="text-sm font-semibold text-purple-100">Amount (BTC)</div>
            <div className="text-sm font-semibold text-purple-100">Amount (ETH)</div>
          </div>

          {/* Rows */}
          {orderBook.map((order) => (
            <div
              key={order.id}
              className={cn(
                'grid grid-cols-3 gap-4 items-center px-4 py-4 border-b border-purple-100/5 hover:bg-dark-400/50 transition-colors',
                order.type === 'bid'
                  ? 'text-green-400'
                  : 'text-red-400'
              )}
            >
              <div className="text-sm font-medium">{formatCurrency(order.priceBTC, 6, 'USD', false)}</div>
              <div className="text-sm font-medium">{formatCurrency(order.amountBTC, 2, 'USD', false)}</div>
              <div className="text-sm font-medium">{formatCurrency(order.amountETH, 6, 'USD', false)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-purple-100/50">
          No order book data available
        </div>
      )}
    </div>
  );
}
