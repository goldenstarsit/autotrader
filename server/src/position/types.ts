export type PositionSide =
  | "LONG"
  | "SHORT";


export type PositionStatus =
  | "OPEN"
  | "CLOSED";


export interface Position {

  id: string;

  symbol: string;

  side: PositionSide;

  quantity: number;

  entryPrice: number;

  currentPrice: number;

  status: PositionStatus;

  openedAt: string;

  closedAt?: string;

}
