'use client';

import { formatCurrency } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface MarketDataCardsProps {
  marketCap: number;
  volume24h: number;
  marketCapRank: number;
  website?: string;
  explorer?: string;
  community?: string;
}

export default function MarketDataCards({
  marketCap,
  volume24h,
  marketCapRank,
  website,
  explorer,
  community,
}: MarketDataCardsProps) {
  return (
    <div className="w-full space-y-4 mt-6">
      {/* Market Cap, Volume, Rank Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
        {/* Market Cap */}
        <div className="bg-dark-500 rounded-xl p-6 border border-dark-400 h-fit">
          <h3 className="text-sm font-medium text-purple-100 mb-2">Market Cap</h3>
          <p className="text-xl sm:text-2xl font-semibold text-white break-words">{formatCurrency(marketCap)}</p>
        </div>

        {/* Volume 24h */}
        <div className="bg-dark-500 rounded-xl p-6 border border-dark-400 h-fit">
          <h3 className="text-sm font-medium text-purple-100 mb-2">Volume (24h)</h3>
          <p className="text-xl sm:text-2xl font-semibold text-white break-words">{formatCurrency(volume24h)}</p>
        </div>

        {/* Rank */}
        <div className="bg-dark-500 rounded-xl p-6 border border-dark-400 h-fit">
          <h3 className="text-sm font-medium text-purple-100 mb-2">Rank</h3>
          <p className="text-xl sm:text-2xl font-semibold text-white">#{marketCapRank}</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-dark-500 rounded-xl p-6 border border-dark-400">
        <h3 className="text-sm font-medium text-purple-100 mb-4">Links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="font-medium">Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {explorer && (
            <a
              href={explorer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="font-medium">Explorer</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {community && (
            <a
              href={community}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="font-medium">Community</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
