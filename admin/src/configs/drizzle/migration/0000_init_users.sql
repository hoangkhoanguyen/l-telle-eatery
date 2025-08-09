-- Migration: 0000_init_users
-- Created at: 2024-12-26T00:00:00.000Z

CREATE SCHEMA IF NOT EXISTS "dev";

CREATE TABLE "dev"."users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(100) NOT NULL UNIQUE,
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL,
  "first_name" VARCHAR(100),
  "last_name" VARCHAR(100),
  "phone" VARCHAR(20),
  "avatar" TEXT,
  "role" VARCHAR(50) NOT NULL DEFAULT 'user',
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX "idx_users_email" ON "dev"."users" ("email");
CREATE INDEX "idx_users_username" ON "dev"."users" ("username");
CREATE INDEX "idx_users_role" ON "dev"."users" ("role");
CREATE INDEX "idx_users_is_active" ON "dev"."users" ("is_active");