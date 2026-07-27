import type {
  AssetBalance,
  Position
} from "./types.js";

import {
  updatePortfolioBalance,
  openPortfolioPosition,
  closePortfolioPosition,
  getPortfolioState,
  getPortfolioPositions,
  resetPortfolioWorkflow
} from "./workflow.js";


export function syncPortfolioBalance(
  balance: AssetBalance
): void {

  updatePortfolioBalance(
    balance
  );

}


export function registerPortfolioPosition(
  position: Position
): void {

  openPortfolioPosition(
    position
  );

}


export function releasePortfolioPosition(
  symbol: string
): void {

  closePortfolioPosition(
    symbol
  );

}


export function portfolioSnapshot() {

  return getPortfolioState();

}


export function portfolioPositions() {

  return getPortfolioPositions();

}


export function resetPortfolio(): void {

  resetPortfolioWorkflow();

}
