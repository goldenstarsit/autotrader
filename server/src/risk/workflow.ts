import type {
  Exposure,
  RiskRule
} from "./types.js";

import {
  riskService
} from "./service.js";


export function registerRiskRule(
  rule: RiskRule
): void {

  riskService.registerRule(
    rule
  );

}


export function removeRiskRuleByName(
  name: string
): void {

  riskService.deleteRule(
    name
  );

}


export function updateRiskExposure(
  exposure: Exposure
): void {

  riskService.updateExposure(
    exposure
  );

}


export function validateRisk(
  exposure: Exposure
) {

  return riskService.validateTrade(
    exposure
  );

}


export function getPortfolioExposure():
  number {

  return riskService.totalExposure();

}


export function clearRiskExposure():
  void {

  riskService.clearExposures();

}
