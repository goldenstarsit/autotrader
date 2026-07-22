export interface PriceTick {
  symbol: string;
  price: number;
  volume: number;
  timestamp: string;
}


export interface Candle {
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  openTime: string;
  closeTime: string;
}


export interface MarketSnapshot {
  symbol: string;
  price: number;
  timestamp: string;
}
