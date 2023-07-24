import { writable } from "svelte/store";
import type { signinformSchema, signupformSchema } from "../schema/zod.schema";
import type { z } from "zod";

export type LoginFormValues = z.infer<typeof signinformSchema>;
export type SignupFormValues = z.infer<typeof signupformSchema>;

export const loginFormState = writable<LoginFormValues>({
  email: "",
  password: "",
});

export const signupFormState = writable<SignupFormValues>({
  email: "",
  password: "",
});

loginFormState.subscribe((value) => {
  console.log(value);
});

signupFormState.subscribe((value) => {
  console.log(value);
});
