import type {
  TradingSession
} from "./types.js";


let session: TradingSession = {

  id: crypto.randomUUID(),

  status: "IDLE"

};


export function getSession():
  TradingSession {

  return session;

}


export function setSession(
  value: TradingSession
): void {

  session = value;

}
