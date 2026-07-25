import type {
  Position
} from "./types.js";


export interface PositionPnL {

  symbol: string;

  quantity: number;

  entryPrice: number;

  currentPrice: number;

  profitLoss: number;

  percentage: number;

}


export function calculatePnL(
  position: Position
): PositionPnL {

  const difference =
    position.currentPrice -
    position.entryPrice;


  const profitLoss =
    difference *
    position.quantity;


  const percentage =
    (
      difference /
      position.entryPrice
    ) * 100;


  return {

    symbol:
      position.symbol,

    quantity:
      position.quantity,

    entryPrice:
      position.entryPrice,

    currentPrice:
      position.currentPrice,

    profitLoss,

    percentage

  };

}
