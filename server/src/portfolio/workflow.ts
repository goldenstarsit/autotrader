import type {
  AssetBalance,
  Position
} from "./types.js";

import {
  portfolioService
} from "./service.js";


export function updatePortfolioBalance(
  balance: AssetBalance
): void {

  portfolioService.updateBalance(
    balance
  );

}


export function openPortfolioPosition(
  position: Position
): void {

  portfolioService.openPosition(
    position
  );

}


export function closePortfolioPosition(
  symbol: string
): void {

  portfolioService.closePosition(
    symbol
  );

}


export function getPortfolioState() {

  return portfolioService.state();

}


export function getPortfolioPositions() {

  return portfolioService.positions();

}


export function resetPortfolioWorkflow(): void {

  portfolioService.reset();

}
