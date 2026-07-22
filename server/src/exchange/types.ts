export interface Ticker {
  symbol: string;
  price: number;
  timestamp: string;
}


export interface Balance {
  asset: string;
  free: number;
  locked: number;
}


export interface OrderRequest {
  symbol: string;
  side: "BUY" | "SELL";
  quantity: number;
  price?: number;
}


export interface OrderResult {
  id: string;
  symbol: string;
  side: "BUY" | "SELL";
  quantity: number;
  price: number;
  status: string;
  createdAt: string;
}


export interface ExchangeInfo {
  name: string;
  testnet: boolean;
}
