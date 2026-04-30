import type { Metadata } from "next";
import { Feed } from "@/components/feed/feed";
import { FeedHeader } from "@/components/feed/feed-header";

export const metadata: Metadata = {
  title: "Feed · Instagram",
  description: "Your feed",
};

export default function FeedPage() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col bg-white">
      <FeedHeader />
      <main className="flex-1 px-6 py-8 sm:px-8">
        <Feed />
      </main>
    </div>
  );
}
