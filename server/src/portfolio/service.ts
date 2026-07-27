import type {
  AssetBalance,
  Position,
  PortfolioState
} from "./types.js";

import {
  portfolioStore
} from "./state.js";

import {
  setBalance,
  getBalance
} from "./balance.js";

import {
  addPosition,
  removePosition,
  getPosition,
  getPositions
} from "./position.js";

import {
  calculateValue,
  getPositionValue,
  type AssetPrice
} from "./valuation.js";


export class PortfolioService {

  state(): PortfolioState {

    return portfolioStore.get();

  }


  balance(
    asset: string
  ): AssetBalance | null {

    return getBalance(asset);

  }


  updateBalance(
    balance: AssetBalance
  ): void {

    setBalance(balance);

  }


  position(
    symbol: string
  ): Position | null {

    return getPosition(symbol);

  }


  positions(): Position[] {

    return getPositions();

  }


  openPosition(
    position: Position
  ): void {

    addPosition(position);

  }


  closePosition(
    symbol: string
  ): void {

    removePosition(symbol);

  }


  portfolioValue(
    prices: AssetPrice[]
  ): number {

    return calculateValue(prices);

  }


  positionValue(
    symbol: string,
    price: number
  ): number {

    return getPositionValue(
      symbol,
      price
    );

  }


  reset(): void {

    portfolioStore.reset();

  }

}


export const portfolioService =
  new PortfolioService();


export function updateAssetBalance(
  balance: AssetBalance
): void {

  portfolioService.updateBalance(
    balance
  );

}
