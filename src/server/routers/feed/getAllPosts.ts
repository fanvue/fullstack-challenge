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

  // @TODO look into better approach as for each post we're doing a new API call -> N+1 problem
  // Could be worth rethinking the UX to avoid doing this, or better looking into the BE and figuring out a better way to do this
  const commentsPromises = postsData.map(async (post: Post) => {
    const { data: comments } = await axios.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    return {
      ...post,
      comments,
    };
  });

  const data = await Promise.all(commentsPromises);

  return data;
});
