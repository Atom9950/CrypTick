<div align="center">

# 📈 CrypTick

### Your Gateway to Real-Time Cryptocurrency Market Intelligence

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://cryp-tick-app.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

[Live Demo](https://cryp-tick-app.vercel.app/) · [Report Bug](https://github.com/Atom9950/CrypTick/issues) · [Request Feature](https://github.com/Atom9950/CrypTick/issues)

</div>

---

<div align="center">
  
![CrypTick Banner] <img width="1897" height="1089" alt="image" src="https://github.com/user-attachments/assets/bd7ce7c9-c516-4143-9270-32493e78801d" />


</div>

## 🌟 Introduction

Welcome to **CrypTick** - a cutting-edge cryptocurrency screening platform that brings the power of real-time market data to your fingertips. Whether you're a seasoned trader, crypto enthusiast, or just getting started with digital assets, CrypTick provides you with the tools and insights you need to make informed decisions.

Built with modern web technologies and powered by the comprehensive CoinGecko API, CrypTick delivers live market data, interactive charts, and detailed analytics in a beautifully designed, user-friendly interface. Track trending coins, explore market categories, analyze price movements with candlestick charts, and dive deep into individual cryptocurrency metrics - all in one place.

<div align="center">
  
![CrypTick Dashboard Preview]<img width="1899" height="1086" alt="image" src="https://github.com/user-attachments/assets/8942d096-4d90-43ca-880b-d030439b460f" />


</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🚀 About

CrypTick is a comprehensive cryptocurrency screening platform that provides real-time market data, interactive charts, and detailed analytics for various cryptocurrencies. Built with modern web technologies, it offers users an intuitive interface to track and analyze crypto markets effectively.

### Why CrypTick?

- **Real-Time Data**: Live cryptocurrency prices and market statistics
- **Comprehensive Analytics**: Detailed coin information including market cap, volume, and price changes
- **Interactive Charts**: Candlestick charts for technical analysis
- **Category Insights**: Browse cryptocurrencies by categories like Smart Contract Platforms, Layer 1, Proof of Work, and more
- **Detailed Coin Pages**: In-depth information for each cryptocurrency including recent trades and order books

---

## ✨ Features

### 🔍 Global Search
- **Instant Search**: Quickly find any cryptocurrency by name or symbol
- **Smart Suggestions**: Get real-time search suggestions as you type
- **Fast Navigation**: Jump directly to detailed coin pages from search results

- <div align="center">
  
  ![CrypTick Dashboard Preview] <img width="1919" height="1085" alt="image" src="https://github.com/user-attachments/assets/d27073b2-771b-4804-9f7e-f681e45c7531" />

  
  
  </div>


### 🏠 Home Dashboard
- **Trending Coins**: Real-time tracking of the hottest cryptocurrencies with 24-hour price changes
- **Top Categories**: Explore crypto categories with market cap, volume, and performance metrics
- **Market Overview**: Get a bird's-eye view of the entire crypto market

### 🪙 All Coins Page
- **Comprehensive Listings**: Browse through thousands of cryptocurrencies
- **Pagination**: Easy navigation through multiple pages of coin data
- **Complete Market Data**: View price, market cap, volume, and 24h changes for every coin
- **Sortable Columns**: Organize coins by different metrics
- **Efficient Loading**: Optimized performance for browsing large datasets

- <div align="center">
  
  ![CrypTick Dashboard Preview] <img width="1919" height="1088" alt="image" src="https://github.com/user-attachments/assets/bf6b670d-f545-4b00-a3b2-f12f8d8ba66f" />

  
  
  </div>


### 📊 Candlestick Charts
- Interactive price charts with multiple timeframe options (1D, 1W, 1M, 3M, 6M, 1Y)
- Visual representation of price movements and trends
- Technical analysis capabilities

### 💰 Detailed Coin Pages
Each cryptocurrency has a dedicated page featuring:
- **Current Price & Stats**: Real-time price, market cap, and trading volume
- **Market Cap**: Total market capitalization
- **24h Volume**: Trading volume in the last 24 hours
- **Recent Trades**: Latest transaction history
- **Order Book**: Current buy and sell orders
- **Price History Charts**: Historical price data visualization

### 🏷️ Category Browsing
- Smart Contract Platforms
- Layer 1 (L1) blockchains
- Proof of Work (PoW) coins
- Proof of Stake (PoS) coins
- Stablecoins (USD and other fiat-backed)
- DeFi tokens
- And many more categories

---


## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

### Data Visualization
- **[Recharts](https://recharts.org/)** - Charting library for React
- **Candlestick Charts** - Interactive price charts

### Data Fetching
- **[CoinGecko API](https://www.coingecko.com/api)** - Comprehensive cryptocurrency data
- **Next.js Server Components** - Efficient data fetching

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Geist Font](https://vercel.com/font)** - Modern font family from Vercel

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn/pnpm
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Atom9950/CrypTick.git
   cd CrypTick
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Building for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
CrypTick/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── coins/                   # Coin-related pages
│   │   ├── page.tsx            # All coins listing with pagination
│   │   └── [id]/               # Individual coin detail pages
│   └── ...
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   └── ...
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper utilities
├── public/                      # Static assets
├── constants.ts                 # Application constants
├── type.d.ts                    # TypeScript type definitions
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 🔌 API Integration

CrypTick uses the **[CoinGecko API](https://www.coingecko.com/api/documentation)** to fetch real-time cryptocurrency data.

### Key Endpoints Used:

- `/coins/markets` - Get cryptocurrency market data (used for home and all coins page)
- `/coins/list` - Get list of all available coins with pagination
- `/coins/{id}` - Get detailed coin information
- `/coins/{id}/market_chart` - Get historical chart data
- `/coins/categories` - Get cryptocurrency categories
- `/coins/{id}/tickers` - Get recent trades and order book data

### Rate Limits

The free CoinGecko API has rate limits. For production use, consider:
- Implementing caching strategies
- Using Next.js ISR (Incremental Static Regeneration)
- Upgrading to CoinGecko Pro API for higher limits

---

## 🎨 Customization

### Modifying the Page

You can start editing the home page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Adding New Components

This project uses [`shadcn/ui`](https://ui.shadcn.com/) for components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Styling

The project uses **Tailwind CSS** for styling. Edit `tailwind.config.ts` to customize the theme.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Contact

**Atom9950**

- GitHub: [@Atom9950](https://github.com/Atom9950)
- Project Link: [https://github.com/Atom9950/CrypTick](https://github.com/Atom9950/CrypTick)
- Live Demo: [https://cryp-tick-app.vercel.app/](https://cryp-tick-app.vercel.app/)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [CoinGecko API](https://www.coingecko.com/api)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for hosting

---

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript

---

<div align="center">
  
  **⭐ Star this repo if you find it helpful!**
  
  Made with ❤️ by [Atom9950](https://github.com/Atom9950)
  
</div>
