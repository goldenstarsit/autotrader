import type {
  Exposure,
  RiskRule
} from "./types.js";


import {
  addRiskRule,
  getRiskRules
} from "./rules.js";


import {
  addExposure,
  getTotalExposure
} from "./exposure.js";


import {
  validateExposure
} from "./validator.js";


export function registerRule(
  rule: RiskRule
): void {

  addRiskRule(
    rule
  );

}


export function getRules():
  RiskRule[] {

  return getRiskRules();

}


export function updateExposure(
  exposure: Exposure
): void {

  addExposure(
    exposure
  );

}


export function checkTradeRisk(
  exposure: Exposure
) {

  return validateExposure(
    exposure
  );

}


export function portfolioExposure():
  number {

  return getTotalExposure();

}
