'use client';

import { formatCurrency, formatPercentage, cn } from '@/lib/utils';
import { useMemo } from 'react';

interface RecentTradesSectionProps {
  tickers: Ticker[];
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
      type: index % 2 === 0 ? 'buy' : 'sell',
    }));
  }, [tickers]);

  return (
    <div id="recent-trades" className="bg-dark-500 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Recent Trades</h3>

      {trades.length > 0 ? (
        <div className="space-y-2">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 text-xs font-medium text-purple-100 pb-3 border-b border-dark-400">
            <div>Time</div>
            <div>Price (BTC)</div>
            <div>Amount (ETH)</div>
          </div>

          {/* Rows */}
          {trades.map((trade) => (
            <div
              key={trade.id}
              className={cn(
                'grid grid-cols-3 gap-4 py-3 px-2 rounded text-sm font-medium',
                trade.type === 'buy'
                  ? 'bg-green-600/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              )}
            >
              <div>{trade.time}</div>
              <div>{formatCurrency(trade.priceBTC, 6, 'USD', false)}</div>
              <div>{formatCurrency(trade.amountETH, 6, 'USD', false)}</div>
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
