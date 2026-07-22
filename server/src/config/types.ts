export interface ServerConfig {
  host: string;
  port: number;
  environment: "development" | "production" | "test";
}

export interface ExchangeConfig {
  apiKey: string;
  apiSecret: string;
  baseUrl: string;
  testnet: boolean;
}

export interface DatabaseConfig {
  path: string;
}

export interface LoggingConfig {
  level: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
}

export interface AppConfig {
  server: ServerConfig;
  exchange: ExchangeConfig;
  database: DatabaseConfig;
  logging: LoggingConfig;
}
