import { createContext } from "../../../src/server/context";
import appRouter from "./../../../src/server/index";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});

// @TODO could add public-facing APIs via https://github.com/jlalmes/trpc-openapi
// also trpc-panel to test procedures

//@TODO could also add trpc dev tools

// @TODO could also add NextAuth or Clerk to provide a user's feed based on their user ID
