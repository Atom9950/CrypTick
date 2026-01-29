'use client';

import { SearchModal } from './SearchModal';

interface HeaderClientProps {
  trendingCoins: TrendingCoin[];
}

const HeaderClient = ({ trendingCoins }: HeaderClientProps) => {
  return <SearchModal initialTrendingCoins={trendingCoins} />;
};

export default HeaderClient;
