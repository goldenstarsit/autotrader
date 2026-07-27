export type OrderSide =
  | "BUY"
  | "SELL";

export type OrderStatus =
  | "PENDING"
  | "OPEN"
  | "FILLED"
  | "CANCELLED"
  | "FAILED"
  | "REJECTED";

export interface Order {

  id: string;

  symbol: string;

  side: OrderSide;

  quantity: number;

  price?: number;

  status: OrderStatus;

  createdAt: string;

  updatedAt: string;

}

export interface OrderState {

  orders: Order[];

}
