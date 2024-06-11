import feedRouter from "./routers/feed/feed.router";
import { router } from "./trpc";

const appRouter = router({
  feedRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
