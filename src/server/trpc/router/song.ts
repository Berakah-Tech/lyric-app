import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import slugify from "slugify";
import { createSongSchema } from "../../../validations/songValidations";

export const songRouter = router({
  count: publicProcedure
    // .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ ctx }) => {
      const songCount = ctx.prisma.song.count();
      return songCount;
    }),
  create: publicProcedure.input(createSongSchema).mutation(({ input, ctx }) => {
    console.log(input);
  }),
});
