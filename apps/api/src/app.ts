import Fastify from "fastify";
import cors from "@fastify/cors";
import type { HealthResponse } from "@callhr/contracts";
import { checkDatabaseHealth, type DatabaseHealth } from "@callhr/database";

type BuildAppOptions = {
  checkDatabaseHealth?: () => Promise<DatabaseHealth>;
};

export async function buildApp({ checkDatabaseHealth: healthCheck = checkDatabaseHealth }: BuildAppOptions = {}) {
  const app = Fastify();

  await app.register(cors, { origin: "http://localhost:5173" });

  app.get("/health", async (_request, reply): Promise<HealthResponse> => {
    const database = await healthCheck();

    if (database === "unavailable") {
      return reply.code(503).send({
        status: "error",
        service: "callhr-api",
        database
      });
    }

    return {
      status: "ok",
      service: "callhr-api",
      database
    };
  });

  return app;
}
