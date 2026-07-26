import type {
  RiskState,
  RiskStoreState
} from "./types.js";

const store: RiskStoreState = {
  state: {
    level: "LOW",
    updatedAt: new Date().toISOString()
  },
  exposures: [],
  rules: []
};

export const riskStore = {
  get(): RiskStoreState {
    return store;
  },

  update(value: RiskStoreState): void {
    store.state = value.state;
    store.exposures = value.exposures;
    store.rules = value.rules;
  }
};

export function getRiskState(): RiskState {
  return riskStore.get().state;
}

export function setRiskState(
  value: RiskState
): void {
  riskStore.get().state = value;
}
