import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { songRouter } from "./song";

export const appRouter = router({
  example: exampleRouter,
  song: songRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
