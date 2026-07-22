import type {
  Order
} from "./types.js";


import {
  orderStore
} from "./state.js";


export interface ExecutionResult {
  success: boolean;
  order: Order;
  message: string;
}


export async function executeOrder(
  order: Order
): Promise<ExecutionResult> {

  const updated: Order = {
    ...order,
    status: "OPEN",
    updatedAt:
      new Date().toISOString()
  };


  orderStore.update(
    updated
  );


  return {
    success: true,
    order: updated,
    message: "Order sent for execution"
  };
}
