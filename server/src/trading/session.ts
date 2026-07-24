import type {
  TradingSession
} from "./types.js";

import {
  getSession,
  setSession
} from "./state.js";


export function startSession():
  TradingSession {

  const session: TradingSession = {

    id: crypto.randomUUID(),

    status: "RUNNING",

    startedAt:
      new Date().toISOString()

  };

  setSession(session);

  return session;

}


export function stopSession():
  TradingSession {

  const current =
    getSession();


  const session: TradingSession = {

    ...current,

    status: "STOPPED",

    stoppedAt:
      new Date().toISOString()

  };

  setSession(session);

  return session;

}


export function pauseSession():
  TradingSession {

  const current =
    getSession();


  const session: TradingSession = {

    ...current,

    status: "PAUSED"

  };

  setSession(session);

  return session;

}
