import type {
  Order
} from "./types.js";


export interface OrderHistoryEntry {

  order: Order;

  completedAt: string;

}


class OrderHistoryStore {

  private history:
    OrderHistoryEntry[] = [];


  add(
    order: Order
  ): void {

    this.history.push({

      order,

      completedAt:
        new Date()
          .toISOString()

    });

  }


  getAll():
    OrderHistoryEntry[] {

    return this.history;

  }


  clear(): void {

    this.history = [];

  }

}


export const orderHistory =
  new OrderHistoryStore();
