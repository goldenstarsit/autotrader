export type EngineStatus =
  | "idle"
  | "starting"
  | "running"
  | "stopping"
  | "stopped"
  | "error";

export interface EngineState {
  status: EngineStatus;
  startedAt?: string;
  stoppedAt?: string;
  error?: string;
}
