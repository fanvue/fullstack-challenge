import { router } from "../../trpc";
import { getAllPosts } from "./getAllPosts";

const feedRouter = router({
  getAllPosts,
  // @TODO keep adding procedures here
});

export default feedRouter;
