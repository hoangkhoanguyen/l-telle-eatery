import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .max(255, {
      error: "Username is too long",
    })
    .min(6, { error: "Username must be at least 6 characters" }),
  password: z
    .string()
    .max(255, {
      error: "Password is too long",
    })
    .min(6, { error: "Password must be at least 6 characters" }),
});
