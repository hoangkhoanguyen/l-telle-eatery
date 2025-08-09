import { pgSchema, serial, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";

// Dev schema
const devSchema = pgSchema("dev");

// User table schema
export const users = devSchema.table("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  phone: varchar("phone", { length: 20 }),
  avatar: text("avatar"),
  role: varchar("role", { length: 50 }).notNull().default("user"), // admin, manager, user
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Export type for TypeScript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;