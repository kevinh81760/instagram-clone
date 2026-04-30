export type MockFeedPost = {
  id: string;
  imageSrc: string;
  likes: number;
  comments: number;
  caption: string;
};

export const mockFeedPosts: MockFeedPost[] = [
  {
    id: "1",
    imageSrc: "https://picsum.photos/seed/feed1/600/600",
    likes: 128,
    comments: 14,
    caption: "Morning light",
  },
  {
    id: "2",
    imageSrc: "https://picsum.photos/seed/feed2/600/600",
    likes: 89,
    comments: 6,
    caption: "City walk",
  },
  {
    id: "3",
    imageSrc: "https://picsum.photos/seed/feed3/600/600",
    likes: 2401,
    comments: 112,
    caption: "Weekend",
  },
  {
    id: "4",
    imageSrc: "https://picsum.photos/seed/feed4/600/600",
    likes: 45,
    comments: 2,
    caption: "Coffee",
  },
  {
    id: "5",
    imageSrc: "https://picsum.photos/seed/feed5/600/600",
    likes: 312,
    comments: 28,
    caption: "Sky",
  },
];
