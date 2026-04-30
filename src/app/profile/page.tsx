import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile · Instagram",
  description: "Your profile",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto min-h-full max-w-lg bg-white px-4 py-6">
      <Link
        href="/feed"
        className="text-sm font-semibold text-[#0095f6] hover:opacity-90"
      >
        ← Back to feed
      </Link>
      <div className="mt-10 flex flex-col items-center text-center">
        <div
          className="h-24 w-24 rounded-full bg-linear-to-br from-amber-400 via-rose-500 to-purple-600 ring-2 ring-zinc-200"
          aria-hidden
        />
        <h1 className="mt-4 text-xl font-semibold text-zinc-900">you</h1>
        <p className="mt-2 max-w-sm text-sm text-zinc-500">
          Placeholder bio. You can connect real profile data later.
        </p>
      </div>
    </div>
  );
}
