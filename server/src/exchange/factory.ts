import {
  config
} from "../config/index.js";

import type {
  ExchangeAdapter
} from "./adapter.js";

import {
  BinanceClient
} from "./binance/client.js";


export function createExchangeAdapter(): ExchangeAdapter {

  switch (
    config.exchange.provider.toLowerCase()
  ) {

    case "binance":
      return new BinanceClient();


    default:
      throw new Error(
        `Unsupported exchange provider: ${config.exchange.provider}`
      );
  }
}
