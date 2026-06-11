import { z } from "zod";
export const studentSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 Char"),
    password: z.string().min(6, "Pass must be more then 6 Char"),
    confirmPassword: z.string(),
    gender: z.string().min(1, "select Gender"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match ",
    path: ["confirmPassword"],
  });
