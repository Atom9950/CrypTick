'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import HeaderClient from './HeaderClient';

interface HeaderClientProps {
  trendingCoins: TrendingCoin[];
}

const Header = ({ trendingCoins = [] }: HeaderClientProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header>
      <div className='main-container inner'>
        <Link href='/'>
            <Image src="/logo.png" alt="Logo" width={100} height={40}/>
        </Link>

        <nav>
            <Link href='/' className={cn('nav-link is-home', {
                'is-active': pathname === '/',
            })}>Home</Link>

            <HeaderClient trendingCoins={trendingCoins} />

            <Link href='/coins' className={cn('nav-link', {
                'is-active': pathname === '/coins',
            })}>All coins</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
