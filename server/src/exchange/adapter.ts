import type {
  Balance,
  ExchangeInfo,
  OrderRequest,
  OrderResult,
  Ticker
} from "./types.js";


export interface ExchangeAdapter {

  getInfo(): ExchangeInfo;


  getTicker(
    symbol: string
  ): Promise<Ticker>;


  getBalances(): Promise<Balance[]>;


  createOrder(
    request: OrderRequest
  ): Promise<OrderResult>;

}
