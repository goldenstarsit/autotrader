import { DEFAULT_CONFIG } from "./defaults.js";
import { getEnv, getNumberEnv, getBooleanEnv } from "./env.js";
import { validateConfig } from "./validator.js";
import type { AppConfig } from "./types.js";

export const config: AppConfig = {
  server: {
    host: getEnv(
      "SERVER_HOST",
      DEFAULT_CONFIG.server.host
    ),
    port: getNumberEnv(
      "SERVER_PORT",
      DEFAULT_CONFIG.server.port
    ),
    env: getEnv(
      "NODE_ENV",
      DEFAULT_CONFIG.server.env
    ) as AppConfig["server"]["env"]
  },

  database: {
    path: getEnv(
      "DATABASE_PATH",
      DEFAULT_CONFIG.database.path
    ),
    backupPath: getEnv(
      "DATABASE_BACKUP_PATH",
      DEFAULT_CONFIG.database.backupPath
    )
  },

  exchange: {
    provider: getEnv(
      "EXCHANGE_PROVIDER",
      DEFAULT_CONFIG.exchange.provider
    ),
    testnet: getBooleanEnv(
      "EXCHANGE_TESTNET",
      DEFAULT_CONFIG.exchange.testnet
    ),
    apiKey: getEnv(
      "EXCHANGE_API_KEY",
      DEFAULT_CONFIG.exchange.apiKey
    ),
    apiSecret: getEnv(
      "EXCHANGE_API_SECRET",
      DEFAULT_CONFIG.exchange.apiSecret
    )
  },

  logging: {
    level: getEnv(
      "LOG_LEVEL",
      DEFAULT_CONFIG.logging.level
    ) as AppConfig["logging"]["level"],
    directory: getEnv(
      "LOG_DIRECTORY",
      DEFAULT_CONFIG.logging.directory
    )
  }
};

validateConfig(config);

export default config;

export * from "./types.js";
export * from "./constants.js";
export * from "./defaults.js";
export * from "./loader.js";
export * from "./validator.js";
