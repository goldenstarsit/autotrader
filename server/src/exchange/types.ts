export type ExchangeOrderSide =
  | "BUY"
  | "SELL";


export interface ExchangeInfo {

  name: string;

  testnet: boolean;

}


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

  side: ExchangeOrderSide;

  quantity: number;

  price?: number;

}


export interface OrderResult {

  id: string;

  symbol: string;

  side: ExchangeOrderSide;

  quantity: number;

  price: number;

  status: string;

  createdAt: string;

}


/*
 * Backward-compatible aliases
 */

export type ExchangeOrderRequest =
  OrderRequest;

export type ExchangeOrderResponse =
  OrderResult;

export type ExchangeBalance =
  Balance;
