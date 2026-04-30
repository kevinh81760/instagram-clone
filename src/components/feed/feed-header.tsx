import Link from "next/link";

export function FeedHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-3 sm:px-8">
      <span className="text-lg font-semibold tracking-tight">Instagram</span>
      <Link
        href="/profile"
        className="block shrink-0"
        aria-label="Open profile"
      >
        <span className="block h-9 w-9 rounded-full bg-linear-to-br from-amber-400 via-rose-500 to-purple-600 ring-2 ring-white" />
      </Link>
    </header>
  );
}
