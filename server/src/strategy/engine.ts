import type {
  StrategyContext,
  StrategyDecision
} from "./types.js";


import {
  createSignal
} from "./signals.js";


import {
  canBuy,
  canSell
} from "./rules.js";


export class StrategyEngine {


  evaluate(
    context: StrategyContext
  ): StrategyDecision {


    const buyRule =
      canBuy(
        context,
        0
      );


    if (buyRule.allowed) {

      return createSignal(
        "BUY",
        context.symbol,
        buyRule.reason,
        0.5
      );

    }


    const sellRule =
      canSell(
        context,
        0
      );


    if (sellRule.allowed) {

      return createSignal(
        "SELL",
        context.symbol,
        sellRule.reason,
        0.5
      );

    }


    return createSignal(
      "HOLD",
      context.symbol,
      "No strategy condition matched",
      0
    );
  }
}


export const strategyEngine =
  new StrategyEngine();
