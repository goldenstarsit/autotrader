import type {
  Order
} from "./types.js";

export interface ExchangeExecution {

  success: boolean;

  order: Order;

  message: string;

}

export async function sendOrderToExchange(
  order: Order
): Promise<ExchangeExecution> {

  return {
    success: true,
    order,
    message: "Order accepted by exchange adapter"
  };

}
