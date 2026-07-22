import type {
  PriceTick
} from "../types.js";


export interface PriceHistory {
  symbol: string;
  ticks: PriceTick[];
}


export interface PriceState {
  prices: Map<string, PriceHistory>;
}
