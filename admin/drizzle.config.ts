import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/configs/drizzle/schema.ts",
  out: "./src/configs/drizzle/migration",
  dbCredentials: {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASENAME),
    ssl: false,
  },
  verbose: true,
  strict: true,
});
