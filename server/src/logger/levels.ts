import type { LogLevel } from "./types.js";

export const LOG_LEVELS: Record<LogLevel, number> = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
};

export function shouldLog(
  current: LogLevel,
  incoming: LogLevel
): boolean {
  return LOG_LEVELS[incoming] >= LOG_LEVELS[current];
}
