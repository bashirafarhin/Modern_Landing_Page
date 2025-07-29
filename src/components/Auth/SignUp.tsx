"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchemaType } from "@/lib/validations/auth";
import PasswordRules from "./PasswordRules";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("✅ Validated data", data);
  };

  const passwordValue = watch("password") || "";
  const passwordError = errors.password?.message;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="name"
          placeholder="Full Name"
          {...register("name")}
          className="w-full border border-gray-500 px-4 py-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border border-gray-500 px-4 py-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full border border-gray-500 px-4 py-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Register
      </button>

      <PasswordRules value={passwordValue} zodError={passwordError} />

      <div className="text-center text-sm text-gray-500"></div>
    </form>
  );
}
