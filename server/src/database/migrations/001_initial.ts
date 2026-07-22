import type { Database } from "sql.js";

export const id = "001_initial";


export function up(
  db: Database
): void {

  db.run(`
    CREATE TABLE IF NOT EXISTS migrations (
      id TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);

}
