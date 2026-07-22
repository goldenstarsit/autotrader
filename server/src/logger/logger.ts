import type { LogLevel } from "./types.js";

class Logger {
  private format(level: LogLevel, message: string): string {
    return `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}`;
  }

  trace(message: string): void {
    console.debug(this.format("trace", message));
  }

  debug(message: string): void {
    console.debug(this.format("debug", message));
  }

  info(message: string): void {
    console.info(this.format("info", message));
  }

  warn(message: string): void {
    console.warn(this.format("warn", message));
  }

  error(message: string): void {
    console.error(this.format("error", message));
  }

  fatal(message: string): void {
    console.error(this.format("fatal", message));
  }
}

export { Logger };
export const logger = new Logger();
