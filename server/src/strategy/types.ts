export type StrategyAction =
  | "BUY"
  | "SELL"
  | "HOLD";


export interface StrategyContext {
  symbol: string;
  price: number;
  timestamp: string;
}


export interface StrategyDecision {
  action: StrategyAction;
  symbol: string;
  confidence: number;
  reason: string;
  timestamp: string;
}
