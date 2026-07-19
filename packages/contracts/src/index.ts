export type HealthResponse = {
  status: "ok";
  service: string;
  database: "connected";
} | {
  status: "error";
  service: string;
  database: "unavailable";
};
