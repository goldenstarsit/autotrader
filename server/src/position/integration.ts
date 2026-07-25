import type {
  Position
} from "./types.js";

import {
  openPosition,
  closePosition,
  getActivePositions
} from "./workflow.js";


export function registerPosition(
  position: Position
): Position {

  return openPosition(
    position
  );

}


export function releasePosition(
  id: string
):
  Position | undefined {

  return closePosition(
    id
  );

}


export function listOpenPositions():
  Position[] {

  return getActivePositions();

}
