import axios from "axios";
import { publicProcedure } from "../../trpc";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getAllPosts = publicProcedure.query(async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data as Post[];
});
