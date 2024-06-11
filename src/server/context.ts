import type * as trpcNext from "@trpc/server/adapters/next";

// @TODO add session if any auth, add prisma or any other common functionalities for our procedures
interface CreateContextOptions {
  // session: Session | null
}

export async function createContextInner(_opts: CreateContextOptions) {
  return {};
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;

export async function createContext(
  opts: trpcNext.CreateNextContextOptions
): Promise<Context> {
  return await createContextInner({});
}
