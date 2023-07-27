"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupformSchema = exports.signinformSchema = void 0;
const zod_1 = require("zod");
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
exports.signinformSchema = zod_1.z.object({
    email: zod_1.z.string().nonempty("Email is required").email("Invalid email format"),
    password: zod_1.z
        .string()
        .nonempty("Password is required")
        .refine((value) => passwordRegex.test(value), {
        message: "Atleast 1 uppercase, 1 special character, 1 number, and 8 characters long.",
    }),
});
exports.signupformSchema = zod_1.z
    .object({
    email: zod_1.z
        .string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    password: zod_1.z
        .string()
        .nonempty("Password is required")
        .refine((value) => passwordRegex.test(value), {
        message: "Atleast 1 uppercase, 1 special character, 1 number, and 8 characters long.",
    }),
    confirmPassword: zod_1.z.string().nonempty("Confirm password is required"),
})
    .refine((data) => data.confirmPassword === data.password, {
    message: "Password doesnot match",
    path: ["confirmPassword"],
});
//# sourceMappingURL=zod.schema.js.map