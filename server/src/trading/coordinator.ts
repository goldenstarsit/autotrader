import {
  getSession
} from "./state.js";

import {
  createTrade,
  executeTrade,
  completeTrade
} from "./lifecycle.js";

import type {
  TradeLifecycle
} from "./lifecycle.js";


export async function runTradingCycle():
  Promise<TradeLifecycle> {

  const session =
    getSession();

  if (
    session.status !== "RUNNING"
  ) {

    throw new Error(
      "Trading session is not running."
    );

  }


  let trade =
    createTrade();


  trade =
    executeTrade(
      trade
    );


  trade =
    completeTrade(
      trade
    );


  return trade;

}
