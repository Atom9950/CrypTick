import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetcher } from '@/lib/coingecko.actions';
import HeaderClient from './HeaderClient';

const Header = async () => {
  let trendingCoins: TrendingCoin[] = [];

  try {
    const response = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300);
    trendingCoins = response.coins || [];
  } catch (error) {
    console.error('Failed to fetch trending coins for search modal:', error);
  }

  return (
    <header>
      <div className='main-container inner'>
        <Link href='/'>
            <Image src="/logo.png" alt="Logo" width={100} height={40}/>
        </Link>

        <nav>
            <Link href='/' className={cn('nav-link', {
                'is-home': true,
            })}>Home</Link>

            <HeaderClient trendingCoins={trendingCoins} />

            <Link href='/coins' className={cn('nav-link')}>All coins</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
