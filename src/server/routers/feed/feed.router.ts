import { router } from "../../trpc";
import { getAllPosts } from "./getAllPosts";

const feedRouter = router({
  getAllPosts,
});

export default feedRouter;
