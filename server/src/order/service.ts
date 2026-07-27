import type {
  Order,
  OrderSide
} from "./types.js";

import {
  createOrder,
  getOrder,
  getOrders
} from "./repository.js";

import {
  executeOrder
} from "./executor.js";

import {
  updateOrderStatus,
  getOpenOrders,
  isOrderComplete
} from "./tracker.js";


export class OrderService {

  create(
    symbol: string,
    side: OrderSide,
    quantity: number,
    price?: number
  ): Order {

    return createOrder(
      symbol,
      side,
      quantity,
      price
    );

  }


  execute(
    order: Order
  ) {

    return executeOrder(
      order
    );

  }


  order(
    id: string
  ): Order | null {

    return getOrder(
      id
    );

  }


  orders(): Order[] {

    return getOrders();

  }


  openOrders(): Order[] {

    return getOpenOrders();

  }


  updateStatus(
    id: string,
    status: Order["status"]
  ) {

    return updateOrderStatus(
      id,
      status
    );

  }


  completed(
    order: Order
  ): boolean {

    return isOrderComplete(
      order
    );

  }

}


export const orderService =
  new OrderService();
