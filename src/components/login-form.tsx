"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/feed");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-5"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-offset-white placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/20"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className="rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-offset-white placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/20"
        />
      </div>
      <button
        type="submit"
        className="mt-1 rounded-lg bg-[#0095f6] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
      >
        Log in
      </button>
      <div className="flex flex-col items-center gap-3 text-center text-sm">
        <a
          href="#"
          className="text-[#0095f6] hover:opacity-80"
          onClick={(e) => e.preventDefault()}
        >
          Forgot password?
        </a>
        <p className="text-zinc-500">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-semibold text-[#0095f6] hover:opacity-80"
            onClick={(e) => e.preventDefault()}
          >
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}
