import Image from "next/image";
import type { MockFeedPost } from "@/lib/feed-mocks";

export function FeedPost({ post }: { post: MockFeedPost }) {
  return (
    <article className="border-b border-zinc-200 pb-6 last:border-b-0">
      <div className="mx-auto w-full max-w-md">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={post.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 448px"
            priority={post.id === "1"}
          />
        </div>
      </div>
      <div className="flex gap-4 px-0.5 pt-3 text-sm text-zinc-700">
        <span aria-label="Likes">♥ {post.likes.toLocaleString()}</span>
        <span aria-label="Comments">💬 {post.comments.toLocaleString()}</span>
      </div>
      <p className="px-0.5 pt-1 text-sm font-medium text-zinc-900">
        {post.caption}
      </p>
    </article>
  );
}
