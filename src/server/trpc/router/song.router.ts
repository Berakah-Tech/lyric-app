import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import slugify from "slugify";
import { SongSchema } from "../../../validations/zodSchemas";

export const songRouter = router({
  countSong: publicProcedure
    // .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ ctx }) => {
      const songCount = ctx.prisma.song.count();
      return songCount;
    }),
  createSong: publicProcedure
    .input(SongSchema)
    .mutation(async ({ input, ctx }) => {
      console.log(input);
      const data = await ctx.prisma.song.create({ data: input });
      console.log(
        "🚀 ~ file: song.ts ~ line 16 ~ create:publicProcedure.input ~ data",
        data
      );
    }),
});
