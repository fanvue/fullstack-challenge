import axios from "axios";
import { publicProcedure } from "../../trpc";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getAllPosts = publicProcedure.query(async () => {
  const { data: postsData } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const commentsPromises = postsData.map(async (post: Post) => {
    const { data: comments } = await axios.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    return {
      ...post,
      comments,
    };
  });

  // Wait for all comments to be fetched
  const data = await Promise.all(commentsPromises);

  return data;
});
