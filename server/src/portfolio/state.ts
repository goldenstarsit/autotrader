import type {
  PortfolioState
} from "./types.js";

const state: PortfolioState = {

  balances: [],

  positions: []

};

export const portfolioStore = {

  get(): PortfolioState {

    return state;

  },

  update(
    value: PortfolioState
  ): void {

    state.balances =
      value.balances;

    state.positions =
      value.positions;

  },

  reset(): void {

    state.balances = [];

    state.positions = [];

  }

};
