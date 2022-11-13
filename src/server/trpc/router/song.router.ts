import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import slugify from "slugify";
import { SongSchema } from "../../../validations/zodSchemas";

export const songRouter = router({
  add: publicProcedure.input(SongSchema).mutation(async ({ input, ctx }) => {
    console.log(input);
    const data = await ctx.prisma.song.create({ data: input });
  }),
  byId: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.prisma.song.findUnique({
      where: {
        id: input,
      },
    });
  }),
  delete: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.prisma.song.delete({
      where: {
        id: input,
      },
    });
  }),
});
