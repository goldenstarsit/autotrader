import initSqlJs, {
  type Database
} from "sql.js";

import { config } from "../config/index.js";

export interface DatabaseConnection {
  instance: Database;
  path: string;
  connected: boolean;
}

let connection: DatabaseConnection | null = null;


export async function connectDatabase(): Promise<DatabaseConnection> {
  if (connection) {
    return connection;
  }

  const SQL = await initSqlJs();

  const database = new SQL.Database();

  connection = {
    instance: database,
    path: config.database.path,
    connected: true
  };

  return connection;
}


export function getDatabaseConnection(): DatabaseConnection {
  if (!connection) {
    throw new Error(
      "Database is not connected"
    );
  }

  return connection;
}


export function closeDatabase(): void {
  if (!connection) {
    return;
  }

  connection.instance.close();

  connection = null;
}
