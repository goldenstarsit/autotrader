export interface AssetBalance {

  asset: string;

  free: number;

  locked: number;

}

export interface Position {

  symbol: string;

  quantity: number;

  averagePrice: number;

}

export interface PortfolioState {

  balances: AssetBalance[];

  positions: Position[];

}
