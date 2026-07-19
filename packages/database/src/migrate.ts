import { migrate } from "drizzle-orm/node-postgres/migrator";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { closeDatabasePool, getDatabase } from "./index.js";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const migrationsFolder = resolve(currentDirectory, "../drizzle");

async function runMigrations(): Promise<void> {
  try {
    await migrate(getDatabase(), { migrationsFolder });
  } finally {
    await closeDatabasePool();
  }
}

void runMigrations();
