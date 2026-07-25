import type {
  StrategyContext
} from "./types.js";

export interface ValidationResult {

  valid: boolean;

  reason?: string;

}

export function validateStrategyContext(
  context: StrategyContext
): ValidationResult {

  if (!context.symbol.trim()) {

    return {

      valid: false,

      reason: "Symbol is required"

    };

  }

  if (context.price <= 0) {

    return {

      valid: false,

      reason: "Price must be greater than zero"

    };

  }

  return {

    valid: true

  };

}
