import type {
  StrategyContext,
  StrategyDecision
} from "./types.js";


import {
  strategyEngine
} from "./engine.js";


export interface Strategy {

  name: string;

  evaluate(
    context: StrategyContext
  ): StrategyDecision;
}


class StrategyRegistry {

  private strategies =
    new Map<string, Strategy>();


  register(
    strategy: Strategy
  ): void {

    this.strategies.set(
      strategy.name,
      strategy
    );
  }


  get(
    name: string
  ): Strategy | undefined {

    return this.strategies.get(
      name
    );
  }


  list(): string[] {

    return Array.from(
      this.strategies.keys()
    );
  }
}


export const strategyRegistry =
  new StrategyRegistry();


strategyRegistry.register({

  name: "default",

  evaluate(
    context: StrategyContext
  ): StrategyDecision {

    return strategyEngine.evaluate(
      context
    );
  }

});
