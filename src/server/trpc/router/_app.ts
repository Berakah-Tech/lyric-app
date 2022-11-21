import { router } from "../trpc";
import { authRouter } from "./auth";
import { bookRouter } from "./book.router";
import { songRouter } from "./song.router";
import { userRouter } from "./user.router";

export const appRouter = router({
  song: songRouter,
  auth: authRouter,
  user: userRouter,
  book: bookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
