import type {
  StrategySignal,
  StrategyState
} from "./types.js";

import {
  getStrategyState,
  setStrategyState
} from "./state.js";


export class StrategyService {

  getState():
    StrategyState {

    return getStrategyState();

  }


  updateSignal(
    signal: StrategySignal
  ): StrategyState {

    const state: StrategyState = {

      signal,

      updatedAt:
        new Date().toISOString()

    };


    setStrategyState(
      state
    );


    return state;

  }

}


export const strategyService =
  new StrategyService();
