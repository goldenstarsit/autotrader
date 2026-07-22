import {
  portfolioStore
} from "./state.js";


export interface AssetPrice {
  asset: string;
  price: number;
}


export function calculateValue(
  prices: AssetPrice[]
): number {

  const state =
    portfolioStore.get();


  let total = 0;


  for (
    const balance of state.balances
  ) {

    const market =
      prices.find(
        item =>
          item.asset === balance.asset
      );


    if (!market) {
      continue;
    }


    total +=
      balance.free *
      market.price;
  }


  return total;
}


export function getPositionValue(
  symbol: string,
  price: number
): number {

  const position =
    portfolioStore
      .get()
      .positions
      .find(
        item =>
          item.symbol === symbol
      );


  if (!position) {
    return 0;
  }


  return (
    position.quantity *
    price
  );
}
