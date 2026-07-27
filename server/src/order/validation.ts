import type {
  Order
} from "./types.js";

export interface OrderValidation {

  valid: boolean;

  reason: string;

}

export function validateOrder(
  order: Order
): OrderValidation {

  if (!order.symbol.trim()) {

    return {
      valid: false,
      reason: "Symbol is required"
    };

  }

  if (order.quantity <= 0) {

    return {
      valid: false,
      reason: "Quantity must be greater than zero"
    };

  }

  if (
    order.price !== undefined &&
    order.price <= 0
  ) {

    return {
      valid: false,
      reason: "Price must be greater than zero"
    };

  }

  return {
    valid: true,
    reason: "Order validation passed"
  };

}
