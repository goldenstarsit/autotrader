import type {
  AssetBalance
} from "./types.js";


import {
  portfolioStore
} from "./state.js";


export function getBalance(
  asset: string
): AssetBalance | null {

  const state =
    portfolioStore.get();


  return (
    state.balances.find(
      item =>
        item.asset === asset
    )
    ?? null
  );
}


export function setBalance(
  balance: AssetBalance
): void {

  const state =
    portfolioStore.get();


  const existing =
    state.balances.findIndex(
      item =>
        item.asset === balance.asset
    );


  if (existing >= 0) {

    state.balances[existing] =
      balance;

  } else {

    state.balances.push(
      balance
    );
  }


  portfolioStore.update(
    state
  );
}


export function updateBalance(
  asset: string,
  free: number,
  locked = 0
): void {

  setBalance({
    asset,
    free,
    locked
  });

}
