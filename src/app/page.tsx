import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-white px-4 py-12">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Instagram
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Log in to continue
          </p>
        </div>
        <LoginForm />
      </main>
    </div>
  );
}
