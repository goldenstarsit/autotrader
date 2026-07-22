import {
  ExchangeClient
} from "./client.js";

import {
  createExchangeAdapter
} from "./factory.js";

import type {
  Balance,
  OrderRequest,
  OrderResult,
  Ticker
} from "./types.js";


const client =
  new ExchangeClient(
    createExchangeAdapter()
  );


export async function getTicker(
  symbol: string
): Promise<Ticker> {

  return client.getTicker(symbol);
}


export async function getBalances(): Promise<Balance[]> {

  return client.getBalances();
}


export async function createOrder(
  request: OrderRequest
): Promise<OrderResult> {

  return client.createOrder(request);
}


export function getExchangeInfo() {

  return client.getInfo();
}
