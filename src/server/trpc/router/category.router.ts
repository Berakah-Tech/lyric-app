import { publicProcedure } from "./../trpc";
import { router } from "../trpc";
import { z } from "zod";

export const catRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    const data = ctx.prisma.category.findMany();
    return data;
  }),
});
