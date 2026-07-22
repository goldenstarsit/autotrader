import type { AppConfig } from "../config/types.js";
import type { EngineContext } from "./context.js";
import { startEngine, stopEngine } from "./lifecycle.js";
import type { EngineState } from "./state.js";


export class Engine {
  private readonly context: EngineContext;


  constructor(
    config: Readonly<AppConfig>
  ) {
    const state: EngineState = {
      status: "idle"
    };

    this.context = {
      config,
      state
    };
  }


  async start(): Promise<void> {
    await startEngine(
      this.context
    );
  }


  async stop(): Promise<void> {
    await stopEngine(
      this.context
    );
  }


  getContext(): EngineContext {
    return this.context;
  }


  getState(): EngineState {
    return this.context.state;
  }
}
