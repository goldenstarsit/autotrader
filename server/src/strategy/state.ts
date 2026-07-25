import type {
  StrategyState
} from "./types.js";


let state: StrategyState = {

  signal: "HOLD",

  updatedAt:
    new Date().toISOString()

};


export function getStrategyState():
  StrategyState {

  return state;

}


export function setStrategyState(
  value: StrategyState
): void {

  state = value;

}
