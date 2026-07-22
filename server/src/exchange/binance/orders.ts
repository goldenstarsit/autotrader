import type {
  OrderRequest,
  OrderResult
} from "../types.js";


export async function placeOrder(
  request: OrderRequest
): Promise<OrderResult> {

  return {
    id: crypto.randomUUID(),
    symbol: request.symbol,
    side: request.side,
    quantity: request.quantity,
    price: request.price ?? 0,
    status: "created",
    createdAt: new Date().toISOString()
  };
}
