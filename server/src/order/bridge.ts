import type {
  Order
} from "./types.js";

import {
  validateOrder
} from "./validation.js";

import {
  sendOrderToExchange
} from "./exchange.js";

export async function executeValidatedOrder(
  order: Order
) {

  const validation =
    validateOrder(order);

  if (!validation.valid) {

    return {
      success: false,
      order,
      message: validation.reason
    };

  }

  return sendOrderToExchange(order);

}
