'use client';

import { formatCurrency, cn } from '@/lib/utils';
import { useMemo } from 'react';

interface RecentTradesSectionProps {
  tickers: Ticker[];
}

interface Trade {
  id: number;
  time: string;
  priceBTC: number;
  amountETH: number;
  type: 'buy' | 'sell';
}

export default function RecentTradesSection({ tickers }: RecentTradesSectionProps) {
  const trades = useMemo(() => {
    return (tickers || []).slice(0, 5).map((ticker, index) => ({
      id: index,
      time: new Date(ticker.timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      priceBTC: ticker.converted_last?.usd || 0,
      amountETH: ticker.converted_last?.usd || 0,
      type: (index % 2 === 0 ? 'buy' : 'sell') as 'buy' | 'sell',
    }));
  }, [tickers]);

  return (
    <div id="recent-trades" className="bg-dark-500 rounded-xl overflow-hidden">
      <div className="px-6 py-6 border-b border-purple-100/10">
        <h3 className="text-xl font-semibold text-white">Recent Trades</h3>
      </div>

      {trades.length > 0 ? (
        <div>
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-4 py-4 bg-dark-400 border-b border-purple-100/10">
            <div className="text-sm font-semibold text-purple-100">Time</div>
            <div className="text-sm font-semibold text-purple-100">Price (BTC)</div>
            <div className="text-sm font-semibold text-purple-100">Amount (ETH)</div>
          </div>

          {/* Rows */}
          {trades.map((trade) => (
            <div
              key={trade.id}
              className={cn(
                'grid grid-cols-3 gap-4 items-center px-4 py-4 border-b border-purple-100/5 hover:bg-dark-400/50 transition-colors',
                trade.type === 'buy'
                  ? 'text-green-400'
                  : 'text-red-400'
              )}
            >
              <div className="text-sm font-medium">{trade.time}</div>
              <div className="text-sm font-medium">{formatCurrency(trade.priceBTC, 6, 'USD', false)}</div>
              <div className="text-sm font-medium">{formatCurrency(trade.amountETH, 6, 'USD', false)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-purple-100/50">
          No recent trades available
        </div>
      )}
    </div>
  );
}
