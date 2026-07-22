import type {
  StrategyDecision,
  StrategyAction
} from "./types.js";


export function createSignal(
  action: StrategyAction,
  symbol: string,
  reason: string,
  confidence = 0
): StrategyDecision {

  return {
    action,
    symbol,
    confidence,
    reason,
    timestamp: new Date().toISOString()
  };
}
