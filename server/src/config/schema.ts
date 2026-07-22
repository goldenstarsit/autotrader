import type { AppConfig } from "./types.js";

export interface ConfigSchema {
  readonly defaults: Readonly<AppConfig>;
  readonly requiredEnv: readonly string[];
}

export const CONFIG_SCHEMA: ConfigSchema = {
  defaults: {
    server: {
      host: "0.0.0.0",
      port: 3000,
      env: "development"
    },

    database: {
      path: "./data/database/autotrader.db",
      backupPath: "./data/backups"
    },

    exchange: {
      provider: "binance",
      testnet: false,
      apiKey: "",
      apiSecret: ""
    },

    logging: {
      level: "info",
      directory: "./data/logs"
    }
  },

  requiredEnv: []
} as const;
