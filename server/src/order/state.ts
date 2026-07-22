import type {
  Order
} from "./types.js";


export interface OrderState {

  orders: Order[];

}


class OrderStore {

  private state: OrderState = {
    orders: []
  };


  get(): OrderState {

    return this.state;

  }


  add(
    order: Order
  ): void {

    this.state.orders.push(
      order
    );

  }


  update(
    order: Order
  ): void {

    const index =
      this.state.orders.findIndex(
        item =>
          item.id === order.id
      );


    if (index >= 0) {

      this.state.orders[index] =
        order;

    }

  }


  clear(): void {

    this.state.orders = [];

  }
}


export const orderStore =
  new OrderStore();
