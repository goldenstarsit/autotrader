import type {
  Position
} from "./types.js";


let positions: Position[] = [];


export function getPositions():
  Position[] {

  return positions;

}


export function addPosition(
  position: Position
): void {

  positions.push(position);

}


export function updatePosition(
  id: string,
  update: Partial<Position>
): Position | undefined {

  const index =
    positions.findIndex(
      item => item.id === id
    );


  if (index === -1) {

    return undefined;

  }


  const current =
    positions[index]!;


  const updated: Position = {

    id:
      update.id ?? current.id,

    symbol:
      update.symbol ?? current.symbol,

    side:
      update.side ?? current.side,

    quantity:
      update.quantity ?? current.quantity,

    entryPrice:
      update.entryPrice ?? current.entryPrice,

    currentPrice:
      update.currentPrice ?? current.currentPrice,

    status:
      update.status ?? current.status,

    openedAt:
      update.openedAt ?? current.openedAt,

    ...(update.closedAt !== undefined
      ? { closedAt: update.closedAt }
      : current.closedAt !== undefined
        ? { closedAt: current.closedAt }
        : {})

  };


  positions[index] =
    updated;


  return updated;

}


export function removePosition(
  id: string
): void {

  positions =
    positions.filter(
      item => item.id !== id
    );

}
