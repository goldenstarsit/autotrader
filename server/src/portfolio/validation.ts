import type {
  AssetBalance,
  Position
} from "./types.js";

export interface PortfolioValidation {

  valid: boolean;

  reason: string;

}


export function validateBalance(
  balance: AssetBalance
): PortfolioValidation {

  if (!balance.asset.trim()) {

    return {

      valid: false,

      reason: "Asset is required"

    };

  }

  if (
    balance.free < 0 ||
    balance.locked < 0
  ) {

    return {

      valid: false,

      reason: "Balance values cannot be negative"

    };

  }

  return {

    valid: true,

    reason: "Balance validation passed"

  };

}


export function validatePosition(
  position: Position
): PortfolioValidation {

  if (!position.symbol.trim()) {

    return {

      valid: false,

      reason: "Symbol is required"

    };

  }

  if (
    position.quantity <= 0
  ) {

    return {

      valid: false,

      reason: "Quantity must be greater than zero"

    };

  }

  if (
    position.averagePrice <= 0
  ) {

    return {

      valid: false,

      reason: "Average price must be greater than zero"

    };

  }

  return {

    valid: true,

    reason: "Position validation passed"

  };

}
