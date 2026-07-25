import type {
  StrategyContext,
  StrategyDecision,
  StrategySignal
} from "./types.js";

import {
  executeStrategy,
  getCurrentSignal
} from "./workflow.js";


export function runStrategy(
  context: StrategyContext
): StrategyDecision {

  return executeStrategy(
    context
  );

}


export function activeStrategySignal():
  StrategySignal {

  return getCurrentSignal();

}
