import type {
  Exposure
} from "./types.js";


import {
  riskStore
} from "./state.js";


export function addExposure(
  exposure: Exposure
): void {

  const state =
    riskStore.get();


  const existing =
    state.exposures.find(
      item =>
        item.symbol === exposure.symbol
    );


  if (existing) {

    existing.quantity =
      exposure.quantity;

    existing.value =
      exposure.value;

  } else {

    state.exposures.push(
      exposure
    );

  }


  riskStore.update(
    state
  );

}


export function getExposure(
  symbol: string
): Exposure | null {

  return (
    riskStore
      .get()
      .exposures
      .find(
        item =>
          item.symbol === symbol
      )
      ?? null
  );

}


export function getTotalExposure():
  number {

  return (
    riskStore
      .get()
      .exposures
      .reduce(
        (
          total,
          item
        ) =>
          total + item.value,
        0
      )
  );

}


export function clearExposure():
  void {

  const state =
    riskStore.get();


  state.exposures = [];


  riskStore.update(
    state
  );

}
