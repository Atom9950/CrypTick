'use client';

import CandlestickChart from '@/components/CandlestickChart';
import { useState } from 'react';

interface TrendOverviewSectionProps {
  coinId: string;
  coinData: CoinDetailsData;
  initialOHLCData: OHLCData[];
}

export default function TrendOverviewSection({
  coinId,
  coinData,
  initialOHLCData,
}: TrendOverviewSectionProps) {
  const [liveInterval, setLiveInterval] = useState<'1s' | '1m'>('1m');

  return (
    <div id="coin-overview" className="!p-0 pb-3 border-b-2 border-dark-400">
      <div className="header pt-6 pl-6">
        <img
          src={coinData.image.large}
          alt={coinData.name}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full"
        />
        <div className="info">
          <h1 className="text-xl md:text-2xl font-semibold text-white">{coinData.name}</h1>
          <p className="text-purple-100 text-xs md:text-sm uppercase">{coinData.symbol.toUpperCase()}</p>
        </div>
      </div>

      <CandlestickChart
        coinId={coinId}
        data={initialOHLCData}
        initialPeriod="daily"
        height={360}
        liveInterval={liveInterval}
        setLiveInterval={setLiveInterval}
      >
        <h4 className="text-lg md:text-xl font-semibold text-[#e6eef8]">Trend Overview</h4>
      </CandlestickChart>
    </div>
  );
}
