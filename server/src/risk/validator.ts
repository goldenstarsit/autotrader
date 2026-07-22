import type {
  Exposure,
  RiskRule
} from "./types.js";


import {
  getRiskRules
} from "./rules.js";


export interface RiskValidation {

  allowed: boolean;

  reason: string;

}


export function validateExposure(
  exposure: Exposure
): RiskValidation {

  const rules =
    getRiskRules();


  const maxExposure =
    rules.find(
      rule =>
        rule.name === "MAX_EXPOSURE" &&
        rule.enabled
    );


  if (
    maxExposure &&
    exposure.value > maxExposure.limit
  ) {

    return {

      allowed: false,

      reason:
        "Maximum exposure limit exceeded"

    };

  }


  return {

    allowed: true,

    reason:
      "Risk validation passed"

  };

}


export function validateQuantity(
  quantity: number,
  rule?: RiskRule
): RiskValidation {


  if (
    rule &&
    rule.enabled &&
    quantity > rule.limit
  ) {

    return {

      allowed: false,

      reason:
        "Quantity limit exceeded"

    };

  }


  return {

    allowed: true,

    reason:
      "Quantity validation passed"

  };

}
