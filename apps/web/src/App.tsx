import { useEffect, useState } from "react";
import type { HealthResponse } from "@callhr/contracts";

type HealthState =
  | { kind: "loading" }
  | { kind: "success"; response: HealthResponse }
  | { kind: "error" };

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

function isHealthResponse(value: unknown): value is HealthResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const response = value as Record<string, unknown>;
  return (
    (response.status === "ok" || response.status === "error") &&
    typeof response.service === "string" &&
    (response.database === "connected" || response.database === "unavailable")
  );
}

export function App() {
  const [health, setHealth] = useState<HealthState>({ kind: "loading" });

  useEffect(() => {
    let isCurrent = true;

    async function checkHealth(): Promise<void> {
      try {
        const response = await fetch(`${apiUrl}/health`);
        const data: unknown = await response.json();

        if (!isHealthResponse(data)) {
          throw new Error("The health response was not valid.");
        }

        if (isCurrent) {
          setHealth({ kind: "success", response: data });
        }
      } catch {
        if (isCurrent) {
          setHealth({ kind: "error" });
        }
      }
    }

    void checkHealth();

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <main>
      <h1>CallHR</h1>
      <p>This is the CallHR project foundation.</p>
      <section aria-live="polite" aria-label="Backend status">
        <h2>Backend status</h2>
        {health.kind === "loading" && <p>Checking the backend…</p>}
        {health.kind === "success" && (
          <>
            <p>
              API: {health.response.status} — {health.response.service}
            </p>
            <p>Database: {health.response.database}</p>
          </>
        )}
        {health.kind === "error" && <p>Could not reach the backend.</p>}
      </section>
    </main>
  );
}
