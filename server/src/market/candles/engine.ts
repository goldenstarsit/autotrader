import type {
  PriceTick,
  Candle
} from "../types.js";


import type {
  CandleState
} from "./types.js";


class CandleEngine {

  private readonly state: CandleState = {
    candles: new Map()
  };


  addTick(
    tick: PriceTick
  ): void {

    const candles =
      this.state.candles.get(
        tick.symbol
      ) ?? [];


    const last =
      candles.at(-1);


    const currentTime =
      new Date(
        tick.timestamp
      ).getTime();


    const candleWindow =
      60 * 1000;


    if (
      !last ||
      currentTime -
      new Date(last.openTime).getTime()
      >= candleWindow
    ) {

      const candle: Candle = {
        symbol: tick.symbol,
        open: tick.price,
        high: tick.price,
        low: tick.price,
        close: tick.price,
        volume: tick.volume,
        openTime: tick.timestamp,
        closeTime: tick.timestamp
      };


      candles.push(
        candle
      );

    } else {

      last.high =
        Math.max(
          last.high,
          tick.price
        );

      last.low =
        Math.min(
          last.low,
          tick.price
        );

      last.close =
        tick.price;

      last.volume +=
        tick.volume;

      last.closeTime =
        tick.timestamp;
    }


    this.state.candles.set(
      tick.symbol,
      candles
    );
  }


  getCandles(
    symbol: string
  ): Candle[] {

    return (
      this.state.candles.get(
        symbol
      ) ?? []
    );
  }


  clear(): void {

    this.state.candles.clear();

  }
}


export const candleEngine =
  new CandleEngine();
