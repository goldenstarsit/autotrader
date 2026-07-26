import type {
  Exposure,
  RiskRule
} from "./types.js";

import {
  registerRiskRule,
  removeRiskRuleByName,
  updateRiskExposure,
  validateRisk,
  getPortfolioExposure,
  clearRiskExposure
} from "./workflow.js";


export function addTradingRiskRule(
  rule: RiskRule
): void {

  registerRiskRule(
    rule
  );

}


export function removeTradingRiskRule(
  name: string
): void {

  removeRiskRuleByName(
    name
  );

}


export function updateTradingExposure(
  exposure: Exposure
): void {

  updateRiskExposure(
    exposure
  );

}


export function validateTradingRisk(
  exposure: Exposure
) {

  return validateRisk(
    exposure
  );

}


export function tradingPortfolioExposure():
  number {

  return getPortfolioExposure();

}


export function resetTradingExposure():
  void {

  clearRiskExposure();

}
