export interface DatabaseOptions {
  path: string;
  readonly?: boolean;
}

export interface Migration {
  id: string;
  name: string;
  up(): Promise<void> | void;
}

export interface DatabaseHealth {
  connected: boolean;
  path: string;
}
