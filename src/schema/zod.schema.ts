import { z } from "zod";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

export const signinformSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  password: z
    .string()
    .nonempty("Password is required")
    .refine((value) => passwordRegex.test(value), {
      message:
        "Atleast 1 uppercase, 1 special character, 1 number, and 8 characters long.",
    }),
});

export const signupformSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email format"),
    password: z
      .string()
      .nonempty("Password is required")
      .refine((value) => passwordRegex.test(value), {
        message:
          "Atleast 1 uppercase, 1 special character, 1 number, and 8 characters long.",
      }),
    confirmPassword: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Password doesnot match",
    path: ["confirmPassword"],
  });
