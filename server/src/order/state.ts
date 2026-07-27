import type {
  Order,
  OrderState
} from "./types.js";

const state: OrderState = {

  orders: []

};

export const orderStore = {

  get(): OrderState {

    return state;

  },

  add(
    order: Order
  ): void {

    state.orders.push(
      order
    );

  },

  update(
    order: Order
  ): void {

    const index =
      state.orders.findIndex(
        item => item.id === order.id
      );

    if (index >= 0) {

      state.orders[index] =
        order;

    }

  },

  reset(): void {

    state.orders = [];

  }

};

export function getOrderState(): OrderState {

  return orderStore.get();

}
