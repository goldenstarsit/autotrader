import { DEFAULT_CONFIG } from "./defaults.js";
import { getEnv, getNumberEnv, getBooleanEnv } from "./env.js";
import type { AppConfig } from "./types.js";

export const config: AppConfig = {
  server: {
    host: getEnv("SERVER_HOST", DEFAULT_CONFIG.server.host),
    port: getNumberEnv("SERVER_PORT", DEFAULT_CONFIG.server.port),
    environment: getEnv(
      "NODE_ENV",
      DEFAULT_CONFIG.server.environment
    ) as AppConfig["server"]["environment"]
  },

  exchange: {
    apiKey: getEnv("BINANCE_API_KEY", DEFAULT_CONFIG.exchange.apiKey),
    apiSecret: getEnv("BINANCE_API_SECRET", DEFAULT_CONFIG.exchange.apiSecret),
    baseUrl: getEnv("BINANCE_BASE_URL", DEFAULT_CONFIG.exchange.baseUrl),
    testnet: getBooleanEnv("BINANCE_TESTNET", DEFAULT_CONFIG.exchange.testnet)
  },

  database: {
    path: getEnv("DATABASE_PATH", DEFAULT_CONFIG.database.path)
  },

  logging: {
    level: getEnv(
      "LOG_LEVEL",
      DEFAULT_CONFIG.logging.level
    ) as AppConfig["logging"]["level"]
  }
};

export default config;
