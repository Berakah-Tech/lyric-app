import { z } from "zod";
import { SongSchema } from "../../../validations/zodSchemas";
import { publicProcedure, router } from "../trpc";

export const songRouter = router({
  add: publicProcedure.input(SongSchema).mutation(async ({ input, ctx }) => {
    console.log("from backend", input);

    const data = await ctx.prisma.song.create({
      data: { ...input, category: { connect: { slug: input.category } } },
    });
    console.log(
      "🚀 ~ file: song.router.ts ~ line 9 ~ add:publicProcedure.input ~ data",
      data
    );
  }),
  byId: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.prisma.song.findUnique({
      where: {
        id: input,
      },
    });
    console.log(
      "🚀 ~ file: song.router.ts ~ line 23 ~ byId:publicProcedure.input ~ data",
      data
    );
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.song.findMany();
    return data;
  }),
  delete: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.prisma.song.delete({
      where: {
        id: input,
      },
    });
  }),
});
