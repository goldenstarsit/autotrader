import type {
  PortfolioState
} from "./types.js";


class PortfolioStore {

  private state: PortfolioState = {

    balances: [],

    positions: [],

    updatedAt:
      new Date().toISOString()
  };


  get(): PortfolioState {

    return this.state;

  }


  update(
    state: PortfolioState
  ): void {

    this.state = {
      ...state,
      updatedAt:
        new Date().toISOString()
    };

  }


  reset(): void {

    this.state = {

      balances: [],

      positions: [],

      updatedAt:
        new Date().toISOString()
    };

  }

}


export const portfolioStore =
  new PortfolioStore();
