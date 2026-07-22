import type {
  PriceTick
} from "../types.js";


export type WebSocketEvent =
  | "connected"
  | "disconnected"
  | "tick"
  | "error";


export interface WebSocketPayload {
  tick?: PriceTick;
  error?: Error;
}
