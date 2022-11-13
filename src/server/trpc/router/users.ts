import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const usersRouter = router({
  findAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
