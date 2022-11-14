import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await prisma.user.findMany());
};

export default users;
