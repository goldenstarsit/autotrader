import type {
  RiskState
} from "./types.js";


class RiskStore {

  private state: RiskState = {

    rules: [],

    exposures: [],

    level: "LOW"

  };


  get(): RiskState {

    return this.state;

  }


  update(
    state: RiskState
  ): void {

    this.state = state;

  }


  reset(): void {

    this.state = {

      rules: [],

      exposures: [],

      level: "LOW"

    };

  }

}


export const riskStore =
  new RiskStore();
