import { mockFeedPosts } from "@/lib/feed-mocks";
import { FeedPost } from "./feed-post";

export function Feed() {
  return (
    <div className="flex flex-col gap-10">
      {mockFeedPosts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}
