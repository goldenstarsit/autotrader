export class ExchangeError extends Error {

  constructor(
    message: string,
    public readonly code = "EXCHANGE_ERROR"
  ) {

    super(message);

    this.name = "ExchangeError";

  }

}


export function normalizeError(
  error: unknown
): ExchangeError {

  if (
    error instanceof ExchangeError
  ) {

    return error;

  }


  if (
    error instanceof Error
  ) {

    return new ExchangeError(
      error.message
    );

  }


  return new ExchangeError(
    "Unknown exchange error"
  );

}


export function shouldRetry(
  error: ExchangeError
): boolean {

  return (
    error.code === "NETWORK_ERROR" ||
    error.code === "TIMEOUT"
  );

}
