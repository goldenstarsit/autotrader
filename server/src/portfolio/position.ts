import type {
  Position
} from "./types.js";


import {
  portfolioStore
} from "./state.js";


export function getPosition(
  symbol: string
): Position | null {

  const state =
    portfolioStore.get();


  return (
    state.positions.find(
      position =>
        position.symbol === symbol
    )
    ?? null
  );
}


export function addPosition(
  position: Position
): void {

  const state =
    portfolioStore.get();


  state.positions.push(
    position
  );


  portfolioStore.update(
    state
  );
}


export function updatePosition(
  symbol: string,
  quantity: number,
  averagePrice: number
): void {

  const state =
    portfolioStore.get();


  const position =
    state.positions.find(
      item =>
        item.symbol === symbol
    );


  if (!position) {
    return;
  }


  position.quantity =
    quantity;

  position.averagePrice =
    averagePrice;


  portfolioStore.update(
    state
  );
}


export function removePosition(
  symbol: string
): void {

  const state =
    portfolioStore.get();


  state.positions =
    state.positions.filter(
      position =>
        position.symbol !== symbol
    );


  portfolioStore.update(
    state
  );
}


export function getPositions(): Position[] {

  return portfolioStore
    .get()
    .positions;
}
