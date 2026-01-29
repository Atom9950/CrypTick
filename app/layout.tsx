import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { fetcher } from "@/lib/coingecko.actions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrypTick",
  description: "Crypto Screener App with Real-Time Market Intelligence & Smart Dashboards",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let trendingCoins: TrendingCoin[] = [];

  try {
    const response = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300);
    trendingCoins = response.coins || [];
  } catch (error) {
    console.error('Failed to fetch trending coins for search modal:', error);
  }

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header trendingCoins={trendingCoins} />
        {children}
      </body>
    </html>
  );
}
