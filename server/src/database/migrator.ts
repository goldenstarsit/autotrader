import type { Database } from "sql.js";

import {
  id,
  up
} from "./migrations/001_initial.js";


interface Migration {
  id: string;
  up(db: Database): void;
}


const migrations: Migration[] = [
  {
    id,
    up
  }
];


export function runMigrations(
  db: Database
): void {

  db.run(`
    CREATE TABLE IF NOT EXISTS migrations (
      id TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);


  for (const migration of migrations) {

    const result = db.exec(
      `
      SELECT id
      FROM migrations
      WHERE id = '${migration.id}'
      `
    );


    if (result.length > 0) {
      continue;
    }


    migration.up(db);


    db.run(
      `
      INSERT INTO migrations
      (id, applied_at)
      VALUES (?, ?)
      `,
      [
        migration.id,
        new Date().toISOString()
      ]
    );
  }
}
