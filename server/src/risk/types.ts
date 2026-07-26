export type RiskLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export interface RiskState {
  level: RiskLevel;
  updatedAt: string;
}

export interface Exposure {
  symbol: string;
  quantity: number;
  value: number;
}

export interface RiskRule {
  name: string;
  enabled: boolean;
  limit: number;
}

export interface RiskStoreState {
  state: RiskState;
  exposures: Exposure[];
  rules: RiskRule[];
}
