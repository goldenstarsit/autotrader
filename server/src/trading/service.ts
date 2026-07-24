import type {
  TradingSession
} from "./types.js";

import {
  startSession,
  stopSession,
  pauseSession
} from "./session.js";

import {
  runTradingCycle
} from "./coordinator.js";

import type {
  TradeLifecycle
} from "./lifecycle.js";


export class TradingService {

  start(): TradingSession {

    return startSession();

  }


  stop(): TradingSession {

    return stopSession();

  }


  pause(): TradingSession {

    return pauseSession();

  }


  async run():
    Promise<TradeLifecycle> {

    return runTradingCycle();

  }

}


export const tradingService =
  new TradingService();
