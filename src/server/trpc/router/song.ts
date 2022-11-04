import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import slugify from "slugify";

const songSchema = z.object({
  name: z.string(),
  author: z.string(),
  lyrics: z.object({}),
  music: z.object({}),
  language: z.string(),
});

export const songRouter = router({
  count: publicProcedure
    // .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ ctx }) => {
      const songCount = ctx.prisma.song.count();
      return songCount;
    }),
  create: publicProcedure.input(songSchema).mutation(({ input, ctx }) => {
    const slug = slugify(input.name);
    const song = { ...input, slug };

    ctx.prisma.song.create({
      data: song,
    });
  }),
});
