import { protectedProcedure } from "./../trpc";
import { router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  getAll: protectedProcedure.query(({ ctx }) => {
    const data = ctx.prisma.user.findMany();
    return data;
  }),
});
