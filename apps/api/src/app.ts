import Fastify from "fastify";
import cors from "@fastify/cors";
import type { HealthResponse } from "@callhr/contracts";

export async function buildApp() {
  const app = Fastify();

  await app.register(cors, { origin: "http://localhost:5173" });

  app.get("/health", async (): Promise<HealthResponse> => ({
    status: "ok",
    service: "callhr-api"
  }));

  return app;
}
