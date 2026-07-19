import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("App", () => {
  it("shows the backend health result after loading", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ status: "ok", service: "callhr-api", database: "connected" }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        })
      )
    );

    render(<App />);

    expect(screen.getByText("Checking the backend…")).toBeInTheDocument();
    expect(await screen.findByText("API: ok — callhr-api")).toBeInTheDocument();
    expect(screen.getByText("Database: connected")).toBeInTheDocument();
  });

  it("shows an unavailable database when the backend returns its safe 503 response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ status: "error", service: "callhr-api", database: "unavailable" }), {
          status: 503,
          headers: { "Content-Type": "application/json" }
        })
      )
    );

    render(<App />);

    expect(await screen.findByText("API: error — callhr-api")).toBeInTheDocument();
    expect(screen.getByText("Database: unavailable")).toBeInTheDocument();
  });

  it("shows an error when the backend cannot be reached", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network error")));

    render(<App />);

    expect(await screen.findByText("Could not reach the backend.")).toBeInTheDocument();
  });
});
