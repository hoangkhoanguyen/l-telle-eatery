import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function runMigration() {
  const pool = new Pool({
    host: process.env.DB_HOST || "103.90.225.108",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USERNAME || "app",
    password: process.env.DB_PASSWORD || "ltelle@hagiang",
    database: process.env.DB_DATABASENAME || "postgres",
    ssl: false,
  });

  const db = drizzle(pool);

  console.log("🚀 Bắt đầu chạy migration...");
  
  try {
    await migrate(db, {
      migrationsFolder: "./src/configs/drizzle/migration",
    });
    
    console.log("✅ Migration hoàn thành thành công!");
  } catch (error) {
    console.error("❌ Lỗi khi chạy migration:", error);
    process.exit(1);
  } finally {
    await pool.end();
    process.exit(0);
  }
}

runMigration();