'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="main-container inner">
        <div className="footer-content">
          <div className="footer-section">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
            </Link>
            <p className="footer-description">
              Real-time crypto market intelligence and smart dashboards
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link href="/">Home</Link>
              <Link href="/coins">All Coins</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <nav className="footer-nav">
              <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
                CoinGecko API
              </a>
              <a href="https://github.com/Atom9950/CrypTick" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CrypTick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
