import config from "./index.js";
import type { AppConfig } from "./types.js";
import { validateConfig } from "./validator.js";

let cachedConfig: Readonly<AppConfig> | null = null;

export function loadConfig(): Readonly<AppConfig> {
  if (cachedConfig) {
    return cachedConfig;
  }

  validateConfig(config);

  cachedConfig = Object.freeze(config);

  return cachedConfig;
}

export function reloadConfig(): Readonly<AppConfig> {
  validateConfig(config);

  cachedConfig = Object.freeze(config);

  return cachedConfig;
}
