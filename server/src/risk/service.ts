import type {
  Exposure,
  RiskRule
} from "./types.js";

import {
  addExposure,
  getExposure,
  getTotalExposure,
  clearExposure
} from "./exposure.js";

import {
  addRiskRule,
  getRiskRules,
  removeRiskRule,
  isRuleEnabled
} from "./rules.js";

import {
  validateExposure,
  validateQuantity
} from "./validator.js";


export class RiskService {

  registerRule(
    rule: RiskRule
  ): void {

    addRiskRule(rule);

  }


  listRules():
    RiskRule[] {

    return getRiskRules();

  }


  deleteRule(
    name: string
  ): void {

    removeRiskRule(name);

  }


  ruleEnabled(
    name: string
  ): boolean {

    return isRuleEnabled(name);

  }


  updateExposure(
    exposure: Exposure
  ): void {

    addExposure(exposure);

  }


  exposure(
    symbol: string
  ): Exposure | null {

    return getExposure(symbol);

  }


  totalExposure():
    number {

    return getTotalExposure();

  }


  clearExposures():
    void {

    clearExposure();

  }


  validateTrade(
    exposure: Exposure
  ) {

    return validateExposure(
      exposure
    );

  }


  validateTradeQuantity(
    quantity: number,
    rule?: RiskRule
  ) {

    return validateQuantity(
      quantity,
      rule
    );

  }

}


export const riskService =
  new RiskService();
