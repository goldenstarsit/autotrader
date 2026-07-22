import type {
  PriceTick
} from "../types.js";


import type {
  PriceHistory,
  PriceState
} from "./types.js";


class PriceStore {

  private readonly state: PriceState = {
    prices: new Map()
  };


  addTick(
    tick: PriceTick
  ): void {

    const existing =
      this.state.prices.get(
        tick.symbol
      );


    if (existing) {

      existing.ticks.push(
        tick
      );

      return;
    }


    const history: PriceHistory = {
      symbol: tick.symbol,
      ticks: [
        tick
      ]
    };


    this.state.prices.set(
      tick.symbol,
      history
    );
  }


  getLatest(
    symbol: string
  ): PriceTick | null {

    const history =
      this.state.prices.get(
        symbol
      );


    if (!history) {
      return null;
    }


    return (
      history.ticks.at(-1)
      ?? null
    );
  }


  getHistory(
    symbol: string
  ): PriceTick[] {

    return (
      this.state.prices.get(symbol)
        ?.ticks
      ?? []
    );
  }


  clear(): void {

    this.state.prices.clear();

  }
}


export const priceStore =
  new PriceStore();
