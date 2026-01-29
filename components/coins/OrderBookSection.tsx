'use client';

import { formatCurrency, cn } from '@/lib/utils';
import { useMemo } from 'react';

interface OrderBookSectionProps {
  tickers: Ticker[];
}

export default function OrderBookSection({ tickers }: OrderBookSectionProps) {
  const orderBook = useMemo(() => {
    return (tickers || []).slice(0, 5).map((ticker, index) => ({
      id: index,
      priceBTC: ticker.converted_last?.usd || 0,
      amountBTC: Math.random() * 100,
      amountETH: ticker.converted_last?.usd || 0,
      type: index % 2 === 0 ? 'bid' : 'ask',
    }));
  }, [tickers]);

  return (
    <div id="order-book" className="bg-dark-500 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Order Book</h3>

      {orderBook.length > 0 ? (
        <div className="space-y-2">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 text-xs font-medium text-purple-100 pb-3 border-b border-dark-400">
            <div>Price (BTC)</div>
            <div>Amount (BTC)</div>
            <div>Amount (ETH)</div>
          </div>

          {/* Rows */}
          {orderBook.map((order) => (
            <div
              key={order.id}
              className={cn(
                'grid grid-cols-3 gap-4 py-3 px-2 rounded text-sm font-medium',
                order.type === 'bid'
                  ? 'bg-green-600/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              )}
            >
              <div>{formatCurrency(order.priceBTC, 6, 'USD', false)}</div>
              <div>{formatCurrency(order.amountBTC, 2, 'USD', false)}</div>
              <div>{formatCurrency(order.amountETH, 6, 'USD', false)}</div>
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
