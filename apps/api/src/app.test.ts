import { describe, expect, it } from "vitest";
import { buildApp } from "./app.js";

describe("GET /health", () => {
  it("returns the CallHR API health response when the database is connected", async () => {
    const app = await buildApp({ checkDatabaseHealth: async () => "connected" });
    const response = await app.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      status: "ok",
      service: "callhr-api",
      database: "connected"
    });

    await app.close();
  });

  it("returns a safe failure response when the database is unavailable", async () => {
    const app = await buildApp({ checkDatabaseHealth: async () => "unavailable" });
    const response = await app.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(503);
    expect(response.json()).toEqual({
      status: "error",
      service: "callhr-api",
      database: "unavailable"
    });

    await app.close();
  });

  it("allows requests from the local frontend", async () => {
    const app = await buildApp({ checkDatabaseHealth: async () => "connected" });
    const response = await app.inject({
      method: "GET",
      url: "/health",
      headers: { origin: "http://localhost:5173" }
    });

    expect(response.headers["access-control-allow-origin"]).toBe("http://localhost:5173");
    await app.close();
  });
});
