import type { EngineContext } from "./context.js";
import { eventBus } from "./events.js";

export async function startEngine(
  context: EngineContext
): Promise<void> {
  if (context.state.status === "running") {
    return;
  }

  context.state.status = "starting";

  eventBus.emit(
    "engine:start",
    context
  );

  try {
    context.state.status = "running";
    context.state.startedAt =
      new Date().toISOString();

    eventBus.emit(
      "engine:started",
      context
    );
  } catch (error) {
    context.state.status = "error";

    context.state.error =
      error instanceof Error
        ? error.message
        : String(error);

    eventBus.emit(
      "engine:error",
      context
    );

    throw error;
  }
}


export async function stopEngine(
  context: EngineContext
): Promise<void> {
  if (context.state.status === "stopped") {
    return;
  }

  context.state.status = "stopping";

  eventBus.emit(
    "engine:stop",
    context
  );

  context.state.status = "stopped";
  context.state.stoppedAt =
    new Date().toISOString();

  eventBus.emit(
    "engine:stopped",
    context
  );
}
