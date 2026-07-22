import type {
  Order,
  OrderStatus
} from "./types.js";


import {
  orderStore
} from "./state.js";


export function updateOrderStatus(
  id: string,
  status: OrderStatus
): Order | null {

  const order =
    orderStore
      .get()
      .orders
      .find(
        item =>
          item.id === id
      );


  if (!order) {
    return null;
  }


  const updated: Order = {

    ...order,

    status,

    updatedAt:
      new Date()
        .toISOString()

  };


  orderStore.update(
    updated
  );


  return updated;
}


export function getOpenOrders(): Order[] {

  return (
    orderStore
      .get()
      .orders
      .filter(
        order =>
          order.status === "OPEN" ||
          order.status === "PENDING"
      )
  );

}


export function isOrderComplete(
  order: Order
): boolean {

  return (
    order.status === "FILLED" ||
    order.status === "CANCELLED" ||
    order.status === "FAILED"
  );

}
