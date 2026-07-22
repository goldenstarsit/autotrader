import type {
  PriceTick,
  Candle
} from "./types.js";


export type MarketEvent =
  | "market:tick"
  | "market:candle";


export interface MarketEventPayload {
  tick?: PriceTick;
  candle?: Candle;
}
