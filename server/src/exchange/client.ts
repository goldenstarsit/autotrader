import type {
  ExchangeAdapter
} from "./adapter.js";

import type {
  ExchangeInfo,
  Balance,
  OrderRequest,
  OrderResult,
  Ticker
} from "./types.js";


export class ExchangeClient {

  constructor(
    private readonly adapter: ExchangeAdapter
  ) {}


  getInfo(): ExchangeInfo {
    return this.adapter.getInfo();
  }


  async getTicker(
    symbol: string
  ): Promise<Ticker> {
    return this.adapter.getTicker(symbol);
  }


  async getBalances(): Promise<Balance[]> {
    return this.adapter.getBalances();
  }


  async createOrder(
    request: OrderRequest
  ): Promise<OrderResult> {
    return this.adapter.createOrder(request);
  }
}
