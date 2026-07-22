import type { AppConfig } from "./types.js";

export const DEFAULT_CONFIG: AppConfig = {
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
};
