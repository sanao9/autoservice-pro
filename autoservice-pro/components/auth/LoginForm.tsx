"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/features/auth/authSlice";
import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const data = await loginUser(
        email,
        password
      );

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
    >
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}