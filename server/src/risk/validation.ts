import type {
  Exposure,
  RiskRule
} from "./types.js";

import {
  riskService
} from "./service.js";


export function validateRiskExposure(
  exposure: Exposure
) {

  return riskService.validateTrade(
    exposure
  );

}


export function validateRiskQuantity(
  quantity: number,
  rule?: RiskRule
) {

  return riskService.validateTradeQuantity(
    quantity,
    rule
  );

}


export function validatePortfolioRisk(
  exposure: Exposure
) {

  const trade =
    validateRiskExposure(
      exposure
    );

  if (!trade.allowed) {

    return trade;

  }

  return {

    allowed: true,

    reason:
      "Portfolio risk validation passed"

  };

}
