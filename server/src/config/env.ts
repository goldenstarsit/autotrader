export function getEnv(
  key: string,
  fallback: string
): string {
  return process.env[key] ?? fallback;
}

export function getNumberEnv(
  key: string,
  fallback: number
): number {
  const value = process.env[key];

  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  return Number.isNaN(parsed) ? fallback : parsed;
}

export function getBooleanEnv(
  key: string,
  fallback: boolean
): boolean {
  const value = process.env[key];

  if (!value) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}
