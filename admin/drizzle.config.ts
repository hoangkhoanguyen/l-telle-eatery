import { defineConfig } from "drizzle-kit";
import "dotenv";
console.log("process.env.DB_HOST", process.env.DB_HOST);

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/configs/drizzle/schema.ts",
  out: "./src/configs/drizzle/migration",
  dbCredentials: {
    host: "103.90.225.108",
    port: 5432,
    user: "app",
    password: "ltelle@hagiang",
    database: "postgres",
    ssl: false,
  },
  verbose: true,
  strict: true,
});
