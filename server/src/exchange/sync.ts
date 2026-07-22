import {
  exchangeService
} from "./service.js";

import {
  updateAssetBalance
} from "../portfolio/service.js";


export async function syncPortfolio():
  Promise<void> {

  const balances =
    await exchangeService.getBalances();


  for (
    const balance of balances
  ) {

    updateAssetBalance({

      asset:
        balance.asset,

      free:
        balance.free,

      locked:
        balance.locked

    });

  }

}
