import type {
  ExchangeAdapter
} from "./adapter.js";

import type {
  Balance,
  OrderRequest,
  OrderResult,
  Ticker
} from "./types.js";

import {
  MockExchangeAdapter
} from "./adapter.js";


export class ExchangeService {

  constructor(
    private readonly adapter: ExchangeAdapter =
      new MockExchangeAdapter()
  ) {}


  getInfo() {
    return this.adapter.getInfo();
  }


  async getTicker(
    symbol: string
  ): Promise<Ticker> {

    return this.adapter.getTicker(symbol);

  }


  async getBalances():
    Promise<Balance[]> {

    return this.adapter.getBalances();

  }


  async createOrder(
    request: OrderRequest
  ): Promise<OrderResult> {

    return this.adapter.createOrder(
      request
    );

  }

}


export const exchangeService =
  new ExchangeService();
