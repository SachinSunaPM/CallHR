import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { getDatabaseEnvironment } from "./env.js";
import * as schema from "./schema.js";

export type DatabaseHealth = "connected" | "unavailable";

let pool: Pool | undefined;

export function getDatabasePool(): Pool {
  if (!pool) {
    const environment = getDatabaseEnvironment();
    pool = new Pool({
      host: environment.DATABASE_HOST,
      port: environment.DATABASE_PORT,
      database: environment.POSTGRES_DB,
      user: environment.POSTGRES_USER,
      password: environment.POSTGRES_PASSWORD
    });
  }

  return pool;
}

export function getDatabase() {
  return drizzle(getDatabasePool(), { schema });
}

export async function checkDatabaseHealth(): Promise<DatabaseHealth> {
  try {
    await getDatabasePool().query("SELECT 1");
    return "connected";
  } catch {
    return "unavailable";
  }
}

export async function closeDatabasePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = undefined;
  }
}
