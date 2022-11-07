import { router } from "../trpc";
import { authRouter } from "./auth";
import { songRouter } from "./song";

export const appRouter = router({
  song: songRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
