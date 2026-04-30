import Image from "next/image";
import type { MockFeedPost } from "@/lib/feed-mocks";

const authorNames = ["Rohit", "Mina", "Jordan", "Ava", "Leo"];
const authorHandles = ["@ai_rohitt", "@mina.codes", "@jordev", "@ava.builds", "@leo.dev"];
const authorHours = ["12h", "6h", "3h", "1h", "30m"];

export function FeedPost({ post }: { post: MockFeedPost }) {
  const index = (Number(post.id) - 1 + authorNames.length) % authorNames.length;
  const authorName = authorNames[index];
  const authorHandle = authorHandles[index];
  const postedAt = authorHours[index];
  const views = post.likes * 178;

  return (
    <article className="border-b border-zinc-200 py-5 last:border-b-0">
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 block h-11 w-11 shrink-0 rounded-full bg-linear-to-br from-sky-400 via-violet-500 to-fuchsia-500"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 text-sm">
              <p className="truncate font-semibold text-zinc-900">
                {authorName} <span className="text-sky-500">✔</span>
                <span className="ml-1 font-normal text-zinc-500">
                  {authorHandle} · {postedAt}
                </span>
              </p>
            </div>
            <button
              type="button"
              aria-label="More post options"
              className="text-zinc-400 hover:text-zinc-600"
            >
              ...
            </button>
          </div>

          <p className="pt-1 text-[1.75rem] font-medium leading-tight text-zinc-900 sm:text-2xl">
            {post.caption}
          </p>

          <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
            <div className="relative aspect-video w-full">
              <Image
                src={post.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority={post.id === "1"}
              />
            </div>
          </div>

          <div className="pt-3 text-sm text-zinc-500">
            <div className="grid grid-cols-4 items-center">
              <span aria-label="Replies">💬 {post.comments.toLocaleString()}</span>
              <span aria-label="Reposts">↻ {Math.floor(post.comments * 0.8).toLocaleString()}</span>
              <span aria-label="Likes">♡ {post.likes.toLocaleString()}</span>
              <span aria-label="Views">▮ {views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
