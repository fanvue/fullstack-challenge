import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";

const t = initTRPC.create({
  transformer: SuperJSON,
});

export const router = t.router;

// guests allowed
export const publicProcedure = t.procedure;

//@TODO could also add admin or user procedures

// e.g.:
// export const userProcedure = t.procedure.use(({ ctx, next }) => {
//   if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });

//   return next({
//     ctx: {
//       // infers the `session` as non-nullable
//       session: { ...ctx.session, user: ctx.session.user },
//     },
//   });
// });

// export const adminProcedure = t.procedure.use(({ ctx, next }) => {
//   if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });

//   adminCheck(ctx.session);

//   return next({
//     ctx: {
//       // infers the `session` as non-nullable
//       session: { ...ctx.session, user: ctx.session.user },
//     },
//   });
// });
