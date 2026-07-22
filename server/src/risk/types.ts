export type RiskLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH";


export interface RiskRule {

  name: string;

  enabled: boolean;

  limit: number;

}


export interface Exposure {

  symbol: string;

  quantity: number;

  value: number;

}


export interface RiskState {

  rules: RiskRule[];

  exposures: Exposure[];

  level: RiskLevel;

}
