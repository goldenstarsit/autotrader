export type TradingStatus =
  | "IDLE"
  | "RUNNING"
  | "PAUSED"
  | "STOPPED";


export interface TradingSession {

  id: string;

  status: TradingStatus;

  startedAt?: string;

  stoppedAt?: string;

}
