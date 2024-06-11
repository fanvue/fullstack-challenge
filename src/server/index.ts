import feedRouter from "./routers/feed/feed.router";
import vaultRouter from "./routers/vault/vault.router";
import { router } from "./trpc";

const appRouter = router({
  feedRouter,
  vaultRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
