import { buildApp } from "./app.js";

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "127.0.0.1";

async function start(): Promise<void> {
  const app = await buildApp();

  const shutdown = async (): Promise<void> => {
    await app.close();
    process.exit(0);
  };

  process.once("SIGINT", shutdown);
  process.once("SIGTERM", shutdown);

  try {
    await app.listen({ port, host });
  } catch (error: unknown) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
