import type {
  AssetBalance,
  Position,
  PortfolioState
} from "./types.js";


import {
  portfolioStore
} from "./state.js";


import {
  setBalance
} from "./balance.js";


import {
  addPosition,
  removePosition
} from "./position.js";


export function getPortfolio():
  PortfolioState {

  return portfolioStore.get();

}


export function updateAssetBalance(
  balance: AssetBalance
): void {

  setBalance(
    balance
  );

}


export function openPosition(
  position: Position
): void {

  addPosition(
    position
  );

}


export function closePosition(
  symbol: string
): void {

  removePosition(
    symbol
  );

}


export function resetPortfolio(): void {

  portfolioStore.reset();

}
