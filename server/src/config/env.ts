export function getEnv(name: string, defaultValue = ""): string {
  const value = process.env[name];

  if (value === undefined || value.trim() === "") {
    return defaultValue;
  }

  return value.trim();
}

export function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (value === undefined || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value.trim();
}

export function getNumberEnv(
  name: string,
  defaultValue: number
): number {
  const value = process.env[name];

  if (value === undefined || value.trim() === "") {
    return defaultValue;
  }

  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(
      `Environment variable ${name} must be a valid number.`
    );
  }

  return parsed;
}

export function getBooleanEnv(
  name: string,
  defaultValue: boolean
): boolean {
  const value = process.env[name];

  if (value === undefined || value.trim() === "") {
    return defaultValue;
  }

  return ["true", "1", "yes", "on"].includes(
    value.trim().toLowerCase()
  );
}
