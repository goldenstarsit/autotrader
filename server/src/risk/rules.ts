import type {
  RiskRule
} from "./types.js";


import {
  riskStore
} from "./state.js";


export function addRiskRule(
  rule: RiskRule
): void {

  const state =
    riskStore.get();


  state.rules.push(
    rule
  );


  riskStore.update(
    state
  );

}


export function getRiskRules():
  RiskRule[] {

  return (
    riskStore
      .get()
      .rules
  );

}


export function removeRiskRule(
  name: string
): void {

  const state =
    riskStore.get();


  state.rules =
    state.rules.filter(
      rule =>
        rule.name !== name
    );


  riskStore.update(
    state
  );

}


export function isRuleEnabled(
  name: string
): boolean {

  const rule =
    riskStore
      .get()
      .rules
      .find(
        item =>
          item.name === name
      );


  return (
    rule?.enabled
    ?? false
  );

}
