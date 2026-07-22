import fs from "node:fs/promises";
import path from "node:path";

import { config } from "../config/index.js";
import {
  getDatabaseConnection
} from "./connection.js";


export interface BackupResult {
  success: boolean;
  path: string;
  createdAt: string;
}


export async function createBackup(): Promise<BackupResult> {

  const database =
    getDatabaseConnection();


  const backupDirectory =
    config.database.backupPath;


  await fs.mkdir(
    backupDirectory,
    {
      recursive: true
    }
  );


  const fileName =
    `backup-${Date.now()}.sqlite`;


  const backupPath =
    path.join(
      backupDirectory,
      fileName
    );


  const data =
    database.instance.export();


  await fs.writeFile(
    backupPath,
    Buffer.from(data)
  );


  return {
    success: true,
    path: backupPath,
    createdAt: new Date().toISOString()
  };
}
