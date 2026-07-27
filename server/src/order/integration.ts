import type {
  Order,
  OrderSide
} from "./types.js";

import {
  createTradingOrder,
  executeTradingOrder,
  updateTradingOrderStatus,
  getTradingOrder,
  getTradingOrders
} from "./workflow.js";


export function submitOrder(
  symbol: string,
  side: OrderSide,
  quantity: number,
  price?: number
): Order {

  return createTradingOrder(
    symbol,
    side,
    quantity,
    price
  );

}


export async function processOrder(
  order: Order
) {

  return executeTradingOrder(
    order
  );

}


export function changeOrderStatus(
  id: string,
  status: Order["status"]
) {

  return updateTradingOrderStatus(
    id,
    status
  );

}


export function findOrder(
  id: string
) {

  return getTradingOrder(
    id
  );

}


export function listOrders() {

  return getTradingOrders();

}
