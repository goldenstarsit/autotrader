import type {
  ExchangeInfo,
  Ticker,
  Balance,
  OrderRequest,
  OrderResult
} from "./types.js";


export interface ExchangeAdapter {

  getInfo(): ExchangeInfo;

  getTicker(
    symbol: string
  ): Promise<Ticker>;

  getBalances():
    Promise<Balance[]>;

  createOrder(
    request: OrderRequest
  ): Promise<OrderResult>;

}


export class MockExchangeAdapter
  implements ExchangeAdapter
{

  getInfo(): ExchangeInfo {

    return {

      name: "Mock",

      testnet: true

    };

  }


  async getTicker(
    symbol: string
  ): Promise<Ticker> {

    return {

      symbol,

      price: 0,

      timestamp:
        new Date().toISOString()

    };

  }


  async getBalances():
    Promise<Balance[]> {

    return [];

  }


  async createOrder(
    request: OrderRequest
  ): Promise<OrderResult> {

    return {

      id:
        crypto.randomUUID(),

      symbol:
        request.symbol,

      side:
        request.side,

      quantity:
        request.quantity,

      price:
        request.price ?? 0,

      status:
        "created",

      createdAt:
        new Date().toISOString()

    };

  }

}
