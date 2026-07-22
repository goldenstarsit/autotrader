import type {
  Order,
  OrderSide
} from "./types.js";


import {
  orderStore
} from "./state.js";


function generateId(): string {

  return (
    crypto.randomUUID()
  );

}


export function createOrder(
  symbol: string,
  side: OrderSide,
  quantity: number,
  price?: number
): Order {

  const now =
    new Date()
      .toISOString();


  const order: Order = {

    id: generateId(),

    symbol,

    side,

    quantity,

    ...(price !== undefined
      ? { price }
      : {}),

    status: "PENDING",

    createdAt: now,

    updatedAt: now
  };


  orderStore.add(
    order
  );


  return order;
}


export function getOrders(): Order[] {

  return (
    orderStore
      .get()
      .orders
  );

}


export function getOrder(
  id: string
): Order | null {

  return (
    orderStore
      .get()
      .orders
      .find(
        order =>
          order.id === id
      )
      ?? null
  );

}
