import type {
  ExchangeOrderRequest,
  ExchangeOrderResponse
} from "./types.js";

import {
  exchangeService
} from "./service.js";


export interface WorkflowResult {

  success: boolean;

  response?: ExchangeOrderResponse;

  message: string;

}


export async function executeWorkflow(
  request: ExchangeOrderRequest
): Promise<WorkflowResult> {

  try {

    const response =
      await exchangeService.createOrder(
        request
      );


    return {

      success: true,

      response,

      message:
        "Order executed successfully"

    };

  } catch (
    error
  ) {

    return {

      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Unknown workflow error"

    };

  }

}
