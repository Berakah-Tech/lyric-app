import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { SongSchema } from "../../../validations/zodSchemas";
import { publicProcedure, router } from "../trpc";

export const songRouter = router({
  add: publicProcedure.input(SongSchema).mutation(async ({ input, ctx }) => {
    console.log("from backend", input);

    try {
      const data = await ctx.prisma.song.create({
        data: { ...input, category: { connect: { slug: input.category } } },
      });

      return data;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new song cannot be created with this name"
          );
          throw new TRPCError({
            code: "CONFLICT",
            message:
              "There is a unique constraint violation, a new song cannot be created with this name",
            cause: e,
          });
        }
      }
      throw e;
    }
  }),
  byId: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.prisma.song.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.song.findMany({
      include: { category: true },
    });
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
