import type {
  StrategyContext
} from "./types.js";

import {
  isMarketReady,
  priceAbove,
  priceBelow
} from "./conditions.js";


export interface RuleResult {
  allowed: boolean;
  reason: string;
}


export function canBuy(
  context: StrategyContext,
  minimumPrice: number
): RuleResult {

  const market =
    isMarketReady(context);


  if (!market.passed) {
    return {
      allowed: false,
      reason: market.reason
    };
  }


  const condition =
    priceBelow(
      context,
      minimumPrice
    );


  return {
    allowed: condition.passed,
    reason: condition.reason
  };
}


export function canSell(
  context: StrategyContext,
  targetPrice: number
): RuleResult {

  const market =
    isMarketReady(context);


  if (!market.passed) {
    return {
      allowed: false,
      reason: market.reason
    };
  }


  const condition =
    priceAbove(
      context,
      targetPrice
    );


  return {
    allowed: condition.passed,
    reason: condition.reason
  };
}
