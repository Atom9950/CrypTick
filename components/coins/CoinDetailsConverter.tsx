'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';
import { ArrowRightLeft } from 'lucide-react';

interface CoinDetailsConverterProps {
  symbol: string;
  icon: string;
  priceList: Record<string, number>;
}

const CURRENCY_MAP: Record<string, string> = {
  usd: 'USD',
  eur: 'EUR',
  gbp: 'GBP',
  jpy: 'JPY',
  aud: 'AUD',
  cad: 'CAD',
  chf: 'CHF',
  cny: 'CNY',
  inr: 'INR',
  krw: 'KRW',
  aed: 'AED',
  sar: 'SAR',
  btc: 'BTC',
  eth: 'ETH',
};

export default function CoinDetailsConverter({
  symbol,
  icon,
  priceList,
}: CoinDetailsConverterProps) {
  const [cryptoAmount, setCryptoAmount] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('usd');

  const availableCurrencies = useMemo(() => {
    return Object.keys(priceList)
      .filter((key) => key in CURRENCY_MAP)
      .sort();
  }, [priceList]);

  const currentPrice = priceList[selectedCurrency] || priceList.usd;
  const convertedAmount = cryptoAmount * currentPrice;

  const handleCryptoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCryptoAmount(parseFloat(e.target.value) || 0);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div id="coin-converter" className="bg-dark-500 rounded-xl p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">{symbol} Converter</h3>

      {/* Crypto Input */}
      <div className="space-y-2">
        <div className="flex gap-3 items-center">
          <input
            type="number"
            value={cryptoAmount}
            onChange={handleCryptoChange}
            className="flex-1 bg-dark-400 border border-dark-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50"
            placeholder="Enter amount"
          />
          <div className="flex gap-2 items-center bg-dark-400 rounded-lg px-3 py-3 min-w-fit">
            <Image
              src={icon}
              alt={symbol}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-white font-semibold text-sm">{symbol}</span>
          </div>
        </div>
      </div>

      {/* Divider with Converter Icon */}
      <div className="divider">
        <div className="line"></div>
        <div className="icon bg-dark-500">
          <Image
            src="/converter.png"
            alt="Converter"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
      </div>

      {/* Currency Output */}
      <div className="output-wrapper">
        <p className="text-white">{formatCurrency(convertedAmount, undefined, selectedCurrency)}</p>
        <select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="select-trigger text-purple-100 bg-dark-400 border-none rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600/50"
        >
          {availableCurrencies.map((curr) => (
            <option key={curr} value={curr} className="bg-dark-500 text-white">
              {CURRENCY_MAP[curr]}
            </option>
          ))}
        </select>
      </div>

      {/* Exchange Rate */}
      <div className="text-xs text-purple-100/60 text-center pt-2">
        1 {symbol} = {formatCurrency(currentPrice, undefined, selectedCurrency)} {CURRENCY_MAP[selectedCurrency]}
      </div>
    </div>
  );
}
