export interface ServerConfig {
  host: string;
  port: number;
  env: "development" | "production" | "test";
}

export interface DatabaseConfig {
  path: string;
  backupPath: string;
}

export interface ExchangeConfig {
  provider: string;
  testnet: boolean;
  apiKey: string;
  apiSecret: string;
}

export interface LoggingConfig {
  level: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
  directory: string;
}

export interface Config {
  server: ServerConfig;
  database: DatabaseConfig;
  exchange: ExchangeConfig;
  logging: LoggingConfig;
}

/*
 * Backward compatibility.
 * Existing files currently import AppConfig.
 */
export type AppConfig = Config;
