export type StrategySignal =
  | "BUY"
  | "SELL"
  | "HOLD";

export type StrategyAction =
  StrategySignal;

export interface StrategyState {

  signal: StrategySignal;

  updatedAt: string;

}

export interface StrategyContext {

  symbol: string;

  price: number;

}

export interface StrategyDecision {

  action: StrategyAction;

  symbol: string;

  confidence: number;

  reason: string;

  timestamp: string;

}
