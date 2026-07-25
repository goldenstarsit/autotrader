import type {
  Position
} from "./types.js";

import {
  positionService
} from "./service.js";


export function openPosition(
  position: Position
): Position {

  return positionService.open(
    position
  );

}


export function closePosition(
  id: string
):
  Position | undefined {

  return positionService.close(
    id
  );

}


export function getActivePositions():
  Position[] {

  return positionService
    .list()
    .filter(
      position =>
        position.status === "OPEN"
    );

}
