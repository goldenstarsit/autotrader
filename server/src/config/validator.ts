import type { AppConfig } from "./types.js";

export function validateConfig(config: AppConfig): void {
  if (!config.server.host.trim()) {
    throw new Error("server.host is required");
  }

  if (config.server.port < 1 || config.server.port > 65535) {
    throw new Error("server.port must be between 1 and 65535");
  }

  if (!config.database.path.trim()) {
    throw new Error("database.path is required");
  }

  if (!config.database.backupPath.trim()) {
    throw new Error("database.backupPath is required");
  }

  if (!config.exchange.provider.trim()) {
    throw new Error("exchange.provider is required");
  }

  if (!config.logging.directory.trim()) {
    throw new Error("logging.directory is required");
  }
}
