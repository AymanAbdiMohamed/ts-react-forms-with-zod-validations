import { z } from "zod";

// Define the validation schema using Zod
export const userSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Invalid phone number (E.164 format recommended, e.g. +1234567890)",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .min(18, { message: "You must be at least 18 years old" })
    .max(120, { message: "Age cannot exceed 120" }),
  isActive: z.boolean(),
});

export type UserFormData = z.infer<typeof userSchema>;