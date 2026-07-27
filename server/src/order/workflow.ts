import type {
  Order,
  OrderSide
} from "./types.js";

import {
  orderService
} from "./service.js";


export function createTradingOrder(
  symbol: string,
  side: OrderSide,
  quantity: number,
  price?: number
): Order {

  return orderService.create(
    symbol,
    side,
    quantity,
    price
  );

}


export async function executeTradingOrder(
  order: Order
) {

  return orderService.execute(
    order
  );

}


export function updateTradingOrderStatus(
  id: string,
  status: Order["status"]
) {

  return orderService.updateStatus(
    id,
    status
  );

}


export function getTradingOrder(
  id: string
) {

  return orderService.order(
    id
  );

}


export function getTradingOrders() {

  return orderService.orders();

}


export function getPendingTradingOrders() {

  return orderService.openOrders();

}


export function isTradingOrderCompleted(
  order: Order
): boolean {

  return orderService.completed(
    order
  );

}
