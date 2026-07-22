import type {
  Candle
} from "../types.js";


export interface CandleState {
  candles: Map<string, Candle[]>;
}
