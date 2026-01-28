import {
  CandlestickSeriesPartialOptions,
  ChartOptions,
  ColorType,
  DeepPartial,
} from 'lightweight-charts';

export const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Search',
    href: '/',
  },
  {
    label: 'All Coins',
    href: '/coins',
  },
];

const CHART_COLORS = {
  // Core UI
  background: '#070B14',      // deep navy-black (crypto dark mode)
  text: '#B7C4D3',            // soft cool grey-blue
  grid: '#121A2A',            // subtle grid, not distracting
  border: '#121A2A',

  // Crosshair
  crosshairVertical: '#7DD3FC55',   // soft cyan-blue
  crosshairHorizontal: '#A78BFA33', // subtle purple hint

  // Candles (logo-aligned)
  candleUp: '#22D3A6',        // teal-green (growth, matches logo)
  candleDown: '#F43F5E',      // modern soft red (clear but not harsh)
} as const;


export const getCandlestickConfig = (): CandlestickSeriesPartialOptions => ({
  upColor: CHART_COLORS.candleUp,
  downColor: CHART_COLORS.candleDown,
  wickUpColor: CHART_COLORS.candleUp,
  wickDownColor: CHART_COLORS.candleDown,
  borderVisible: true,
  wickVisible: true,
});

export const getChartConfig = (
  height: number,
  timeVisible: boolean = true,
): DeepPartial<ChartOptions> => ({
  width: 0,
  height,
  layout: {
    background: { type: ColorType.Solid, color: CHART_COLORS.background },
    textColor: CHART_COLORS.text,
    fontSize: 12,
    fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial',
  },
  grid: {
    vertLines: { visible: false },
    horzLines: {
      visible: true,
      color: CHART_COLORS.grid,
      style: 2,
    },
  },
  rightPriceScale: {
    borderColor: CHART_COLORS.border,
  },
  timeScale: {
    borderColor: CHART_COLORS.border,
    timeVisible,
    secondsVisible: false,
  },
  handleScroll: true,
  handleScale: true,
  crosshair: {
    mode: 1,
    vertLine: {
      visible: true,
      color: CHART_COLORS.crosshairVertical,
      width: 1,
      style: 0,
    },
    horzLine: {
      visible: true,
      color: CHART_COLORS.crosshairHorizontal,
      width: 1,
      style: 0,
    },
  },
  localization: {
    priceFormatter: (price: number) =>
      '$' + price.toLocaleString(undefined, { maximumFractionDigits: 2 }),
  },
});

export const PERIOD_CONFIG: Record<
  Period,
  { days: number | string; interval?: 'hourly' | 'daily' }
> = {
  daily: { days: 1,  },
  weekly: { days: 7,  },
  monthly: { days: 30,  },
  '3months': { days: 90, },
  '6months': { days: 180, },
  yearly: { days: 365 },
  max: { days: 'max' },
};

export const PERIOD_BUTTONS: { value: Period; label: string }[] = [
  { value: 'daily', label: '1D' },
  { value: 'weekly', label: '1W' },
  { value: 'monthly', label: '1M' },
  { value: '3months', label: '3M' },
  { value: '6months', label: '6M' },
  { value: 'yearly', label: '1Y' },
];

export const LIVE_INTERVAL_BUTTONS: { value: '1s' | '1m'; label: string }[] = [
  { value: '1s', label: '1s' },
  { value: '1m', label: '1m' },
];