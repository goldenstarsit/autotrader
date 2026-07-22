import type {
  ExchangeAdapter
} from "../adapter.js";

import type {
  Balance,
  ExchangeInfo,
  OrderRequest,
  OrderResult,
  Ticker
} from "../types.js";


export class BinanceClient
  implements ExchangeAdapter
{

  getInfo(): ExchangeInfo {
    return {
      name: "Binance",
      testnet: false
    };
  }


  async getTicker(
    symbol: string
  ): Promise<Ticker> {

    return {
      symbol,
      price: 0,
      timestamp: new Date().toISOString()
    };
  }


  async getBalances(): Promise<Balance[]> {
    return [];
  }


  async createOrder(
    request: OrderRequest
  ): Promise<OrderResult> {

    return {
      id: crypto.randomUUID(),
      symbol: request.symbol,
      side: request.side,
      quantity: request.quantity,
      price: request.price ?? 0,
      status: "created",
      createdAt: new Date().toISOString()
    };
  }
}
