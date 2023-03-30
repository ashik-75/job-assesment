export type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type PostResponse = {
  limit: number;
  skip: number;
  total: number;
  posts: PostType[];
};
