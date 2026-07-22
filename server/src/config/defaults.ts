import type { AppConfig } from "./types.js";

export const DEFAULT_CONFIG: AppConfig = {
  server: {
    host: "0.0.0.0",
    port: 3000,
    environment: "development"
  },

  exchange: {
    apiKey: "",
    apiSecret: "",
    baseUrl: "https://api.binance.com",
    testnet: false
  },

  database: {
    path: "./data/database/autotrader.db"
  },

  logging: {
    level: "info"
  }
};
