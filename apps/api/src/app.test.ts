import { afterAll, describe, expect, it } from "vitest";
import { buildApp } from "./app.js";

const app = await buildApp();

afterAll(async () => {
  await app.close();
});

describe("GET /health", () => {
  it("returns the CallHR API health response", async () => {
    const response = await app.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      status: "ok",
      service: "callhr-api"
    });
  });

  it("allows requests from the local frontend", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/health",
      headers: { origin: "http://localhost:5173" }
    });

    expect(response.headers["access-control-allow-origin"]).toBe("http://localhost:5173");
  });
});
