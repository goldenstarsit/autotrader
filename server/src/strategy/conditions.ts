import type {
  StrategyContext
} from "./types.js";


export interface ConditionResult {
  passed: boolean;
  reason: string;
}


export function priceAbove(
  context: StrategyContext,
  value: number
): ConditionResult {

  return {
    passed: context.price > value,
    reason:
      context.price > value
        ? "Price is above target"
        : "Price is below target"
  };
}


export function priceBelow(
  context: StrategyContext,
  value: number
): ConditionResult {

  return {
    passed: context.price < value,
    reason:
      context.price < value
        ? "Price is below target"
        : "Price is above target"
  };
}


export function isMarketReady(
  context: StrategyContext
): ConditionResult {

  return {
    passed:
      context.price > 0,
    reason:
      context.price > 0
        ? "Market data available"
        : "Invalid market data"
  };
}
