import type {
  StrategyContext,
  StrategyDecision
} from "./types.js";

import {
  strategyEngine
} from "./engine.js";

import {
  strategyService
} from "./service.js";


export function executeStrategy(
  context: StrategyContext
): StrategyDecision {

  const decision =
    strategyEngine.evaluate(
      context
    );

  strategyService.updateSignal(
    decision.action
  );

  return decision;

}


export function getCurrentSignal() {

  return strategyService
    .getState()
    .signal;

}
