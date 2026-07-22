export type EngineEvent =
  | "engine:start"
  | "engine:started"
  | "engine:stop"
  | "engine:stopped"
  | "engine:error";

type EventHandler<T = unknown> = (
  payload: T
) => void;

class EventBus {
  private handlers = new Map<
    EngineEvent,
    Set<EventHandler>
  >();

  on<T>(
    event: EngineEvent,
    handler: EventHandler<T>
  ): void {
    const listeners =
      this.handlers.get(event) ??
      new Set<EventHandler>();

    listeners.add(handler as EventHandler);

    this.handlers.set(event, listeners);
  }

  emit<T>(
    event: EngineEvent,
    payload?: T
  ): void {
    const listeners = this.handlers.get(event);

    if (!listeners) {
      return;
    }

    for (const handler of listeners) {
      handler(payload);
    }
  }

  off<T>(
    event: EngineEvent,
    handler: EventHandler<T>
  ): void {
    const listeners = this.handlers.get(event);

    if (!listeners) {
      return;
    }

    listeners.delete(handler as EventHandler);
  }

  clear(): void {
    this.handlers.clear();
  }
}

export const eventBus = new EventBus();
