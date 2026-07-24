export type TradeStatus =
  | "CREATED"
  | "EXECUTING"
  | "COMPLETED"
  | "CANCELLED";


export interface TradeLifecycle {

  id: string;

  status: TradeStatus;

  createdAt: string;

  updatedAt: string;

}


export function createTrade():
  TradeLifecycle {

  const now =
    new Date().toISOString();

  return {

    id:
      crypto.randomUUID(),

    status:
      "CREATED",

    createdAt:
      now,

    updatedAt:
      now

  };

}


export function executeTrade(
  trade: TradeLifecycle
): TradeLifecycle {

  return {

    ...trade,

    status:
      "EXECUTING",

    updatedAt:
      new Date().toISOString()

  };

}


export function completeTrade(
  trade: TradeLifecycle
): TradeLifecycle {

  return {

    ...trade,

    status:
      "COMPLETED",

    updatedAt:
      new Date().toISOString()

  };

}


export function cancelTrade(
  trade: TradeLifecycle
): TradeLifecycle {

  return {

    ...trade,

    status:
      "CANCELLED",

    updatedAt:
      new Date().toISOString()

  };

}
