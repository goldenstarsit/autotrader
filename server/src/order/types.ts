export type OrderSide =
  | "BUY"
  | "SELL";


export type OrderStatus =
  | "PENDING"
  | "OPEN"
  | "FILLED"
  | "PARTIALLY_FILLED"
  | "CANCELLED"
  | "FAILED";


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
