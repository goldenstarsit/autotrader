import type {
  Position
} from "./types.js";

import {
  getPositions,
  addPosition,
  updatePosition
} from "./state.js";


export class PositionService {


  list():
    Position[] {

    return getPositions();

  }


  open(
    position: Position
  ): Position {

    addPosition(
      position
    );

    return position;

  }


  update(
    id: string,
    data: Partial<Position>
  ):
    Position | undefined {

    return updatePosition(
      id,
      data
    );

  }


  close(
    id: string
  ):
    Position | undefined {

    return updatePosition(
      id,
      {
        status: "CLOSED",
        closedAt:
          new Date().toISOString()
      }
    );

  }

}


export const positionService =
  new PositionService();
