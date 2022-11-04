import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const songRouter = router({
  song: publicProcedure
    // .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `test clickup`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
