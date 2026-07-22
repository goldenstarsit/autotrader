import type { Ticker } from "../types.js";


export async function getMarketTicker(
  symbol: string
): Promise<Ticker> {

  return {
    symbol,
    price: 0,
    timestamp: new Date().toISOString()
  };
}
