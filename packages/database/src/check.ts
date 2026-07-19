import { checkDatabaseHealth, closeDatabasePool } from "./index.js";

async function checkConnection(): Promise<void> {
  try {
    const health = await checkDatabaseHealth();

    if (health !== "connected") {
      process.exitCode = 1;
      return;
    }

    console.log("Database connection is healthy.");
  } finally {
    await closeDatabasePool();
  }
}

void checkConnection();
