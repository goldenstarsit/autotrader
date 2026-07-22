import type { AppConfig } from "../config/types.js";
import type { EngineState } from "./state.js";

export interface EngineContext {
  config: Readonly<AppConfig>;
  state: EngineState;
}
