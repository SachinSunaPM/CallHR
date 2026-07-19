import { config } from "dotenv";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const rootEnvironmentFile = resolve(currentDirectory, "../../../.env");

config({ path: rootEnvironmentFile });

const environmentSchema = z.object({
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  POSTGRES_DB: z.string().min(1),
  DATABASE_HOST: z.string().min(1),
  DATABASE_PORT: z.coerce.number().int().min(1).max(65535)
});

export type DatabaseEnvironment = z.infer<typeof environmentSchema>;

export function getDatabaseEnvironment(
  environment: NodeJS.ProcessEnv = process.env
): DatabaseEnvironment {
  return environmentSchema.parse(environment);
}
