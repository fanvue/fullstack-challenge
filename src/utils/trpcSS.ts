import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { createContextInner } from "../server/context";
import appRouter from "../server";

const trpcSS = createServerSideHelpers({
  router: appRouter,
  ctx: createContextInner({}),
  transformer: superjson,
});

export default trpcSS;
