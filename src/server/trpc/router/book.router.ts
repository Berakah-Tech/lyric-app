import { publicProcedure } from "./../trpc";
import { router } from "../trpc";
import { BookSchema } from "../../../validations/zodSchemas";
import { z } from "zod";

export const bookRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    const allBooks = ctx.prisma.book.findMany();
    return allBooks;
  }),
  add: publicProcedure.input(BookSchema).mutation(async ({ input, ctx }) => {
    const data = await ctx.prisma.book.create({ data: input });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const data = ctx.prisma.book.findUnique({
      where: {
        id: input,
      },
    });
  }),
  delete: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.prisma.book.delete({
      where: {
        id: input,
      },
    });
  }),
});
